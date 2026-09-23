import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const SUPPORTS = [
  {
    title: "Entertainment & community",
    copy: "LIVE interaction, energy and participation — including Destiny Helper as part of the show.",
  },
  {
    title: "TikTok growth",
    copy: "Practical ideas and education around growing on TikTok.",
  },
  {
    title: "TikTok monetisation",
    copy: "Understanding opportunities to monetise on TikTok.",
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
            <SectionEyebrow>Inside the daily LIVE</SectionEyebrow>
            <Typography role="heading-xl" className="mt-5 text-gj-foreground">
              Play. Learn. Grow.
            </Typography>
            <p className="gj-body-lg mt-6 text-gj-foreground-muted">
              Beyond the ecosystem entry points, the Daily LIVE is where entertainment,
              education and community come together — with room to participate, not just
              watch.
            </p>
          </div>

          <ul className="mt-12 space-y-8 border-t border-gj-border-subtle pt-10">
            {SUPPORTS.map((item) => (
              <li key={item.title} className="max-w-2xl">
                <h3 className="gj-heading-md text-gj-foreground">{item.title}</h3>
                <p className="gj-body mt-2 text-gj-foreground-muted">{item.copy}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href={SITE_LINKS.tiktokProfile} external variant="outline">
              Join the live on TikTok
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
