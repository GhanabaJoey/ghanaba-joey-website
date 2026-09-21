import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "gj-focus-ring gj-transition w-full rounded-[var(--gj-radius-lg)] border bg-gj-background-soft px-4 py-3.5",
        "text-gj-foreground placeholder:text-gj-foreground-subtle",
        invalid
          ? "border-gj-error/60 focus-visible:outline-gj-error"
          : "border-gj-border-subtle focus-visible:border-[color-mix(in_srgb,var(--gj-gold)_35%,transparent)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
