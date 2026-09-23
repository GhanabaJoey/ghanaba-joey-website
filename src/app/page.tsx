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
import { WhereDoYouFitIn } from "@/components/home/WhereDoYouFitIn";
import { WorkWithMe } from "@/components/home/WorkWithMe";
import { HOME_NAV_CTA, HOME_PRIMARY_NAV } from "@/lib/navigation-config";

export const metadata: Metadata = {
  title: "Ghanaba Joey | Creator • Host • Entrepreneur",
  description:
    "Creator • Host • Entrepreneur building experiences, community and opportunities through content, LIVE entertainment, creator experiences and brand collaborations.",
  openGraph: {
    title: "Ghanaba Joey | Creator • Host • Entrepreneur",
    description:
      "Creating experiences. Building community. Creating opportunities — media, LIVE, creator ecosystem and brand collaborations.",
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
        <BrandsTogetherSection />
        <MeetGhanabaJoey />
        <WhereDoYouFitIn />
        <WorkWithMe />
        <FinalCTA />
      </main>
      <HomeFooter />
    </div>
  );
}
