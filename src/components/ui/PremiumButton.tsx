import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "gold" | "purple" | "outline" | "uk";

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  gold: "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]",
  purple:
    "bg-gradient-to-r from-purple-700 via-pink-500 to-fuchsia-600 text-white shadow-[0_0_22px_rgba(236,72,153,0.25)] hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]",
  outline:
    "border border-gold/45 bg-black/30 text-gold shadow-[0_0_15px_rgba(212,175,55,0.08)] hover:bg-gold/10 hover:border-gold/65 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]",
  uk: "bg-gradient-to-r from-blue-900 via-blue-800 to-red-900/90 text-white border border-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]",
};

export function PremiumButton({
  children,
  href,
  external = false,
  variant = "gold",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  showArrow = true,
}: PremiumButtonProps) {
  const baseStyles =
    "group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 sm:text-base";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
