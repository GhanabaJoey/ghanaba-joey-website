import { cn } from "@/lib/cn";

export type HomeEditorialVisualVariant =
  | "media"
  | "live"
  | "community"
  | "collaboration";

export type HomeEditorialVisualSize = "featured" | "compact";

export interface HomeEditorialVisualProps {
  variant: HomeEditorialVisualVariant;
  size?: HomeEditorialVisualSize;
  className?: string;
}

export function HomeEditorialVisual({
  variant,
  size = "featured",
  className,
}: HomeEditorialVisualProps) {
  return (
    <div
      className={cn(
        "home-editorial-visual",
        `home-editorial-visual--${variant}`,
        size === "compact" && "home-editorial-visual--compact",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 280"
        className="home-editorial-visual__svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id={`gj-vis-gold-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.55)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.08)" />
          </linearGradient>
          <radialGradient id={`gj-vis-glow-${variant}`} cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="rgba(245,243,238,0.12)" />
            <stop offset="100%" stopColor="rgba(5,5,5,0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="280" fill={`url(#gj-vis-glow-${variant})`} />
        {variant === "media" && <MediaComposition gradientId={`gj-vis-gold-${variant}`} />}
        {variant === "live" && <LiveComposition gradientId={`gj-vis-gold-${variant}`} />}
        {variant === "community" && <CommunityComposition gradientId={`gj-vis-gold-${variant}`} />}
        {variant === "collaboration" && (
          <CollaborationComposition gradientId={`gj-vis-gold-${variant}`} />
        )}
      </svg>
    </div>
  );
}

function MediaComposition({ gradientId }: { gradientId: string }) {
  return (
    <>
      <circle cx="200" cy="140" r="72" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.9" />
      <circle cx="200" cy="140" r="48" fill="none" stroke="rgba(212,175,55,0.35)" strokeWidth="1" />
      <rect x="168" y="108" width="64" height="64" rx="4" fill="none" stroke="rgba(245,243,238,0.15)" strokeWidth="1" />
      <path d="M248 120 L268 140 L248 160 Z" fill="rgba(212,175,55,0.25)" />
      <line x1="120" y1="200" x2="280" y2="200" stroke="rgba(245,243,238,0.08)" strokeWidth="1" />
      <circle cx="130" cy="80" r="3" fill="rgba(212,175,55,0.5)" />
      <circle cx="270" cy="90" r="2" fill="rgba(212,175,55,0.35)" />
    </>
  );
}

function LiveComposition({ gradientId }: { gradientId: string }) {
  return (
    <>
      <ellipse cx="200" cy="200" rx="120" ry="28" fill="rgba(212,175,55,0.06)" />
      <path
        d="M80 180 Q200 60 320 180"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        opacity="0.85"
      />
      <line x1="200" y1="80" x2="200" y2="200" stroke="rgba(245,243,238,0.1)" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={140 + i * 24}
          y={160 - (i % 3) * 18}
          width="8"
          height={36 + (i % 2) * 12}
          rx="2"
          fill="rgba(212,175,55,0.2)"
        />
      ))}
      <circle cx="200" cy="72" r="8" fill="rgba(212,175,55,0.45)" />
    </>
  );
}

function CommunityComposition({ gradientId }: { gradientId: string }) {
  const nodes = [
    { cx: 200, cy: 130, r: 10 },
    { cx: 120, cy: 180, r: 7 },
    { cx: 280, cy: 180, r: 7 },
    { cx: 150, cy: 90, r: 6 },
    { cx: 250, cy: 90, r: 6 },
  ];
  return (
    <>
      {nodes.slice(1).map((n) => (
        <line
          key={`${n.cx}-${n.cy}`}
          x1={200}
          y1={130}
          x2={n.cx}
          y2={n.cy}
          stroke="rgba(212,175,55,0.22)"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n) => (
        <circle key={`c-${n.cx}`} cx={n.cx} cy={n.cy} r={n.r} fill={`url(#${gradientId})`} />
      ))}
      <circle cx="200" cy="130" r="22" fill="none" stroke="rgba(245,243,238,0.12)" strokeWidth="1" />
    </>
  );
}

function CollaborationComposition({ gradientId }: { gradientId: string }) {
  return (
    <>
      <rect x="60" y="100" width="280" height="100" rx="2" fill="rgba(16,17,20,0.8)" stroke="rgba(245,243,238,0.1)" strokeWidth="1" />
      <rect x="80" y="120" width="80" height="60" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
      <rect x="240" y="120" width="80" height="60" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.35)" strokeWidth="1" />
      <path d="M160 150 H240" stroke="rgba(212,175,55,0.5)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="200" cy="150" r="14" fill="rgba(5,5,5,0.9)" stroke="rgba(212,175,55,0.6)" strokeWidth="1" />
      <path d="M194 150 L200 156 L206 144" fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="1.5" />
    </>
  );
}
