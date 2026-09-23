import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

export function WebsiteDevelopmentSection() {
  return (
    <Section
      id="website-development"
      spacing="default"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer width="narrow">
        <RevealOnScroll>
          <SectionEyebrow>Work with me — digital</SectionEyebrow>
          <Typography role="heading-lg" className="mt-4 text-gj-foreground">
            Need a website?
          </Typography>
          <p className="gj-body mt-4 text-gj-foreground-muted">
            Modern digital experiences for businesses, creators, brands, e-commerce and
            custom projects — available alongside campaigns and collaborations.
          </p>
          <div className="mt-8">
            <Button href="/#work-with-me" variant="text" showArrow>
              Start a website project
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
