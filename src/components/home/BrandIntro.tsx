import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { EditorialSplit } from "@/components/design-system/sections/EditorialSplit";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

export function BrandIntro() {
  return (
    <Section id="about" spacing="lg" className="scroll-mt-24 border-t border-gj-border-subtle">
      <ContentContainer>
        <RevealOnScroll>
          <EditorialSplit
            gap="lg"
            primary={
              <div>
                <SectionEyebrow>More than a creator</SectionEyebrow>
                <Typography role="display-md" className="mt-6 text-gj-foreground">
                  Creating experiences. Educating creators. Building opportunities.
                </Typography>
              </div>
            }
            secondary={
              <div className="gj-body-lg space-y-5 text-gj-foreground-muted lg:pt-4">
                <p>
                  Ghanaba Joey&apos;s work spans content, LIVE experiences, creator
                  education, community, events, digital projects and business
                  opportunities — built around helping creators grow and connect.
                </p>
                <p>
                  What started on TikTok LIVE has grown into structured spaces:
                  daily community moments, monthly competition, NextWave Creator
                  Network, and digital work for brands and businesses.
                </p>
                <Button href="/#pillars" variant="text" showArrow>
                  Discover the story
                </Button>
              </div>
            }
          />
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
