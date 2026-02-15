"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const tiers = [
  {
    name: "Scout",
    price: "Free",
    period: "",
    description: "For clans exploring their identity",
    features: [
      "Full design editor access",
      "Watermarked exports",
      "Community features",
    ],
    cta: "Start Designing",
    ctaVariant: "secondary" as const,
    ctaHref: "/editor",
    badge: null,
    highlighted: false,
  },
  {
    name: "Vanguard",
    price: "$79",
    period: "then $39/yr",
    description: "For clans ready to make it official",
    features: [
      "On-chain blazon registration",
      "Unwatermarked high-res exports",
      "1 cadency tier (Leader vs. Member)",
      "IP monitoring alerts",
      "Discord bot integration",
    ],
    cta: "Claim Your Blazon",
    ctaVariant: "primary" as const,
    ctaHref: "/editor",
    badge: null,
    highlighted: false,
  },
  {
    name: "Banner",
    price: "$249",
    period: "then $149/yr",
    description: "For organizations that run on identity",
    features: [
      "Everything in Vanguard",
      "5 cadency tiers (full hierarchy)",
      "Dispute resolution access",
      "Analytics dashboard",
      "Merch storefront with royalty tracking",
    ],
    cta: "Upgrade to Banner",
    ctaVariant: "accent" as const,
    ctaHref: "/editor",
    badge: "MOST POPULAR",
    highlighted: true,
  },
  {
    name: "Sovereign",
    price: "$2,499",
    period: "then $1,499/yr",
    description: "For institutions that demand the best",
    features: [
      "Everything in Banner",
      "Unlimited cadency tiers",
      "Dedicated support",
      "Custom API integrations",
      "Litigation coverage",
    ],
    cta: "Contact Us",
    ctaVariant: "secondary" as const,
    ctaHref: "#",
    badge: null,
    highlighted: false,
  },
  {
    name: "Legacy",
    price: "$15,000+",
    period: "custom",
    description: "For families with generational vision",
    features: [
      "Commissioned bespoke design",
      "Multi-jurisdiction trademark support",
      "Private encrypted registration",
      "White-glove onboarding",
    ],
    cta: "Request Consultation",
    ctaVariant: "secondary" as const,
    ctaHref: "#",
    badge: null,
    highlighted: false,
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding" aria-label="Pricing">
      <div className="container-main">
        <FadeIn className="text-center mb-16">
          <h2 className="text-h2 md:text-display font-bold mb-4">Stake Your Claim</h2>
          <p className="text-body-lg text-sable-400 max-w-2xl mx-auto">
            Every tier includes on-chain registration, IP monitoring, and access to the design editor.
          </p>
        </FadeIn>

        {/* Pricing cards — horizontal scroll on tablet, grid on desktop */}
        <motion.div
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={child}
              className={`flex-shrink-0 w-[280px] lg:w-auto snap-center ${
                tier.highlighted ? "lg:scale-[1.03] lg:z-10" : ""
              }`}
            >
              <div
                className={`
                  relative h-full rounded-card p-6 flex flex-col
                  bg-sable-800 border
                  ${
                    tier.highlighted
                      ? "border-accent-500 border-t-2 animate-glow-pulse"
                      : "border-sable-700"
                  }
                `}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="accent">{tier.badge}</Badge>
                  </div>
                )}

                {/* Tier name */}
                <h3 className="text-body-lg font-semibold text-sable-50 mb-1 font-inter">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-h2 md:text-h1 font-cinzel font-bold text-accent-500">
                    {tier.price}
                  </span>
                </div>
                {tier.period && (
                  <p className="text-caption text-sable-500 mb-3">{tier.period}</p>
                )}

                {/* Description */}
                <p className="text-caption text-sable-400 mb-5">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-sable-300">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-accent-500" : "text-primary-400"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={tier.ctaVariant} size="lg" className="w-full" href={tier.ctaHref}>
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub-text */}
        <FadeIn className="text-center mt-10">
          <p className="text-body-lg text-sable-400">
            Not sure which tier? Start free. Upgrade anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
