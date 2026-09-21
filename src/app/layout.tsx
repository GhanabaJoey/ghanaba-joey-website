import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghanaba Joey | TikTok LIVE Host & Creator",
  description:
    "Ghanaba Joey — TikTok LIVE host and creator building NextWave Creator Network and Official Monthly Box Games. Spaces where creators grow, compete and connect.",
  openGraph: {
    title: "Ghanaba Joey | TikTok LIVE Host & Creator",
    description:
      "Ghanaba Joey — TikTok LIVE host and creator building NextWave Creator Network and Official Monthly Box Games. Spaces where creators grow, compete and connect.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gj-background font-sans text-gj-foreground">
        {children}
      </body>
    </html>
  );
}
