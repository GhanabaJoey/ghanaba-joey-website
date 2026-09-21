import Image from "next/image";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/PremiumButton";
import {
  LION_BATTLES_SRC,
  NEXTWAVE_AMBIENT_SRC,
  SITE_LINKS,
} from "@/lib/site-links";

const BOX_BATTLE_TARGETS = [
  { value: "30K", date: "20 SEPTEMBER", available: true },
  { value: "50K", date: "27 SEPTEMBER", available: true },
  { value: "100K", date: "COMING SOON", available: false },
] as const;

export function PlatformsSection() {
  return (
    <section
      id="platforms"
      className="home-platforms relative z-10 scroll-mt-24"
    >
      <div className="flex flex-col">
        <article className="home-experience home-experience--nextwave relative overflow-hidden">
          <div className="home-experience__scene" aria-hidden="true">
            <Image
              src={NEXTWAVE_AMBIENT_SRC}
              alt=""
              fill
              sizes="100vw"
              className="home-experience__photo home-experience__photo--nextwave object-cover object-center"
            />
            <div className="home-experience__scene-overlay home-experience__scene-overlay--nextwave" />
          </div>

          <div className="home-experience__content">
            <h3 className="home-experience__title text-white uppercase">
              <span className="block">NextWave</span>
              <span className="mt-2 block text-zinc-300">Creator Network</span>
            </h3>

            <p className="home-experience__copy mt-5 max-w-md text-zinc-400">
              A network built to help creators connect, grow and find real
              opportunities.
            </p>

            <PremiumButton
              href={SITE_LINKS.nextwave}
              external
              variant="gold"
              showArrow
              className="mt-8 max-w-xs py-3.5 text-sm tracking-[0.1em]"
            >
              Visit NextWave
            </PremiumButton>

            <div className="home-experience__secondary mt-8 max-w-md">
              <p className="text-xs font-semibold tracking-[0.14em] text-zinc-300 uppercase">
                UK Creator?
              </p>
              <Link
                href={SITE_LINKS.ukCreatorApply}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-zinc-500 transition-colors hover:text-gold"
              >
                Apply directly to join NextWave →
              </Link>
            </div>
          </div>
        </article>

        <article className="home-experience home-experience--battles relative overflow-hidden">
          <div className="home-experience__scene" aria-hidden="true">
            <Image
              src={LION_BATTLES_SRC}
              alt=""
              fill
              sizes="100vw"
              className="home-experience__photo home-experience__photo--battles object-cover object-[55%_22%]"
            />
            <div className="home-experience__scene-overlay home-experience__scene-overlay--battles" />
          </div>

          <div className="home-experience__content">
            <h3 className="home-experience__title uppercase">
              <span className="block text-white">Official</span>
              <span className="mt-2 block text-gold">Box Battles</span>
            </h3>

            <p className="home-experience__copy mt-5 max-w-md text-zinc-400">
              Step into the box. Go head-to-head. Prove what you&apos;re capable
              of.
            </p>

            <ul className="home-battle-schedule mt-8 max-w-lg">
              {BOX_BATTLE_TARGETS.map((target) => (
                <li
                  key={target.value}
                  className={
                    target.available
                      ? "home-battle-schedule__item"
                      : "home-battle-schedule__item home-battle-schedule__item--soon"
                  }
                >
                  <span className="home-battle-schedule__target">{target.value}</span>
                  <span className="home-battle-schedule__sep" aria-hidden="true">
                    —
                  </span>
                  <span className="home-battle-schedule__date">{target.date}</span>
                </li>
              ))}
            </ul>

            <PremiumButton
              href={SITE_LINKS.boxBattles}
              variant="gold"
              showArrow
              className="mt-8 max-w-xs py-3.5 text-sm tracking-[0.1em]"
            >
              Enter the Battle
            </PremiumButton>
          </div>
        </article>
      </div>
    </section>
  );
}
