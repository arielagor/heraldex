"use client";

import { Shield, Lock, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const trustBadges = [
  { icon: CheckCircle, label: "Polygon Verified" },
  { icon: Shield, label: "IPFS Stored" },
  { icon: Lock, label: "IP Protected" },
];

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Get Started">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(36,81,160,0.3) 0%, transparent 50%), radial-gradient(ellipse at 60% 40%, rgba(212,168,40,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container-main relative z-10 text-center">
        <FadeIn>
          <h2 className="text-h2 md:text-display font-bold mb-4">Every Legend Needs a Crest</h2>
          <p className="text-body-lg text-sable-300 max-w-xl mx-auto mb-8">
            Join the clans already claiming their identity. Design your blazon today — your first creation is free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="accent" size="xl" href="/editor">
              Start Your Blazon — Free
            </Button>
            <Button variant="secondary" size="xl" href="/#pricing">
              View Pricing
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-caption text-sable-500">
                <badge.icon size={14} />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
