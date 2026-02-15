"use client";

import { type RenderStyle } from "@/lib/heraldry";

interface RenderStyleBarProps {
  style: RenderStyle;
  onChange: (style: RenderStyle) => void;
}

const styles: RenderStyle[] = ["Traditional", "Modern", "Minimal", "Pixel Art"];

export default function RenderStyleBar({ style, onChange }: RenderStyleBarProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {styles.map((s) => (
        <button
          key={s}
          className={`px-3 py-1.5 rounded-pill text-xs font-medium transition-all ${
            style === s
              ? "bg-accent-500/20 text-accent-400 ring-1 ring-accent-500/50"
              : "bg-sable-800/60 text-sable-400 hover:bg-sable-700/60 hover:text-sable-200"
          }`}
          onClick={() => onChange(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
