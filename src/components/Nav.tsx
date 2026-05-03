"use client";

import { BRAND } from "@/lib/brand";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-red-600 text-xs font-black tracking-tight text-white">
            SB
          </div>
          <span className="text-sm font-bold tracking-tight">{BRAND.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-zinc-400 transition hover:text-white">
            Features
          </a>
          <a href="#pricing" className="text-sm text-zinc-400 transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-zinc-400 transition hover:text-white">
            FAQ
          </a>
          <a
            href={BRAND.appUrl}
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Log in
          </a>
          <a
            href={BRAND.appUrl}
            className="inline-flex h-9 items-center bg-red-600 px-5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-red-700"
          >
            Start free
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-5 bg-white transition-all ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-white transition-all ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
              { label: "Log in", href: BRAND.appUrl },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm text-zinc-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRAND.appUrl}
              className="mt-2 inline-flex h-11 items-center justify-center bg-red-600 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              Start free →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
