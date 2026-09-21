import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionSpacing = "default" | "sm" | "lg" | "none";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  spacing?: SectionSpacing;
  className?: string;
  tone?: "default" | "destiny-helper" | "box-games" | "nextwave" | "commercial";
}

const spacingClass: Record<SectionSpacing, string> = {
  default: "gj-section",
  sm: "gj-section-sm",
  lg: "gj-section-lg",
  none: "",
};

const toneClass = {
  default: "",
  "destiny-helper": "gj-tone-destiny-helper gj-tone-surface",
  "box-games": "gj-tone-box-games gj-tone-surface",
  nextwave: "gj-tone-nextwave gj-tone-surface",
  commercial: "gj-tone-commercial gj-tone-surface",
};

export function Section({
  children,
  id,
  spacing = "default",
  className,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingClass[spacing], toneClass[tone], className)}
    >
      {children}
    </section>
  );
}
