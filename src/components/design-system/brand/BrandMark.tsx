import { Crown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type BrandMarkVariant = "primary" | "horizontal" | "icon" | "watermark";

export interface BrandMarkProps {
  variant?: BrandMarkVariant;
  href?: string;
  className?: string;
  /** Temporary monogram until final logo assets exist */
  tone?: "gold" | "white" | "black";
}

const toneClass = {
  gold: "text-gj-gold",
  white: "text-gj-foreground",
  black: "text-gj-obsidian",
};

/**
 * Text/monogram fallback — not final signature artwork.
 * Do not embed taglines in the mark.
 */
export function BrandMark({
  variant = "horizontal",
  href = "/",
  className,
  tone = "gold",
}: BrandMarkProps) {
  const content =
    variant === "icon" ? (
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-[var(--gj-radius-md)] border border-gj-border-subtle bg-gj-background-elevated font-sans text-sm font-bold tracking-tight",
          toneClass[tone],
        )}
        aria-hidden={false}
      >
        GJ
      </span>
    ) : variant === "watermark" ? (
      <span
        className={cn(
          "select-none font-display text-4xl opacity-[0.07]",
          toneClass[tone],
        )}
        aria-hidden="true"
      >
        GJ
      </span>
    ) : (
      <span className="inline-flex items-center gap-2.5">
        <Crown className={cn("h-3.5 w-3.5", toneClass[tone])} aria-hidden="true" />
        <span
          className={cn(
            "font-sans text-xs font-semibold tracking-[0.22em] uppercase sm:text-sm",
            tone === "gold" ? "text-gj-gold/90" : toneClass[tone],
          )}
        >
          Ghanaba Joey
        </span>
      </span>
    );

  return (
    <Link
      href={href}
      className={cn("gj-focus-ring inline-flex rounded-sm", className)}
      aria-label="Ghanaba Joey — Home"
    >
      {content}
    </Link>
  );
}
