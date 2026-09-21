import { Button } from "@/components/design-system/buttons/Button";
import { GlassPanel } from "@/components/design-system/glass/GlassPanel";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const MODULES = [
  {
    title: "Destiny Helper",
    copy: "Community-driven LIVE box competition.",
  },
  {
    title: "TikTok growth",
    copy: "Practical ideas and education around growing on TikTok.",
  },
  {
    title: "TikTok monetisation",
    copy: "Education around understanding opportunities to monetise on TikTok.",
  },
] as const;

export function DailyLive() {
  return (
    <Section
      id="live"
      spacing="lg"
      tone="destiny-helper"
      className="scroll-mt-24 border-t border-gj-border-subtle"
    >
      <ContentContainer>
        <RevealOnScroll>
          <div className="max-w-3xl">
            <SectionEyebrow>Daily on TikTok LIVE</SectionEyebrow>
            <Typography role="display-md" className="mt-5 text-gj-foreground">
              Live with Ghanaba Joey
            </Typography>
            <p className="gj-label mt-4 text-gj-gold">Every day • 2:00 PM UK</p>
            <p className="gj-heading-md mt-6 text-gj-foreground">Play. Learn. Grow.</p>
            <p className="gj-body-lg mt-5 text-gj-foreground-muted">
              The Daily LIVE combines entertainment, community interaction, Destiny
              Helper and practical education around TikTok growth and monetisation.
            </p>
          </div>

          <div className="home-live-modules mt-12">
            {MODULES.map((mod) => (
              <GlassPanel key={mod.title} variant="subtle" className="p-6 sm:p-7">
                <h3 className="gj-heading-md text-gj-foreground">{mod.title}</h3>
                <p className="gj-body-sm mt-3 text-gj-foreground-muted">{mod.copy}</p>
              </GlassPanel>
            ))}
          </div>

          <div className="mt-10">
            <Button href={SITE_LINKS.tiktokProfile} external variant="primary">
              Join the live
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
