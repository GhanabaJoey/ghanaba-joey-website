import type { Metadata } from "next";
import { SiteNavFoundation } from "@/components/design-system/navigation/SiteNavFoundation";
import { BrandIntro } from "@/components/home/BrandIntro";
import { BrandsTogetherSection } from "@/components/home/BrandsTogetherSection";
import { BuiltForCreators } from "@/components/home/BuiltForCreators";
import { DailyLive } from "@/components/home/DailyLive";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeHero } from "@/components/home/HomeHero";
import { MeetGhanabaJoey } from "@/components/home/MeetGhanabaJoey";
import { NextWaveSection } from "@/components/home/NextWaveSection";
import { WebsiteDevelopmentSection } from "@/components/home/WebsiteDevelopmentSection";
import { WhereDoYouFitIn } from "@/components/home/WhereDoYouFitIn";
import { WorkWithMe } from "@/components/home/WorkWithMe";
import { HOME_NAV_CTA, HOME_PRIMARY_NAV } from "@/lib/navigation-config";

export const metadata: Metadata = {
  title: "Ghanaba Joey | Creator • Host • Entrepreneur",
  description:
    "Creating experiences. Building community. Creating opportunities. A creator ecosystem — Daily LIVE, Destiny Helper, Box Games, NextWave and partnerships for brands and businesses.",
  openGraph: {
    title: "Ghanaba Joey | Creator • Host • Entrepreneur",
    description:
      "More than content — an ecosystem for creators, LIVE entertainment, community and opportunities.",
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
        <EcosystemSection />
        <BuiltForCreators />
        <DailyLive />
        <NextWaveSection />
        <BrandsTogetherSection />
        <WebsiteDevelopmentSection />
        <MeetGhanabaJoey />
        <WhereDoYouFitIn />
        <WorkWithMe />
        <FinalCTA />
      </main>
      <HomeFooter />
    </div>
  );
}
