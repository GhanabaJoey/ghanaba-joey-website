import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { normalizeSupabaseKey, normalizeSupabaseUrl } from "@/lib/supabase/env";

let supabase: SupabaseClient | null = null;

function readEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY"): string {
  const raw = process.env[name]?.trim() ?? "";
  if (name === "NEXT_PUBLIC_SUPABASE_URL") {
    return normalizeSupabaseUrl(raw);
  }
  return normalizeSupabaseKey(raw);
}

export function getSupabaseConfigStatus(): {
  urlConfigured: boolean;
  keyConfigured: boolean;
  keyLooksValid: boolean;
  url: string | null;
} {
  const url = readEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = readEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  const keyLooksValid =
    Boolean(anonKey) &&
    !anonKey.startsWith("sb_secret_") &&
    anonKey !== "your-publishable-anon-key-here";

  return {
    urlConfigured: Boolean(url),
    keyConfigured: Boolean(anonKey),
    keyLooksValid,
    url: url || null,
  };
}

export function getSupabaseClient(): SupabaseClient {
  if (supabase) return supabase;

  const url = readEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = readEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local",
    );
  }

  if (anonKey.startsWith("sb_secret_")) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY must be the publishable (anon) key, not the secret key.",
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[Supabase] Client configured", {
      url,
      keyPrefix: anonKey.slice(0, 12),
      keyLength: anonKey.length,
    });
  }

  supabase = createClient(url, anonKey);
  return supabase;
}
