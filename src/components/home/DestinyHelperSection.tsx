import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { FullBleedSection } from "@/components/design-system/sections/FullBleedSection";
import { SectionEyebrow } from "@/components/design-system/sections/SectionEyebrow";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const IDEAS = [
  {
    title: "Compete",
    copy: "Join the LIVE competition.",
  },
  {
    title: "Connect",
    copy: "Meet creators, supporters and new people.",
  },
  {
    title: "Get blessed",
    copy: "Top performers can receive rewards; the wider community creates opportunities and connections.",
  },
] as const;

export function DestinyHelperSection() {
  return (
    <FullBleedSection background="cinematic" className="home-destiny-band">
      <section id="destiny-helper" className="gj-section-lg scroll-mt-24">
        <ContentContainer>
          <RevealOnScroll>
            <div className="relative max-w-4xl">
              <SectionEyebrow>Part of the daily Ghanaba Joey LIVE</SectionEyebrow>
              <Typography role="display-lg" className="mt-6 text-gj-foreground">
                Destiny Helper
              </Typography>
              <p className="gj-heading-xl mt-8 text-gj-gold">Compete. Connect. Get blessed.</p>
              <p className="gj-body-lg mt-6 max-w-2xl text-gj-foreground-muted">
                Every day at 2PM UK, Destiny Helper brings the community together through
                LIVE box competition, interaction and connection. Participants can compete
                for top position, meet new people and become part of a growing community.
                Top performers receive rewards after the game where applicable.
              </p>

              <ul className="mt-12 grid gap-8 sm:grid-cols-3">
                {IDEAS.map((item) => (
                  <li key={item.title}>
                    <p className="gj-label text-gj-gold">{item.title}</p>
                    <p className="gj-body-sm mt-2 text-gj-foreground-muted">{item.copy}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Button href={SITE_LINKS.tiktokProfile} external variant="primary">
                  Join Destiny Helper
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </ContentContainer>
      </section>
    </FullBleedSection>
  );
}
