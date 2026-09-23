import { Button } from "@/components/design-system/buttons/Button";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { EditorialSplit } from "@/components/design-system/sections/EditorialSplit";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

export function MeetGhanabaJoey() {
  return (
    <Section id="meet" spacing="lg" className="scroll-mt-24 border-t border-gj-border-subtle">
      <ContentContainer>
        <RevealOnScroll>
          <EditorialSplit
            gap="lg"
            primary={
              <div>
                <Typography role="display-md" className="text-gj-foreground">
                  Meet Ghanaba Joey
                </Typography>
                <p className="gj-label mt-4 text-gj-gold">Creator. Host. Entrepreneur.</p>
              </div>
            }
            secondary={
              <div className="space-y-6 gj-body-lg text-gj-foreground-muted lg:pt-2">
                <p>
                  Creating experiences that bring people together — and turning creativity
                  into opportunity through LIVE entertainment and the creator ecosystem.
                </p>
                <Button href="/#about" variant="text" showArrow>
                  More about me
                </Button>
              </div>
            }
          />
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
