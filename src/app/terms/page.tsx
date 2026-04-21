import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
    title: `Terms of Service — ${BRAND.name}`,
    description: `The terms for using ${BRAND.name}.`,
};

export default function TermsPage() {
    return (
        <article className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-2 text-sm text-zinc-500">Last updated: April 20, 2026</p>

            <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
                <p>
                    By creating a {BRAND.name} account, you agree to these terms. If you
                    don&apos;t, don&apos;t use the service. Short version: use it lawfully,
                    you own your data, we can cancel accounts that abuse the service, and
                    neither of us is responsible for the other&apos;s business losses.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Your account</h2>
                    <p className="mt-3">
                        You are responsible for keeping your credentials secret and for
                        everything that happens in your workspace. You must be 18+ and
                        authorized to act on behalf of any organization you register.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Your data</h2>
                    <p className="mt-3">
                        You retain ownership of all data you upload. You grant us a limited
                        license to store, process, and display it solely to operate the service.
                        You can export your data as CSV at any time, and delete your workspace
                        to wipe it from our systems within 30 days.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Acceptable use</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Don&apos;t try to break, reverse-engineer, or scrape the service.</li>
                        <li>Don&apos;t use it to store illegal content or violate someone else&apos;s rights.</li>
                        <li>Don&apos;t resell the service without written permission.</li>
                        <li>Don&apos;t abuse the free tier (e.g. creating many free workspaces to avoid paying).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Payment</h2>
                    <p className="mt-3">
                        Paid plans bill monthly in advance. No refunds for partial months.
                        Cancel any time in your dashboard — your plan stays active until the
                        end of the current billing period. Prices may change with 30-day notice.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Availability</h2>
                    <p className="mt-3">
                        We aim for 99% uptime but make no formal SLA on the free and Pro tiers.
                        Maintenance windows are announced in advance when possible.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Limitation of liability</h2>
                    <p className="mt-3">
                        {BRAND.name} is provided &ldquo;as is&rdquo;. To the maximum extent allowed
                        by law, we are not liable for indirect, incidental, or consequential damages,
                        including lost profits or data. Our total liability in any 12-month period is
                        capped at the amount you paid us in that period (or $100 if you&apos;re on the free tier).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Changes to these terms</h2>
                    <p className="mt-3">
                        We may update these terms with 30-day notice via email. Continued use
                        after the notice period means acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Governing law</h2>
                    <p className="mt-3">
                        These terms are governed by the laws of Ontario, Canada. Any dispute
                        will be handled in the courts of Toronto, Ontario.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Contact</h2>
                    <p className="mt-3">
                        Questions: <a className="text-red-400 underline" href="mailto:hello@shopbayhq.com">hello@shopbayhq.com</a>
                    </p>
                </section>
            </div>
        </article>
    );
}
