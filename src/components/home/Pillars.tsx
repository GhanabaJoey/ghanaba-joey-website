import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

const PILLARS = [
  {
    index: "01",
    title: "Create",
    copy: "Content, LIVE experiences and entertainment.",
  },
  {
    index: "02",
    title: "Teach",
    copy: "Helping creators understand TikTok growth and monetisation.",
  },
  {
    index: "03",
    title: "Connect",
    copy: "Bringing creators, supporters, communities and opportunities together.",
  },
  {
    index: "04",
    title: "Build",
    copy: "Events, digital projects, websites and new opportunities.",
  },
] as const;

export function Pillars() {
  return (
    <Section id="pillars" spacing="lg" className="scroll-mt-24 gj-bg-graphite">
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-xl" className="max-w-2xl text-gj-foreground">
            What I build around
          </Typography>

          <div className="home-pillars mt-14 lg:mt-16">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.index}
                className="border-t border-gj-border-subtle pt-8 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-8"
              >
                <p className="home-pillar__index" aria-hidden="true">
                  {pillar.index}
                </p>
                <h3 className="gj-heading-md mt-4 text-gj-foreground">{pillar.title}</h3>
                <p className="gj-body mt-3 text-gj-foreground-muted">{pillar.copy}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
