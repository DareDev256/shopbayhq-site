const FEATURES = [
    {
        label: "01",
        title: "Real-time Kanban",
        body: "Drag a car from intake to done. Everyone sees it the second it moves.",
        accent: "Sub-second sync. Works offline. PWA-installable on every iPad.",
    },
    {
        label: "02",
        title: "Visual Lot Map",
        body: "Design your lot once. See every vehicle pinned to its actual spot, color-coded by service status.",
        accent: "Drag-and-drop lot designer. Admin-only. Any shape, any size.",
    },
    {
        label: "03",
        title: "Intake photos that protect you",
        body: "Guided walkaround. Front, sides, rear, interior, wheels. Timestamped, encrypted, per-vehicle.",
        accent: "Customer claims you scratched it? Pull the intake reel. Done.",
    },
    {
        label: "04",
        title: "Hours without the spreadsheet",
        body: "Clock in, clock out, weekly CSV. Shared iPad mode with PIN quick-switch.",
        accent: "No payroll ambitions. Just the numbers you need to run the floor.",
    },
];

export default function Features() {
    return (
        <section id="demo" className="relative bg-black py-24 scroll-mt-16">
            <div className="mx-auto max-w-6xl px-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                    What you get
                </p>
                <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
                    Built for the shop floor, not a CEO deck.
                </h2>

                <div className="grid gap-px bg-zinc-800 md:grid-cols-2">
                    {FEATURES.map((f) => (
                        <div key={f.label} className="bg-black p-8 sm:p-10">
                            <div className="mb-6 text-xs font-medium text-red-500">{f.label}</div>
                            <h3 className="mb-4 text-2xl font-bold tracking-tight">{f.title}</h3>
                            <p className="mb-4 text-zinc-400">{f.body}</p>
                            <p className="text-sm text-zinc-500">{f.accent}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
