import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { EditorialSplit } from "@/components/design-system/sections/EditorialSplit";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { HomeEditorialVisual } from "@/components/home/visuals/HomeEditorialVisual";

export function BrandIntro() {
  return (
    <Section id="about" spacing="lg" className="scroll-mt-24 border-t border-gj-border-subtle">
      <ContentContainer width="wide">
        <RevealOnScroll>
          <EditorialSplit
            gap="lg"
            primary={
              <div className="max-w-xl">
                <SectionEyebrow>More than content.</SectionEyebrow>
                <Typography role="display-lg" className="mt-8 text-gj-foreground">
                  An ecosystem.
                </Typography>
                <p className="gj-body-lg mt-8 max-w-md text-gj-foreground-muted">
                  Community, LIVE entertainment and creator experiences — built for
                  participation, not passive viewing.
                </p>
              </div>
            }
            secondary={<HomeEditorialVisual variant="media" />}
          />
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
