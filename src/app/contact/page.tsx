import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNavFoundation } from "@/components/design-system/navigation/SiteNavFoundation";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { Typography } from "@/components/design-system/typography/Typography";
import { resolveEnquiryTypeFromSlug } from "@/lib/contact/enquiry-rules";
import { HOME_NAV_CTA, HOME_PRIMARY_NAV } from "@/lib/navigation-config";

export const metadata: Metadata = {
  title: "Contact | Ghanaba Joey",
  description:
    "Get in touch with Ghanaba Joey about brand partnerships, sponsored content, LIVE activations, events, hosting and creator collaborations.",
};

type ContactPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultEnquiryType = resolveEnquiryTypeFromSlug(params.type);

  return (
    <div className="home-page min-h-screen">
      <SiteNavFoundation items={HOME_PRIMARY_NAV} cta={HOME_NAV_CTA} />
      <main className="gj-section-lg">
        <ContentContainer width="narrow">
          <Link
            href="/"
            className="gj-focus-ring mb-10 inline-flex items-center gap-2 text-sm text-gj-foreground-muted transition-colors hover:text-gj-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>

          <Typography role="display-md" className="text-gj-foreground">
            Work with me
          </Typography>
          <p className="gj-body-lg mt-5 text-gj-foreground-muted">
            For brands, businesses, creators and organisations looking to collaborate
            across content, LIVE, events, campaigns and experiences.
          </p>

          <div className="mt-10">
            <ContactEnquiryForm defaultEnquiryType={defaultEnquiryType} />
          </div>
        </ContentContainer>
      </main>
    </div>
  );
}
