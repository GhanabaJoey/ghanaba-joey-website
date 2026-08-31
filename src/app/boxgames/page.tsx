import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { ApplicationForm } from "@/components/boxgames/ApplicationForm";
import { BackLink } from "@/components/boxgames/BackLink";
import { BoxGamesArenaBackground } from "@/components/boxgames/BoxGamesArenaBackground";
import { BoxGamesHero } from "@/components/boxgames/BoxGamesHero";

export const metadata: Metadata = {
  title: "Official Box Games | Ghanaba Joey",
  description:
    "Apply for the Official Ghanaba Joey Box Games. Enter your TikTok username, choose your target, and submit your application.",
};

export default function BoxGamesPage() {
  return (
    <>
      <BoxGamesArenaBackground />
      <main className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">
        <div className="absolute inset-x-0 top-0 z-20 px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="boxgames-center-column">
            <BackLink />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-5 py-20 sm:px-6 sm:py-24">
          <div className="boxgames-center-column relative z-20">
            <BoxGamesHero />
            <ApplicationForm />
          </div>
        </div>

        <div className="relative z-10 mt-auto">
          <Footer />
        </div>
      </main>
    </>
  );
}
