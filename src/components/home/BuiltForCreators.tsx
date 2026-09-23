import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

const IDEAS = [
  {
    title: "Connect",
    copy: "Meet other creators and become part of a community.",
  },
  {
    title: "Compete",
    copy: "Take part in LIVE experiences and creator events.",
  },
  {
    title: "Grow",
    copy: "Learn, develop and build your presence.",
  },
  {
    title: "Create opportunities",
    copy: "Turn connections and creativity into new possibilities.",
  },
] as const;

export function BuiltForCreators() {
  return (
    <Section id="creators" spacing="lg" className="scroll-mt-24">
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="display-md" className="max-w-4xl text-gj-foreground">
            Built for creators.
            <span className="mt-2 block text-gj-gold">Open to opportunities.</span>
          </Typography>
          <p className="gj-body-lg mt-8 max-w-2xl text-gj-foreground-muted">
            The goal isn&apos;t just to create an audience. It&apos;s to create an
            ecosystem where creators can:
          </p>

          <div className="home-pillars mt-14">
            {IDEAS.map((idea, index) => (
              <div key={idea.title} className="border-t border-gj-border-subtle pt-8">
                <p className="home-pillar__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="gj-heading-md mt-4 text-gj-foreground">{idea.title}</h3>
                <p className="gj-body mt-3 text-gj-foreground-muted">{idea.copy}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
