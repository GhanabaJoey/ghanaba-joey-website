import { Resend } from "resend";
import type { ContactEnquiryPayload } from "@/lib/contact/enquiry-rules";
import { logDevInfo, logServerError } from "@/lib/server-log";

const NOTIFICATION_TO = "ghanabajoey@icloud.com";
const EMAIL_SUBJECT = "New Ghanaba Joey website enquiry";
const DEFAULT_FROM_EMAIL = "Ghanaba Joey <notifications@ghanabajoey.com>";

export type ContactEnquiryEmailPayload = ContactEnquiryPayload & {
  submittedAt: Date;
};

function readServerEnv(name: "RESEND_API_KEY" | "RESEND_FROM_EMAIL"): string {
  const raw = process.env[name]?.trim() ?? "";
  return raw.replace(/^["']|["']$/g, "");
}

function formatSubmittedAt(date: Date): string {
  return date.toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function field(label: string, value: string | undefined): string {
  const display = value?.trim() ? escapeHtml(value) : "—";
  return `<p style="margin: 0 0 12px;"><strong>${escapeHtml(label)}:</strong> ${display}</p>`;
}

function buildPlainText(payload: ContactEnquiryEmailPayload): string {
  const submittedAt = formatSubmittedAt(payload.submittedAt);
  return [
    "GHANABA JOEY",
    "NEW WEBSITE ENQUIRY",
    "",
    `Name: ${payload.full_name}`,
    `Email: ${payload.email}`,
    `Company / Brand: ${payload.company ?? "—"}`,
    `Phone: ${payload.phone ?? "—"}`,
    `Enquiry Type: ${payload.enquiry_type}`,
    `Website / Social: ${payload.website_or_social ?? "—"}`,
    "",
    "Message:",
    payload.message,
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");
}

function buildHtml(payload: ContactEnquiryEmailPayload): string {
  const submittedAt = formatSubmittedAt(payload.submittedAt);

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111111; line-height: 1.6; max-width: 560px;">
      <p style="margin: 0 0 4px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #666;">Ghanaba Joey</p>
      <h1 style="font-size: 22px; margin: 0 0 24px;">NEW WEBSITE ENQUIRY</h1>
      ${field("Name", payload.full_name)}
      ${field("Email", payload.email)}
      ${field("Company / Brand", payload.company)}
      ${field("Phone", payload.phone)}
      ${field("Enquiry Type", payload.enquiry_type)}
      ${field("Website / Social", payload.website_or_social)}
      <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
      <p style="margin: 0 0 16px; white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
      <p style="margin: 0; color: #666; font-size: 14px;"><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    </div>
  `.trim();
}

function formatResendError(error: unknown): string {
  if (!error) return "Unknown Resend error.";
  if (typeof error === "object") {
    const record = error as Record<string, unknown>;
    const message =
      typeof record.message === "string" ? record.message : undefined;
    if (message) return message;
    try {
      return JSON.stringify(error);
    } catch {
      return String(error);
    }
  }
  return String(error);
}

export async function sendContactEnquiryNotification(
  payload: ContactEnquiryEmailPayload,
): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  const apiKey = readServerEnv("RESEND_API_KEY");
  const from = readServerEnv("RESEND_FROM_EMAIL") || DEFAULT_FROM_EMAIL;

  logDevInfo("[Contact Email] Preparing notification", {
    hasApiKey: Boolean(apiKey),
  });

  if (!apiKey) {
    const error = "RESEND_API_KEY is not configured on the server.";
    logServerError("[Contact Email] Email notification failed", { error });
    return { ok: false, error };
  }

  if (from.includes("onboarding@resend.dev")) {
    const error =
      "Invalid sender address. RESEND_FROM_EMAIL must use your verified ghanabajoey.com domain.";
    logServerError("[Contact Email] Email notification failed", { error });
    return { ok: false, error };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [NOTIFICATION_TO],
      replyTo: payload.email,
      subject: EMAIL_SUBJECT,
      text: buildPlainText(payload),
      html: buildHtml(payload),
    });

    if (error) {
      const errorMessage = formatResendError(error);
      logServerError("[Contact Email] Email notification failed", {
        error: errorMessage,
      });
      return { ok: false, error: errorMessage };
    }

    logDevInfo("[Contact Email] Email notification sent", { id: data?.id });

    return { ok: true, id: data?.id };
  } catch (caught) {
    const errorMessage = formatResendError(caught);
    logServerError("[Contact Email] Email notification failed", {
      error: errorMessage,
    });
    return { ok: false, error: errorMessage };
  }
}
