export default function Problem() {
    return (
        <section className="bg-zinc-950 py-24">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
                <div className="flex aspect-[4/3] items-center justify-center rounded-none border border-zinc-800 bg-zinc-900/50 text-zinc-600">
                    {/* Placeholder — replace with whiteboard chaos photo */}
                    <span className="text-sm uppercase tracking-widest">[ Shop whiteboard photo ]</span>
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
