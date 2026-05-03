import { BRAND } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/40 bg-black py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center bg-red-600 text-[10px] font-black text-white">
            SB
          </div>
          <div>
            <p className="text-sm font-bold">{BRAND.name}</p>
            <p className="text-xs text-zinc-600">{BRAND.tagline}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-zinc-500">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href={BRAND.appUrl} className="transition hover:text-white">Log in</a>
          <a href="/privacy" className="transition hover:text-white">Privacy</a>
          <a href="/terms" className="transition hover:text-white">Terms</a>
          <a href="mailto:dev@jamesdare.com" className="transition hover:text-white">Contact</a>
        </nav>
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} {BRAND.founder}. Toronto.
        </p>
      </div>
    </footer>
  );
}
