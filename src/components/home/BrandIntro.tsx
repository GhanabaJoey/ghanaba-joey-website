import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

export function BrandIntro() {
  return (
    <Section id="about" spacing="lg" className="scroll-mt-24 border-t border-gj-border-subtle">
      <ContentContainer width="wide">
        <RevealOnScroll>
          <div className="max-w-4xl">
            <SectionEyebrow>More than content.</SectionEyebrow>
            <Typography role="display-lg" className="mt-8 text-gj-foreground">
              An ecosystem.
            </Typography>
            <p className="gj-body-lg mt-10 max-w-2xl text-gj-foreground-muted">
              What started with creating content has grown into a community, a LIVE
              experience and opportunities for creators to connect, compete and grow.
            </p>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
