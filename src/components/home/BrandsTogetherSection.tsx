import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

export function BrandsTogetherSection() {
  return (
    <Section
      id="brands"
      spacing="lg"
      tone="commercial"
      className="scroll-mt-24 border-t border-gj-border-subtle gj-bg-graphite"
    >
      <ContentContainer>
        <RevealOnScroll>
          <SectionEyebrow>For brands &amp; businesses</SectionEyebrow>
          <Typography role="display-md" className="mt-6 max-w-3xl text-gj-foreground">
            Let&apos;s build something together.
          </Typography>
          <p className="gj-body-lg mt-6 max-w-2xl text-gj-foreground-muted">
            Looking to connect with creators, reach an engaged audience or create something
            different? I work with brands and businesses on campaigns, content, LIVE
            activations, events and collaborations.
          </p>
          <SectionCTA>
            <Button href="/#work-with-me" variant="primary">
              Work with Ghanaba Joey
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
