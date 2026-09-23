import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { EditorialSplit } from "@/components/design-system/sections/EditorialSplit";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { HomeEditorialVisual } from "@/components/home/visuals/HomeEditorialVisual";
import { SITE_LINKS } from "@/lib/site-links";

const SUPPORTS = [
  "Entertainment & community on TikTok LIVE",
  "TikTok growth education",
  "Monetisation guidance",
] as const;

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
                  Entertainment, participation and education — with Destiny Helper at the
                  centre of the experience.
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {SUPPORTS.map((item) => (
                    <li
                      key={item}
                      className="gj-body-sm rounded-full border border-gj-border-subtle px-3 py-1.5 text-gj-foreground-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button href={SITE_LINKS.tiktokProfile} external variant="outline" size="sm">
                    Join the live on TikTok
                  </Button>
                </div>
              </div>
            }
            secondary={<HomeEditorialVisual variant="live" />}
          />
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
