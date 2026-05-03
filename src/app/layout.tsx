import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BRAND } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description: BRAND.subtitle,
  metadataBase: new URL(`https://${BRAND.domain}`),
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.subtitle,
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: BRAND.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `https://${BRAND.domain}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
