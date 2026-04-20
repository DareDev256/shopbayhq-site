import { BRAND } from "@/lib/brand";

const TIERS = [
    {
        name: "Solo",
        price: "$0",
        period: "forever",
        tagline: "For shops trying it out",
        features: ["1 location", "3 users", "Kanban + lot map", "30-day archive", "Community support"],
        cta: "Start free",
        featured: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/ month / location",
        tagline: "For running shops",
        features: [
            "Unlimited users",
            "Hours tracking + CSV export",
            "Intake photos (unlimited)",
            "Weekly reports + analytics",
            "Shared iPad + PIN login",
        ],
        cta: "Start 14-day trial",
        featured: true,
    },
    {
        name: "Business",
        price: "$79",
        period: "/ month / location",
        tagline: "For multi-location operators",
        features: [
            "Everything in Pro",
            "Multi-location dashboard",
            "REST API access",
            "Priority support",
            "Custom integrations on request",
        ],
        cta: "Book a demo",
        featured: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="bg-black py-24">
            <div className="mx-auto max-w-6xl px-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-red-500">
                    Pricing
                </p>
                <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                    Free while you&apos;re figuring it out. Upgrade when you&apos;re ready.
                </h2>
                <p className="mb-16 max-w-2xl text-lg text-zinc-400">
                    No contracts. Month-to-month. Cancel from your dashboard in two clicks.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {TIERS.map((t) => (
                        <div
                            key={t.name}
                            className={`flex flex-col border p-8 ${
                                t.featured
                                    ? "border-red-600 bg-red-950/20"
                                    : "border-zinc-800 bg-zinc-950"
                            }`}
                        >
                            {t.featured && (
                                <div className="mb-4 w-fit bg-red-600 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                    Most popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold">{t.name}</h3>
                            <p className="mt-1 text-sm text-zinc-500">{t.tagline}</p>
                            <div className="mt-6 flex items-baseline gap-2">
                                <span className="text-5xl font-bold">{t.price}</span>
                                <span className="text-sm text-zinc-500">{t.period}</span>
                            </div>
                            <ul className="mt-8 space-y-3 text-sm">
                                {t.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-zinc-300">
                                        <span className="mt-1 text-red-500">→</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={BRAND.appUrl}
                                className={`mt-8 inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold uppercase tracking-wider transition ${
                                    t.featured
                                        ? "bg-red-600 text-white hover:bg-red-700"
                                        : "border border-zinc-700 text-zinc-200 hover:border-white hover:text-white"
                                }`}
                            >
                                {t.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
