import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { HomeEditorialVisual } from "@/components/home/visuals/HomeEditorialVisual";
import { SITE_LINKS } from "@/lib/site-links";

const COLLABORATION_AREAS = [
  {
    title: "Brand Partnerships",
    copy: "Align with a creator-led audience through authentic, high-energy partnerships.",
  },
  {
    title: "Content & Media",
    copy: "Campaigns, sponsored storytelling and media that feels native to the culture.",
  },
  {
    title: "LIVE & Activations",
    copy: "TikTok LIVE moments, promotions and activations built for participation.",
  },
  {
    title: "Events & Hosting",
    copy: "Hosted experiences, competitions and live events with presence and polish.",
  },
] as const;

export function WorkWithMe() {
  return (
    <Section
      id="work-with-me"
      spacing="lg"
      tone="commercial"
      className="scroll-mt-24 border-t border-gj-border-subtle gj-bg-graphite home-work-with-me"
    >
      <ContentContainer width="wide">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <SectionEyebrow>Work with me</SectionEyebrow>
            <Typography role="display-md" className="mt-6 text-gj-foreground">
              Let&apos;s create something people remember.
            </Typography>
            <p className="gj-body-lg mt-5 max-w-2xl text-gj-foreground-muted">
              For brands, creators and organisations looking to collaborate across content,
              LIVE, events, campaigns and experiences.
            </p>
          </div>

          <div className="mt-12 lg:mt-14">
            <HomeEditorialVisual variant="collaboration" className="mx-auto max-w-4xl" />
          </div>

          <div className="home-collab-areas mt-14 lg:mt-16">
            {COLLABORATION_AREAS.map((area, index) => (
              <article
                key={area.title}
                className="home-collab-area border-t border-gj-border-subtle pt-8"
              >
                <p className="home-collab-area__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="gj-heading-md mt-3 text-gj-foreground">{area.title}</h3>
                <p className="gj-body-sm mt-2 max-w-sm text-gj-foreground-muted">{area.copy}</p>
              </article>
            ))}
          </div>

          <SectionCTA>
            <Button href={SITE_LINKS.contact} variant="primary" showArrow>
              Start a conversation
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
