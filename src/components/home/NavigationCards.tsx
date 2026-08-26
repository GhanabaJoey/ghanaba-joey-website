import { Crown, Gamepad2, Waves } from "lucide-react";
import type { ReactNode } from "react";
import { PremiumButton } from "@/components/ui/PremiumButton";

type CardVariant = "uk" | "boxgames" | "nextwave";

interface NavCardProps {
  variant: CardVariant;
  badge?: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle?: string;
  subtitleBeforeTitle?: boolean;
  description: ReactNode;
  buttonText: string;
  href: string;
  external?: boolean;
  buttonVariant?: "gold" | "purple" | "outline" | "uk";
  animationDelay?: string;
}

const cardVariants: Record<
  CardVariant,
  {
    wrapper: string;
    glow: string;
    iconBg: string;
    base: string;
  }
> = {
  uk: {
    base: "bg-[#070b14]",
    wrapper:
      "border-blue-500/30 shadow-[0_0_30px_rgba(30,64,175,0.08)] hover:border-blue-400/55 hover:shadow-[0_0_50px_rgba(59,130,246,0.22)]",
    glow: "from-blue-600/20 via-transparent to-red-600/15",
    iconBg:
      "bg-gradient-to-br from-blue-600/30 to-red-600/25 text-blue-200 shadow-[0_0_18px_rgba(59,130,246,0.15)]",
  },
  boxgames: {
    base: "bg-[#0d0618]",
    wrapper:
      "border-purple-500/45 shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:border-pink-500/60 hover:shadow-[0_0_60px_rgba(236,72,153,0.28)] ring-1 ring-pink-500/10",
    glow: "from-purple-600/30 via-fuchsia-500/20 to-pink-500/15",
    iconBg:
      "bg-gradient-to-br from-purple-600/40 to-pink-500/35 text-pink-200 shadow-[0_0_24px_rgba(236,72,153,0.2)]",
  },
  nextwave: {
    base: "bg-[#0a0906]",
    wrapper:
      "border-gold/35 shadow-[0_0_30px_rgba(212,175,55,0.06)] hover:border-gold/55 hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]",
    glow: "from-gold/15 via-purple-glow/10 to-transparent",
    iconBg:
      "bg-gradient-to-br from-gold/30 to-purple-glow/25 text-gold-light shadow-[0_0_18px_rgba(212,175,55,0.12)]",
  },
};

export function NavCard({
  variant,
  badge,
  icon,
  title,
  subtitle,
  subtitleBeforeTitle = false,
  description,
  buttonText,
  href,
  external = false,
  buttonVariant = "gold",
  animationDelay = "0ms",
}: NavCardProps) {
  const styles = cardVariants[variant];

  return (
    <article
      className={`animate-fade-in-up opacity-0-start nav-card group relative flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6 lg:p-6 ${styles.base} ${styles.wrapper}`}
      style={{ animationDelay }}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
        aria-hidden="true"
      />

      {variant === "boxgames" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(236,72,153,0.3) 2px, rgba(236,72,153,0.3) 3px)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex h-full flex-col gap-4">
        {badge && (
          <p className="inline-flex w-fit items-center rounded-full border border-blue-400/40 bg-blue-950/70 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.12em] text-blue-100 uppercase sm:text-xs">
            {badge}
          </p>
        )}

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.iconBg}`}
        >
          {icon}
        </div>

        <div>
          {subtitle && subtitleBeforeTitle && (
            <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-purple-300/90 uppercase">
              {subtitle}
            </p>
          )}
          <h2 className="text-lg font-bold leading-tight tracking-wide text-white uppercase sm:text-xl">
            {title}
          </h2>
          {subtitle && !subtitleBeforeTitle && (
            <p className="mt-1.5 text-xs font-semibold tracking-[0.2em] text-purple-300/80 uppercase">
              {subtitle}
            </p>
          )}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <PremiumButton
          href={href}
          external={external}
          variant={buttonVariant}
          className="nav-card-button mt-auto py-3.5 text-sm"
        >
          {buttonText}
        </PremiumButton>
      </div>
    </article>
  );
}

export function NavigationCards() {
  return (
    <section className="relative z-10 pb-4 lg:pb-5">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
        <NavCard
          variant="uk"
          badge="🇬🇧 For UK Creators Only"
          icon={<Crown className="h-5 w-5" aria-hidden="true" />}
          title="Join the Agency"
          description={
            <>
              Based in the United Kingdom?
              <br />
              Apply directly to join the agency
              <br />
              and start your LIVE journey.
            </>
          }
          buttonText="Apply Now"
          href="https://www.tiktok.com/t/ZSxckUq1U/"
          external
          buttonVariant="uk"
          animationDelay="300ms"
        />

        <NavCard
          variant="boxgames"
          icon={<Gamepad2 className="h-5 w-5" aria-hidden="true" />}
          title="Box Games"
          subtitle="30K • 50K • 100K"
          subtitleBeforeTitle
          description={
            <>
              Choose your target.
              <br />
              Choose your date.
              <br />
              Enter the box.
            </>
          }
          buttonText="Apply for Box Games"
          href="/boxgames"
          buttonVariant="purple"
          animationDelay="400ms"
        />

        <NavCard
          variant="nextwave"
          icon={<Waves className="h-5 w-5" aria-hidden="true" />}
          title={
            <>
              NextWave
              <br />
              Creator Network
            </>
          }
          description="Connect. Create. Grow."
          buttonText="Visit NextWave"
          href="https://nextwavecreatornetwork.com"
          external
          buttonVariant="gold"
          animationDelay="500ms"
        />
      </div>
    </section>
  );
}
