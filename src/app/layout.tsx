import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.subtitle,
    openGraph: {
        title: BRAND.name,
        description: BRAND.tagline,
        url: `https://${BRAND.domain}`,
        siteName: BRAND.name,
        type: "website",
    },
    twitter: { card: "summary_large_image", title: BRAND.name, description: BRAND.tagline },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden">{children}</body>
        </html>
    );
}
