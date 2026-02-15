interface BlazonShieldProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function BlazonShield({ size = 280, className = "", animate = false }: BlazonShieldProps) {
  return (
    <div className={`${animate ? "animate-blazon-float" : ""} ${className}`}>
      <svg
        width={size}
        height={size * 1.2}
        viewBox="0 0 280 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Heraldex blazon shield — Azure field with gold chevron and three gold mullets"
      >
        <defs>
          {/* Gold metallic gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0DC94" />
            <stop offset="30%" stopColor="#E5C45C" />
            <stop offset="50%" stopColor="#D4A828" />
            <stop offset="70%" stopColor="#E5C45C" />
            <stop offset="100%" stopColor="#A8860C" />
          </linearGradient>

          {/* Azure field gradient */}
          <linearGradient id="azureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2451A0" />
            <stop offset="100%" stopColor="#1B3A6B" />
          </linearGradient>

          {/* Glow filter for gold elements */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#D4A828" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle inner shadow */}
          <filter id="innerShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feOffset dx="0" dy="2" result="offset" />
            <feComposite in="SourceGraphic" in2="offset" operator="over" />
          </filter>

          {/* Shield clip path */}
          <clipPath id="shieldClip">
            <path d="M140 4 L268 50 Q272 52 272 56 L272 170 Q272 220 240 262 Q208 304 144 332 Q142 333 140 333 Q138 333 136 332 Q72 304 40 262 Q8 220 8 170 L8 56 Q8 52 12 50 Z" />
          </clipPath>
        </defs>

        {/* Shield body */}
        <path
          d="M140 4 L268 50 Q272 52 272 56 L272 170 Q272 220 240 262 Q208 304 144 332 Q142 333 140 333 Q138 333 136 332 Q72 304 40 262 Q8 220 8 170 L8 56 Q8 52 12 50 Z"
          fill="url(#azureGradient)"
          stroke="url(#goldGradient)"
          strokeWidth="3"
        />

        {/* Inner border at 30% opacity */}
        <path
          d="M140 16 L258 58 Q260 59 260 61 L260 170 Q260 216 230 254 Q202 290 142 316 Q141 316.5 140 316.5 Q139 316.5 138 316 Q78 290 50 254 Q20 216 20 170 L20 61 Q20 59 22 58 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Chevron */}
        <path
          d="M140 120 L230 200 L218 218 L140 148 L62 218 L50 200 Z"
          fill="url(#goldGradient)"
          filter="url(#goldGlow)"
        />

        {/* Star/Mullet function - 5 pointed star */}
        {/* Top mullet (above chevron) */}
        <g filter="url(#goldGlow)" transform="translate(140, 80)">
          <polygon
            points="0,-20 5.9,-6.2 20,-6.2 9.5,3.8 12.4,18 0,10 -12.4,18 -9.5,3.8 -20,-6.2 -5.9,-6.2"
            fill="url(#goldGradient)"
          />
        </g>

        {/* Bottom-left mullet (below chevron) */}
        <g filter="url(#goldGlow)" transform="translate(90, 240)">
          <polygon
            points="0,-18 5.3,-5.6 18,-5.6 8.5,3.4 11.1,16.2 0,9 -11.1,16.2 -8.5,3.4 -18,-5.6 -5.3,-5.6"
            fill="url(#goldGradient)"
          />
        </g>

        {/* Bottom-right mullet (below chevron) */}
        <g filter="url(#goldGlow)" transform="translate(190, 240)">
          <polygon
            points="0,-18 5.3,-5.6 18,-5.6 8.5,3.4 11.1,16.2 0,9 -11.1,16.2 -8.5,3.4 -18,-5.6 -5.3,-5.6"
            fill="url(#goldGradient)"
          />
        </g>

        {/* Subtle highlight overlay for depth */}
        <path
          d="M140 4 L268 50 Q272 52 272 56 L272 170 Q272 220 240 262 Q208 304 144 332 Q142 333 140 333 Q138 333 136 332 Q72 304 40 262 Q8 220 8 170 L8 56 Q8 52 12 50 Z"
          fill="url(#azureGradient)"
          opacity="0"
        />
      </svg>
    </div>
  );
}
