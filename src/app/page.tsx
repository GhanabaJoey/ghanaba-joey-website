import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { Footer } from "@/components/layout/Footer";
import { BrandHeader } from "@/components/home/BrandHeader";
import { Hero } from "@/components/home/Hero";
import { NavigationCards } from "@/components/home/NavigationCards";

export default function HomePage() {
  return (
    <>
      <BackgroundEffects variant="home" />
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-5 lg:max-w-[72rem] lg:px-6">
        <BrandHeader />
        <Hero />
        <NavigationCards />
        <Footer />
      </main>
    </>
  );
}
