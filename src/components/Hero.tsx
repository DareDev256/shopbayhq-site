import { BRAND } from "@/lib/brand";

export default function Hero() {
    return (
        <section className="relative isolate min-h-[90vh] overflow-hidden">
            {/* Video slot — swap src for Seedance shop footage when ready */}
            <video
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
                autoPlay
                muted
                loop
                playsInline
                poster="/hero-poster.jpg"
            >
                {/* <source src="/hero-shop.mp4" type="video/mp4" /> */}
            </video>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black" />

            <div className="mx-auto flex max-w-6xl flex-col justify-center px-6 pt-40 pb-24 sm:pt-48">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                    {BRAND.name}
                </p>
                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
                    {BRAND.tagline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
                    {BRAND.subtitle}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                        href={BRAND.appUrl}
                        className="inline-flex min-h-12 items-center rounded-none bg-red-600 px-8 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-red-700"
                    >
                        Start free →
                    </a>
                    <a
                        href="#demo"
                        className="inline-flex min-h-12 items-center rounded-none border border-zinc-700 px-8 text-sm font-medium uppercase tracking-wider text-zinc-200 transition hover:border-white hover:text-white"
                    >
                        See it in 60 seconds
                    </a>
                </div>

                <p className="mt-8 text-xs text-zinc-500">
                    No contracts · Free tier forever · Works on any iPad
                </p>
            </div>
        </section>
    );
}
