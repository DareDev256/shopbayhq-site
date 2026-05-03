"use client";

import AnimateIn from "./AnimateIn";

const FEATURES = [
  {
    label: "01",
    title: "Real-time Kanban",
    body: "Drag a car from intake to done. Everyone sees it the second it moves.",
    accent: "Sub-second sync. Works offline. PWA-installable on every iPad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="4" rx="1" />
        <rect x="14" y="10" width="7" height="7" rx="1" />
        <rect x="3" y="13" width="7" height="4" rx="1" />
      </svg>
    ),
  },
  {
    label: "02",
    title: "Visual Lot Map",
    body: "Design your lot once. See every vehicle pinned to its actual spot, color-coded by service status.",
    accent: "Drag-and-drop lot designer. Admin-only. Any shape, any size.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="10" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "03",
    title: "Intake photos that protect you",
    body: "Guided walkaround. Front, sides, rear, interior, wheels. Timestamped, encrypted, per-vehicle.",
    accent: "Customer claims you scratched it? Pull the intake reel. Done.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    label: "04",
    title: "Hours without the spreadsheet",
    body: "Clock in, clock out, weekly CSV. Shared iPad mode with PIN quick-switch.",
    accent: "No payroll ambitions. Just the numbers you need to run the floor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24 scroll-mt-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            What you get
          </p>
          <h2 className="mb-16 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Built for the shop floor, not a CEO deck.
          </h2>
        </AnimateIn>

        <div className="grid gap-px bg-zinc-800/50 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.label} delay={i * 0.1}>
              <div className="group relative h-full bg-black p-8 transition-colors hover:bg-zinc-900/50 sm:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/0 to-transparent transition-all group-hover:via-red-600/30" />
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-red-500">{f.icon}</span>
                  <span className="text-xs font-medium text-zinc-600">{f.label}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mb-4 leading-relaxed text-zinc-400">{f.body}</p>
                <p className="text-sm text-zinc-600">{f.accent}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
