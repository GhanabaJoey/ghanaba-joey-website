import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionCTA({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-10 flex flex-wrap gap-4", className)}>{children}</div>;
}
