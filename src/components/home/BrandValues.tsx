import { Handshake, Heart, Shield, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const VALUES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Users,
    title: "Creators First",
    description: "Built around creators and their growth.",
  },
  {
    icon: Heart,
    title: "Real Community",
    description: "Connection, support and collaboration.",
  },
  {
    icon: Handshake,
    title: "Grow Together",
    description: "Creating opportunities for creators to move forward together.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "A professional and respectful environment.",
  },
];

export function BrandValues() {
  return (
    <section id="about" className="home-values relative z-10 scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {VALUES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="home-value-item rounded-2xl border border-white/6 bg-white/[0.02] p-6 text-center sm:text-left"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold sm:mx-0">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-sm font-bold tracking-[0.14em] text-white uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
