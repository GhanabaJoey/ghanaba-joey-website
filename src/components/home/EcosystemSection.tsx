import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const EXPERIENCES = [
  {
    label: "Destiny Helper",
    tagline: "The daily LIVE experience.",
    copy: "Come together, compete, connect and be part of the experience.",
    schedule: "Every day • 2PM UK",
    cta: "Join the live",
    href: SITE_LINKS.tiktokProfile,
    external: true,
    tone: "border-gj-gold/25",
  },
  {
    label: "Box Games",
    tagline: "The monthly creator event.",
    copy: "A bigger LIVE experience bringing creators together for competition, entertainment and rewards.",
    schedule: null,
    cta: "Discover box games",
    href: SITE_LINKS.boxGamesAlias,
    external: false,
    tone: "border-gj-border",
  },
  {
    label: "NextWave",
    tagline: "Where creators connect.",
    copy: "A creator network built around community, collaboration, growth and opportunities — whether you're starting out or taking your journey further.",
    schedule: null,
    cta: "Join NextWave",
    href: SITE_LINKS.nextwave,
    external: true,
    tone: "border-gj-border",
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
          <p className="gj-body-lg mt-4 max-w-2xl text-gj-foreground-muted">
            Three connected experiences — daily LIVE, monthly competition and a creator
            network — built around participation, not passive viewing.
          </p>

          <div className="home-ecosystem mt-14 lg:mt-16">
            {EXPERIENCES.map((item, index) => (
              <article
                key={item.label}
                className={`flex flex-col border-t pt-10 ${item.tone} lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
              >
                <p className="gj-label text-gj-gold">{item.label}</p>
                <h3 className="gj-heading-lg mt-3 text-gj-foreground">{item.tagline}</h3>
                <p className="gj-body mt-4 flex-1 text-gj-foreground-muted">{item.copy}</p>
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
            ))}
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
