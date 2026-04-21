import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
    title: `Privacy Policy — ${BRAND.name}`,
    description: `How ${BRAND.name} handles your data.`,
};

export default function PrivacyPage() {
    return (
        <article className="mx-auto max-w-3xl px-6 py-20 prose-invert">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-2 text-sm text-zinc-500">Last updated: April 20, 2026</p>

            <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
                <p>
                    {BRAND.name} is operated by {BRAND.founder} out of Toronto, Ontario, Canada. This
                    page explains what data we collect, why, and your rights over it. Short version:
                    we collect the minimum needed to run the service, we don&apos;t sell your data,
                    and we don&apos;t train any AI model on it.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-white">What we collect</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li><strong>Account data</strong> — name, email, hashed password or Google OAuth ID, role, organization.</li>
                        <li><strong>Workspace data</strong> — vehicles, advisors, lots, service types, hours, intake photos that you create inside your workspace.</li>
                        <li><strong>Usage telemetry</strong> — anonymized page views, error logs, and performance metrics for debugging.</li>
                        <li><strong>Session cookies</strong> — HTTP-only, Secure, SameSite=Strict cookies to keep you logged in.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">What we don&apos;t do</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>We do not sell, rent, or share your data with advertisers.</li>
                        <li>We do not train AI/ML models on your workspace data.</li>
                        <li>We do not read your workspace data except to fix a bug you report.</li>
                        <li>We do not share your data with other tenants on the platform.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Where it lives</h2>
                    <p className="mt-3">
                        Data is stored in a managed PostgreSQL database hosted in a Canadian or US data center,
                        encrypted at rest. Photos are stored encrypted and scoped to your organization.
                        Session store is the same database.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Your rights</h2>
                    <p className="mt-3">
                        Under PIPEDA (Canada) and GDPR (EU), you can request a copy of your data, ask us
                        to correct it, or ask us to delete your entire workspace. Email{" "}
                        <a className="text-red-400 underline" href="mailto:privacy@shopbayhq.com">privacy@shopbayhq.com</a>
                        {" "}and we will respond within 30 days.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Third parties</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li><strong>Hosting:</strong> Railway (for the app) and Vercel (for this website).</li>
                        <li><strong>Database:</strong> Neon (managed Postgres).</li>
                        <li><strong>Auth:</strong> Optional Google OAuth — if you sign in with Google, they share your email + name with us, nothing else.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Contact</h2>
                    <p className="mt-3">
                        Questions, concerns, or takedown requests:{" "}
                        <a className="text-red-400 underline" href="mailto:privacy@shopbayhq.com">privacy@shopbayhq.com</a>
                    </p>
                </section>
            </div>
        </article>
    );
}
