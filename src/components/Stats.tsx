"use client";

import AnimateIn from "./AnimateIn";

const STATS = [
  { value: "4 yrs", label: "on the dealer floor" },
  { value: "60s", label: "to start tracking" },
  { value: "$0", label: "forever free tier" },
  { value: "100%", label: "your data, always" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-zinc-800/40 md:grid-cols-4">
        {STATS.map((s, i) => (
          <AnimateIn key={s.label} delay={i * 0.1}>
            <div className="flex flex-col items-center bg-zinc-950 px-6 py-10 text-center">
              <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {s.value}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {s.label}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
