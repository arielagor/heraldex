"use client";

import { Image, Layers, Palette, FileCode } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import BlazonShield from "@/components/BlazonShield";

const tinctures = [
  { name: "Or", color: "#D4A828" },
  { name: "Argent", color: "#E8E8E8" },
  { name: "Azure", color: "#2451A0" },
  { name: "Gules", color: "#CC3333" },
  { name: "Sable", color: "#1E222F" },
  { name: "Vert", color: "#2E7D32" },
  { name: "Purpure", color: "#7B1FA2" },
  { name: "Tenne", color: "#E65100" },
  { name: "Sanguine", color: "#880E4F" },
];

const renderStyles = ["Traditional", "Modern", "Minimal", "Pixel Art"];

const callouts = [
  {
    icon: Image,
    title: "100+ charges",
    description: "Lions, eagles, dragons, swords, custom uploads",
  },
  {
    icon: Palette,
    title: "Authentic tinctures",
    description: "The heraldic color system, built in",
  },
  {
    icon: Layers,
    title: "Multiple render styles",
    description: "Traditional, modern, minimal, pixel art",
  },
  {
    icon: FileCode,
    title: "Auto-generated specification",
    description: "Machine-readable blazon format",
  },
];

export default function EditorPreview() {
  return (
    <section className="section-padding" aria-label="Editor Preview">
      <div className="container-main">
        <FadeIn className="text-center mb-16">
          <h2 className="text-h2 md:text-display font-bold mb-4">
            A Thousand Years of Tradition. One Powerful Editor.
          </h2>
          <p className="text-body-lg text-sable-400 max-w-2xl mx-auto">
            Heraldry has formalized group identity since the 12th century. Our editor brings that system to your screen.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Editor mock — left side */}
          <FadeIn direction="left">
            <div className="bg-sable-800 rounded-card border border-sable-700 overflow-hidden shadow-card">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-sable-700 bg-sable-900">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-caption text-sable-500 font-inter">Heraldex Editor — New Blazon</span>
              </div>

              <div className="flex">
                {/* Left toolbar — tinctures */}
                <div className="w-14 border-r border-sable-700 p-2 flex flex-col items-center gap-2 bg-sable-900/50">
                  {tinctures.map((t) => (
                    <button
                      key={t.name}
                      className="w-8 h-8 rounded-lg border border-sable-600 hover:border-sable-400 transition-colors"
                      style={{ backgroundColor: t.color }}
                      title={t.name}
                      aria-label={`Tincture: ${t.name}`}
                    />
                  ))}
                </div>

                {/* Center canvas */}
                <div className="flex-1 flex items-center justify-center py-8 px-4 min-h-[300px] bg-sable-800">
                  <div className="relative">
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-10"
                      style={{ background: "radial-gradient(circle, #2451A0, transparent)" }}
                    />
                    <BlazonShield size={180} className="relative z-10" />
                  </div>
                </div>

                {/* Right panel — spec */}
                <div className="w-52 border-l border-sable-700 p-3 bg-sable-900/50 hidden sm:block">
                  <span className="text-xs text-sable-500 uppercase tracking-wider font-inter font-medium">
                    Specification
                  </span>
                  <div className="mt-2 p-3 rounded-lg bg-sable-950 border border-sable-700">
                    <code className="text-xs font-mono text-primary-300 leading-relaxed block">
                      Azure, a chevron Or between three mullets Argent
                    </code>
                  </div>

                  <span className="text-xs text-sable-500 uppercase tracking-wider font-inter font-medium mt-4 block">
                    Properties
                  </span>
                  <div className="mt-2 space-y-1.5 text-xs text-sable-400 font-inter">
                    <div className="flex justify-between">
                      <span>Field</span>
                      <span className="text-primary-300">Azure</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ordinary</span>
                      <span className="text-primary-300">Chevron</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Charges</span>
                      <span className="text-primary-300">3 Mullets</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom bar — render styles */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-sable-700 bg-sable-900">
                <span className="text-xs text-sable-500 font-inter mr-2">Style:</span>
                {renderStyles.map((style, i) => (
                  <span
                    key={style}
                    className={`px-3 py-1 rounded-pill text-xs font-inter transition-colors cursor-pointer ${
                      i === 0
                        ? "bg-accent-500 text-sable-950 font-medium"
                        : "bg-sable-700 text-sable-400 hover:bg-sable-600"
                    }`}
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Feature callouts — right side */}
          <div className="space-y-6">
            {callouts.map((item, i) => (
              <FadeIn key={item.title} direction="right" delay={i * 100}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-card bg-primary-600/20 flex items-center justify-center">
                    <item.icon size={22} className="text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-semibold text-sable-50 mb-1">{item.title}</h3>
                    <p className="text-body text-sable-400">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn direction="right" delay={500}>
              <div className="pt-4">
                <Button variant="accent" size="lg" href="/editor">
                  Try the Editor — No Account Needed
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
