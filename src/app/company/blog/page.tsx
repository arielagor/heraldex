import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog — Heraldex",
  description: "News, guides, and insights from the Heraldex team on digital heraldry, identity protection, and community building.",
};

const posts = [
  {
    title: "Introducing Heraldex: Digital Heraldry for the Modern Era",
    excerpt:
      "Today we launch Heraldex, the first platform that lets gaming clans, guilds, and organizations design, register, and protect their visual identity on-chain.",
    date: "Feb 15, 2026",
    category: "Announcement",
    slug: "#",
  },
  {
    title: "A Brief History of Heraldry — and Why It Matters for Gaming",
    excerpt:
      "From medieval battlefields to esports arenas, heraldic symbols have always served the same purpose: identifying who you are and what you stand for.",
    date: "Feb 12, 2026",
    category: "Culture",
    slug: "#",
  },
  {
    title: "How On-Chain Registration Protects Your Clan's Identity",
    excerpt:
      "Blockchain timestamps provide tamper-proof evidence of authorship. Here's how Heraldex uses on-chain records to give your blazon a verifiable history.",
    date: "Feb 10, 2026",
    category: "Technology",
    slug: "#",
  },
  {
    title: "The Blazon Editor: Design Your Coat of Arms in Minutes",
    excerpt:
      "A walkthrough of the Heraldex editor — from choosing your shield shape and tinctures to exporting high-resolution assets for your Discord, website, and merch.",
    date: "Feb 8, 2026",
    category: "Product",
    slug: "#",
  },
  {
    title: "Understanding Cadency: How Heraldex Manages Member Ranks",
    excerpt:
      "In traditional heraldry, cadency marks distinguish branches of a family. Heraldex brings this concept to digital organizations with tiered member identities.",
    date: "Feb 5, 2026",
    category: "Guide",
    slug: "#",
  },
  {
    title: "Merch That Means Something: Authenticated Merchandise with Royalty Tracking",
    excerpt:
      "Counterfeit merch dilutes your brand. Heraldex's commerce layer ensures every item sold is verified and every sale is tracked back to the original creator.",
    date: "Feb 3, 2026",
    category: "Commerce",
    slug: "#",
  },
];

const categoryColors: Record<string, string> = {
  Announcement: "text-accent-500",
  Culture: "text-primary-400",
  Technology: "text-primary-300",
  Product: "text-accent-400",
  Guide: "text-primary-500",
  Commerce: "text-accent-300",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-4xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-3">Blog</h1>
          <p className="text-body-lg text-sable-400 mb-12">
            News, guides, and insights on digital heraldry and identity protection.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-card border border-sable-700 bg-sable-800 p-6 hover:border-sable-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-caption font-semibold uppercase tracking-wider ${categoryColors[post.category] ?? "text-sable-400"}`}>
                    {post.category}
                  </span>
                  <span className="text-caption text-sable-600">&middot;</span>
                  <time className="text-caption text-sable-500">{post.date}</time>
                </div>
                <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-2 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-body text-sable-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" href="/editor">
              Try the Editor
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
