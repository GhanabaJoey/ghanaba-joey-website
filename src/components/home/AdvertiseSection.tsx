import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

const CATEGORIES = [
  "Sponsored content",
  "TikTok promotion",
  "LIVE promotion",
  "Product promotion",
  "Event promotion",
  "Brand partnerships",
] as const;

export function AdvertiseSection() {
  return (
    <Section
      id="advertise"
      spacing="lg"
      tone="commercial"
      className="scroll-mt-24 gj-bg-graphite"
    >
      <ContentContainer>
        <RevealOnScroll>
          <SectionEyebrow>For brands</SectionEyebrow>
          <Typography role="display-md" className="mt-6 text-gj-foreground">
            Your brand.
            <span className="block text-gj-gold">My audience.</span>
          </Typography>
          <p className="gj-body-lg mt-6 max-w-2xl text-gj-foreground-muted">
            Create opportunities for brands, products, events and campaigns to connect
            with an engaged creator-led community.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((item) => (
              <li key={item} className="gj-body-sm border-l border-gj-border-subtle pl-4 text-gj-foreground-muted">
                {item}
              </li>
            ))}
          </ul>

          <SectionCTA>
            <Button href="/#work-with-me" variant="primary">
              Advertise with me
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
