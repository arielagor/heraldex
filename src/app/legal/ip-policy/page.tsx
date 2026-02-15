import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Intellectual Property Policy — Heraldex",
  description: "Heraldex intellectual property policy covering blazon ownership, dispute resolution, and infringement reporting.",
};

export default function IPPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-2">Intellectual Property Policy</h1>
          <p className="text-caption text-sable-500 mb-12">Effective February 15, 2026</p>

          <div className="prose-legal space-y-8 text-sable-300 text-body leading-relaxed">
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">1. Overview</h2>
              <p>
                Heraldex exists to help organizations create, register, and protect their heraldic identities.
                This Intellectual Property Policy describes how blazon ownership works on our platform, how we
                handle disputes, and how to report infringement. Heraldex is committed to respecting the
                intellectual property rights of all users and third parties.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">2. Blazon Ownership</h2>
              <p>
                When you create a blazon using the Heraldex editor, you own the original creative elements of
                your design. Registration on-chain establishes a timestamped public record of your claim, providing
                evidence of first use that can support (but does not replace) formal intellectual property filings.
              </p>
              <p className="mt-3">
                Heraldex does not claim ownership of user-created blazons. We retain a limited license to display,
                reproduce, and distribute your blazon as necessary to operate the Service (e.g., rendering in
                the editor, displaying in search results, printing on merchandise you authorize).
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">3. Registration vs. Trademark</h2>
              <p>
                On-chain blazon registration through Heraldex is <strong className="text-sable-200">not</strong> a
                trademark or other government-issued intellectual property right. Registration provides a verifiable
                timestamp and proof of authorship. For formal legal protection, we recommend consulting an
                intellectual property attorney about trademark registration in your jurisdiction. Banner and
                Sovereign tier subscribers have access to multi-jurisdiction trademark support.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">4. IP Monitoring</h2>
              <p>
                Vanguard tier and above subscribers receive IP monitoring alerts. Our system scans public sources
                for designs that are visually similar to your registered blazon and notifies you of potential
                infringement. Monitoring is automated and provided as-is; Heraldex does not guarantee detection
                of all instances of unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">5. Dispute Resolution</h2>
              <p>
                If two or more parties claim rights to a similar blazon, Heraldex provides a structured dispute
                resolution process available to Banner tier and above subscribers:
              </p>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-sable-400">
                <li><strong className="text-sable-200">Filing:</strong> The claimant submits a dispute via the Heraldex dashboard with evidence of prior use or original creation</li>
                <li><strong className="text-sable-200">Notification:</strong> The respondent is notified and given 14 days to respond</li>
                <li><strong className="text-sable-200">Review:</strong> Heraldex reviews on-chain registration timestamps, design similarity analysis, and submitted evidence</li>
                <li><strong className="text-sable-200">Resolution:</strong> Heraldex issues a non-binding recommendation within 30 days of the response deadline</li>
              </ol>
              <p className="mt-3">
                Heraldex&apos;s dispute resolution is a facilitative process, not a legal proceeding. Decisions
                are non-binding recommendations. Either party may pursue formal legal action independently.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">6. Infringement Reporting</h2>
              <p>
                If you believe a blazon registered on Heraldex infringes your intellectual property rights,
                you may file an infringement report by emailing{" "}
                <a href="mailto:ip@heraladex.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  ip@heraladex.com
                </a>{" "}
                with the following information:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sable-400">
                <li>Your name and contact information</li>
                <li>A description of the intellectual property you claim is being infringed</li>
                <li>Identification of the infringing blazon on Heraldex (URL or registration ID)</li>
                <li>Evidence of your ownership or authorization to act on behalf of the owner</li>
                <li>A statement of good faith that the use is not authorized</li>
              </ul>
              <p className="mt-3">
                We will review reports within 10 business days and take appropriate action, which may include
                removal or suspension of the infringing registration.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">7. Counter-Notification</h2>
              <p>
                If your blazon is removed or restricted due to an infringement report and you believe the removal
                was in error, you may submit a counter-notification with evidence supporting your claim. The original
                reporter will be notified, and the blazon may be reinstated if the dispute is not escalated within
                14 days.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">8. Repeat Infringers</h2>
              <p>
                Heraldex reserves the right to suspend or terminate accounts that are subject to repeated valid
                infringement claims. We maintain discretion in evaluating patterns of behavior and the severity
                of violations.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">9. Heraldex Platform IP</h2>
              <p>
                The Heraldex name, logo, software, website design, and documentation are the intellectual property
                of Heraldex Inc. Users are granted a limited, non-exclusive license to use the Service as
                described in the Terms of Service. No rights to Heraldex&apos;s own intellectual property are
                transferred through use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">10. Contact</h2>
              <p>
                For IP-related questions, contact us at{" "}
                <a href="mailto:ip@heraladex.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  ip@heraladex.com
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
