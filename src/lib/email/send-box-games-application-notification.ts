import { Resend } from "resend";

const NOTIFICATION_TO = "ghanabajoey10@gmail.com";
const EMAIL_SUBJECT = "New Official Box Games Application";
const DEFAULT_FROM_EMAIL = "Official Box Games <notifications@ghanabajoey.com>";

export type BoxGamesApplicationEmailPayload = {
  username: string;
  target: string;
  available_date: string;
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

function buildPlainText(payload: BoxGamesApplicationEmailPayload): string {
  return [
    "New Official Box Games Application",
    "",
    `TikTok Username: ${payload.username}`,
    `Target: ${payload.target}`,
    `Available Date: ${payload.available_date}`,
    `Submitted: ${formatSubmittedAt(payload.submittedAt)}`,
  ].join("\n");
}

function buildHtml(payload: BoxGamesApplicationEmailPayload): string {
  const submittedAt = formatSubmittedAt(payload.submittedAt);

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111111; line-height: 1.6; max-width: 560px;">
      <h1 style="font-size: 22px; margin: 0 0 20px;">New Official Box Games Application</h1>
      <p style="margin: 0 0 10px;"><strong>TikTok Username:</strong> ${escapeHtml(payload.username)}</p>
      <p style="margin: 0 0 10px;"><strong>Target:</strong> ${escapeHtml(payload.target)}</p>
      <p style="margin: 0 0 10px;"><strong>Available Date:</strong> ${escapeHtml(payload.available_date)}</p>
      <p style="margin: 0;"><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    </div>
  `.trim();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatResendError(error: unknown): string {
  if (!error) return "Unknown Resend error.";

  if (typeof error === "object") {
    const record = error as Record<string, unknown>;
    const message =
      typeof record.message === "string" ? record.message : undefined;
    const name = typeof record.name === "string" ? record.name : undefined;

    if (message && name) return `${name}: ${message}`;
    if (message) return message;

    try {
      return JSON.stringify(error);
    } catch {
      return String(error);
    }
  }

  return String(error);
}

export async function sendBoxGamesApplicationNotification(
  payload: BoxGamesApplicationEmailPayload,
): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  const apiKey = readServerEnv("RESEND_API_KEY");
  const from = readServerEnv("RESEND_FROM_EMAIL") || DEFAULT_FROM_EMAIL;

  console.info("[Box Games Email] Preparing notification", {
    to: NOTIFICATION_TO,
    from,
    hasApiKey: Boolean(apiKey),
  });

  if (!apiKey) {
    const error = "RESEND_API_KEY is not configured on the server.";
    console.error(`[Box Games Email] Email notification failed: ${error}`);
    return { ok: false, error };
  }

  if (from.includes("onboarding@resend.dev")) {
    const error =
      "Invalid sender address. RESEND_FROM_EMAIL must use your verified ghanabajoey.com domain.";
    console.error(`[Box Games Email] Email notification failed: ${error}`);
    return { ok: false, error };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [NOTIFICATION_TO],
      subject: EMAIL_SUBJECT,
      text: buildPlainText(payload),
      html: buildHtml(payload),
    });

    if (error) {
      const errorMessage = formatResendError(error);
      console.error(`[Box Games Email] Email notification failed: ${errorMessage}`, error);
      return { ok: false, error: errorMessage };
    }

    console.info("[Box Games Email] Email notification sent successfully", {
      id: data?.id,
      to: NOTIFICATION_TO,
      from,
    });

    return { ok: true, id: data?.id };
  } catch (caught) {
    const errorMessage = formatResendError(caught);
    console.error(`[Box Games Email] Email notification failed: ${errorMessage}`, caught);
    return { ok: false, error: errorMessage };
  }
}
