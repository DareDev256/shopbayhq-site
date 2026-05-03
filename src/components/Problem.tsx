"use client";

import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Problem() {
  return (
    <section className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <AnimateIn>
          <div className="relative aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-900/50">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80&auto=format&fit=crop"
              alt="Cluttered shop workspace with tools and paper"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15} className="flex flex-col justify-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
            The gap
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            You know your shop. Now your whole team can too.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Every car&apos;s status, every bay&apos;s assignment, every advisor&apos;s
            queue — visible to everyone on the floor, updated the second something
            moves.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            No radio calls asking where something is. No guessing who&apos;s on what.
            Just one screen with the full picture.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
