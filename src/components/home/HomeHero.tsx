import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/design-system/buttons/Button";
import { DepthStage } from "@/components/design-system/depth/DepthStage";
import { Typography } from "@/components/design-system/typography/Typography";
import { PORTRAIT_SRC } from "@/lib/site-links";

export function HomeHero() {
  return (
    <section id="home" className="home-hero scroll-mt-24">
      <DepthStage className="absolute inset-0 -z-10 min-h-full" showAmbient>
        <div className="gj-bg-noise absolute inset-0 opacity-40" aria-hidden="true" />
      </DepthStage>

      <div className="gj-container home-hero__grid">
        <div className="relative z-[1] max-w-xl">
          <Typography role="eyebrow" className="text-gj-gold/90">
            Creator • Host • Entrepreneur
          </Typography>

          <Typography role="display-xl" className="mt-6 text-gj-foreground">
            Ghanaba Joey
          </Typography>

          <p className="gj-body-lg mt-8 max-w-md text-gj-foreground-muted">
            Creating experiences.
            <br />
            Educating creators.
            <br />
            Building opportunities.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/#live" variant="primary">
              Explore the world
            </Button>
            <Button href="/#work-with-me" variant="outline">
              Work with me
            </Button>
          </div>
        </div>

        <div className="relative z-[1] flex justify-center lg:justify-end">
          <div className="home-hero__portrait-wrap">
            <span className="home-hero__emblem" aria-hidden="true">
              GJ
            </span>
            <span className="home-hero__portrait-ring" aria-hidden="true" />
            <div className="gj-image-portrait gj-image-cinematic relative h-full w-full shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <Image
                src={PORTRAIT_SRC}
                alt="Ghanaba Joey"
                fill
                priority
                sizes="(max-width: 1024px) 320px, 352px"
                className="object-cover object-[center_12%]"
              />
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/#about"
        className="gj-focus-ring gj-container mb-8 inline-flex items-center gap-2 pb-4 text-gj-foreground-subtle transition-colors hover:text-gj-gold"
        aria-label="Scroll to about section"
      >
        <span className="gj-caption uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
