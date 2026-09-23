import { Button } from "@/components/design-system/buttons/Button";
import { AmbientBackground } from "@/components/design-system/backgrounds/AmbientBackground";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

export function FinalCTA() {
  return (
    <section className="home-final-cta relative scroll-mt-24 border-t border-gj-border-subtle">
      <AmbientBackground variant="gold" noise className="opacity-80" />
      <ContentContainer>
        <RevealOnScroll>
          <p className="gj-display-md text-center text-gj-foreground">
            Creating experiences.
            <span className="mt-2 block text-gj-gold">Building community. Creating opportunities.</span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={SITE_LINKS.tiktokProfile} external variant="primary">
              Follow the journey
            </Button>
            <Button href={SITE_LINKS.contact} variant="outline">
              Start a conversation
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </section>
  );
}
