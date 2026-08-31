/**
 * Diagnostic script — run with: node scripts/test-resend-email.mjs
 * Requires RESEND_API_KEY and RESEND_FROM_EMAIL in .env.local
 */
import { readFileSync } from "node:fs";
import { Resend } from "resend";

function loadEnv() {
  const contents = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  const env = {};

  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    env[key] = value;
  }

  return env;
}

const env = loadEnv();
const apiKey = env.RESEND_API_KEY;
const from =
  env.RESEND_FROM_EMAIL || "Official Box Games <notifications@ghanabajoey.com>";
const to = "ghanabajoey10@gmail.com";

if (!apiKey) {
  console.error("RESEND_API_KEY is missing from .env.local");
  process.exit(1);
}

console.log("From:", from);
console.log("To:", to);
console.log("API key prefix:", apiKey.slice(0, 8));

const resend = new Resend(apiKey);
const payload = {
  username: "email_diag_test",
  target: "30K",
  available_date: "2026-08-31",
};

const text = [
  "New Official Box Games Application",
  "",
  `TikTok Username: ${payload.username}`,
  `Target: ${payload.target}`,
  `Available Date: ${payload.available_date}`,
  `Submitted: ${new Date().toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  })}`,
].join("\n");

const { data, error } = await resend.emails.send({
  from,
  to: [to],
  subject: "New Official Box Games Application",
  text,
  html: `<pre>${text}</pre>`,
});

if (error) {
  console.error("Resend error:", error);
  process.exit(1);
}

console.log("Email sent successfully:", data);
