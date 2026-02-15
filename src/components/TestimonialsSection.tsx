"use client";

import { motion, type Variants } from "framer-motion";
import { User } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "We spent two years arguing over who owned our clan logo after a co-founder left. If Heraldex had existed then, that argument would have been settled on Day 1.",
    name: "Marcus K.",
    title: "Founder, Phoenix Vanguard",
    game: "League of Legends",
  },
  {
    quote:
      "The cadency system is what sold me. My officers have distinct versions of our crest. Everyone knows their rank at a glance — on Discord, on merch, everywhere.",
    name: "Yuki T.",
    title: "Guild Master, Stormbreak",
    game: "World of Warcraft",
  },
  {
    quote:
      "We were paying a designer every time we needed our emblem on something new. Now we register once and the specification handles the rest — any style, any product.",
    name: "Priya S.",
    title: "Brand Lead, Apex Collective",
    game: "Valorant",
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

export default function TestimonialsSection() {
  return (
    <section className="section-padding" aria-label="Testimonials">
      <div className="container-main">
        <FadeIn className="text-center mb-16">
          <h2 className="text-h2 md:text-display font-bold mb-4">
            Built for Clans That Mean Business
          </h2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={child}>
              <div className="relative h-full rounded-card p-6 bg-sable-800/50 glass">
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 left-6 text-[80px] font-cinzel font-bold text-accent-500/10 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="relative z-10 text-body-lg italic text-sable-200 mb-6 pt-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sable-700 flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-sable-400" />
                  </div>
                  <div>
                    <p className="text-body font-semibold text-sable-50 font-inter">{t.name}</p>
                    <p className="text-caption text-sable-400">
                      {t.title} · {t.game}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
