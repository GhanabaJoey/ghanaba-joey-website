import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("gj-eyebrow", className)}>{children}</p>;
}
