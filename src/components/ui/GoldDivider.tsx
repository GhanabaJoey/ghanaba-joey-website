interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <span
      className={`h-px flex-1 bg-gradient-to-r from-transparent via-gold/35 to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}
