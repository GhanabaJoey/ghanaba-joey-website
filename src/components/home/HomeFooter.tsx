import Link from "next/link";
import { Divider } from "@/components/design-system/details/Divider";
import { ContentContainer } from "@/components/design-system/layout/ContentContainer";
import { HOME_PRIMARY_NAV } from "@/lib/navigation-config";
import { SITE_LINKS } from "@/lib/site-links";

export function HomeFooter() {
  const footerNav = HOME_PRIMARY_NAV.filter((item) => item.label !== "Home");

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-gj-border-subtle py-14 sm:py-16">
      <ContentContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="gj-label text-gj-gold">Ghanaba Joey</p>
            <p className="gj-body-sm mt-4 text-gj-foreground-muted">
              Creating experiences.
              <br />
              Building community.
              <br />
              Creating opportunities.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {footerNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gj-focus-ring gj-body-sm text-gj-foreground-muted hover:text-gj-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="gj-focus-ring gj-body-sm text-gj-foreground-muted hover:text-gj-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <Divider variant="gradient" className="my-10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={SITE_LINKS.tiktokProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="gj-focus-ring gj-caption hover:text-gj-gold"
            >
              TikTok
            </a>
            <a
              href={SITE_LINKS.tiktokProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="gj-focus-ring gj-caption hover:text-gj-gold"
            >
              Contact
            </a>
          </div>
          <p className="gj-caption">© 2026 Ghanaba Joey</p>
        </div>
      </ContentContainer>
    </footer>
  );
}
