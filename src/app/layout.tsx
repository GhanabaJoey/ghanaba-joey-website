import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghanaba Joey Creator Hub",
  description:
    "Your gateway to the agency, Box Games and NextWave Creator Network.",
  openGraph: {
    title: "Ghanaba Joey Creator Hub",
    description:
      "Your gateway to the agency, Box Games and NextWave Creator Network.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
