"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { type BlazonState, generateBlazonText, getTincture } from "@/lib/heraldry";

interface SpecificationPanelProps {
  state: BlazonState;
}

function DetailRow({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-[11px] text-sable-500">{label}</span>
      <div className="flex items-center gap-1.5">
        {color && (
          <span
            className="w-3 h-3 rounded-sm border border-sable-600"
            style={{ backgroundColor: color }}
          />
        )}
        <span className="text-[11px] text-sable-200 font-mono">{value}</span>
      </div>
    </div>
  );
}

export default function SpecificationPanel({ state }: SpecificationPanelProps) {
  const [copied, setCopied] = useState(false);
  const blazonText = generateBlazonText(state);

  const field = getTincture(state.fieldTincture);
  const ordTincture = state.ordinary !== "none" ? getTincture(state.ordinaryTincture) : null;
  const chgTincture = state.charge !== "none" ? getTincture(state.chargeTincture) : null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blazonText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="w-full lg:w-56 bg-sable-800/80 border border-sable-700/50 rounded-card overflow-hidden flex-shrink-0">
      <div className="px-3 py-2 border-b border-sable-700/50">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sable-300 font-inter">
          Specification
        </h3>
      </div>

      {/* Blazon text */}
      <div className="px-3 py-3 border-b border-sable-700/50">
        <div className="bg-sable-900/60 rounded-lg p-3 mb-2">
          <p className="text-sm text-accent-400 font-mono leading-relaxed italic">
            {blazonText}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-sable-400 hover:text-accent-400 transition-colors"
        >
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
          {copied ? "Copied!" : "Copy Blazon"}
        </button>
      </div>

      {/* Breakdown */}
      <div className="px-3 py-2">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-sable-500 mb-1">
          Details
        </p>
        <div className="divide-y divide-sable-700/30">
          <DetailRow label="Field" value={state.fieldTincture} color={field.hex} />
          {state.ordinary !== "none" && ordTincture && (
            <>
              <DetailRow label="Ordinary" value={state.ordinary} />
              <DetailRow
                label="Ord. Tincture"
                value={state.ordinaryTincture}
                color={ordTincture.hex}
              />
            </>
          )}
          {state.charge !== "none" && chgTincture && (
            <>
              <DetailRow label="Charge" value={state.charge} />
              <DetailRow label="Count" value={String(state.chargeCount)} />
              <DetailRow
                label="Chg. Tincture"
                value={state.chargeTincture}
                color={chgTincture.hex}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
