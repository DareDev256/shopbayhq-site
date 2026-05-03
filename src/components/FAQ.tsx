"use client";

import AnimateIn from "./AnimateIn";

const QUESTIONS = [
  {
    q: "Will my staff actually use it?",
    a: "If they use a group chat, they can use this. The Kanban is one screen. Clock in is one button. Built for shops, not software engineers.",
  },
  {
    q: "What if I cancel?",
    a: "You keep your data. Export to CSV any time. No lock-in, no exit fees. We'd rather you stay because we earned it.",
  },
  {
    q: "Does it work on the iPad mounted on my wall?",
    a: "Yes. Installable as a PWA, landscape-optimized, shared-device mode with PIN quick-switch between staff.",
  },
  {
    q: "Is my customer data safe?",
    a: "Each workspace is fully isolated. Photos are stored encrypted. We never train anything on your data. Session cookies are HTTPS-only and rotated.",
  },
  {
    q: "What if the internet goes down?",
    a: "The PWA caches the shell; recent state stays visible. When connectivity returns, changes sync automatically.",
  },
  {
    q: "Can I customize service types and columns?",
    a: "Every workspace defines its own service types, statuses, lots, and roles. No hardcoded industry assumptions.",
  },
  {
    q: "Do you have an API?",
    a: "Business tier includes REST API access. DMS integration and webhooks are on the roadmap — ask if you have a specific need.",
  },
  {
    q: "Who built this?",
    a: "A detailer who spent four years on the floor at a luxury dealership in Toronto. Knew exactly how a great shop should run — total visibility, zero confusion. Built the tool to make that real for every shop.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-zinc-950 py-24 scroll-mt-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <AnimateIn>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            Questions
          </p>
          <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
            What shop owners ask before signing up.
          </h2>
        </AnimateIn>

        <div className="divide-y divide-zinc-800/60 border-y border-zinc-800/60">
          {QUESTIONS.map((item, i) => (
            <AnimateIn key={item.q} delay={i * 0.05}>
              <details className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-zinc-100 transition-colors hover:text-white">
                  <span>{item.q}</span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-red-500 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.a}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
