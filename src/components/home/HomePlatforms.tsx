import Link from "next/link";
import { OFFICIAL_MONTHLY_BOX_GAMES_NAME } from "@/lib/box-games/application-rules";
import { SITE_LINKS } from "@/lib/site-links";

const TARGETS = [
  { value: "30K", date: "20 September", soon: false },
  { value: "50K", date: "27 September", soon: false },
  { value: "100K", date: "Coming Soon", soon: true },
] as const;

export function HomePlatforms() {
  return (
    <div id="platforms" className="brand-platforms scroll-mt-20">
      <section id="nextwave" className="brand-platform brand-platform--nextwave">
        <div className="brand-platform__ambient" aria-hidden="true" />
        <div className="brand-shell brand-platform__inner">
          <p className="brand-platform__index">01</p>
          <h2 className="brand-platform__title mt-6 text-white uppercase">
            NextWave Creator Network
          </h2>
          <p className="brand-platform__copy mt-5 max-w-xl">
            A creator network built around community, opportunities and growth.
          </p>

          <a
            href={SITE_LINKS.nextwave}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-cta mt-10 inline-flex"
          >
            Visit NextWave
          </a>

          <p className="brand-platform__secondary mt-8 text-sm text-zinc-500">
            UK Creator?{" "}
            <Link
              href={SITE_LINKS.ukCreatorApply}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 transition-colors hover:text-gold"
            >
              Apply directly to join NextWave →
            </Link>
          </p>
        </div>
      </section>

      <section id="box-battles" className="brand-platform brand-platform--battles">
        <div className="brand-platform__ambient" aria-hidden="true" />
        <div className="brand-shell brand-platform__inner">
          <p className="brand-platform__index">02</p>
          <h2 className="brand-platform__title mt-6 uppercase text-white">
            {OFFICIAL_MONTHLY_BOX_GAMES_NAME}
          </h2>
          <p className="brand-platform__copy mt-5 max-w-xl">
            Go head-to-head, test yourself and chase the next target.
          </p>

          <div className="brand-targets mt-10" role="list">
            {TARGETS.map((target) => (
              <div
                key={target.value}
                role="listitem"
                className={`brand-targets__item ${
                  target.soon ? "brand-targets__item--soon" : ""
                }`}
              >
                <span className="brand-targets__value">{target.value}</span>
                <span className="brand-targets__date">{target.date}</span>
              </div>
            ))}
          </div>

          <Link href={SITE_LINKS.boxBattles} className="brand-cta brand-cta--outline mt-10 inline-flex">
            Enter the Battle
          </Link>
        </div>
      </section>
    </div>
  );
}
