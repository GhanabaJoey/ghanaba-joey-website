import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface EditorialSplitProps {
  primary: ReactNode;
  secondary: ReactNode;
  reverse?: boolean;
  className?: string;
  gap?: "default" | "lg";
}

export function EditorialSplit({
  primary,
  secondary,
  reverse = false,
  className,
  gap = "default",
}: EditorialSplitProps) {
  return (
    <div
      className={cn(
        "grid items-start gap-10 lg:grid-cols-2 lg:items-center",
        gap === "lg" && "gap-12 lg:gap-16",
        className,
      )}
    >
      <div className={cn(reverse && "lg:order-2")}>{primary}</div>
      <div className={cn(reverse && "lg:order-1")}>{secondary}</div>
    </div>
  );
}
