import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { HomePathwayMark } from "@/components/home/visuals/HomePathwayMark";
import { SITE_LINKS } from "@/lib/site-links";

const PATHWAYS = [
  {
    title: "I'm a creator",
    copy: "NextWave, LIVE and creator opportunities.",
    cta: "For creators",
    href: SITE_LINKS.nextwave,
    external: true,
    mark: "community" as const,
  },
  {
    title: "I'm here for LIVE",
    copy: "Destiny Helper and Official Monthly Box Games.",
    cta: "Enter the live world",
    href: "/#ecosystem",
    external: false,
    mark: "live" as const,
  },
  {
    title: "I'm a brand",
    copy: "Campaigns, collaborations and experiences.",
    cta: "Work with me",
    href: SITE_LINKS.workWithMe,
    external: false,
    mark: "collaboration" as const,
  },
] as const;

export function WhereDoYouFitIn() {
  return (
    <Section id="pathways" spacing="lg" className="scroll-mt-24">
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-xl" className="text-gj-foreground">
            Where do you fit in?
          </Typography>

          <div className="home-pathways mt-12 lg:mt-14">
            {PATHWAYS.map((path) => (
              <article
                key={path.title}
                className="home-pathway flex flex-col border-t border-gj-border-subtle py-10 first:pt-0 lg:border-t-0 lg:border-l lg:py-0 lg:pl-10 lg:first:border-l-0 lg:first:pl-0"
              >
                <HomePathwayMark variant={path.mark} />
                <h3 className="gj-heading-lg mt-6 text-gj-foreground">{path.title}</h3>
                <p className="gj-body-sm mt-3 flex-1 text-gj-foreground-muted">{path.copy}</p>
                <div className="mt-6">
                  <Button
                    href={path.href}
                    external={path.external}
                    variant="text"
                    showArrow
                  >
                    {path.cta}
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
