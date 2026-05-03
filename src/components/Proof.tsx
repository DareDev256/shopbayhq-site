"use client";

import { BRAND } from "@/lib/brand";
import AnimateIn from "./AnimateIn";

export default function Proof() {
  return (
    <section className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(220_38_38/0.04),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <AnimateIn>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            Why this exists
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <blockquote className="text-2xl font-light leading-relaxed tracking-tight text-zinc-200 sm:text-3xl lg:text-4xl">
            <span className="text-red-500/60">&ldquo;</span>
            Four years on the floor at a luxury dealership. I knew exactly how a
            great shop should run — total visibility, zero confusion, every car
            accounted for. So I built the board I always wanted. Now every shop
            can have it.
            <span className="text-red-500/60">&rdquo;</span>
          </blockquote>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
              JO
            </div>
            <div className="text-left">
              <div className="font-semibold">{BRAND.founder}</div>
              <div className="text-sm text-zinc-500">{BRAND.founderRole}</div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
