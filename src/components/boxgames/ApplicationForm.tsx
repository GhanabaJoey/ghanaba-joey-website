"use client";

import { Crown, Flame, Gem, Loader2 } from "lucide-react";
import { FormEvent, useState, useSyncExternalStore } from "react";
import { PremiumButton } from "@/components/ui/PremiumButton";

type BoxGameTarget = "30K" | "50K" | "100K";

interface FormErrors {
  username?: string;
  target?: string;
  date?: string;
}

const TARGET_OPTIONS: {
  value: BoxGameTarget;
  label: string;
  icon: "flame" | "gem" | "crown";
}[] = [
  { value: "30K", label: "30K Box Game", icon: "flame" },
  { value: "50K", label: "50K Box Game", icon: "gem" },
  { value: "100K", label: "100K Box Game", icon: "crown" },
];

function TargetIcon({ icon }: { icon: "flame" | "gem" | "crown" }) {
  if (icon === "flame") return <Flame className="mx-auto mb-1.5 h-4 w-4" aria-hidden="true" />;
  if (icon === "gem") return <Gem className="mx-auto mb-1.5 h-4 w-4" aria-hidden="true" />;
  return <Crown className="mx-auto mb-1.5 h-4 w-4" aria-hidden="true" />;
}

function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

function useTodayString(): string {
  return useSyncExternalStore(
    () => () => {},
    getTodayString,
    () => "",
  );
}

export function ApplicationForm() {
  const [username, setUsername] = useState("");
  const [target, setTarget] = useState<BoxGameTarget | "">("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const minDate = useTodayString();

  function validateForm(): FormErrors {
    const nextErrors: FormErrors = {};

    const usernameError = validateUsername(username);
    if (usernameError) nextErrors.username = usernameError;

    if (!target) {
      nextErrors.target = "Please select a target.";
    }

    if (!date) {
      nextErrors.date = "Please select your available date.";
    } else if (minDate && date < minDate) {
      nextErrors.date = "Please select a date today or in the future.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <div
        className="boxgames-form-card boxgames-success-card w-full max-w-full rounded-2xl p-8 text-center sm:p-10"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Application Received 🔥
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
          Thank you for applying to join the Ghanaba Joey Box Games. We&apos;ll
          review your application and contact you if selected.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="boxgames-form-card w-full max-w-full min-w-0 space-y-6 rounded-2xl p-6 sm:space-y-7 sm:p-7"
    >
      <div>
        <label
          htmlFor="tiktok-username"
          className="block text-sm font-semibold tracking-wide text-zinc-300 uppercase"
        >
          TikTok Username
        </label>
        <input
          id="tiktok-username"
          type="text"
          value={username}
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
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {TARGET_OPTIONS.map((option) => {
            const isSelected = target === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTarget(option.value);
                  if (errors.target) {
                    setErrors((prev) => ({ ...prev, target: undefined }));
                  }
                }}
                aria-pressed={isSelected}
                className={`boxgames-target-option relative rounded-xl border px-2 py-3.5 text-center text-xs font-bold transition-all duration-300 active:scale-[0.98] sm:px-3 sm:text-sm ${
                  isSelected ? "boxgames-target-selected" : ""
                }`}
              >
                <TargetIcon icon={option.icon} />
                {option.label}
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

      <div>
        <label
          htmlFor="available-date"
          className="block text-sm font-semibold tracking-wide text-zinc-300 uppercase"
        >
          Select Your Available Date
        </label>
        <input
          id="available-date"
          type="date"
          value={date}
          min={minDate || undefined}
          onChange={(e) => {
            setDate(e.target.value);
            if (errors.date) {
              setErrors((prev) => ({ ...prev, date: undefined }));
            }
          }}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
          className={`boxgames-field mt-3 w-full rounded-xl border bg-black/50 px-4 py-3.5 text-base text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/40 [color-scheme:dark] ${
            errors.date
              ? "border-red-500/60"
              : "border-white/10 focus:border-gold/40"
          }`}
        />
        {errors.date && (
          <p id="date-error" className="mt-2 text-sm text-red-400" role="alert">
            {errors.date}
          </p>
        )}
      </div>

      <PremiumButton
        type="submit"
        variant="purple"
        disabled={isSubmitting}
        showArrow={!isSubmitting}
        className="boxgames-submit-btn py-3.5 text-base"
      >
        {isSubmitting ? (
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
