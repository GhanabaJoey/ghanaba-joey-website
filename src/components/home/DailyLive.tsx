import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const SUPPORTS = [
  "Entertainment and community interaction on TikTok LIVE.",
  "Practical education around TikTok growth.",
  "Guidance on monetisation opportunities on TikTok.",
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
          <SectionEyebrow>Daily LIVE</SectionEyebrow>
          <Typography role="heading-xl" className="mt-5 text-gj-foreground">
            Play. Learn. Grow.
          </Typography>
          <p className="gj-body-lg mt-5 max-w-2xl text-gj-foreground-muted">
            The Daily LIVE brings together entertainment, participation and education —
            including Destiny Helper as part of the experience.
          </p>

          <ul className="mt-8 space-y-3">
            {SUPPORTS.map((item) => (
              <li key={item} className="gj-body max-w-2xl text-gj-foreground-muted">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={SITE_LINKS.tiktokProfile} external variant="outline" size="sm">
              Join the live on TikTok
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
