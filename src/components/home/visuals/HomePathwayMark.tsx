import { cn } from "@/lib/cn";

export type HomePathwayMarkVariant = "community" | "live" | "collaboration";

export interface HomePathwayMarkProps {
  variant: HomePathwayMarkVariant;
  className?: string;
}

export function HomePathwayMark({ variant, className }: HomePathwayMarkProps) {
  return (
    <span
      className={cn("home-pathway-mark", `home-pathway-mark--${variant}`, className)}
      aria-hidden="true"
    />
  );
}
