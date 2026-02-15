import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Heraldex",
  description: "How Heraldex collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-2">Privacy Policy</h1>
          <p className="text-caption text-sable-500 mb-12">Effective February 15, 2026</p>

          <div className="prose-legal space-y-8 text-sable-300 text-body leading-relaxed">
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">1. Information We Collect</h2>
              <p>We collect the following categories of information:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sable-400">
                <li><strong className="text-sable-200">Account Data:</strong> Name, email address, and organization name when you register</li>
                <li><strong className="text-sable-200">Blazon Data:</strong> Design choices, registration records, and associated metadata</li>
                <li><strong className="text-sable-200">Payment Data:</strong> Billing information processed by our third-party payment provider; Heraldex does not store full card numbers</li>
                <li><strong className="text-sable-200">Usage Data:</strong> Pages visited, features used, device type, browser, and IP address</li>
                <li><strong className="text-sable-200">Communications:</strong> Support inquiries and correspondence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sable-400">
                <li>Provide, maintain, and improve the Service</li>
                <li>Process blazon registrations and on-chain transactions</li>
                <li>Handle payments and subscription management</li>
                <li>Send transactional notifications (registration confirmations, IP alerts)</li>
                <li>Detect and prevent fraud, abuse, and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">3. On-Chain Data</h2>
              <p>
                Blazon registrations are recorded on a public blockchain. On-chain records include your blazon
                design hash, registration timestamp, and a pseudonymous identifier. Blockchain records are
                permanent and cannot be deleted. You should consider this before registering a blazon. We do
                not publish personally identifiable information on-chain.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">4. Data Sharing</h2>
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sable-400">
                <li><strong className="text-sable-200">Service Providers:</strong> Payment processors, hosting infrastructure, analytics tools</li>
                <li><strong className="text-sable-200">Legal Requirements:</strong> When required by law, subpoena, or court order</li>
                <li><strong className="text-sable-200">Business Transfers:</strong> In connection with a merger, acquisition, or asset sale</li>
                <li><strong className="text-sable-200">Dispute Resolution:</strong> Limited disclosure to parties involved in blazon disputes, with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption in transit (TLS), encrypted
                storage for sensitive data, access controls, and regular security audits. No system is completely
                secure, and we cannot guarantee absolute security. We will notify affected users of any data
                breach as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">6. Cookies &amp; Tracking</h2>
              <p>
                We use essential cookies for authentication and session management. We use analytics cookies
                to understand how the Service is used and to improve performance. You can control cookie
                preferences through your browser settings. Disabling essential cookies may limit Service
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sable-400">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@heraladex.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  privacy@heraladex.com
                </a>.
                Note that on-chain data cannot be modified or deleted due to the immutable nature of blockchain records.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">8. Data Retention</h2>
              <p>
                We retain account data for the duration of your account plus 90 days after deletion. Payment
                records are retained as required by tax and financial reporting obligations. On-chain registration
                data is permanent. Usage data is retained for 24 months and then aggregated or deleted.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">9. International Transfers</h2>
              <p>
                Your data may be processed in the United States and other countries where our service providers
                operate. We ensure adequate protections are in place through standard contractual clauses or
                equivalent mechanisms for international data transfers.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">10. Children</h2>
              <p>
                The Service is not directed to individuals under 18. We do not knowingly collect personal
                information from children. If we become aware that we have collected data from a child, we
                will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Material changes will be communicated via email
                or in-platform notification at least 14 days before taking effect. The &quot;Effective&quot; date at the
                top of this page reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">12. Contact</h2>
              <p>
                For privacy-related questions or requests, contact us at{" "}
                <a href="mailto:privacy@heraladex.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  privacy@heraladex.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
