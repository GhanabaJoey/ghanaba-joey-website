import { NextResponse } from "next/server";
import {
  CONTACT_HONEYPOT_FIELD,
  validateContactEnquiry,
} from "@/lib/contact/enquiry-rules";
import { sendContactEnquiryNotification } from "@/lib/email/send-contact-enquiry-notification";
import { logDevInfo, logDevWarn, logServerError } from "@/lib/server-log";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8192;

type ContactRequestBody = Record<string, unknown>;

function jsonValidationError() {
  return NextResponse.json(
    { error: { message: "Validation failed." } },
    { status: 400 },
  );
}

function jsonSubmitError(status: number) {
  return NextResponse.json(
    { error: { message: "Your message could not be sent. Please try again." } },
    { status },
  );
}

export async function POST(request: Request) {
  logDevInfo("[Contact API] Request received");

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const contentLength = Number.parseInt(contentLengthHeader, 10);
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      logDevWarn("[Contact API] Rejected: payload too large");
      return jsonValidationError();
    }
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    logDevWarn("[Contact API] Failed to read body");
    return jsonValidationError();
  }

  if (rawBody.length > MAX_BODY_BYTES) {
    return jsonValidationError();
  }

  let body: ContactRequestBody;

  try {
    body = JSON.parse(rawBody) as ContactRequestBody;
  } catch {
    return jsonValidationError();
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonValidationError();
  }

  const honeypot = body[CONTACT_HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    logDevWarn("[Contact API] Honeypot triggered");
    return NextResponse.json({ success: true });
  }

  const validation = validateContactEnquiry({
    full_name: body.full_name,
    email: body.email,
    enquiry_type: body.enquiry_type,
    message: body.message,
    company: body.company,
    phone: body.phone,
    website_or_social: body.website_or_social,
  });

  if (!validation.ok) {
    logDevWarn("[Contact API] Validation failed");
    return jsonValidationError();
  }

  const payload = validation.data;

  const emailResult = await sendContactEnquiryNotification({
    ...payload,
    submittedAt: new Date(),
  });

  if (!emailResult.ok) {
    logServerError("[Contact API] Email notification failed", {
      error: emailResult.error,
    });
    return jsonSubmitError(503);
  }

  logDevInfo("[Contact API] Enquiry sent successfully");

  return NextResponse.json({ success: true });
}
