"use client";

import { Check, Crown, Flame, Gem, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { PremiumButton } from "@/components/ui/PremiumButton";

type SelectableTarget = "30K" | "50K";

interface FormErrors {
  username?: string;
  target?: string;
  submit?: string;
}

const TARGET_DATES: Record<SelectableTarget, string> = {
  "30K": "2026-09-20",
  "50K": "2026-09-27",
};

const TARGET_OPTIONS: {
  value: SelectableTarget | "100K";
  dateLabel: string;
  icon: "flame" | "gem" | "crown";
  selectable: boolean;
}[] = [
  { value: "30K", dateLabel: "20 SEPTEMBER", icon: "flame", selectable: true },
  { value: "50K", dateLabel: "27 SEPTEMBER", icon: "gem", selectable: true },
  { value: "100K", dateLabel: "COMING SOON", icon: "crown", selectable: false },
];

function TargetIcon({ icon }: { icon: "flame" | "gem" | "crown" }) {
  if (icon === "flame") return <Flame className="mx-auto mb-1 h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />;
  if (icon === "gem") return <Gem className="mx-auto mb-1 h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />;
  return <Crown className="mx-auto mb-1 h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />;
}

function normalizeUsername(value: string): string {
  const trimmed = value.trim();
  return trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
}

function validateUsername(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return "Please enter your TikTok username.";
  }
  const username = trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
  if (username.length < 2) {
    return "Please enter a valid TikTok username.";
  }
  if (!/^[a-zA-Z0-9._]+$/.test(username)) {
    return "Username can only contain letters, numbers, dots and underscores.";
  }
  return undefined;
}

export function ApplicationForm() {
  const [username, setUsername] = useState("");
  const [target, setTarget] = useState<SelectableTarget | "">("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validateForm(): FormErrors {
    const nextErrors: FormErrors = {};

    const usernameError = validateUsername(username);
    if (usernameError) nextErrors.username = usernameError;

    if (!target) {
      nextErrors.target = "Please select a target.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting || isSuccess) return;

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const selectedTarget = target as SelectableTarget;
    const available_date = TARGET_DATES[selectedTarget];

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    try {
      const payload = {
        username: normalizeUsername(username),
        target: selectedTarget,
        available_date,
      };

      console.info("[Box Games] Submitting application", payload);

      const response = await fetch("/api/box-games/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result: {
        success?: boolean;
        error?: {
          message?: string;
          details?: string;
          hint?: string;
          code?: string;
        };
      } = {};

      try {
        result = await response.json();
      } catch (parseError) {
        console.error("[Box Games] Failed to parse API response", {
          status: response.status,
          parseError,
        });
        setErrors((prev) => ({
          ...prev,
          submit:
            "Something went wrong while submitting your application. Please try again.",
        }));
        return;
      }

      if (!response.ok || result.success !== true) {
        console.error("[Box Games] API submit failed", {
          status: response.status,
          supabaseError: result.error,
          payload,
        });
        setErrors((prev) => ({
          ...prev,
          submit:
            "Something went wrong while submitting your application. Please try again.",
        }));
        return;
      }

      console.info("[Box Games] Application saved successfully", result);
      setIsSuccess(true);
    } catch (caught) {
      console.error("[Box Games] Submit error", {
        error: caught,
        message: caught instanceof Error ? caught.message : String(caught),
        stack: caught instanceof Error ? caught.stack : undefined,
      });
      setErrors((prev) => ({
        ...prev,
        submit:
          "Unable to connect to the application service. Please check your connection and try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  const isLocked = isSubmitting || isSuccess;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`boxgames-form-card w-full max-w-full min-w-0 space-y-6 rounded-2xl p-6 sm:space-y-7 sm:p-7 ${
        isSuccess ? "boxgames-success-card" : ""
      }`}
    >
      {isSuccess && (
        <div
          className="boxgames-success-banner rounded-xl px-4 py-5 text-center sm:px-6 sm:py-6"
          role="status"
          aria-live="polite"
        >
          <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Application submitted successfully! 🎉
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
            Thank you for applying to join the Ghanaba Joey Box Games. We&apos;ll
            review your application and contact you if selected.
          </p>
        </div>
      )}

      <div>
        <label
          htmlFor="tiktok-username"
          className="block text-sm font-semibold tracking-wide text-zinc-300 uppercase"
        >
          Your TikTok Username
        </label>
        <input
          id="tiktok-username"
          type="text"
          value={username}
          disabled={isLocked}
          onChange={(e) => {
            setUsername(e.target.value);
            if (errors.username) {
              setErrors((prev) => ({ ...prev, username: undefined }));
            }
          }}
          placeholder="@yourusername"
          autoComplete="username"
          aria-invalid={!!errors.username}
          aria-describedby={errors.username ? "username-error" : undefined}
          className={`boxgames-field mt-3 w-full rounded-xl border bg-black/50 px-4 py-3.5 text-base text-white placeholder:text-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/40 ${
            errors.username
              ? "border-red-500/60"
              : "border-white/10 focus:border-gold/40"
          }`}
        />
        {errors.username && (
          <p id="username-error" className="mt-2 text-sm text-red-400" role="alert">
            {errors.username}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="block text-sm font-semibold tracking-wide text-zinc-300 uppercase">
          Choose Your Target
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3">
          {TARGET_OPTIONS.map((option) => {
            const isSelected = option.selectable && target === option.value;
            const isUnavailable = !option.selectable;

            return (
              <button
                key={option.value}
                type="button"
                disabled={isLocked || isUnavailable}
                onClick={() => {
                  if (option.value === "100K") return;
                  setTarget(option.value);
                  if (errors.target) {
                    setErrors((prev) => ({ ...prev, target: undefined }));
                  }
                }}
                aria-pressed={isSelected}
                aria-disabled={isUnavailable}
                className={`boxgames-target-option relative min-h-[5.5rem] rounded-xl border px-3 py-4 text-center transition-all duration-300 sm:min-h-0 sm:px-2 sm:py-3.5 ${
                  isUnavailable
                    ? "boxgames-target-unavailable cursor-not-allowed"
                    : "active:scale-[0.98]"
                } ${isSelected ? "boxgames-target-selected" : ""}`}
              >
                <TargetIcon icon={option.icon} />
                <span className="block text-base font-bold tracking-wide sm:text-sm">
                  {option.value}
                </span>
                <span
                  className={`boxgames-target-date mt-1.5 block text-[0.65rem] font-semibold tracking-[0.14em] uppercase sm:mt-1 sm:text-[0.6rem] ${
                    isUnavailable
                      ? "text-zinc-500"
                      : isSelected
                        ? "text-gold-light/90"
                        : "text-zinc-400"
                  }`}
                >
                  {option.dateLabel}
                </span>
              </button>
            );
          })}
        </div>
        {errors.target && (
          <p className="mt-2 text-sm text-red-400" role="alert">
            {errors.target}
          </p>
        )}
      </fieldset>

      {errors.submit && (
        <p className="text-sm text-red-400" role="alert">
          {errors.submit}
        </p>
      )}

      <PremiumButton
        type="submit"
        variant="purple"
        disabled={isLocked}
        showArrow={false}
        className="boxgames-submit-btn py-4 text-base tracking-[0.12em] sm:text-lg"
      >
        {isSuccess ? (
          <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap uppercase">
            Application Submitted
            <Check className="h-5 w-5 shrink-0" aria-hidden="true" />
          </span>
        ) : isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Submitting...
          </span>
        ) : (
          "🔥 Submit Application"
        )}
      </PremiumButton>
    </form>
  );
}
