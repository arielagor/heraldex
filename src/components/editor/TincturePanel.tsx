"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  type BlazonState,
  type OrdinaryType,
  type ChargeType,
  type ShieldShape,
  tinctures,
  shieldShapes,
} from "@/lib/heraldry";

interface TincturePanelProps {
  state: BlazonState;
  onChange: (patch: Partial<BlazonState>) => void;
}

const ordinaries: { value: OrdinaryType; label: string }[] = [
  { value: "none", label: "None" },
  { value: "chevron", label: "Chevron" },
  { value: "fess", label: "Fess" },
  { value: "pale", label: "Pale" },
  { value: "bend", label: "Bend" },
  { value: "cross", label: "Cross" },
  { value: "saltire", label: "Saltire" },
  { value: "chief", label: "Chief" },
];

const charges: { value: ChargeType; label: string }[] = [
  { value: "none", label: "None" },
  { value: "mullet", label: "Mullet" },
  { value: "lion", label: "Lion" },
  { value: "eagle", label: "Eagle" },
  { value: "fleur-de-lis", label: "Fleur" },
  { value: "sword", label: "Sword" },
  { value: "dragon", label: "Dragon" },
  { value: "tower", label: "Tower" },
  { value: "crescent", label: "Crescent" },
];

function Section({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sable-700/50 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-3 px-3 text-xs font-semibold uppercase tracking-wider text-sable-400 hover:text-sable-200 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {open && <div className="px-3 pb-3">{children}</div>}
    </div>
  );
}

function TinctureSwatches({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (name: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {tinctures.map((t) => (
        <button
          key={t.name}
          className={`group relative w-full aspect-square rounded-md transition-all ${
            selected === t.name
              ? "ring-2 ring-accent-500 ring-offset-1 ring-offset-sable-900 scale-105"
              : "hover:scale-105"
          }`}
          style={{ backgroundColor: t.hex }}
          onClick={() => onSelect(t.name)}
          title={t.name}
        >
          <span className="absolute inset-x-0 -bottom-0.5 text-[9px] text-center text-sable-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {t.name}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function TincturePanel({ state, onChange }: TincturePanelProps) {
  return (
    <div className="w-full lg:w-56 bg-sable-800/80 border border-sable-700/50 rounded-card overflow-hidden flex-shrink-0">
      <div className="px-3 py-2 border-b border-sable-700/50">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-sable-300 font-inter">
          Blazon Editor
        </h3>
      </div>

      {/* Shield Shape */}
      <Section title="Shape">
        <div className="grid grid-cols-3 gap-1">
          {(Object.keys(shieldShapes) as ShieldShape[]).map((key) => (
            <button
              key={key}
              className={`text-[10px] py-1.5 px-1 rounded text-center transition-all ${
                state.shieldShape === key
                  ? "bg-accent-500/20 text-accent-400 ring-1 ring-accent-500/50"
                  : "bg-sable-700/50 text-sable-400 hover:bg-sable-700 hover:text-sable-200"
              }`}
              onClick={() => onChange({ shieldShape: key })}
            >
              {shieldShapes[key].label}
            </button>
          ))}
        </div>
      </Section>

      {/* Field Tincture */}
      <Section title="Field">
        <TinctureSwatches
          selected={state.fieldTincture}
          onSelect={(name) => onChange({ fieldTincture: name })}
        />
      </Section>

      {/* Ordinary */}
      <Section title="Ordinary">
        <div className="grid grid-cols-4 gap-1 mb-2">
          {ordinaries.map((o) => (
            <button
              key={o.value}
              className={`text-[10px] py-1.5 px-1 rounded text-center transition-all ${
                state.ordinary === o.value
                  ? "bg-accent-500/20 text-accent-400 ring-1 ring-accent-500/50"
                  : "bg-sable-700/50 text-sable-400 hover:bg-sable-700 hover:text-sable-200"
              }`}
              onClick={() => onChange({ ordinary: o.value })}
            >
              {o.label}
            </button>
          ))}
        </div>
        {state.ordinary !== "none" && (
          <>
            <p className="text-[10px] text-sable-500 mb-1.5">Ordinary Tincture</p>
            <TinctureSwatches
              selected={state.ordinaryTincture}
              onSelect={(name) => onChange({ ordinaryTincture: name })}
            />
          </>
        )}
      </Section>

      {/* Charge */}
      <Section title="Charge">
        <div className="grid grid-cols-3 gap-1 mb-2">
          {charges.map((c) => (
            <button
              key={c.value}
              className={`text-[10px] py-1.5 px-1 rounded text-center transition-all ${
                state.charge === c.value
                  ? "bg-accent-500/20 text-accent-400 ring-1 ring-accent-500/50"
                  : "bg-sable-700/50 text-sable-400 hover:bg-sable-700 hover:text-sable-200"
              }`}
              onClick={() => onChange({ charge: c.value })}
            >
              {c.label}
            </button>
          ))}
        </div>

        {state.charge !== "none" && (
          <>
            {/* Count slider */}
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[10px] text-sable-500 flex-shrink-0">Count</label>
              <input
                type="range"
                min={1}
                max={5}
                value={state.chargeCount}
                onChange={(e) => onChange({ chargeCount: Number(e.target.value) })}
                className="flex-1 h-1 accent-accent-500"
              />
              <span className="text-xs text-sable-300 w-4 text-center font-mono">
                {state.chargeCount}
              </span>
            </div>

            <p className="text-[10px] text-sable-500 mb-1.5">Charge Tincture</p>
            <TinctureSwatches
              selected={state.chargeTincture}
              onSelect={(name) => onChange({ chargeTincture: name })}
            />
          </>
        )}
      </Section>
    </div>
  );
}
