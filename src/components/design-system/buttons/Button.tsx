import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "text"
  | "gold"
  | "outline";

export type ButtonSize = "md" | "sm";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

const base =
  "gj-focus-ring gj-button-text gj-transition inline-flex items-center justify-center gap-2 rounded-[var(--gj-radius-md)] font-sans disabled:cursor-not-allowed disabled:opacity-45";

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 py-2.5 sm:min-h-12 sm:px-6",
  sm: "min-h-10 px-4 py-2 text-[0.75rem]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-[color-mix(in_srgb,var(--gj-gold)_40%,transparent)] bg-gj-gold text-gj-obsidian hover:bg-[var(--gj-gold-hover)] active:scale-[0.98]",
  gold:
    "border border-[color-mix(in_srgb,var(--gj-gold)_40%,transparent)] bg-gj-gold text-gj-obsidian hover:bg-[var(--gj-gold-hover)] active:scale-[0.98]",
  secondary:
    "border border-gj-border bg-gj-background-elevated text-gj-foreground hover:border-[color-mix(in_srgb,var(--gj-gold)_25%,transparent)] hover:bg-gj-background-soft",
  outline:
    "border border-[color-mix(in_srgb,var(--gj-gold)_35%,transparent)] bg-transparent text-gj-gold hover:bg-gj-gold-soft",
  ghost:
    "border border-transparent bg-transparent text-gj-foreground-muted hover:text-gj-foreground hover:bg-[rgba(255,255,255,0.04)]",
  text: "min-h-0 border-0 bg-transparent px-0 py-0 text-gj-foreground normal-case tracking-normal hover:text-gj-gold",
};

function ButtonContent({
  children,
  showArrow,
  variant,
}: {
  children: ReactNode;
  showArrow: boolean;
  variant: ButtonVariant;
}) {
  return (
    <>
      {children}
      {showArrow && variant === "text" && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-[var(--gj-duration-standard)] group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  type = "button",
  disabled = false,
  className = "",
  showArrow = variant === "text",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group",
    base,
    sizes[size],
    variants[variant],
    variant === "text" && "gj-body-sm font-medium",
    className,
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonContent showArrow={showArrow} variant={variant}>
            {children}
          </ButtonContent>
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        <ButtonContent showArrow={showArrow} variant={variant}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      <ButtonContent showArrow={showArrow} variant={variant}>
        {children}
      </ButtonContent>
    </button>
  );
}
