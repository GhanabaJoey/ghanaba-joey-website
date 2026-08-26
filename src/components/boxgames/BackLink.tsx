import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-gold"
    >
      <ArrowLeft
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
        aria-hidden="true"
      />
      Back to Creator Hub
    </Link>
  );
}
