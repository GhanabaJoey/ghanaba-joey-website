import { cn } from "@/lib/cn";

export function Divider({
  variant = "gold",
  className,
}: {
  variant?: "gold" | "gradient";
  className?: string;
}) {
  return (
    <hr
      className={cn(
        variant === "gold" ? "gj-divider-gold" : "gj-divider-gradient",
        "w-full border-0",
        className,
      )}
    />
  );
}
