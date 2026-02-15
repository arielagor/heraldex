import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Heraldex",
  description: "Heraldex terms of service governing use of the platform, blazon registration, and commerce features.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-2">Terms of Service</h1>
          <p className="text-caption text-sable-500 mb-12">Effective February 15, 2026</p>

          <div className="prose-legal space-y-8 text-sable-300 text-body leading-relaxed">
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Heraldex platform (&quot;Service&quot;), including our website at heraladex.com,
                the blazon editor, registration tools, and any related services, you agree to be bound by these Terms
                of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">2. Description of Service</h2>
              <p>
                Heraldex provides a digital heraldry platform that enables users to design heraldic blazons, register
                them on-chain, manage organizational identity through cadency systems, monitor intellectual property,
                and commercialize designs through authenticated merchandise. The Service includes both free and
                paid tiers as described on our pricing page.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">3. Eligibility</h2>
              <p>
                You must be at least 18 years old or the age of legal majority in your jurisdiction to use the Service.
                By registering an account, you represent that the information you provide is accurate and complete,
                and that you have the authority to bind any organization on whose behalf you are acting.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">4. Account Registration</h2>
              <p>
                Certain features require account registration. You are responsible for maintaining the confidentiality
                of your login credentials and for all activities conducted under your account. You agree to notify
                Heraldex immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">5. Blazon Registration &amp; Ownership</h2>
              <p>
                When you register a blazon through the Service, you receive a timestamped on-chain record of your
                design. This registration establishes a public claim of authorship and usage rights but does not
                constitute a trademark or other government-issued intellectual property right. You retain ownership
                of original designs you create using the editor. Heraldex does not claim ownership of your blazons.
              </p>
              <p className="mt-3">
                You represent that any blazon you register does not infringe on the existing intellectual property
                rights of any third party. Heraldex reserves the right to remove registrations that are found to
                violate these Terms or applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">6. Subscription &amp; Payments</h2>
              <p>
                Paid plans are billed at the rates specified on the pricing page at the time of purchase. Initial
                fees and renewal fees are non-refundable except where required by applicable law. You may cancel
                your subscription at any time; cancellation takes effect at the end of the current billing period.
                Heraldex reserves the right to modify pricing with 30 days&apos; notice to existing subscribers.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">7. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sable-400">
                <li>Register blazons that infringe third-party intellectual property</li>
                <li>Use the Service for fraudulent purposes or misrepresentation</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble the Service</li>
                <li>Use automated tools to scrape or harvest data from the platform</li>
                <li>Interfere with the security or integrity of the Service</li>
                <li>Register blazons containing hate symbols, obscene material, or content that violates applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">8. Merchandise &amp; Commerce</h2>
              <p>
                Heraldex may facilitate the sale of merchandise bearing registered blazons. All merchandise
                transactions are subject to applicable consumer protection laws. Heraldex acts as a platform
                facilitator and is not the direct seller of physical goods. Royalty tracking and payouts are
                governed by the terms of your subscription tier.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">9. Dispute Resolution</h2>
              <p>
                Disputes between users regarding blazon ownership or alleged infringement are handled through
                the Heraldex dispute resolution process, available to Banner tier and above subscribers. Heraldex
                acts as a neutral facilitator and does not provide legal advice. Users are encouraged to seek
                independent legal counsel for complex intellectual property matters.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Heraldex shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or related to your use of the Service.
                Our total liability for any claim shall not exceed the amount you paid to Heraldex in the twelve
                months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">11. Modifications</h2>
              <p>
                Heraldex may update these Terms from time to time. We will notify registered users of material
                changes via email or in-platform notification at least 14 days before they take effect. Continued
                use of the Service after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, United States, without regard to
                conflict of law principles. Any disputes arising under these Terms shall be resolved in the state
                or federal courts located in Delaware.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">13. Contact</h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <a href="mailto:legal@heraladex.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  legal@heraladex.com
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
