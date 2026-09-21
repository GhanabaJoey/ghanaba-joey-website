import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Section } from "@/components/design-system/sections/Section";
import { Typography } from "@/components/design-system/typography/Typography";
import { RevealOnScroll } from "@/components/home/RevealOnScroll";

/**
 * Portfolio shell — add case studies when documented project data exists.
 * No invented projects or results in Phase 2.
 */
export function SelectedWork() {
  return (
    <Section id="work" spacing="lg" className="scroll-mt-24 gj-bg-graphite">
      <ContentContainer>
        <RevealOnScroll>
          <Typography role="heading-xl" className="text-gj-foreground">
            Selected work
          </Typography>
          <p className="gj-body-lg mt-5 max-w-2xl text-gj-foreground-muted">
            A growing collection of digital projects, websites and experiences. Featured
            case studies will appear here as they are ready to share.
          </p>

          <div className="mt-12 rounded-[var(--gj-radius-xl)] border border-dashed border-gj-border-subtle px-6 py-12 text-center sm:px-10">
            <p className="gj-label text-gj-foreground-subtle">Portfolio</p>
            <p className="gj-body mt-3 text-gj-foreground-muted">
              Project slots: name, category, description, status and CTA — populated in a
              later phase with verified work only.
            </p>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </Section>
  );
}
