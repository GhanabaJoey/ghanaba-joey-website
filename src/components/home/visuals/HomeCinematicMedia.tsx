import Image from "next/image";
import { cn } from "@/lib/cn";

export type HomeCinematicMediaVariant = "hero" | "live-portrait" | "promo-landscape";

export interface HomeCinematicMediaProps {
  src: string;
  alt: string;
  variant?: HomeCinematicMediaVariant;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const variantClass: Record<HomeCinematicMediaVariant, string> = {
  hero: "home-media-frame--hero",
  "live-portrait": "home-media-frame--live-portrait",
  "promo-landscape": "home-media-frame--promo-landscape",
};

export function HomeCinematicMedia({
  src,
  alt,
  variant = "live-portrait",
  priority = false,
  className,
  sizes = "(max-width: 1024px) 90vw, 420px",
}: HomeCinematicMediaProps) {
  return (
    <div className={cn("home-media-frame", variantClass[variant], className)}>
      <div className="home-media-frame__inner">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover",
            variant === "live-portrait" && "object-[center_22%]",
            variant === "promo-landscape" && "object-center",
            variant === "hero" && "object-[center_12%]",
          )}
        />
        <div className="home-media-frame__vignette" aria-hidden="true" />
        <div className="home-media-frame__gold-edge" aria-hidden="true" />
      </div>
    </div>
  );
}
