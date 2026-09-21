export function CommunityStrip() {
  return (
    <section
      className="home-community-strip relative z-10 px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:pb-14"
      aria-label="Built for creators"
    >
      <div className="mx-auto max-w-7xl lg:max-w-none lg:px-6">
        <div className="home-community-editorial lg:max-w-[36rem] xl:max-w-[40rem]">
          <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-gold uppercase sm:text-xs">
            Built for Creators
          </p>
          <p className="mt-2 text-sm tracking-[0.14em] text-zinc-500 uppercase sm:text-[0.9375rem]">
            Creators · Opportunities · Community
          </p>
        </div>
      </div>
    </section>
  );
}
