import type { Metadata } from "next";
import { SiteNavFoundation } from "@/components/design-system/navigation/SiteNavFoundation";
import { AdvertiseSection } from "@/components/home/AdvertiseSection";
import { BrandIntro } from "@/components/home/BrandIntro";
import { DailyLive } from "@/components/home/DailyLive";
import { DestinyHelperSection } from "@/components/home/DestinyHelperSection";
import { ExperienceSplit } from "@/components/home/ExperienceSplit";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHero } from "@/components/home/HomeHero";
import { MonthlyBoxGames } from "@/components/home/MonthlyBoxGames";
import { NextWaveSection } from "@/components/home/NextWaveSection";
import { Pillars } from "@/components/home/Pillars";
import { SelectedWork } from "@/components/home/SelectedWork";
import { SocialSection } from "@/components/home/SocialSection";
import { WebsiteDevelopmentSection } from "@/components/home/WebsiteDevelopmentSection";
import { WorkWithMe } from "@/components/home/WorkWithMe";
import { HOME_NAV_CTA, HOME_PRIMARY_NAV } from "@/lib/navigation-config";

export const metadata: Metadata = {
  title: "Ghanaba Joey | Creator • Host • Entrepreneur",
  description:
    "Premium digital headquarters for Ghanaba Joey — TikTok LIVE, creator education, Destiny Helper, Official Monthly Box Games, NextWave Creator Network and digital projects for brands and businesses.",
  openGraph: {
    title: "Ghanaba Joey | Creator • Host • Entrepreneur",
    description:
      "Creating experiences. Educating creators. Building opportunities. LIVE daily, community events, NextWave and digital work.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <SiteNavFoundation items={HOME_PRIMARY_NAV} cta={HOME_NAV_CTA} />
      <main>
        <HomeHero />
        <BrandIntro />
        <Pillars />
        <DailyLive />
        <DestinyHelperSection />
        <MonthlyBoxGames />
        <ExperienceSplit />
        <NextWaveSection />
        <AdvertiseSection />
        <WebsiteDevelopmentSection />
        <SelectedWork />
        <WorkWithMe />
        <SocialSection />
        <FinalCTA />
      </main>
      <HomeFooter />
    </div>
  );
}
