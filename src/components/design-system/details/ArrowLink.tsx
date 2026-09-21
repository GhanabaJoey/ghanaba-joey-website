import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function ArrowLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: string;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "gj-focus-ring group inline-flex items-center gap-2 gj-body-sm text-gj-foreground-muted transition-colors hover:text-gj-gold",
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}
