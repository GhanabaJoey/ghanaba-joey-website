export function BoxGamesHero() {
  return (
    <section className="relative z-10 mb-6 text-center sm:mb-8">
      <div
        className="pointer-events-none absolute -inset-x-4 -top-6 h-28 bg-gradient-to-b from-gold/10 via-purple-glow/5 to-transparent blur-2xl sm:-inset-x-6"
        aria-hidden="true"
      />

      <h1 className="relative text-[clamp(1.75rem,3.6vw+0.5rem,2.5rem)] font-bold tracking-[0.14em] text-white uppercase">
        <span className="boxgames-title-glow premium-gradient-text">Official Box Games</span>
      </h1>

      <p className="relative mx-auto mt-4 max-w-sm text-[clamp(1rem,2vw+0.5rem,1.25rem)] font-semibold leading-snug text-white sm:max-w-md">
        Have you got what it takes to win?
      </p>

      <p className="relative mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-zinc-400 sm:max-w-md sm:text-base">
        Step into the box, go head-to-head with others, and prove it.
      </p>

      <div
        className="relative mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-gold/55 to-transparent shadow-[0_0_12px_rgba(212,175,55,0.35)] sm:mt-6 sm:w-32"
        aria-hidden="true"
      />
    </section>
  );
}
