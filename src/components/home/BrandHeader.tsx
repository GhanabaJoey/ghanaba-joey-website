import { Crown } from "lucide-react";
import { ProfileAvatar } from "@/components/home/ProfileAvatar";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function BrandHeader() {
  return (
    <header className="animate-fade-in-up opacity-0-start relative z-10 pt-5 lg:pt-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <Crown
          className="h-4 w-4 text-gold/80 sm:h-5 sm:w-5"
          aria-hidden="true"
        />

        <div className="mt-3 flex w-full items-center gap-3 sm:gap-4 lg:mt-4">
          <GoldDivider />
          <ProfileAvatar />
          <p className="shrink-0 font-bold tracking-[0.28em] text-gold text-[clamp(0.8125rem,1.2vw+0.4rem,1.375rem)] sm:tracking-[0.32em]">
            GHANABA JOEY
          </p>
          <GoldDivider />
        </div>
      </div>
    </header>
  );
}
