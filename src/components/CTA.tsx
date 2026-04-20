import { BRAND } from "@/lib/brand";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-red-600">
            <div className="mx-auto max-w-4xl px-6 py-24 text-center">
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                    Stop losing cars to whiteboards.
                </h2>
                <p className="mt-6 text-lg text-red-100">
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
                        className="inline-flex min-h-14 items-center border border-white/40 px-10 text-sm font-medium uppercase tracking-wider text-white transition hover:border-white"
                    >
                        Talk to James
                    </a>
                </div>
            </div>
        </section>
    );
}
