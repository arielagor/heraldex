import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers — Heraldex",
  description: "Join the Heraldex team. We're building the identity platform for gaming clans, guilds, and organizations.",
};

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote (US)",
    type: "Full-time",
    description:
      "Build and ship features across the Heraldex platform — from the blazon editor frontend to on-chain registration APIs. You'll work with Next.js, TypeScript, and smart contracts.",
  },
  {
    title: "Product Designer",
    location: "Remote (US / EU)",
    type: "Full-time",
    description:
      "Own the design of the Heraldex editor and dashboard. Turn complex heraldic concepts into intuitive interactions that work for gamers who've never heard of a tincture.",
  },
  {
    title: "Blockchain Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Design and implement the on-chain registration layer. Optimize gas costs, ensure immutability, and build the smart contracts that underpin blazon ownership.",
  },
  {
    title: "Community Manager",
    location: "Remote",
    type: "Full-time",
    description:
      "Grow and nurture the Heraldex community across Discord, Twitter, and in-game channels. You'll be the bridge between our users and the product team.",
  },
  {
    title: "Content Writer",
    location: "Remote",
    type: "Contract",
    description:
      "Write blog posts, guides, and documentation that explain heraldry, blockchain registration, and IP protection in plain language. Gaming and esports knowledge is a plus.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-3">Careers</h1>
          <p className="text-body-lg text-sable-400 mb-6">
            We&apos;re building the identity layer for digital communities. Join us.
          </p>

          {/* Why join */}
          <section className="mb-12">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-4">Why Heraldex</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Remote First", desc: "Work from anywhere. We care about output, not office hours." },
                { title: "Early Stage Impact", desc: "Shape a product from the ground up. Your decisions define what ships." },
                { title: "Competitive Comp", desc: "Salary + equity. We pay market rates and share ownership." },
                { title: "Gamers Welcome", desc: "Our team plays together. Clan nights are real and attendance is encouraged." },
              ].map((perk) => (
                <div key={perk.title} className="rounded-card border border-sable-700 bg-sable-800 p-5">
                  <h3 className="text-sable-100 font-semibold mb-1">{perk.title}</h3>
                  <p className="text-sable-400 text-sm">{perk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open roles */}
          <section>
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-6">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((role) => (
                <div
                  key={role.title}
                  className="rounded-card border border-sable-700 bg-sable-800 p-6 hover:border-sable-600 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-sable-50 font-semibold text-lg">{role.title}</h3>
                    <span className="text-caption text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-caption text-sable-500 mb-2">{role.location}</p>
                  <p className="text-body text-sable-400">{role.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Apply */}
          <section className="mt-12 text-center">
            <p className="text-body-lg text-sable-300 mb-2">
              Don&apos;t see your role? We&apos;re always looking for talented people.
            </p>
            <p className="text-body text-sable-400">
              Send your resume and a note about what you&apos;d build at{" "}
              <a href="mailto:careers@heraladex.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                careers@heraladex.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
