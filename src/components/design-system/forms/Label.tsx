import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={cn("gj-label text-gj-foreground-muted", className)}>
      {children}
    </label>
  );
}
