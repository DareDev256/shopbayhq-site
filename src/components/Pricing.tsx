"use client";

import { BRAND } from "@/lib/brand";
import AnimateIn from "./AnimateIn";

const TIERS = [
  {
    name: "Solo",
    price: "$0",
    period: "forever",
    tagline: "For shops trying it out",
    features: [
      "1 location",
      "3 users",
      "Kanban + lot map",
      "30-day archive",
      "Community support",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month / location",
    tagline: "For running shops",
    features: [
      "Unlimited users",
      "Hours tracking + CSV export",
      "Intake photos (unlimited)",
      "Weekly reports + analytics",
      "Shared iPad + PIN login",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "/ month / location",
    tagline: "For multi-location operators",
    features: [
      "Everything in Pro",
      "Multi-location dashboard",
      "REST API access",
      "Priority support",
      "Custom integrations on request",
    ],
    cta: "Book a demo",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-24 scroll-mt-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            Pricing
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Free while you&apos;re figuring it out.
            <br className="hidden sm:block" /> Upgrade when you&apos;re ready.
          </h2>
          <p className="mb-16 max-w-2xl text-lg text-zinc-400">
            No contracts. Month-to-month. Cancel from your dashboard in two clicks.
          </p>
        </AnimateIn>

        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <div
                className={`group relative flex h-full flex-col border p-8 transition-colors sm:p-10 ${
                  t.featured
                    ? "border-red-600/60 bg-red-950/10"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                }`}
              >
                {t.featured && (
                  <>
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                    <div className="mb-4 w-fit bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most popular
                    </div>
                  </>
                )}
                <h3 className="text-2xl font-bold">{t.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{t.tagline}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">{t.price}</span>
                  <span className="text-sm text-zinc-500">{t.period}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-300">
                      <span className="mt-0.5 text-red-500">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={BRAND.appUrl}
                  className={`mt-8 inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold uppercase tracking-wider transition ${
                    t.featured
                      ? "glow-red bg-red-600 text-white hover:bg-red-700"
                      : "border border-zinc-700 text-zinc-200 hover:border-zinc-400 hover:text-white"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
