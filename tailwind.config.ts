import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#080B12",
        surface:  "#0D1220",
        elevated: "#131929",
        border:   "#1E2D47",
        cyan:     "#00D4FF",
        violet:   "#7B61FF",
        green:    "#00FF88",
        danger:   "#FF4C6A",
        text: {
          DEFAULT: "#F0F4FF",
          secondary: "#8892A4",
          muted:     "#4A5568",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)",
        "grad-hero":    "linear-gradient(135deg, #00D4FF, #7B61FF, #00FF88)",
        "grad-surface": "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,97,255,0.05))",
        "grad-card":    "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,97,255,0.08))",
        "grid-lines":
          "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "glow-cyan":   "0 0 30px rgba(0,212,255,0.3)",
        "glow-violet": "0 0 30px rgba(123,97,255,0.3)",
        "glow-sm":     "0 0 16px rgba(0,212,255,0.2)",
        "card":        "0 20px 60px rgba(0,0,0,0.4)",
      },
      animation: {
        "float":       "float 4s ease-in-out infinite",
        "pulse-glow":  "pulse-glow 2s ease-in-out infinite",
        "grad-shift":  "grad-shift 5s linear infinite",
        "blink":       "blink 1s step-end infinite",
        "spin-slow":   "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 10px rgba(0,212,255,0.4)" },
          "50%":     { boxShadow: "0 0 24px rgba(0,212,255,0.8)" },
        },
        "grad-shift": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
