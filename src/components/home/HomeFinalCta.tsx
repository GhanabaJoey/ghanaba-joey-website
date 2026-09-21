import { PremiumButton } from "@/components/ui/PremiumButton";
import { SITE_LINKS } from "@/lib/site-links";

export function HomeFinalCta() {
  return (
    <section className="border-b border-white/8">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
          Ready to grow with a creator community built for LIVE?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
          Join NextWave, apply for Official Box Battles, or connect on TikTok.
        </p>

        <div className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <PremiumButton
            href={SITE_LINKS.nextwave}
            external
            variant="gold"
            showArrow
            className="shadow-none hover:shadow-none sm:flex-1"
          >
            Join NextWave
          </PremiumButton>
          <PremiumButton
            href={SITE_LINKS.boxBattles}
            variant="outline"
            showArrow
            className="shadow-none hover:shadow-none sm:flex-1"
          >
            Enter the Battle
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
