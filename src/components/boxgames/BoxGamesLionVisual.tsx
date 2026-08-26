import Image from "next/image";

const LION_LEFT = "/images/box-games/lion-closeup.jpg";
const LION_RIGHT = "/images/box-games/lion-black.jpg";

export function BoxGamesLionVisual() {
  return (
    <div
      className="boxgames-lion-atmosphere pointer-events-none absolute inset-0 z-[1] hidden md:block"
      aria-hidden="true"
    >
      {/* Left guardian — purple / magenta */}
      <div className="boxgames-lion-left">
        <div className="relative h-full w-full">
          <Image
            src={LION_LEFT}
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 45vw, 560px"
            className="boxgames-lion-photo-left object-cover object-[72%_22%]"
          />
          <div className="absolute inset-0 bg-purple-950/15 mix-blend-color" />
          <div className="absolute inset-0 bg-fuchsia-700/10 mix-blend-soft-light" />
          <div className="absolute right-[18%] top-[30%] h-36 w-36 rounded-full bg-fuchsia-600/28 blur-[56px]" />
          <div className="absolute right-[28%] top-[38%] h-24 w-24 rounded-full bg-purple-glow/22 blur-[40px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303]/50" />
        </div>
      </div>

      {/* Right guardian — gold / orange (flipped to look inward) */}
      <div className="boxgames-lion-right">
        <div className="relative h-full w-full">
          <Image
            src={LION_RIGHT}
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 45vw, 560px"
            className="boxgames-lion-photo-right -scale-x-100 object-cover object-[72%_28%]"
          />
          <div className="absolute inset-0 bg-amber-950/12 mix-blend-color" />
          <div className="absolute inset-0 bg-orange-800/8 mix-blend-soft-light" />
          <div className="absolute left-[18%] top-[32%] h-36 w-36 rounded-full bg-amber-500/26 blur-[56px]" />
          <div className="absolute left-[28%] top-[40%] h-24 w-24 rounded-full bg-orange-600/20 blur-[40px]" />
          <div className="absolute left-[32%] top-[36%] h-14 w-14 rounded-full bg-gold/22 blur-[24px]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#030303]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303]/50" />
        </div>
      </div>
    </div>
  );
}
