import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const OPPORTUNITIES = [
  "Advertise with me",
  "Website development",
  "Partnerships",
  "Events",
  "Collaborations",
] as const;

export function WorkWithMe() {
  return (
    <Section
      id="work-with-me"
      spacing="lg"
      tone="commercial"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="display-md" className="text-gj-foreground">
            Let&apos;s build something.
          </Typography>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            {OPPORTUNITIES.map((item) => (
              <li
                key={item}
                className="gj-body border-b border-gj-border-subtle pb-3 text-gj-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <SectionCTA>
            <Button href="/#work-with-me" variant="primary">
              Work with me
            </Button>
            <Button href={SITE_LINKS.tiktokProfile} external variant="ghost">
              Contact
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
