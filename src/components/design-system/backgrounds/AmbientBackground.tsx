import { cn } from "@/lib/cn";

type AmbientVariant = "obsidian" | "graphite" | "cinematic" | "radial" | "gold";

export function AmbientBackground({
  variant = "obsidian",
  noise = false,
  className,
}: {
  variant?: AmbientVariant;
  noise?: boolean;
  className?: string;
}) {
  const variantClass = {
    obsidian: "gj-bg-obsidian",
    graphite: "gj-bg-graphite",
    cinematic: "gj-bg-cinematic",
    radial: "gj-bg-obsidian gj-bg-radial-light",
    gold: "gj-bg-obsidian gj-bg-gold-ambient",
  }[variant];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        variantClass,
        noise && "gj-bg-noise",
        className,
      )}
      aria-hidden="true"
    />
  );
}
