/**
 * Temporary diagnostic script — run with: node scripts/test-supabase-insert.mjs
 * Remove after Supabase insert is confirmed working.
 */
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

function loadEnv() {
  const contents = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  const env = {};

  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    env[trimmed.slice(0, index).trim()] = trimmed.slice(index + 1).trim();
  }

  return env;
}

function normalizeSupabaseUrl(raw) {
  let url = raw.trim().replace(/^["']|["']$/g, "");
  if (!url) return url;
  url = url.replace(/\/+$/, "");
  url = url.replace(/\/rest\/v1\/?$/i, "");
  url = url.replace(/\/auth\/v1\/?$/i, "");
  url = url.replace(/\/+$/, "");
  return url;
}

const env = loadEnv();
const url = normalizeSupabaseUrl(env.NEXT_PUBLIC_SUPABASE_URL ?? "");
const key = (env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim().replace(/^["']|["']$/g, "");

if (!url || !key) {
  console.error("Missing Supabase env vars in .env.local");
  process.exit(1);
}

console.log("URL configured:", url);
console.log("Key prefix:", key.slice(0, 15));

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const payload = {
  username: "diag_test_user",
  target: "30K",
  available_date: "2026-08-27",
};

console.log("Insert payload:", payload);

const { error } = await supabase.from("box_game_applications").insert(payload);

if (error) {
  console.error("Supabase insert failed:", {
    message: error.message,
    details: error.details,
    hint: error.hint,
    code: error.code,
  });
  process.exit(1);
}

console.log("Insert succeeded");
