import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Heraldex",
  description: "Heraldex is the identity platform for gaming clans, guilds, and organizations. Learn about our mission, team, and vision.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-6">About Heraldex</h1>

          <div className="space-y-10 text-sable-300 text-body leading-relaxed">
            {/* Mission */}
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">Our Mission</h2>
              <p>
                Heraldex gives gaming clans, guilds, sports teams, and community organizations the tools
                to build, own, and protect their visual identity. We believe that every group&mdash;from a
                five-player squad to a thousand-member guild&mdash;deserves the same caliber of identity
                infrastructure that Fortune 500 companies take for granted.
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">The Problem We Solve</h2>
              <p>
                Groups spend years building reputations around a logo or crest, only to discover their
                identity has been copied, their merch counterfeited, or their name claimed by someone else.
                Existing trademark systems are expensive, slow, and inaccessible to grassroots communities.
              </p>
              <p className="mt-3">
                Heraldex changes that by combining a purpose-built design tool with on-chain registration,
                automated IP monitoring, and a commerce layer that tracks royalties from day one.
              </p>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">How It Works</h2>
              <div className="space-y-4 mt-4">
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-cinzel font-bold text-sm">1</span>
                  <div>
                    <h3 className="text-sable-100 font-semibold mb-1">Design</h3>
                    <p className="text-sable-400">Use the blazon editor to choose your shield shape, tinctures, ordinaries, and charges. Preview your design in four render styles.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-cinzel font-bold text-sm">2</span>
                  <div>
                    <h3 className="text-sable-100 font-semibold mb-1">Register</h3>
                    <p className="text-sable-400">Lock your blazon on-chain with a timestamped, tamper-proof record of authorship.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-cinzel font-bold text-sm">3</span>
                  <div>
                    <h3 className="text-sable-100 font-semibold mb-1">Protect</h3>
                    <p className="text-sable-400">Receive alerts when similar designs appear elsewhere. Resolve disputes through our structured process.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-cinzel font-bold text-sm">4</span>
                  <div>
                    <h3 className="text-sable-100 font-semibold mb-1">Profit</h3>
                    <p className="text-sable-400">Sell authenticated merchandise through the Heraldex storefront with built-in royalty tracking.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Team */}
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">Our Team</h2>
              <p>
                Heraldex was founded by a team of gamers, designers, and blockchain engineers who were tired
                of watching communities lose control of the symbols they built their identities around. We&apos;re
                based in the United States with contributors worldwide, united by the conviction that digital
                identity should be ownable, verifiable, and profitable for its creators.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">What We Stand For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { title: "Ownership First", desc: "Your blazon is yours. We never claim rights to user-created designs." },
                  { title: "Accessible Protection", desc: "IP protection shouldn't require a legal department. We make it available to everyone." },
                  { title: "Transparency", desc: "On-chain records are public and verifiable. No hidden processes." },
                  { title: "Community Driven", desc: "Built by the communities we serve. Feature decisions are guided by user feedback." },
                ].map((v) => (
                  <div key={v.title} className="rounded-card border border-sable-700 bg-sable-800 p-5">
                    <h3 className="text-sable-100 font-semibold mb-1">{v.title}</h3>
                    <p className="text-sable-400 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center pt-4">
              <Button variant="primary" size="lg" href="/editor">
                Start Designing
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
