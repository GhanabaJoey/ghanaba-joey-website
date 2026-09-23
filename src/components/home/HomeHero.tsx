import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/design-system/buttons/Button";
import { DepthStage } from "@/components/design-system/depth/DepthStage";
import { Typography } from "@/components/design-system/typography/Typography";
import { HomeCinematicMedia } from "@/components/home/visuals/HomeCinematicMedia";
import { HOME_MEDIA } from "@/lib/home-media";
import { SITE_LINKS } from "@/lib/site-links";

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

          <p className="gj-body-lg mt-8 max-w-md text-gj-foreground">
            Creating experiences.
            <br />
            Building community.
            <br />
            Creating opportunities.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/#ecosystem" variant="primary">
              Explore the ecosystem
            </Button>
            <Button href={SITE_LINKS.workWithMe} variant="outline">
              Work with me
            </Button>
          </div>
        </div>

        <div className="relative z-[1] flex justify-center lg:justify-end">
          <div className="home-hero__media">
            <span className="home-hero__emblem" aria-hidden="true">
              GJ
            </span>
            <HomeCinematicMedia
              src={HOME_MEDIA.hero}
              alt="Ghanaba Joey"
              variant="hero"
              priority
              sizes="(max-width: 1024px) min(72vw, 18rem), 20rem"
            />
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
