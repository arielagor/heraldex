"use client";

import { motion, type Variants } from "framer-motion";
import { PenTool, ShieldCheck, Zap } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Design",
    description:
      "Use our heraldic editor to build your emblem from scratch or start with a template. Choose your tinctures, place your charges, quarter your shield. No design skills required.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Register",
    description:
      "Mint your blazon on-chain with a single click. You receive timestamped, tamper-proof proof of creation — admissible as evidence in a growing number of jurisdictions.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Activate",
    description:
      "Grant differentiated rights to your members. Order authenticated merch through our fulfillment network. Every item is verified. Every transaction is backed by IP protection.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding" aria-label="How It Works">
      <div className="container-main">
        <FadeIn className="text-center mb-16">
          <h2 className="text-h2 md:text-display font-bold mb-4">
            Three Steps to Legendary Status
          </h2>
          <p className="text-body-lg text-sable-400 max-w-xl mx-auto">
            From napkin sketch to on-chain ownership in under twenty minutes.
          </p>
        </FadeIn>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-accent-500/0 via-accent-500/30 to-accent-500/0" />

          {/* Mobile connector line */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-accent-500/0 via-accent-500/20 to-accent-500/0" />

          {steps.map((step) => (
            <motion.div key={step.number} variants={child}>
              <Card className="relative text-center h-full" hover>
                {/* Step number */}
                <span className="text-[64px] font-cinzel font-bold text-accent-500/10 absolute top-4 right-6 leading-none select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-card bg-primary-600/20 mb-5">
                  <step.icon size={28} className="text-primary-400" />
                </div>

                <h3 className="text-h3 font-semibold mb-3">{step.title}</h3>
                <p className="text-body text-sable-300">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
