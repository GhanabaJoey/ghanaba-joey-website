import { SITE_LINKS } from "@/lib/site-links";

export type SiteNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Primary navigation — media ecosystem + contact */
export const HOME_PRIMARY_NAV: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Live", href: "/#live" },
  { label: "Box Games", href: SITE_LINKS.boxGamesAlias },
  { label: "NextWave", href: SITE_LINKS.nextwave, external: true },
  { label: "Work With Me", href: SITE_LINKS.contact },
  { label: "Contact", href: SITE_LINKS.contact },
];

export const HOME_NAV_CTA: SiteNavItem = {
  label: "Work With Me",
  href: SITE_LINKS.contact,
};

/** Full IA for future multi-page shell */
export const FUTURE_PRIMARY_NAV: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Live", href: "/live" },
  { label: "Box Games", href: SITE_LINKS.boxBattles },
  { label: "NextWave", href: SITE_LINKS.nextwave, external: true },
  { label: "Work With Me", href: SITE_LINKS.contact },
  { label: "Contact", href: SITE_LINKS.contact },
];

export const FUTURE_NAV_CTA: SiteNavItem = {
  label: "Work With Me",
  href: SITE_LINKS.contact,
};
