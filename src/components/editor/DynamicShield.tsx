"use client";

import { useId } from "react";
import {
  type BlazonState,
  type RenderStyle,
  type ChargeType,
  type OrdinaryType,
  getTincture,
  SHIELD_PATH,
  SHIELD_INNER,
  ordinaryPaths,
  chargePaths,
  chargeIsPolygon,
  getChargePositions,
} from "@/lib/heraldry";

interface DynamicShieldProps {
  state: BlazonState;
  style: RenderStyle;
  className?: string;
}

export default function DynamicShield({ state, style, className = "" }: DynamicShieldProps) {
  const uid = useId().replace(/:/g, "");

  const field = getTincture(state.fieldTincture);
  const ordTincture = getTincture(state.ordinaryTincture);
  const chgTincture = getTincture(state.chargeTincture);
  const positions = getChargePositions(state.chargeCount, state.ordinary);

  const isMinimal = style === "Minimal";
  const isPixel = style === "Pixel Art";
  const isModern = style === "Modern";

  const fieldFill = isMinimal ? "none" : `url(#field-${uid})`;
  const fieldStroke = isMinimal ? field.hex : `url(#border-${uid})`;
  const ordFill = isMinimal ? "none" : isModern ? ordTincture.hex : `url(#ord-${uid})`;
  const ordStroke = isMinimal ? ordTincture.hex : "none";
  const chgFill = isMinimal ? "none" : isModern ? chgTincture.hex : `url(#chg-${uid})`;
  const chgStroke = isMinimal ? chgTincture.hex : "none";

  return (
    <div
      className={className}
      style={isPixel ? { imageRendering: "pixelated", filter: "url(#pixelate)" } : undefined}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 280 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Heraldic shield preview"
      >
        <defs>
          {/* Field gradient */}
          <linearGradient id={`field-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isModern ? field.hex : field.gradient[0]} />
            <stop offset="100%" stopColor={isModern ? field.hex : field.gradient[1]} />
          </linearGradient>

          {/* Border gradient (gold-style for Traditional) */}
          <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0DC94" />
            <stop offset="30%" stopColor="#E5C45C" />
            <stop offset="50%" stopColor="#D4A828" />
            <stop offset="70%" stopColor="#E5C45C" />
            <stop offset="100%" stopColor="#A8860C" />
          </linearGradient>

          {/* Ordinary gradient */}
          <linearGradient id={`ord-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={ordTincture.gradient[0]} />
            <stop offset="50%" stopColor={ordTincture.hex} />
            <stop offset="100%" stopColor={ordTincture.gradient[1]} />
          </linearGradient>

          {/* Charge gradient */}
          <linearGradient id={`chg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={chgTincture.gradient[0]} />
            <stop offset="50%" stopColor={chgTincture.hex} />
            <stop offset="100%" stopColor={chgTincture.gradient[1]} />
          </linearGradient>

          {/* Glow filter for Traditional */}
          {style === "Traditional" && (
            <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor={ordTincture.hex} floodOpacity="0.25" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}

          {/* Shield clip path */}
          <clipPath id={`clip-${uid}`}>
            <path d={SHIELD_PATH} />
          </clipPath>
        </defs>

        {/* Shield body */}
        <path
          d={SHIELD_PATH}
          fill={fieldFill}
          stroke={fieldStroke}
          strokeWidth={isMinimal ? 2 : 3}
        />

        {/* Inner border (Traditional only) */}
        {style === "Traditional" && (
          <path
            d={SHIELD_INNER}
            fill="none"
            stroke={`url(#border-${uid})`}
            strokeWidth="1"
            opacity="0.3"
          />
        )}

        {/* Ordinary */}
        {state.ordinary !== "none" && (
          <path
            d={ordinaryPaths[state.ordinary as Exclude<OrdinaryType, "none">]}
            fill={ordFill}
            stroke={ordStroke}
            strokeWidth={isMinimal ? 2 : 0}
            clipPath={`url(#clip-${uid})`}
            filter={style === "Traditional" ? `url(#glow-${uid})` : undefined}
          />
        )}

        {/* Charges */}
        {state.charge !== "none" &&
          (() => {
            const chargeKey = state.charge as Exclude<ChargeType, "none">;
            const isPolygon = chargeIsPolygon[chargeKey];
            return positions.map(([cx, cy], i) => (
              <g
                key={i}
                transform={`translate(${cx}, ${cy})`}
                clipPath={`url(#clip-${uid})`}
                filter={style === "Traditional" ? `url(#glow-${uid})` : undefined}
              >
                {isPolygon ? (
                  <polygon
                    points={chargePaths[chargeKey]}
                    fill={chgFill}
                    stroke={chgStroke}
                    strokeWidth={isMinimal ? 1.5 : 0}
                  />
                ) : (
                  <path
                    d={chargePaths[chargeKey]}
                    fill={chgFill}
                    stroke={chgStroke}
                    strokeWidth={isMinimal ? 1.5 : 0}
                  />
                )}
              </g>
            ));
          })()}

        {/* Highlight overlay (Traditional depth) */}
        {style === "Traditional" && (
          <path d={SHIELD_PATH} fill="white" opacity="0.03" />
        )}
      </svg>
    </div>
  );
}
