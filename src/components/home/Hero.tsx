export function Hero() {
  return (
    <section className="relative z-10 pb-3 pt-4 text-center sm:pb-4 sm:pt-5 lg:pt-6">
      <div className="mx-auto max-w-2xl">
        <h1
          className="animate-fade-in-up opacity-0-start animation-delay-100 font-bold leading-[1.12] tracking-tight text-[clamp(1.75rem,3.2vw+0.75rem,3rem)]"
        >
          <span className="text-white">One Place.</span>{" "}
          <span className="premium-gradient-text">Three Paths.</span>
        </h1>

        <p className="animate-fade-in-up opacity-0-start animation-delay-200 mx-auto mt-3 max-w-lg text-[clamp(0.875rem,1vw+0.5rem,1.0625rem)] leading-relaxed text-zinc-400 sm:mt-4">
          Your gateway to the agency, Box Games and
          <br />
          NextWave Creator Network.
        </p>
      </div>
    </section>
  );
}
