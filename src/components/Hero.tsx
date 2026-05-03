"use client";

import Image from "next/image";
import { BRAND } from "@/lib/brand";
import { motion } from "framer-motion";

const heroImageSrc =
  "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=2400&q=80&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="grain relative isolate min-h-dvh overflow-hidden">
      <Image
        src={heroImageSrc}
        alt="Service bay with vehicles"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-zinc-950" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col justify-end px-6 pt-48 pb-20 sm:justify-center sm:pt-56 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-red-500"
        >
          {BRAND.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Every car.{" "}
          <br className="hidden sm:block" />
          Every bay.{" "}
          <br className="hidden sm:block" />
          <span className="text-red-500">One board.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {BRAND.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={BRAND.appUrl}
            className="glow-red inline-flex min-h-12 items-center bg-red-600 px-8 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-red-700"
          >
            Start free →
          </a>
          <a
            href="#features"
            className="inline-flex min-h-12 items-center border border-zinc-700 px-8 text-sm font-medium uppercase tracking-wider text-zinc-300 transition hover:border-zinc-400 hover:text-white"
          >
            See it in 60 seconds
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-xs text-zinc-600"
        >
          No contracts · Free tier forever · Works on any iPad
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-zinc-700 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-0.5 rounded-full bg-zinc-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
