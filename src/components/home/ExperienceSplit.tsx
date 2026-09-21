import { Button } from "@/components/design-system/buttons/Button";
import { Card } from "@/components/design-system/cards/Card";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

export function ExperienceSplit() {
  return (
    <Section id="experiences" spacing="lg" className="scroll-mt-24 gj-bg-graphite">
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-xl" className="max-w-3xl text-gj-foreground">
            Two experiences.
            <span className="block text-gj-gold">One community.</span>
          </Typography>

          <div className="home-experience-split mt-14">
            <Card variant="bordered" className="flex flex-col">
              <p className="gj-label text-gj-foreground-subtle">Daily</p>
              <h3 className="gj-heading-lg mt-3 text-gj-foreground">Destiny Helper</h3>
              <p className="gj-body-sm mt-2 text-gj-gold">Every day at 2PM UK</p>
              <p className="gj-body mt-5 flex-1 text-gj-foreground-muted">
                Part of the Ghanaba Joey LIVE. Competition, connection and community —
                not the same as the monthly box event.
              </p>
              <div className="mt-8">
                <Button href={SITE_LINKS.tiktokProfile} external variant="outline" size="sm">
                  Join the live
                </Button>
              </div>
            </Card>

            <Card variant="bordered" className="flex flex-col border-gj-gold/20">
              <p className="gj-label text-gj-foreground-subtle">Monthly</p>
              <h3 className="gj-heading-lg mt-3 text-gj-foreground">Official Monthly Box Games</h3>
              <p className="gj-body mt-5 flex-1 text-gj-foreground-muted">
                A separate structured monthly event with registration, schedule, format
                and competition.
              </p>
              <div className="mt-8">
                <Button href={SITE_LINKS.boxGamesAlias} variant="primary" size="sm">
                  View box games
                </Button>
              </div>
            </Card>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
