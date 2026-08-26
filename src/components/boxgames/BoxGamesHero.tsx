export function BoxGamesHero() {
  return (
    <section className="relative z-10 mb-6 text-center sm:mb-8">
      <div
        className="pointer-events-none absolute -inset-x-4 -top-6 h-28 bg-gradient-to-b from-gold/10 via-purple-glow/5 to-transparent blur-2xl sm:-inset-x-6"
        aria-hidden="true"
      />

      <p className="relative text-[0.65rem] font-semibold tracking-[0.42em] text-gold/85 uppercase sm:text-xs">
        Ghanaba Joey
      </p>

      <h1 className="relative mt-2.5 text-[clamp(1.875rem,3.8vw+0.5rem,2.625rem)] font-bold tracking-tight">
        <span className="boxgames-title-glow premium-gradient-text">Box Games</span>
      </h1>

      <p className="relative mt-2 text-xs font-semibold tracking-[0.34em] text-fuchsia-300/90 uppercase sm:text-sm">
        30K • 50K • 100K
      </p>

      <div
        className="relative mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-gold/55 to-transparent shadow-[0_0_12px_rgba(212,175,55,0.35)] sm:mt-6 sm:w-32"
        aria-hidden="true"
      />
    </section>
  );
}
