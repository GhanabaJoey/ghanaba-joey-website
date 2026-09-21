import { NextResponse } from "next/server";
import {
  BOX_GAMES_HONEYPOT_FIELD,
  validateBoxGamesApplication,
} from "@/lib/box-games/application-rules";
import { sendBoxGamesApplicationNotification } from "@/lib/email/send-box-games-application-notification";
import { logDevInfo, logDevWarn, logServerError } from "@/lib/server-log";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 2048;

type ApplyRequestBody = {
  username?: unknown;
  target?: unknown;
  available_date?: unknown;
  [key: string]: unknown;
};

function jsonValidationError() {
  return NextResponse.json(
    { error: { message: "Validation failed." } },
    { status: 400 },
  );
}

function jsonSubmitError(status: number) {
  return NextResponse.json(
    { error: { message: "Application could not be submitted." } },
    { status },
  );
}

export async function POST(request: Request) {
  logDevInfo("[Box Games API] Request received");

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const contentLength = Number.parseInt(contentLengthHeader, 10);
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      logDevWarn("[Box Games API] Rejected: payload too large");
      return jsonValidationError();
    }
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    logDevWarn("[Box Games API] Failed to read body");
    return jsonValidationError();
  }

  if (rawBody.length > MAX_BODY_BYTES) {
    logDevWarn("[Box Games API] Rejected: body exceeds size limit");
    return jsonValidationError();
  }

  let body: ApplyRequestBody;

  try {
    body = JSON.parse(rawBody) as ApplyRequestBody;
  } catch {
    logDevWarn("[Box Games API] Invalid JSON body");
    return jsonValidationError();
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonValidationError();
  }

  const honeypot = body[BOX_GAMES_HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    logDevWarn("[Box Games API] Honeypot triggered");
    return NextResponse.json({ success: true });
  }

  const validation = validateBoxGamesApplication({
    username: body.username,
    target: body.target,
    available_date: body.available_date,
  });

  if (!validation.ok) {
    logDevWarn("[Box Games API] Validation failed");
    return jsonValidationError();
  }

  const payload = validation.data;

  logDevInfo("[Box Games API] Validation passed", {
    target: payload.target,
    available_date: payload.available_date,
  });

  try {
    const supabase = createServerSupabaseClient();

    logDevInfo("[Box Games API] Supabase insert starting");

    const { error } = await supabase.from("box_game_applications").insert(payload);

    if (error) {
      const isNetworkError =
        error.message.includes("fetch failed") ||
        error.message.includes("ENOTFOUND") ||
        error.message.includes("Failed to fetch");

      logServerError("[Box Games API] Supabase insert failed", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        network: isNetworkError,
      });

      return jsonSubmitError(isNetworkError ? 503 : 500);
    }

    logDevInfo("[Box Games API] Supabase insert succeeded");

    const emailResult = await sendBoxGamesApplicationNotification({
      username: payload.username,
      target: payload.target,
      available_date: payload.available_date,
      submittedAt: new Date(),
    });

    if (!emailResult.ok) {
      logServerError("[Box Games API] Email notification failed", {
        error: emailResult.error,
      });
    } else {
      logDevInfo("[Box Games API] Email notification sent", {
        id: emailResult.id,
      });
    }

    return NextResponse.json({ success: true });
  } catch (caught) {
    const message =
      caught instanceof Error ? caught.message : "Unexpected server error.";

    logServerError("[Box Games API] Unexpected error", {
      message,
      name: caught instanceof Error ? caught.name : undefined,
    });

    const isConfigError = message.includes("Missing NEXT_PUBLIC_SUPABASE");

    return jsonSubmitError(isConfigError ? 503 : 500);
  }
}
