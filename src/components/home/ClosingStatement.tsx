import Image from "next/image";
import { Crown } from "lucide-react";
import { LION_HERO_SRC } from "@/lib/site-links";

export function ClosingStatement() {
  return (
    <section className="home-closing relative z-10 overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={LION_HERO_SRC}
          alt=""
          fill
          sizes="100vw"
          className="home-closing-lion object-cover object-[60%_30%] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] font-semibold tracking-[0.32em] text-gold/80 uppercase sm:text-xs">
          A Bigger Tomorrow
        </p>

        <h2 className="mt-5 text-[clamp(2rem,4.5vw+0.5rem,3.25rem)] font-bold leading-tight tracking-tight text-white uppercase">
          Creators Change Lives
        </h2>

        <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          When creators win, communities win.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Crown className="h-5 w-5 text-gold/70" aria-hidden="true" />
          <p className="font-bold tracking-[0.28em] text-gold text-sm uppercase sm:text-base">
            Ghanaba Joey
          </p>
        </div>
      </div>
    </section>
  );
}
