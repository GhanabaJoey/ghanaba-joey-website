import { Button } from "@/components/design-system/buttons/Button";
import { AmbientBackground } from "@/components/design-system/backgrounds/AmbientBackground";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";
import { SITE_LINKS } from "@/lib/site-links";

const WORDS = ["Create", "Connect", "Build", "Grow"] as const;

export function FinalCTA() {
  return (
    <section className="home-final-cta relative scroll-mt-24 border-t border-gj-border-subtle">
      <AmbientBackground variant="gold" noise className="opacity-80" />
      <ContentContainer>
        <RevealOnScroll>
          <div className="home-final-cta__words text-gj-foreground">
            {WORDS.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <p className="gj-body-lg mx-auto mt-8 max-w-lg text-gj-foreground-muted">
            Welcome to the world of Ghanaba Joey.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={SITE_LINKS.tiktokProfile} external variant="primary">
              Follow the journey
            </Button>
            <Button href="/#work-with-me" variant="outline">
              Work with me
            </Button>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </section>
  );
}
