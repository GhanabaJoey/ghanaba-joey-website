import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";
import { Button } from "@/components/design-system/buttons/Button";

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
      spacing="default"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-lg" className="text-gj-foreground">
            Work with me
          </Typography>
          <p className="gj-body mt-3 max-w-xl text-gj-foreground-muted">
            Campaigns, digital projects, LIVE activations and partnerships — reach out to
            start a conversation.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {OPPORTUNITIES.map((item) => (
              <li key={item} className="gj-body-sm text-gj-foreground-subtle">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/#brands" variant="outline" size="sm">
              For brands
            </Button>
            <Button href={SITE_LINKS.tiktokProfile} external variant="ghost" size="sm">
              Contact on TikTok
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
