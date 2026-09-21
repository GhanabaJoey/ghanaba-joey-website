import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  index?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  index,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {index && (
        <p className="gj-section-index mb-4" aria-hidden="true">
          {index}
        </p>
      )}
      {eyebrow && <SectionEyebrow className="mb-4">{eyebrow}</SectionEyebrow>}
      <h2 className="gj-heading-xl text-gj-foreground">{title}</h2>
      {description && (
        <p className="gj-body-lg mt-5 text-gj-foreground-muted">{description}</p>
      )}
    </header>
  );
}
