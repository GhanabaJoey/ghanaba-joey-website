import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

const SERVICES = [
  "Businesses",
  "Creators",
  "Brands",
  "E-commerce",
  "Custom digital projects",
] as const;

export function WebsiteDevelopmentSection() {
  return (
    <Section
      id="website-development"
      spacing="lg"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <SectionEyebrow>Digital</SectionEyebrow>
          <Typography role="display-md" className="mt-6 text-gj-foreground">
            Need a website?
          </Typography>
          <p className="gj-heading-md mt-6 text-gj-foreground-muted">
            Your business deserves more than a basic website.
          </p>
          <p className="gj-body-lg mt-5 max-w-2xl text-gj-foreground-muted">
            Ghanaba Joey also builds modern digital experiences — structured for growth,
            clarity and premium presentation.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {SERVICES.map((item) => (
              <li key={item} className="gj-body-sm text-gj-foreground-muted">
                {item}
              </li>
            ))}
          </ul>

          <SectionCTA>
            <Button href="/#work-with-me" variant="outline">
              Start a website project
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
