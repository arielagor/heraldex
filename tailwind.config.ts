import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E8F0FB",
          300: "#7BA3E0",
          400: "#3B6FCC",
          500: "#2451A0",
          600: "#1B3A6B",
        },
        accent: {
          100: "#FBF5E1",
          300: "#F0DC94",
          400: "#E5C45C",
          500: "#D4A828",
          600: "#A8860C",
        },
        sable: {
          50: "#F7F7F9",
          100: "#EDEEF2",
          200: "#DFE1E8",
          300: "#B8BCC9",
          400: "#8A91A5",
          500: "#5A6178",
          700: "#2C3244",
          800: "#1E222F",
          900: "#151821",
          950: "#0C0E13",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "72px",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        display: ["56px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h1: ["40px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["32px", { lineHeight: "1.2" }],
        h3: ["24px", { lineHeight: "1.3" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.6" }],
        caption: ["14px", { lineHeight: "1.5" }],
      },
      borderRadius: {
        card: "16px",
        button: "8px",
        pill: "9999px",
        input: "8px",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.3)",
        "gold-glow": "0 0 24px rgba(212,168,40,0.25)",
        "blue-glow": "0 0 24px rgba(36,81,160,0.3)",
      },
      keyframes: {
        blazonFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,168,40,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(212,168,40,0.3)" },
        },
      },
      animation: {
        "blazon-float": "blazonFloat 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
