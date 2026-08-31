/**
 * Ensures NEXT_PUBLIC_SUPABASE_URL is the base project URL only.
 * Strips accidental /rest/v1, /auth/v1, quotes, and trailing slashes.
 */
export function normalizeSupabaseUrl(raw: string): string {
  let url = raw.trim().replace(/^["']|["']$/g, "");

  if (!url) return url;

  url = url.replace(/\/+$/, "");
  url = url.replace(/\/rest\/v1\/?$/i, "");
  url = url.replace(/\/auth\/v1\/?$/i, "");
  url = url.replace(/\/+$/, "");

  return url;
}

export function normalizeSupabaseKey(raw: string): string {
  return raw.trim().replace(/^["']|["']$/g, "");
}
