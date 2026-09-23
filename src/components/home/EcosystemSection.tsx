import Link from "next/link";
import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { HomeCinematicMedia } from "@/components/home/visuals/HomeCinematicMedia";
import { HOME_MEDIA } from "@/lib/home-media";
import { NEXTWAVE_AMBIENT_SRC, SITE_LINKS } from "@/lib/site-links";

const EXPERIENCES = [
  {
    id: "destiny-helper",
    label: "Destiny Helper",
    headline: "Daily LIVE experience.",
    subline: "Real talk. Real connection.",
    schedule: "Every day • 2PM UK",
    cta: "Join the live",
    href: SITE_LINKS.tiktokProfile,
    external: true,
    tone: "border-gj-gold/25",
    media: HOME_MEDIA.destinyHelperLive,
    mediaAlt: "Destiny Helper TikTok LIVE session",
    mediaVariant: "live-portrait" as const,
    linkMedia: false,
  },
  {
    id: "box-games",
    label: "Official Monthly Box Games",
    headline: "Compete. Entertain. Win.",
    subline: "Be part of the action.",
    badge: "Monthly tournament",
    schedule: null,
    cta: "Discover box games",
    href: SITE_LINKS.boxGamesAlias,
    external: false,
    tone: "border-gj-border",
    media: HOME_MEDIA.boxGamesPromo,
    mediaAlt: "Official Monthly Box Games promotional artwork",
    mediaVariant: "promo-landscape" as const,
    linkMedia: true,
  },
  {
    id: "nextwave",
    label: "NextWave Creator Network",
    headline: "Where creators connect.",
    subline: "Community, collaboration, growth and opportunities.",
    schedule: null,
    cta: "Join NextWave",
    href: SITE_LINKS.nextwave,
    external: true,
    tone: "border-gj-border",
    media: NEXTWAVE_AMBIENT_SRC,
    mediaAlt: "",
    mediaVariant: "promo-landscape" as const,
    linkMedia: false,
    decorativeMedia: true,
  },
] as const;

export function EcosystemSection() {
  return (
    <Section
      id="ecosystem"
      spacing="lg"
      className="scroll-mt-24 border-t border-gj-border-subtle gj-bg-graphite"
    >
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-xl" className="text-gj-foreground">
            The ecosystem
          </Typography>
          <p className="gj-body-lg mt-4 max-w-md text-gj-foreground-muted">
            Destiny Helper, Official Monthly Box Games and NextWave — three connected
            experiences.
          </p>

          <div className="home-ecosystem home-ecosystem--media mt-14 lg:mt-16">
            {EXPERIENCES.map((item, index) => {
              const mediaBlock = (
                <HomeCinematicMedia
                  src={item.media}
                  alt={"decorativeMedia" in item && item.decorativeMedia ? "" : item.mediaAlt}
                  variant={item.mediaVariant}
                  sizes="(max-width: 1024px) 92vw, 320px"
                  className={item.id === "nextwave" ? "home-media-frame--nextwave" : undefined}
                />
              );

              return (
                <article
                  key={item.id}
                  className={`flex flex-col border-t pt-10 ${item.tone} lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
                >
                  {item.linkMedia ? (
                    <Link
                      href={item.href}
                      className="gj-focus-ring home-ecosystem__media-link mb-6 block"
                    >
                      {mediaBlock}
                    </Link>
                  ) : (
                    <div className="mb-6">{mediaBlock}</div>
                  )}

                  <p className="gj-label text-gj-gold">{item.label}</p>
                  <h3 className="gj-heading-lg mt-3 text-gj-foreground">{item.headline}</h3>
                  <p className="gj-body-sm mt-2 text-gj-foreground-muted">{item.subline}</p>
                  {"badge" in item && item.badge && (
                    <p className="gj-caption mt-3 uppercase tracking-[0.16em] text-gj-gold/90">
                      {item.badge}
                    </p>
                  )}
                  {item.schedule && (
                    <p className="gj-caption mt-4 text-gj-gold/90">{item.schedule}</p>
                  )}
                  <div className="mt-8">
                    <Button
                      href={item.href}
                      external={item.external}
                      variant={index === 0 ? "primary" : "outline"}
                      size="sm"
                    >
                      {item.cta}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
