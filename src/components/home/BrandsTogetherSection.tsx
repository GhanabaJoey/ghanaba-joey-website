import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const FOCUS_AREAS = [
  "Campaigns",
  "Content",
  "LIVE activations",
  "Events",
  "Collaborations",
] as const;

export function BrandsTogetherSection() {
  return (
    <Section
      id="brands"
      spacing="default"
      className="scroll-mt-24 border-t border-gj-border-subtle gj-bg-graphite"
    >
      <ContentContainer>
        <RevealOnScroll>
          <SectionEyebrow>For brands &amp; businesses</SectionEyebrow>
          <Typography role="display-md" className="mt-6 max-w-2xl text-gj-foreground">
            Let&apos;s build something together.
          </Typography>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {FOCUS_AREAS.map((item) => (
              <li key={item} className="gj-label text-gj-gold/90">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={SITE_LINKS.workWithMe} variant="text" showArrow>
              Explore collaborations
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
