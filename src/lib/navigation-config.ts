import { SITE_LINKS } from "@/lib/site-links";

export type SiteNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Homepage navigation — anchors until dedicated routes ship in Phase 3+. */
export const HOME_PRIMARY_NAV: SiteNavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Live", href: "/#live" },
  { label: "Box Games", href: SITE_LINKS.boxGamesAlias },
  { label: "NextWave", href: SITE_LINKS.nextwave, external: true },
  { label: "Work With Me", href: "/#work-with-me" },
  { label: "Contact", href: SITE_LINKS.tiktokProfile, external: true },
];

export const HOME_NAV_CTA: SiteNavItem = {
  label: "Work With Me",
  href: "/#work-with-me",
};

/** Full IA for future multi-page shell */
export const FUTURE_PRIMARY_NAV: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Live", href: "/live" },
  { label: "Box Games", href: SITE_LINKS.boxBattles },
  { label: "NextWave", href: SITE_LINKS.nextwave, external: true },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Contact", href: "/contact" },
];

export const FUTURE_NAV_CTA: SiteNavItem = {
  label: "Work With Me",
  href: "/work-with-me",
};
