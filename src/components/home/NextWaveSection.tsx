import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

export function NextWaveSection() {
  return (
    <Section
      id="nextwave-detail"
      spacing="default"
      tone="nextwave"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-xl" className="text-gj-foreground">
            NextWave Creator Network
          </Typography>
          <p className="gj-label mt-4 text-gj-gold">Stream • Compete • Win • Grow</p>
          <p className="gj-body-lg mt-6 max-w-2xl text-gj-foreground-muted">
            Where creators connect — a network built around LIVE presence, collaboration
            and growth. Explore the full NextWave experience on its dedicated site.
          </p>

          <SectionCTA>
            <Button href={SITE_LINKS.nextwave} external variant="primary">
              Visit NextWave
            </Button>
            <Button href={SITE_LINKS.ukCreatorApply} external variant="outline">
              Apply from the UK
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
