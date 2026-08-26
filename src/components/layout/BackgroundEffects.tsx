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
          {/* Header & hero — soft gold ambient */}
          <div className="absolute top-0 left-1/2 h-64 w-[28rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-gold/7 blur-[120px] animate-glow-pulse" />
          <div
            className="absolute top-[3%] left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-gold/10 blur-[70px] animate-glow-pulse"
            style={{ animationDelay: "0.6s" }}
          />

          {/* Profile / brand area — warm gold halo */}
          <div className="absolute top-[5%] left-1/2 h-28 w-44 -translate-x-1/2 rounded-full bg-gold/12 blur-[50px]" />

          {/* UK Creators card — deep blue/red glow (left) */}
          <div
            className="absolute top-[48%] left-[10%] h-56 w-56 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[90px] animate-glow-pulse lg:left-[14%]"
            style={{ animationDelay: "1.2s" }}
          />
          <div className="absolute top-[50%] left-[8%] h-40 w-40 -translate-y-1/2 rounded-full bg-red-900/8 blur-[70px] lg:left-[12%]" />

          {/* Box Games card — purple/pink glow (centre) */}
          <div
            className="absolute top-[48%] left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-glow/14 blur-[100px] animate-glow-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <div className="absolute top-[50%] left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-glow/10 blur-[80px]" />

          {/* NextWave card — soft gold glow (right) */}
          <div
            className="absolute top-[48%] right-[10%] h-56 w-56 -translate-y-1/2 rounded-full bg-gold/9 blur-[90px] animate-glow-pulse lg:right-[14%]"
            style={{ animationDelay: "1.8s" }}
          />
          <div className="absolute top-[50%] right-[8%] h-40 w-40 -translate-y-1/2 rounded-full bg-purple-glow/6 blur-[70px] lg:right-[12%]" />

          {/* Soft edge vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]/80" />
        </>
      )}

      {/* Shared subtle overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />

      {isHome && (
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.8) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(236,72,153,0.5) 1px, transparent 1px)",
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
