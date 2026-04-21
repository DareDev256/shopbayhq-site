import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
    title: `Terms of Service — ${BRAND.name}`,
    description: `The terms for using ${BRAND.name}. Ontario law, plain language.`,
};

export default function TermsPage() {
    return (
        <article className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-2 text-sm text-zinc-500">Effective: April 21, 2026 · Version 1.0</p>

            <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
                <p>
                    By creating a {BRAND.name} account or using the service, you agree to these terms.
                    If you don&apos;t agree, don&apos;t use the service. Short version: use it lawfully,
                    you own your data, we can suspend accounts that abuse the service, and neither of us
                    is liable for the other&apos;s business losses.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-white">1. The service</h2>
                    <p className="mt-3">
                        {BRAND.name} is a multi-tenant SaaS for managing service-shop operations
                        (vehicle Kanban, lot map, intake photos, staff hours). It is operated by
                        {" "}{BRAND.founder}, sole proprietor, in Toronto, Ontario, Canada.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">2. Your account</h2>
                    <p className="mt-3">
                        You are responsible for keeping your credentials secret and for everything
                        that happens under your account. You must be at least 18 years old and
                        authorized to act on behalf of any organization you register. You are
                        responsible for the actions of users you invite to your workspace.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">3. Your data</h2>
                    <p className="mt-3">
                        You retain all rights, title, and ownership of data you upload (&ldquo;Customer Data&rdquo;).
                        You grant us a non-exclusive, worldwide, royalty-free licence to host, process,
                        and display your Customer Data solely for the purpose of providing the service.
                        You can export your data in JSON or CSV at any time. Deletion of your workspace
                        triggers permanent purge within 30 days.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">4. Acceptable use</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>Don&apos;t reverse-engineer, decompile, scrape, or attempt to break the service.</li>
                        <li>Don&apos;t use it to store illegal content or violate any third party&apos;s rights.</li>
                        <li>Don&apos;t use it to harass or surveil employees beyond what their employment agreement permits and Ontario labour law allows.</li>
                        <li>Don&apos;t resell, white-label, or sublicense the service without written permission.</li>
                        <li>Don&apos;t abuse the free tier (e.g. creating many free workspaces to avoid paying).</li>
                        <li>Don&apos;t test for security vulnerabilities without written authorization. Responsible disclosure: see <a className="text-red-400 underline" href="/.well-known/security.txt">/.well-known/security.txt</a>.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">5. Payment</h2>
                    <p className="mt-3">
                        Paid plans bill monthly or annually in advance via Stripe. All payment data is
                        handled by Stripe — we never see card numbers. No refunds for partial months
                        unless required by law. You can cancel any time in your dashboard; your plan
                        stays active until the end of the current billing period.
                    </p>
                    <p className="mt-3">
                        Free tier: limited to 1 location, 3 users, 30-day archive. We may change free-tier
                        limits with 30 days&apos; notice. Prices for paid tiers may change with 30 days&apos; notice;
                        existing subscribers keep their price for the remainder of their current billing period.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">6. Trials and beta features</h2>
                    <p className="mt-3">
                        Trial periods (e.g., 14-day free trial on paid plans) end automatically and convert to a paid subscription
                        unless cancelled. Beta features may be unstable, modified, or removed without notice
                        and are excluded from any availability commitment.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">7. Availability</h2>
                    <p className="mt-3">
                        We target 99% monthly uptime but provide no formal SLA on Solo or Pro tiers.
                        Business tier customers may negotiate a written SLA. Planned maintenance is
                        announced via email and at <a className="text-red-400 underline" href="https://status.shopbayhq.com">status.shopbayhq.com</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">8. Suspension and termination</h2>
                    <p className="mt-3">
                        We may suspend or terminate your account immediately for violation of these terms,
                        non-payment after 14 days&apos; grace, or abusive use that materially impacts other customers.
                        On termination, you have 30 days to export your data before permanent deletion.
                        You may terminate at any time from your dashboard.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">9. Indemnification</h2>
                    <p className="mt-3">
                        You agree to indemnify and hold {BRAND.name} and {BRAND.founder} harmless from any
                        third-party claims arising from (a) your Customer Data, (b) your violation of these terms,
                        or (c) your violation of any law or third-party right.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">10. Disclaimer of warranties</h2>
                    <p className="mt-3">
                        The service is provided <strong>&ldquo;as is&rdquo;</strong> and <strong>&ldquo;as available&rdquo;</strong>
                        {" "}without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose,
                        and non-infringement. We don&apos;t warrant that the service will be uninterrupted, error-free, or perfectly secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">11. Limitation of liability</h2>
                    <p className="mt-3">
                        To the maximum extent permitted by law, {BRAND.name} is not liable for any indirect, incidental,
                        consequential, special, or exemplary damages, including lost profits, lost revenue, lost data, or business interruption,
                        even if advised of the possibility. Our total aggregate liability in any 12-month period is capped at the greater of
                        (a) the amount you paid us in that period, or (b) one hundred Canadian dollars (CAD $100).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">12. Force majeure</h2>
                    <p className="mt-3">
                        Neither party is liable for failure to perform due to causes beyond reasonable control,
                        including acts of God, government action, war, terrorism, civil unrest, internet outages,
                        ISP failures, or third-party service provider outages.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">13. Privacy</h2>
                    <p className="mt-3">
                        Our handling of personal information is governed by our{" "}
                        <a className="text-red-400 underline" href="/privacy">Privacy Policy</a>, which is incorporated by reference.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">14. Changes to these terms</h2>
                    <p className="mt-3">
                        We may update these terms. Material changes will be announced by email and posted here at least
                        30 days before taking effect. Continued use after the effective date constitutes acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">15. Governing law and jurisdiction</h2>
                    <p className="mt-3">
                        These terms are governed by the laws of the Province of Ontario and the federal laws of Canada
                        applicable therein, without regard to conflict-of-laws principles. The exclusive jurisdiction
                        for any dispute is the courts located in Toronto, Ontario.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">16. Severability and entire agreement</h2>
                    <p className="mt-3">
                        If any provision is found unenforceable, the remaining provisions stay in effect. These terms,
                        together with the Privacy Policy, constitute the entire agreement between you and {BRAND.name}
                        regarding the service and supersede any prior agreements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Contact</h2>
                    <p className="mt-3">
                        Questions: <a className="text-red-400 underline" href="mailto:hello@shopbayhq.com">hello@shopbayhq.com</a><br />
                        Legal: <a className="text-red-400 underline" href="mailto:legal@shopbayhq.com">legal@shopbayhq.com</a>
                    </p>
                </section>
            </div>
        </article>
    );
}
