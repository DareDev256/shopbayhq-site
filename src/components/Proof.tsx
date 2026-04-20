import { BRAND } from "@/lib/brand";

export default function Proof() {
    return (
        <section className="bg-zinc-950 py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                    Why this exists
                </p>
                <blockquote className="text-2xl font-light leading-relaxed tracking-tight text-zinc-200 sm:text-3xl">
                    &ldquo;Four years as a detailer at a luxury dealership. I watched my shop lose
                    cars to whiteboards, lose arguments to customers, lose advisor hours to
                    radio chatter. Built the thing they wouldn&rsquo;t. Releasing it to every
                    shop that&rsquo;s ever been burned by a Post-it.&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center justify-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-zinc-800" />
                    <div className="text-left">
                        <div className="font-semibold">{BRAND.founder}</div>
                        <div className="text-sm text-zinc-500">{BRAND.founderRole}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
