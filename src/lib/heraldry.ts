// ── Types ──────────────────────────────────────────────────────
export interface TinctureData {
  name: string;
  hex: string;
  gradient: [string, string]; // top, bottom stops
  type: "metal" | "colour";
}

export type OrdinaryType =
  | "none"
  | "chevron"
  | "fess"
  | "pale"
  | "bend"
  | "cross"
  | "saltire"
  | "chief";

export type ChargeType =
  | "none"
  | "mullet"
  | "lion"
  | "eagle"
  | "fleur-de-lis"
  | "sword"
  | "dragon"
  | "tower"
  | "crescent";

export type RenderStyle = "Traditional" | "Modern" | "Minimal" | "Pixel Art";

export interface BlazonState {
  fieldTincture: string; // tincture name key
  ordinary: OrdinaryType;
  ordinaryTincture: string;
  charge: ChargeType;
  chargeTincture: string;
  chargeCount: number; // 1-5
}

// ── Default State ──────────────────────────────────────────────
export const defaultBlazon: BlazonState = {
  fieldTincture: "Azure",
  ordinary: "chevron",
  ordinaryTincture: "Or",
  charge: "mullet",
  chargeTincture: "Or",
  chargeCount: 3,
};

// ── Tincture Data ──────────────────────────────────────────────
export const tinctures: TinctureData[] = [
  { name: "Or", hex: "#D4A828", gradient: ["#F0DC94", "#A8860C"], type: "metal" },
  { name: "Argent", hex: "#E8E8E8", gradient: ["#FFFFFF", "#C8C8C8"], type: "metal" },
  { name: "Azure", hex: "#2451A0", gradient: ["#2451A0", "#1B3A6B"], type: "colour" },
  { name: "Gules", hex: "#CC3333", gradient: ["#E04040", "#991F1F"], type: "colour" },
  { name: "Sable", hex: "#1E222F", gradient: ["#2A2E3D", "#0C0E13"], type: "colour" },
  { name: "Vert", hex: "#2E7D32", gradient: ["#3DA142", "#1B5E20"], type: "colour" },
  { name: "Purpure", hex: "#7B1FA2", gradient: ["#9C27B0", "#5C1680"], type: "colour" },
  { name: "Tenne", hex: "#E65100", gradient: ["#FF6D00", "#BF360C"], type: "colour" },
  { name: "Sanguine", hex: "#880E4F", gradient: ["#AD1457", "#6A0036"], type: "colour" },
];

export function getTincture(name: string): TinctureData {
  return tinctures.find((t) => t.name === name) ?? tinctures[2]; // default Azure
}

// ── Shield Path ────────────────────────────────────────────────
export const SHIELD_PATH =
  "M140 4 L268 50 Q272 52 272 56 L272 170 Q272 220 240 262 Q208 304 144 332 Q142 333 140 333 Q138 333 136 332 Q72 304 40 262 Q8 220 8 170 L8 56 Q8 52 12 50 Z";

export const SHIELD_INNER =
  "M140 16 L258 58 Q260 59 260 61 L260 170 Q260 216 230 254 Q202 290 142 316 Q141 316.5 140 316.5 Q139 316.5 138 316 Q78 290 50 254 Q20 216 20 170 L20 61 Q20 59 22 58 Z";

// ── Ordinary Paths (all inside 280x336 shield viewBox) ────────
export const ordinaryPaths: Record<Exclude<OrdinaryType, "none">, string> = {
  chevron: "M140 120 L230 200 L218 218 L140 148 L62 218 L50 200 Z",
  fess: "M20 145 L260 145 L260 195 L20 195 Z",
  pale: "M110 20 L170 20 L170 320 L110 320 Z",
  bend: "M30 30 L60 20 L260 280 L230 290 Z",
  cross: "M110 20 L170 20 L170 145 L260 145 L260 195 L170 195 L170 320 L110 320 L110 195 L20 195 L20 145 L110 145 Z",
  saltire: "M30 30 L50 15 L140 130 L230 15 L250 30 L155 155 L250 280 L230 300 L140 185 L50 300 L30 280 L125 155 Z",
  chief: "M8 56 Q8 52 12 50 L140 4 L268 50 Q272 52 272 56 L272 120 L8 120 Z",
};

// ── Charge SVG Paths (centered at 0,0, size ~36) ──────────────
export const chargePaths: Record<Exclude<ChargeType, "none">, string> = {
  mullet:
    "M0,-18 5.3,-5.6 18,-5.6 8.5,3.4 11.1,16.2 0,9 -11.1,16.2 -8.5,3.4 -18,-5.6 -5.3,-5.6",
  lion: "M0,-16 C8,-16 14,-10 14,-2 C14,4 10,8 6,12 L10,16 L-2,14 L-10,16 L-6,12 C-10,8 -14,4 -14,-2 C-14,-10 -8,-16 0,-16 Z",
  eagle:
    "M0,-18 L6,-10 L18,-8 L12,0 L16,12 L0,6 L-16,12 L-12,0 L-18,-8 L-6,-10 Z",
  "fleur-de-lis":
    "M0,-18 C4,-14 6,-8 6,-4 C10,-8 16,-8 16,-2 C16,4 10,6 6,4 L6,14 L10,18 L-10,18 L-6,14 L-6,4 C-10,6 -16,4 -16,-2 C-16,-8 -10,-8 -6,-4 C-6,-8 -4,-14 0,-18 Z",
  sword:
    "M-2,-18 L2,-18 L2,4 L8,8 L8,12 L2,10 L2,18 L-2,18 L-2,10 L-8,12 L-8,8 L-2,4 Z",
  dragon:
    "M0,-16 C6,-14 12,-8 12,-2 C12,2 10,6 8,10 L14,16 L4,14 C2,16 0,18 -2,16 L-4,14 L-14,16 L-8,10 C-10,6 -12,2 -12,-2 C-12,-8 -6,-14 0,-16 Z",
  tower:
    "M-12,-18 L-12,-12 L-8,-12 L-8,-18 L-4,-18 L-4,-12 L4,-12 L4,-18 L8,-18 L8,-12 L12,-12 L12,-18 L16,-18 L16,-8 L12,-8 L12,14 L16,14 L16,18 L-16,18 L-16,14 L-12,14 L-12,-8 L-16,-8 L-16,-18 Z M-4,4 L4,4 L4,14 L-4,14 Z",
  crescent:
    "M0,-16 C10,-16 18,-8 18,2 C18,12 10,18 0,18 C-10,18 -18,12 -18,2 C-18,-8 -10,-16 0,-16 Z M0,-8 C-6,-8 -10,-4 -10,2 C-10,8 -6,12 0,12 C6,12 10,8 10,2 C10,-4 6,-8 0,-8 Z",
};

// ── Charge Placement (cx, cy) positions for 1-5 charges ───────
export function getChargePositions(
  count: number,
  ordinary: OrdinaryType
): [number, number][] {
  // Positions depend on ordinary to avoid overlap
  const hasChevron = ordinary === "chevron";
  const hasChief = ordinary === "chief";
  const hasFess = ordinary === "fess";

  // Base positions for different counts
  if (count === 1) {
    if (hasChevron) return [[140, 260]];
    if (hasChief) return [[140, 200]];
    if (hasFess) return [[140, 260]];
    return [[140, 170]];
  }
  if (count === 2) {
    if (hasChevron) return [[90, 260], [190, 260]];
    if (hasChief) return [[90, 200], [190, 200]];
    return [[90, 180], [190, 180]];
  }
  if (count === 3) {
    if (hasChevron) return [[140, 80], [90, 240], [190, 240]];
    if (hasChief) return [[140, 200], [90, 260], [190, 260]];
    return [[140, 100], [90, 220], [190, 220]];
  }
  if (count === 4) {
    if (hasChevron) return [[90, 80], [190, 80], [90, 260], [190, 260]];
    return [[90, 110], [190, 110], [90, 240], [190, 240]];
  }
  // 5
  if (hasChevron) return [[140, 60], [70, 100], [210, 100], [90, 260], [190, 260]];
  return [[140, 90], [70, 160], [210, 160], [90, 260], [190, 260]];
}

// ── Blazon Text Generator ──────────────────────────────────────
export function generateBlazonText(state: BlazonState): string {
  const parts: string[] = [];

  // Field
  parts.push(state.fieldTincture);

  // Ordinary
  if (state.ordinary !== "none") {
    parts.push(`a ${capitalize(state.ordinary)} ${state.ordinaryTincture}`);
  }

  // Charges
  if (state.charge !== "none") {
    const chargeName = state.charge === "fleur-de-lis" ? "Fleur-de-lis" : capitalize(state.charge);
    const count = state.chargeCount;
    const plural =
      count > 1
        ? state.charge === "fleur-de-lis"
          ? "Fleurs-de-lis"
          : chargeName + "s"
        : chargeName;
    const countWord = count === 1 ? "a" : numberWords[count] ?? String(count);
    parts.push(`${countWord} ${plural} ${state.chargeTincture}`);
  }

  return parts.join(", ") + ".";
}

const numberWords: Record<number, string> = {
  2: "two",
  3: "three",
  4: "four",
  5: "five",
};

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
