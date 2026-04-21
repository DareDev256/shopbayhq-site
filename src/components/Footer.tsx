import { BRAND } from "@/lib/brand";

export default function Footer() {
    return (
        <footer className="bg-black py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
                <div>
                    <p className="text-xl font-bold">{BRAND.name}</p>
                    <p className="text-sm text-zinc-500">{BRAND.tagline}</p>
                </div>
                <nav className="flex flex-wrap gap-6 text-sm text-zinc-400">
                    <a href="/#pricing" className="hover:text-white">Pricing</a>
                    <a href={BRAND.appUrl} className="hover:text-white">Log in</a>
                    <a href="/privacy" className="hover:text-white">Privacy</a>
                    <a href="/terms" className="hover:text-white">Terms</a>
                    <a href="mailto:hello@shopbayhq.com" className="hover:text-white">Contact</a>
                    <a href="https://github.com/DareDev256/ShopBayHQ" className="hover:text-white">Source</a>
                </nav>
                <p className="text-xs text-zinc-600">
                    © {new Date().getFullYear()} {BRAND.founder}. Toronto.
                </p>
            </div>
        </footer>
    );
}
