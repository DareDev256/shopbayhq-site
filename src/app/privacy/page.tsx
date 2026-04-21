import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
    title: `Privacy Policy — ${BRAND.name}`,
    description: `How ${BRAND.name} handles your data. PIPEDA-compliant, Canadian-hosted.`,
};

export default function PrivacyPage() {
    return (
        <article className="mx-auto max-w-3xl px-6 py-20 prose-invert">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-2 text-sm text-zinc-500">Effective: April 21, 2026 · Version 1.0</p>

            <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed">
                <p>
                    {BRAND.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by {BRAND.founder} in Toronto, Ontario, Canada.
                    This policy describes what we collect, why, how long we keep it, who we share it with,
                    and your rights. It is written to comply with Canada&apos;s Personal Information Protection
                    and Electronic Documents Act (PIPEDA) and Quebec&apos;s Law 25.
                </p>
                <p>
                    <strong>Short version:</strong> We collect the minimum needed to run your shop.
                    We don&apos;t sell your data. We don&apos;t train AI models on it. Your data stays in North America.
                    You can export or delete everything at any time.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-white">1. Privacy Officer</h2>
                    <p className="mt-3">
                        Our designated Privacy Officer under PIPEDA is {BRAND.founder}. All privacy requests,
                        concerns, and breach inquiries:{" "}
                        <a className="text-red-400 underline" href="mailto:privacy@shopbayhq.com">privacy@shopbayhq.com</a>.
                        We respond within 30 calendar days.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">2. What we collect</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li><strong>Account data</strong> — name, email, bcrypt-hashed password or Google OAuth subject ID, role, organization.</li>
                        <li><strong>Workspace data</strong> — vehicles (VIN, plate, make/model), advisors, lots, service types, intake photos, staff hour entries, comments — created by you inside your workspace.</li>
                        <li><strong>Staff PINs</strong> — stored hashed (bcrypt), never recoverable in plaintext.</li>
                        <li><strong>Billing data</strong> — handled entirely by Stripe. We store only a Stripe customer ID and subscription status. We never see your card number.</li>
                        <li><strong>Operational telemetry</strong> — request logs (path, status code, timing), error stack traces (via Sentry), aggregated performance metrics. Authorization headers and cookies are automatically scrubbed before logs leave our servers.</li>
                        <li><strong>Session cookie</strong> — HTTP-only, Secure, SameSite=Strict.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">3. What we don&apos;t do</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>We do not sell, rent, or share your data with advertisers.</li>
                        <li>We do not train AI or machine learning models on your workspace data.</li>
                        <li>We do not read your workspace data except to diagnose an issue you&apos;ve reported.</li>
                        <li>We do not share data between tenants — every query is scoped to your organization.</li>
                        <li>We do not use tracking cookies. No Google Analytics, no Facebook Pixel, no ad networks.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">4. Where your data lives</h2>
                    <p className="mt-3">
                        Application data is stored in managed PostgreSQL hosted in Canada (Azure East US 2 via Neon with Canadian data-residency option on request).
                        Photos are stored in Cloudflare R2, encrypted at rest.
                        Backups are encrypted and kept in the same region.
                        We do not transfer personal data outside North America.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">5. How long we keep it</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li><strong>Active account data</strong> — for as long as your subscription is active.</li>
                        <li><strong>Staff hours</strong> — retained for 3 years (Ontario Employment Standards Act requirement), auto-archived after, permanently deleted at 7 years.</li>
                        <li><strong>Vehicle records + photos</strong> — retained for 1 year after the vehicle is archived, then deleted.</li>
                        <li><strong>Session records</strong> — expire after 7 days of inactivity.</li>
                        <li><strong>Audit logs</strong> — retained 7 years for legal defensibility.</li>
                        <li><strong>Backups</strong> — rolling 30 days, encrypted.</li>
                        <li><strong>When you cancel</strong> — data kept 30 days (in case you return), then purged. Export available any time before purge.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">6. Subprocessors</h2>
                    <p className="mt-3">We use a minimal set of vendors, each under contract:</p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li><strong>Cloudflare</strong> (USA / global edge) — DNS, CDN, tunnel, R2 storage, WAF, bot protection.</li>
                        <li><strong>Neon</strong> (USA) — managed PostgreSQL database.</li>
                        <li><strong>Stripe</strong> (USA) — payment processing. PCI-DSS Level 1.</li>
                        <li><strong>Sentry</strong> (USA) — error tracking. PII scrubbing enabled.</li>
                        <li><strong>Vercel</strong> (USA) — marketing site hosting only. No customer workspace data touches Vercel.</li>
                        <li><strong>Google</strong> (USA, optional) — only if you sign in with Google OAuth; they share email and name.</li>
                    </ul>
                    <p className="mt-3 text-sm text-zinc-400">
                        We review this list quarterly. Material changes will be announced via email.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">7. Your rights under PIPEDA &amp; Law 25</h2>
                    <p className="mt-3">You have the right to:</p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li><strong>Access</strong> — request a copy of all personal information we hold about you.</li>
                        <li><strong>Portability</strong> — receive your data in a structured, commonly used, machine-readable format (JSON + CSV).</li>
                        <li><strong>Correction</strong> — request corrections to inaccurate information.</li>
                        <li><strong>Deletion</strong> — request permanent deletion of your account and all associated data.</li>
                        <li><strong>Withdrawal</strong> — withdraw consent to processing (ends your subscription).</li>
                        <li><strong>Complaint</strong> — file a complaint with the Office of the Privacy Commissioner of Canada (<a className="text-red-400 underline" href="https://www.priv.gc.ca">priv.gc.ca</a>) or, in Quebec, the Commission d&apos;accès à l&apos;information.</li>
                    </ul>
                    <p className="mt-3">
                        Email <a className="text-red-400 underline" href="mailto:privacy@shopbayhq.com">privacy@shopbayhq.com</a>
                        {" "}with your request. We respond within 30 days at no charge.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">8. Security</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                        <li>HTTPS everywhere (TLS 1.3, HSTS preload, A+ SSL Labs rating).</li>
                        <li>Passwords hashed with bcrypt at cost 12+; staff PINs hashed separately.</li>
                        <li>Cloudflare WAF blocking OWASP top-10 attack patterns at the edge.</li>
                        <li>Every database query scoped by organization to prevent cross-tenant leakage.</li>
                        <li>Secrets stored in macOS Keychain (dev) and Cloudflare-encrypted environment (prod).</li>
                        <li>Rate limits on authentication endpoints; Turnstile bot challenge on signup.</li>
                        <li>All admin access logged to an immutable audit trail.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">9. Breach notification</h2>
                    <p className="mt-3">
                        If we detect a security breach involving your personal information that poses a real risk of significant harm,
                        we will notify you and the Office of the Privacy Commissioner of Canada as soon as feasible,
                        and in any event within 72 hours of confirming the breach. We maintain a record of all breaches as required by PIPEDA.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">10. Children</h2>
                    <p className="mt-3">
                        {BRAND.name} is a business tool. We do not knowingly collect information from anyone under 16.
                        If you believe we have, contact us and we will delete it.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">11. Changes to this policy</h2>
                    <p className="mt-3">
                        We may update this policy. Material changes will be announced by email at least 30 days before taking effect,
                        giving you time to export your data or cancel if you disagree. The effective date at the top of this page always reflects the current version.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white">Contact</h2>
                    <p className="mt-3">
                        Privacy Officer: {BRAND.founder}<br />
                        Email: <a className="text-red-400 underline" href="mailto:privacy@shopbayhq.com">privacy@shopbayhq.com</a><br />
                        Postal: available on request to verified account holders<br />
                        Jurisdiction: Ontario, Canada
                    </p>
                </section>
            </div>
        </article>
    );
}
