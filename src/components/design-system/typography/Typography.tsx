import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TypographyRole =
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "body-lg"
  | "body"
  | "body-sm"
  | "eyebrow"
  | "label"
  | "caption";

const roleClass: Record<TypographyRole, string> = {
  "display-xl": "gj-display-xl",
  "display-lg": "gj-display-lg",
  "display-md": "gj-display-md",
  "heading-xl": "gj-heading-xl",
  "heading-lg": "gj-heading-lg",
  "heading-md": "gj-heading-md",
  "body-lg": "gj-body-lg",
  body: "gj-body",
  "body-sm": "gj-body-sm",
  eyebrow: "gj-eyebrow",
  label: "gj-label",
  caption: "gj-caption",
};

const defaultTag: Partial<Record<TypographyRole, ElementType>> = {
  "display-xl": "h1",
  "display-lg": "h1",
  "display-md": "h2",
  "heading-xl": "h2",
  "heading-lg": "h3",
  "heading-md": "h4",
  eyebrow: "p",
  caption: "p",
};

export function Typography({
  role,
  as,
  children,
  className,
}: {
  role: TypographyRole;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const Tag = as ?? defaultTag[role] ?? "p";
  return <Tag className={cn(roleClass[role], className)}>{children}</Tag>;
}
