"use client";

import { useState, useCallback } from "react";
import { type BlazonState, type RenderStyle, defaultBlazon } from "@/lib/heraldry";
import DynamicShield from "./DynamicShield";
import TincturePanel from "./TincturePanel";
import SpecificationPanel from "./SpecificationPanel";
import RenderStyleBar from "./RenderStyleBar";

export default function EditorPage() {
  const [state, setState] = useState<BlazonState>(defaultBlazon);
  const [renderStyle, setRenderStyle] = useState<RenderStyle>("Traditional");

  const handleChange = useCallback((patch: Partial<BlazonState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  return (
    <div className="min-h-screen bg-sable-950 pt-20">
      {/* Desktop layout */}
      <div className="hidden lg:flex container-main gap-4 py-6 items-start">
        {/* Left panel */}
        <TincturePanel state={state} onChange={handleChange} />

        {/* Center canvas — sticky so it stays visible while scrolling panels */}
        <div className="flex-1 flex flex-col items-center gap-6 sticky top-24 self-start">
          <div className="w-full max-w-[360px] aspect-[280/336]">
            <DynamicShield state={state} style={renderStyle} className="w-full h-full" />
          </div>
          <RenderStyleBar style={renderStyle} onChange={setRenderStyle} />
        </div>

        {/* Right panel */}
        <SpecificationPanel state={state} />
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col px-4 py-4 gap-4">
        {/* Shield — sticky at top on mobile */}
        <div className="sticky top-16 z-20 bg-sable-950 pb-2">
          <div className="w-full max-w-[280px] mx-auto aspect-[280/336]">
            <DynamicShield state={state} style={renderStyle} className="w-full h-full" />
          </div>
          <div className="mt-2">
            <RenderStyleBar style={renderStyle} onChange={setRenderStyle} />
          </div>
        </div>

        {/* Controls */}
        <TincturePanel state={state} onChange={handleChange} />

        {/* Specification */}
        <SpecificationPanel state={state} />
      </div>
    </div>
  );
}
