"use client";

import { Crown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SITE_LINKS } from "@/lib/site-links";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "NextWave", href: SITE_LINKS.nextwave, external: true },
  { label: "Monthly Box Games", href: SITE_LINKS.boxBattles },
  { label: "About", href: "/#about" },
  { label: "Contact", href: SITE_LINKS.tiktokProfile, external: true },
] as const;

export function HomeNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="brand-nav">
      <div className="brand-shell flex items-center justify-between gap-6 py-5 lg:py-6">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Crown className="h-4 w-4 text-gold/80" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase sm:text-sm">
            Ghanaba Joey
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-nav__link"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="brand-nav__link">
                {link.label}
              </Link>
            ),
          )}
          <a
            href={SITE_LINKS.nextwave}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-[0.16em] text-gold uppercase transition-opacity hover:opacity-75"
          >
            Join NextWave
          </a>
        </nav>

        <button
          type="button"
          className="text-zinc-400 lg:hidden"
          aria-expanded={open}
          aria-controls="brand-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="brand-mobile-nav"
          className="border-t border-white/8 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="brand-shell space-y-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-sm text-zinc-300"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-sm text-zinc-300"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href={SITE_LINKS.nextwave}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-sm font-semibold tracking-wide text-gold"
                onClick={() => setOpen(false)}
              >
                Join NextWave
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
