import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const OPPORTUNITIES = [
  "Brand partnerships",
  "Sponsored content",
  "Campaigns",
  "TikTok / LIVE promotion",
  "LIVE activations",
  "Events & hosting",
  "Creator collaborations",
  "Media enquiries",
] as const;

export function WorkWithMe() {
  return (
    <Section
      id="work-with-me"
      spacing="lg"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="display-md" className="max-w-3xl text-gj-foreground">
            Work with me
          </Typography>
          <p className="gj-heading-md mt-6 text-gj-gold">
            Let&apos;s create something people remember.
          </p>
          <p className="gj-body-lg mt-5 max-w-2xl text-gj-foreground-muted">
            For brands, businesses, creators and organisations looking to collaborate with
            Ghanaba Joey across content, LIVE, events, campaigns and experiences.
          </p>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {OPPORTUNITIES.map((item) => (
              <li key={item} className="gj-body-sm border-l border-gj-border-subtle pl-4 text-gj-foreground-muted">
                {item}
              </li>
            ))}
          </ul>

          <SectionCTA>
            <Button href={SITE_LINKS.contact} variant="primary">
              Start a conversation
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
