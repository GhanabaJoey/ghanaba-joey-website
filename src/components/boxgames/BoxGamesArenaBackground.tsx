import { BoxGamesGiftDecorations } from "@/components/boxgames/BoxGamesGiftDecorations";
import { BoxGamesLionVisual } from "@/components/boxgames/BoxGamesLionVisual";

const FLOATING_PARTICLES = [
  { top: "18%", left: "12%", size: 6, delay: "0s", color: "rgba(236,72,153,0.7)" },
  { top: "32%", left: "8%", size: 5, delay: "1.1s", color: "rgba(139,92,246,0.65)" },
  { top: "48%", left: "6%", size: 4, delay: "2.3s", color: "rgba(167,85,247,0.6)" },
  { top: "62%", left: "10%", size: 5, delay: "0.8s", color: "rgba(249,115,22,0.55)" },
  { top: "24%", right: "10%", size: 4, delay: "1.7s", color: "rgba(212,175,55,0.6)" },
  { top: "40%", right: "7%", size: 5, delay: "2.9s", color: "rgba(249,115,22,0.55)" },
  { top: "70%", right: "12%", size: 4, delay: "3.4s", color: "rgba(212,175,55,0.55)" },
  { top: "55%", right: "5%", size: 3, delay: "4s", color: "rgba(236,72,153,0.45)" },
  { top: "78%", right: "18%", size: 3, delay: "1.4s", color: "rgba(139,92,246,0.45)" },
  { top: "12%", right: "14%", size: 4, delay: "2.1s", color: "rgba(251,191,36,0.5)" },
] as const;

export function BoxGamesArenaBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#030303]" />

      <BoxGamesLionVisual />
      <BoxGamesGiftDecorations />

      {/* Cinematic centre spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_38%_at_50%_47%,rgba(139,92,246,0.18)_0%,rgba(236,72,153,0.09)_30%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_28%_30%_at_50%_46%,rgba(212,175,55,0.07)_0%,transparent_62%)]" />

      {/* Form readability shield — centre only, does not cover lion faces */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_26%_36%_at_50%_48%,rgba(3,3,3,0.62)_0%,rgba(3,3,3,0.22)_52%,transparent_72%)]" />

      {/* Gold highlight — title area */}
      <div className="absolute left-1/2 top-[10%] h-40 w-96 -translate-x-1/2 rounded-full bg-gold/12 blur-[80px] animate-glow-pulse" />

      {/* Side ambient glows — reinforce lion lighting */}
      <div className="absolute -left-12 top-[22%] hidden h-72 w-72 rounded-full bg-purple-glow/20 blur-[100px] animate-glow-pulse md:block" />
      <div
        className="absolute -right-12 top-[20%] hidden h-72 w-72 rounded-full bg-amber-600/16 blur-[100px] animate-glow-pulse md:block"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute bottom-[10%] -right-10 h-52 w-52 rounded-full bg-orange-600/12 blur-[85px] animate-glow-pulse hidden lg:block"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-[14%] -left-10 h-48 w-48 rounded-full bg-fuchsia-600/14 blur-[80px] animate-glow-pulse hidden lg:block"
        style={{ animationDelay: "2.4s" }}
      />

      {/* Side colour washes */}
      <div className="absolute left-0 top-[18%] hidden h-[64%] w-[38%] bg-[radial-gradient(ellipse_at_25%_50%,rgba(139,92,246,0.14)_0%,transparent_72%)] md:block" />
      <div className="absolute right-0 top-[18%] hidden h-[64%] w-[38%] bg-[radial-gradient(ellipse_at_75%_50%,rgba(212,175,55,0.12)_0%,transparent_72%)] md:block" />

      {/* Floating glowing particles */}
      {FLOATING_PARTICLES.map((particle, i) => (
        <span
          key={`float-${i}`}
          className="boxgames-float-particle pointer-events-none absolute hidden md:block"
          style={{
            top: particle.top,
            left: "left" in particle ? particle.left : undefined,
            right: "right" in particle ? particle.right : undefined,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Soft edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_35%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030303]/90 to-transparent" />

      {/* Particle field */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(236,72,153,0.9) 1px, transparent 1px), radial-gradient(circle at 85% 18%, rgba(212,175,55,0.8) 1px, transparent 1px), radial-gradient(circle at 72% 78%, rgba(139,92,246,0.7) 1px, transparent 1px), radial-gradient(circle at 22% 72%, rgba(249,115,22,0.6) 1px, transparent 1px), radial-gradient(circle at 35% 40%, rgba(236,72,153,0.5) 1px, transparent 1px)",
          backgroundSize: "110px 110px, 150px 150px, 130px 130px, 95px 95px, 80px 80px",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
    </div>
  );
}
