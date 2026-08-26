import Image from "next/image";

const PORTRAIT_SRC = "/images/ghanaba-joey-portrait.jpg";

export function ProfileAvatar() {
  return (
    <div className="relative shrink-0">
      <div
        className="pointer-events-none absolute -inset-1.5 rounded-full bg-gold/20 blur-md animate-glow-pulse"
        aria-hidden="true"
      />
      <div className="relative size-[52px] overflow-hidden rounded-full border border-gold/80 shadow-[0_0_16px_rgba(212,175,55,0.28)] sm:size-[58px] lg:size-[64px]">
        <Image
          src={PORTRAIT_SRC}
          alt="Ghanaba Joey"
          fill
          priority
          sizes="(max-width: 1024px) 58px, 64px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
