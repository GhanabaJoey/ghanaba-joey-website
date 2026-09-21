import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Field({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}
