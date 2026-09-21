import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassVariant = "default" | "subtle";

export interface GlassPanelProps {
  children: ReactNode;
  variant?: GlassVariant;
  className?: string;
  as?: "div" | "section" | "article";
}

export function GlassPanel({
  children,
  variant = "default",
  className,
  as: Tag = "div",
}: GlassPanelProps) {
  return (
    <Tag
      className={cn(
        variant === "subtle" ? "gj-glass-subtle" : "gj-glass",
        "rounded-[var(--gj-radius-xl)] shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
