import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { EditorialSplit } from "@/components/design-system/sections/EditorialSplit";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { HomeCinematicMedia } from "@/components/home/visuals/HomeCinematicMedia";
import { HOME_MEDIA } from "@/lib/home-media";
import { SITE_LINKS } from "@/lib/site-links";

export function DailyLive() {
  return (
    <Section
      id="live"
      spacing="default"
      tone="destiny-helper"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <EditorialSplit
            reverse
            gap="lg"
            primary={
              <div>
                <SectionEyebrow>Daily LIVE</SectionEyebrow>
                <Typography role="heading-xl" className="mt-5 text-gj-foreground">
                  Play. Learn. Grow.
                </Typography>
                <p className="gj-body-lg mt-5 max-w-md text-gj-foreground-muted">
                  A place for entertainment, creator interaction, competition and community.
                </p>
                <p className="gj-caption mt-6 text-gj-gold/90">Every day • 2PM UK</p>

                <div className="mt-10">
                  <Button href={SITE_LINKS.tiktokProfile} external variant="outline" size="sm">
                    Join the live on TikTok
                  </Button>
                </div>
              </div>
            }
            secondary={
              <HomeCinematicMedia
                src={HOME_MEDIA.dailyLive}
                alt="Ghanaba Joey hosting a TikTok LIVE"
                variant="live-portrait"
                sizes="(max-width: 1024px) 88vw, 400px"
              />
            }
          />
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
