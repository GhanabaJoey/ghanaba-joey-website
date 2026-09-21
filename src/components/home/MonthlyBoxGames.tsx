import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionCTA } from "@/components/design-system/sections/SectionCTA";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { OFFICIAL_MONTHLY_BOX_GAMES_NAME } from "@/lib/box-games/application-rules";
import { SITE_LINKS } from "@/lib/site-links";

const EVENT_POINTS = [
  "Dedicated registration and application flow",
  "Scheduled monthly targets and dates",
  "Structured format and rules",
  "A dedicated event experience — separate from daily Destiny Helper",
] as const;

export function MonthlyBoxGames() {
  return (
    <Section
      id="monthly-box-games"
      spacing="lg"
      tone="box-games"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <SectionEyebrow>A separate monthly experience</SectionEyebrow>
          <Typography role="display-md" className="mt-6 text-gj-foreground">
            {OFFICIAL_MONTHLY_BOX_GAMES_NAME}
          </Typography>
          <p className="gj-heading-md mt-6 text-gj-gold">
            Competitive. Structured. Community-driven.
          </p>
          <p className="gj-body-lg mt-6 max-w-2xl text-gj-foreground-muted">
            A separate monthly event created for competition, entertainment and community
            — with its own registration, schedule, format and rules.
          </p>

          <ul className="mt-10 space-y-3 border-l border-gj-border-subtle pl-6">
            {EVENT_POINTS.map((point) => (
              <li key={point} className="gj-body text-gj-foreground-muted">
                {point}
              </li>
            ))}
          </ul>

          <SectionCTA>
            <Button href={SITE_LINKS.boxGamesAlias} variant="primary">
              View monthly box games
            </Button>
          </SectionCTA>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
