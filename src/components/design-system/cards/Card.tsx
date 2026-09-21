import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "flat" | "bordered" | "glass" | "image-led";

export function Card({
  children,
  variant = "bordered",
  className,
  as: Tag = "article",
}: {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  as?: "article" | "div";
}) {
  return (
    <Tag
      className={cn(
        "rounded-[var(--gj-radius-xl)] p-6 sm:p-8",
        variant === "flat" && "bg-gj-background-soft",
        variant === "bordered" &&
          "border border-gj-border-subtle bg-gj-background-elevated/40",
        variant === "glass" && "gj-glass",
        variant === "image-led" &&
          "overflow-hidden border border-gj-border-subtle bg-gj-graphite p-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
