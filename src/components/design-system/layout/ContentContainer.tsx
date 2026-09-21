import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerWidth = "default" | "narrow" | "wide";

export interface ContentContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main";
}

export function ContentContainer({
  children,
  width = "default",
  className,
  as: Tag = "div",
}: ContentContainerProps) {
  return (
    <Tag
      className={cn(
        "gj-container",
        width === "narrow" && "gj-container-narrow",
        width === "wide" && "gj-container-wide",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
