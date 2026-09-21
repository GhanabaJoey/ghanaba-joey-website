import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * CSS-only depth scaffold for future 3D/emblem integration.
 * Do not treat glow layers as final brand artwork.
 */
export function DepthStage({
  children,
  className,
  showAmbient = true,
}: {
  children: ReactNode;
  className?: string;
  showAmbient?: boolean;
}) {
  return (
    <div className={cn("gj-depth-stage min-h-[12rem]", className)}>
      {showAmbient && (
        <>
          <div className="gj-depth-layer-back gj-bg-gold-ambient" aria-hidden="true" />
          <div
            className="gj-depth-glow left-1/4 top-1/4 h-48 w-48 bg-gj-gold"
            aria-hidden="true"
          />
          <div
            className="gj-depth-trail left-[10%] top-[45%] w-[40%]"
            aria-hidden="true"
          />
        </>
      )}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
