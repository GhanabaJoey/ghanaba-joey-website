"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BrandMark } from "@/components/design-system/brand/BrandMark";
import { Button } from "@/components/design-system/buttons/Button";
import { cn } from "@/lib/cn";
import {
  HOME_NAV_CTA,
  HOME_PRIMARY_NAV,
  type SiteNavItem,
} from "@/lib/navigation-config";

export interface SiteNavFoundationProps {
  /** Override default future IA links (e.g. current production subset) */
  items?: SiteNavItem[];
  cta?: SiteNavItem;
  className?: string;
}

function NavLink({ item, onNavigate }: { item: SiteNavItem; onNavigate?: () => void }) {
  const className =
    "gj-focus-ring gj-body-sm text-gj-foreground-muted transition-colors hover:text-gj-foreground";

  if (item.external) {
    return (
      <a
        href={item.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

/**
 * Future site navigation shell — not mounted on live pages in Phase 1.
 */
export function SiteNavFoundation({
  items = HOME_PRIMARY_NAV,
  cta = HOME_NAV_CTA,
  className,
}: SiteNavFoundationProps) {
  const menuId = useId();
  const openRef = useRef(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    openRef.current = open;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && openRef.current) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "gj-glass-subtle sticky top-0 z-50 border-b border-gj-border-subtle",
        className,
      )}
    >
      <div className="gj-container flex items-center justify-between gap-6 py-4 lg:py-5">
        <BrandMark variant="icon" tone="gold" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {items.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={cta.href} variant="primary" size="sm">
            {cta.label}
          </Button>
        </div>

        <button
          type="button"
          className="gj-focus-ring text-gj-foreground-muted lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id={menuId}
          className="gj-glass fixed inset-0 top-[4.25rem] z-40 flex flex-col border-t border-gj-border-subtle lg:hidden"
          aria-label="Mobile primary"
        >
          <ul className="gj-container flex flex-1 flex-col gap-1 py-8">
            {items.map((item) => (
              <li key={item.label}>
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    className="gj-focus-ring block py-3 text-lg text-gj-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="gj-focus-ring block py-3 text-lg text-gj-foreground"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-6">
              <Link
                href={cta.href}
                onClick={close}
                className={cn(
                  "gj-focus-ring gj-button-text flex min-h-12 w-full items-center justify-center rounded-[var(--gj-radius-md)]",
                  "border border-[color-mix(in_srgb,var(--gj-gold)_40%,transparent)] bg-gj-gold text-gj-obsidian",
                )}
              >
                {cta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
