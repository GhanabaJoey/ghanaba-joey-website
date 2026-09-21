import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FullBleedSection({
  children,
  className,
  background = "obsidian",
}: {
  children: ReactNode;
  className?: string;
  background?: "obsidian" | "graphite" | "cinematic";
}) {
  const bg =
    background === "graphite"
      ? "gj-bg-graphite"
      : background === "cinematic"
        ? "gj-bg-cinematic"
        : "gj-bg-obsidian";

  return (
    <div className={cn("gj-full-bleed relative", bg, className)}>{children}</div>
  );
}
