import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { normalizeSupabaseKey, normalizeSupabaseUrl } from "@/lib/supabase/env";

function readEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY"): string {
  const raw = process.env[name]?.trim() ?? "";
  if (name === "NEXT_PUBLIC_SUPABASE_URL") {
    return normalizeSupabaseUrl(raw);
  }
  return normalizeSupabaseKey(raw);
}

export function createServerSupabaseClient(): SupabaseClient {
  const url = readEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = readEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment.",
    );
  }

  if (anonKey.startsWith("sb_secret_")) {
    throw new Error("Server must not use the Supabase secret key for public inserts.");
  }

  return createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export type BoxGameApplicationInsert = {
  username: string;
  target: string;
  available_date: string;
};
