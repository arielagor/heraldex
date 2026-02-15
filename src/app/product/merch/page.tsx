import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Shield, CheckCircle, TrendingUp, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Merch Storefront — Heraldex",
  description: "Sell authenticated merchandise featuring your registered blazon. Built-in royalty tracking, counterfeit protection, and one-click storefront setup.",
};

const features = [
  {
    icon: Shield,
    title: "Authenticated Products",
    description:
      "Every item sold through a Heraldex storefront is linked to a verified on-chain blazon registration. Buyers know the merch is official.",
  },
  {
    icon: TrendingUp,
    title: "Royalty Tracking",
    description:
      "Track every sale back to the original creator. Revenue splits are transparent and paid out automatically based on your plan's terms.",
  },
  {
    icon: Lock,
    title: "Counterfeit Protection",
    description:
      "Each product includes a verification tag that buyers can scan to confirm authenticity. Unauthorized sellers are flagged by our IP monitoring system.",
  },
  {
    icon: CheckCircle,
    title: "One-Click Setup",
    description:
      "Connect your registered blazon and choose product types. Heraldex handles production, fulfillment, and shipping through our partner network.",
  },
];

const products = [
  "T-Shirts & Hoodies",
  "Stickers & Patches",
  "Mugs & Drinkware",
  "Phone Cases",
  "Posters & Prints",
  "Flags & Banners",
  "Embroidered Hats",
  "Custom Jerseys",
];

export default function MerchPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-4">
              Merch That Means Something
            </h1>
            <p className="text-body-lg text-sable-400 max-w-2xl mx-auto">
              Sell authenticated merchandise featuring your registered blazon. Every item is verified,
              every sale is tracked, and counterfeits are flagged automatically.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {features.map((feat) => (
              <div key={feat.title} className="rounded-card border border-sable-700 bg-sable-800 p-6">
                <feat.icon size={24} className="text-accent-500 mb-3" />
                <h2 className="text-sable-50 font-semibold mb-2">{feat.title}</h2>
                <p className="text-sm text-sable-400">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Product types */}
          <section className="mb-14">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-5 text-center">Available Product Types</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {products.map((p) => (
                <div key={p} className="rounded-card border border-sable-700 bg-sable-800/50 px-4 py-3 text-center">
                  <span className="text-sm text-sable-300">{p}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="mb-14">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-5 text-center">How It Works</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { step: "1", title: "Register", desc: "Register your blazon on-chain through the Heraldex editor." },
                { step: "2", title: "Configure", desc: "Choose products and set pricing in your merch dashboard." },
                { step: "3", title: "Sell", desc: "Share your storefront link. We handle production and shipping." },
                { step: "4", title: "Earn", desc: "Track sales and receive automatic royalty payouts." },
              ].map((s) => (
                <div key={s.step} className="flex-1 text-center">
                  <span className="inline-flex w-10 h-10 rounded-full bg-accent-500/20 text-accent-500 items-center justify-center font-cinzel font-bold mb-2">
                    {s.step}
                  </span>
                  <h3 className="text-sable-100 font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-sable-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing note */}
          <section className="rounded-card border border-sable-700 bg-sable-800 p-8 text-center mb-10">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">Available on Banner &amp; Above</h2>
            <p className="text-body text-sable-400 mb-5 max-w-lg mx-auto">
              The merch storefront with royalty tracking is included with Banner ($249/yr), Sovereign,
              and Legacy plans. All plans include the design editor.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="primary" size="lg" href="/#pricing">
                View Pricing
              </Button>
              <Button variant="secondary" size="lg" href="/editor">
                Start Designing
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
