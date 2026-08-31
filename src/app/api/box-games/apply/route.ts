import { NextResponse } from "next/server";
import { sendBoxGamesApplicationNotification } from "@/lib/email/send-box-games-application-notification";
import {
  createServerSupabaseClient,
  type BoxGameApplicationInsert,
} from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: BoxGameApplicationInsert;

  try {
    body = (await request.json()) as BoxGameApplicationInsert;
  } catch {
    return NextResponse.json(
      { error: { message: "Invalid JSON body." } },
      { status: 400 },
    );
  }

  const { username, target, available_date } = body;

  if (!username || !target || !available_date) {
    return NextResponse.json(
      {
        error: {
          message: "Missing required fields: username, target, available_date.",
        },
      },
      { status: 400 },
    );
  }

  try {
    const supabase = createServerSupabaseClient();
    const payload = { username, target, available_date };

    console.info("[Box Games API] Inserting application", payload);

    const { error } = await supabase.from("box_game_applications").insert(payload);

    if (error) {
      const isNetworkError =
        error.message.includes("fetch failed") ||
        error.message.includes("ENOTFOUND") ||
        error.message.includes("Failed to fetch");

      const friendlyMessage = isNetworkError
        ? "Could not reach Supabase. Verify NEXT_PUBLIC_SUPABASE_URL in .env.local matches your exact Project URL from Supabase Dashboard → Project Settings → API."
        : error.message;

      console.error("[Box Games API] Supabase insert failed", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
        payload,
        friendlyMessage,
      });

      return NextResponse.json(
        {
          error: {
            message: friendlyMessage,
            details: error.details,
            hint: error.hint,
            code: error.code,
          },
        },
        { status: isNetworkError ? 503 : 400 },
      );
    }

    console.info("[Box Games API] Application saved successfully");

    const emailResult = await sendBoxGamesApplicationNotification({
      username,
      target,
      available_date,
      submittedAt: new Date(),
    });

    if (emailResult.ok) {
      console.info("[Box Games API] Email notification sent successfully", {
        id: emailResult.id,
        to: "ghanabajoey10@gmail.com",
      });
    } else {
      console.error(
        `[Box Games API] Email notification failed: ${emailResult.error}`,
      );
    }

    return NextResponse.json({ success: true });
  } catch (caught) {
    console.error("[Box Games API] Unexpected error", caught);

    return NextResponse.json(
      {
        error: {
          message:
            caught instanceof Error ? caught.message : "Unexpected server error.",
        },
      },
      { status: 500 },
    );
  }
}
