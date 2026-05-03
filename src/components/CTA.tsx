"use client";

import { BRAND } from "@/lib/brand";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-red-600">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(255_255_255/0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <AnimateIn>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Stop losing cars
            <br />
            to whiteboards.
          </h2>
          <p className="mt-6 text-lg text-red-100/80">
            Free while you&apos;re figuring it out. Upgrade when you&apos;re ready.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BRAND.appUrl}
              className="inline-flex min-h-14 items-center bg-white px-10 text-sm font-bold uppercase tracking-wider text-red-600 transition hover:bg-zinc-100"
            >
              Start free →
            </a>
            <a
              href="mailto:dev@jamesdare.com"
              className="inline-flex min-h-14 items-center border border-white/30 px-10 text-sm font-medium uppercase tracking-wider text-white transition hover:border-white hover:bg-white/10"
            >
              Talk to James
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
