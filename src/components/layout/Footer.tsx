import { GoldDivider } from "@/components/ui/GoldDivider";

export function Footer() {
  return (
    <footer className="relative z-10 py-4 text-center lg:py-5">
      <div className="mx-auto flex max-w-md items-center gap-4">
        <GoldDivider />
        <p className="shrink-0 text-[0.65rem] font-semibold tracking-[0.28em] text-gold/80 uppercase sm:text-xs">
          Live • Create • Connect
        </p>
        <GoldDivider />
      </div>
      <p className="mt-3 text-[0.65rem] text-zinc-600 sm:text-xs">
        © 2026 Ghanaba Joey. All rights reserved.
      </p>
    </footer>
  );
}
