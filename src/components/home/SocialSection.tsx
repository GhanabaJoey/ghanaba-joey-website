import { ArrowLink } from "@/components/design-system/details/ArrowLink";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

export function SocialSection() {
  return (
    <Section id="follow" spacing="default" className="scroll-mt-24">
      <ContentContainer width="narrow">
        <RevealOnScroll>
          <Typography role="heading-lg" className="text-center text-gj-foreground">
            Follow the journey
          </Typography>
          <ul className="mt-8 flex flex-col items-center gap-4">
            <li>
              <ArrowLink href={SITE_LINKS.tiktokProfile} external>
                TikTok
              </ArrowLink>
            </li>
            <li>
              <ArrowLink href={SITE_LINKS.nextwave} external>
                NextWave Creator Network
              </ArrowLink>
            </li>
          </ul>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
