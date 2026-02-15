"use client";

import { motion, type Variants } from "framer-motion";
import { Crown, GitBranch, Store, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: Crown,
    title: "Blockchain-Backed Registration",
    description:
      "Your blazon is minted as an ERC-1155 token on Polygon. The specification, timestamp, and ownership record are immutable.",
  },
  {
    icon: GitBranch,
    title: "Cadency & Rank Management",
    description:
      "Grant differentiated versions to officers, members, and allies. Permissions auto-revoke when terms end.",
  },
  {
    icon: Store,
    title: "Authenticated Merch Storefront",
    description:
      "Members order verified gear. Fulfillment by Printful/Gelato. You earn royalties on every sale.",
  },
  {
    icon: ShieldCheck,
    title: "IP Protection Guarantee",
    description:
      "Monitoring, automated enforcement, dispute resolution. Premium tiers include litigation coverage.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="section-padding" aria-label="Features">
      <div className="container-main">
        <FadeIn className="text-center mb-16">
          <h2 className="text-h2 md:text-display font-bold mb-4">
            Everything Your Identity Needs. Nothing It Doesn&apos;t.
          </h2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={child}>
              <Card hover className="h-full">
                <div className="w-12 h-12 rounded-card bg-primary-600/20 flex items-center justify-center mb-5">
                  <feature.icon size={24} className="text-primary-400" />
                </div>
                <h3 className="text-h3 font-semibold mb-3 text-body-lg">{feature.title}</h3>
                <p className="text-body text-sable-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
