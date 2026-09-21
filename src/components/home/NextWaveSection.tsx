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
      id="nextwave"
      spacing="lg"
      tone="nextwave"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="display-md" className="text-gj-foreground">
            NextWave Creator Network
          </Typography>
          <p className="gj-label mt-5 text-gj-gold">Stream • Compete • Win • Grow</p>
          <p className="gj-body-lg mt-6 max-w-2xl text-gj-foreground-muted">
            NextWave is Ghanaba Joey&apos;s creator network — built around helping creators
            develop their LIVE presence, connect with opportunities and grow. Explore
            NextWave on its own site; this is your introduction from the personal brand.
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
