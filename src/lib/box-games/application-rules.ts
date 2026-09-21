/** Official event name — user-facing copy (route remains `/boxgames`). */
export const OFFICIAL_MONTHLY_BOX_GAMES_NAME = "Official Monthly Box Games";

/** Honeypot field sent with apply requests — must stay empty for real users. */
export const BOX_GAMES_HONEYPOT_FIELD = "company_website";

export const BOX_GAMES_SELECTABLE_TARGETS = ["30K", "50K"] as const;

export type BoxGamesSelectableTarget =
  (typeof BOX_GAMES_SELECTABLE_TARGETS)[number];

/** Target → event date (ISO `YYYY-MM-DD`). Must stay in sync with the application form. */
export const BOX_GAMES_TARGET_DATES: Record<
  BoxGamesSelectableTarget,
  string
> = {
  "30K": "2026-09-20",
  "50K": "2026-09-27",
};

export const TIKTOK_USERNAME_MIN_LENGTH = 2;
export const TIKTOK_USERNAME_MAX_LENGTH = 24;

const TIKTOK_USERNAME_PATTERN = /^[a-zA-Z0-9._]+$/;

export function normalizeTikTokUsername(raw: unknown): string {
  if (typeof raw !== "string") return "";
  const trimmed = raw.trim();
  return trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
}

export function isAllowedBoxGamesTarget(
  value: unknown,
): value is BoxGamesSelectableTarget {
  return (
    typeof value === "string" &&
    (BOX_GAMES_SELECTABLE_TARGETS as readonly string[]).includes(value)
  );
}

export function expectedDateForTarget(
  target: BoxGamesSelectableTarget,
): string {
  return BOX_GAMES_TARGET_DATES[target];
}

export type BoxGamesApplicationPayload = {
  username: string;
  target: BoxGamesSelectableTarget;
  available_date: string;
};

export type BoxGamesApplicationValidationResult =
  | { ok: true; data: BoxGamesApplicationPayload }
  | { ok: false; message: string };

export function validateBoxGamesApplication(input: {
  username: unknown;
  target: unknown;
  available_date: unknown;
}): BoxGamesApplicationValidationResult {
  const username = normalizeTikTokUsername(input.username);

  if (!username) {
    return { ok: false, message: "Validation failed." };
  }

  if (
    username.length < TIKTOK_USERNAME_MIN_LENGTH ||
    username.length > TIKTOK_USERNAME_MAX_LENGTH
  ) {
    return { ok: false, message: "Validation failed." };
  }

  if (!TIKTOK_USERNAME_PATTERN.test(username)) {
    return { ok: false, message: "Validation failed." };
  }

  if (!isAllowedBoxGamesTarget(input.target)) {
    return { ok: false, message: "Validation failed." };
  }

  if (typeof input.available_date !== "string") {
    return { ok: false, message: "Validation failed." };
  }

  const available_date = input.available_date.trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(available_date)) {
    return { ok: false, message: "Validation failed." };
  }

  const expected = expectedDateForTarget(input.target);

  if (available_date !== expected) {
    return { ok: false, message: "Validation failed." };
  }

  return {
    ok: true,
    data: { username, target: input.target, available_date },
  };
}
