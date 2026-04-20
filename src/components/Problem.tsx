import Image from "next/image";

export default function Problem() {
    return (
        <section className="bg-zinc-950 py-24">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden border border-zinc-800 bg-zinc-900/50">
                    <Image
                        src="https://images.unsplash.com/photo-1632823471565-1ecdf0ecb9b4?w=1200&q=80&auto=format&fit=crop"
                        alt="Cluttered shop workspace with tools and paper"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                        The problem
                    </p>
                    <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                        Your shop runs on Post-its, group chats, and one guy&apos;s memory.
                    </h2>
                    <p className="mt-6 text-lg text-zinc-400">
                        When it breaks, the customer hears <em>&ldquo;we don&rsquo;t know where your
                        car is.&rdquo;</em> When they claim a scratch that was already there, you
                        have no proof.
                    </p>
                    <p className="mt-4 text-lg text-zinc-400">
                        Whiteboards aren&apos;t a system. They&apos;re a liability waiting for its
                        turn.
                    </p>
                </div>
            </div>
        </section>
    );
}
