"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Gamepad2, Trophy, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import BlazonShield from "@/components/BlazonShield";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const ease = [0.25, 0.46, 0.45, 0.94] as const;
  const bounceEase = [0.34, 1.56, 0.64, 1] as const;

  const wordAnimation = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.6,
        ease,
      },
    }),
  };

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease },
    },
  });

  const scaleIn = (delay: number) => ({
    hidden: { opacity: 0, scale: prefersReduced ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.5, ease: bounceEase },
    },
  });

  const heroWords = ["Your", "Symbol.", "Your", "Dominion."];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Radial blue glow */}
        <div
          className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #1B3A6B 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(184,188,201,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(184,188,201,0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-main relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-24 pb-12">
        {/* Text content — left side */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Headline */}
          <h1 className="text-[40px] md:text-display-xl font-bold leading-[1.05] tracking-tight mb-6">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordAnimation}
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.8)}
            className="text-body-lg text-sable-300 max-w-lg mx-auto lg:mx-0 mb-8"
          >
            Create, register, and protect your clan&apos;s identity — then turn it into merch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn(1.0)}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
          >
            <Button variant="accent" size="xl" href="/editor">
              Design Your Blazon — Free
            </Button>
            <Button variant="secondary" size="xl" href="/#how-it-works">
              See How It Works
            </Button>
          </motion.div>

          {/* Social proof micro-bar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(1.2)}
            className="flex items-center gap-3 justify-center lg:justify-start text-caption text-sable-500"
          >
            <span>Trusted by 5,000+ clans</span>
            <span className="w-px h-4 bg-sable-700" />
            <div className="flex items-center gap-2">
              <MessageSquare size={14} className="text-sable-500" />
              <Gamepad2 size={14} className="text-sable-500" />
              <Trophy size={14} className="text-sable-500" />
            </div>
          </motion.div>
        </div>

        {/* Shield — right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-shrink-0 relative"
        >
          {/* Gold glow behind shield */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #D4A828 0%, transparent 70%)",
            }}
          />
          <BlazonShield size={300} animate className="relative z-10" />
        </motion.div>
      </div>
    </section>
  );
}
