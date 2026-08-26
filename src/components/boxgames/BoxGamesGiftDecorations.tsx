import type { CSSProperties } from "react";

const DECORATIONS = [
  { id: "flame", top: "8%", left: "5%", size: 24, delay: "0s", opacity: 0.32 },
  { id: "heart", top: "16%", right: "6%", size: 22, delay: "1.4s", opacity: 0.28 },
  { id: "diamond", top: "32%", right: "4%", size: 20, delay: "0.7s", opacity: 0.26 },
  { id: "crown", top: "6%", right: "18%", size: 24, delay: "2.1s", opacity: 0.3 },
  { id: "flame", top: "52%", left: "4%", size: 20, delay: "1.9s", opacity: 0.24 },
  { id: "gift", top: "64%", right: "10%", size: 22, delay: "1s", opacity: 0.26 },
  { id: "heart", top: "74%", left: "8%", size: 18, delay: "2.5s", opacity: 0.22 },
  { id: "diamond", top: "14%", left: "14%", size: 16, delay: "1.6s", opacity: 0.22 },
  { id: "crown", top: "44%", right: "16%", size: 18, delay: "3.1s", opacity: 0.24 },
  { id: "flame", top: "82%", right: "22%", size: 18, delay: "2.9s", opacity: 0.22 },
  { id: "heart", top: "36%", left: "20%", size: 14, delay: "3.6s", opacity: 0.2 },
  { id: "diamond", top: "58%", left: "12%", size: 16, delay: "4.2s", opacity: 0.21 },
] as const;

function GiftIcon({ type, size }: { type: string; size: number }) {
  const s = size;
  switch (type) {
    case "flame":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C12 22 5 16 5 10.5C5 7.5 7.5 5 10 5C11.2 5 12.2 5.6 12.8 6.5C13.4 5.6 14.4 5 15.5 5C18 5 20.5 7.5 20.5 10.5C20.5 16 12 22 12 22Z"
            fill="#f97316"
            fillOpacity="0.55"
          />
          <path
            d="M12 6C12 6 9 9 9 12C9 14 10.5 15.5 12 15.5C13.5 15.5 15 14 15 12C15 9 12 6 12 6Z"
            fill="#fbbf24"
            fillOpacity="0.45"
          />
        </svg>
      );
    case "heart":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21C12 21 3 14 3 8.5C3 5.5 5.5 3 8.5 3C10.2 3 11.7 3.8 12 5C12.3 3.8 13.8 3 15.5 3C18.5 3 21 5.5 21 8.5C21 14 12 21 12 21Z"
            fill="#f472b6"
            fillOpacity="0.55"
          />
        </svg>
      );
    case "diamond":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L22 9L12 22L2 9L12 2Z"
            fill="#a78bfa"
            fillOpacity="0.45"
            stroke="#c4b5fd"
            strokeWidth="0.75"
            strokeOpacity="0.5"
          />
        </svg>
      );
    case "crown":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 17H21L19 9L15 12L12 6L9 12L5 9L3 17Z"
            fill="#d4af37"
            fillOpacity="0.5"
            stroke="#f0d060"
            strokeWidth="0.75"
            strokeOpacity="0.35"
          />
        </svg>
      );
    case "gift":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="10" width="16" height="10" rx="1" fill="#8b5cf6" fillOpacity="0.4" />
          <rect x="3" y="7" width="18" height="4" rx="1" fill="#ec4899" fillOpacity="0.45" />
          <path d="M12 7V20" stroke="#f0d060" strokeWidth="1" strokeOpacity="0.35" />
        </svg>
      );
    default:
      return null;
  }
}

export function BoxGamesGiftDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {DECORATIONS.map((item, index) => {
        const style: CSSProperties = {
          top: item.top,
          left: "left" in item ? item.left : undefined,
          right: "right" in item ? item.right : undefined,
          opacity: item.opacity,
          animationDelay: item.delay,
          width: item.size,
          height: item.size,
        };

        return (
          <div
            key={`${item.id}-${index}`}
            className="boxgames-gift-float pointer-events-none absolute hidden sm:block"
            style={style}
          >
            <GiftIcon type={item.id} size={item.size} />
          </div>
        );
      })}

      {[...Array(12)].map((_, i) => (
        <span
          key={`spark-${i}`}
          className="boxgames-spark pointer-events-none absolute hidden md:block"
          style={{
            top: `${10 + i * 7}%`,
            left: i % 2 === 0 ? `${6 + (i % 5) * 4}%` : undefined,
            right: i % 2 === 1 ? `${5 + (i % 5) * 3}%` : undefined,
            animationDelay: `${i * 0.55}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
