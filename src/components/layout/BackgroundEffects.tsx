type BackgroundVariant = "home" | "boxgames";

interface BackgroundEffectsProps {
  variant?: BackgroundVariant;
}

export function BackgroundEffects({ variant = "home" }: BackgroundEffectsProps) {
  const isHome = variant === "home";

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#020202]" />

      {isHome && (
        <>
          <div className="absolute top-0 left-1/2 h-[32rem] w-[36rem] max-w-[95vw] -translate-x-1/2 rounded-full bg-gold/6 blur-[140px] animate-glow-pulse" />
          <div
            className="absolute top-[18%] right-[8%] hidden h-72 w-72 rounded-full bg-purple-glow/8 blur-[110px] animate-glow-pulse lg:block"
            style={{ animationDelay: "1.4s" }}
          />
          <div
            className="absolute bottom-[12%] left-[6%] hidden h-64 w-64 rounded-full bg-gold/5 blur-[100px] animate-glow-pulse lg:block"
            style={{ animationDelay: "0.8s" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]/90" />
        </>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />

      {isHome && (
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.8) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.4) 1px, transparent 1px)",
            backgroundSize: "120px 120px, 160px 160px",
          }}
        />
      )}

      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </div>
  );
}
