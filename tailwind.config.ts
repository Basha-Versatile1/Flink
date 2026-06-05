import type { Config } from "tailwindcss";

/**
 * Flink design system — clean, crisp, cyan.
 * Tokens mirror §5 of the brief. Change here to re-skin the whole site.
 */
const config: Config = {
  content: ["./src/**/*.{astro,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Primary cyan scale
        primary: {
          DEFAULT: "#06B6D4", // cyan
          hover: "#0891B2",
          deep: "#0E7490",
          light: "#22D3EE", // gradient end
        },
        // Ink / text
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
        },
        // Surfaces
        surface: {
          DEFAULT: "#FFFFFF",
          cyan: "#ECFEFF", // cyan-50 tint section
          slate: "#FAF7F2", // warm cream tint section (vastyn-style warmth)
          cream: "#FDFAF6", // softer warm wash (hero)
          dark: "#0B1120", // near-black section background
          "dark-2": "#111A2E", // raised card on dark sections
        },
        hairline: "#E2E8F0",
        trust: "#10B981", // success / trust accent — use sparingly
        // Secondary accent palette (cyan stays the brand; these add colour
        // to feature/service/pillar icons & tints, vastyn-style).
        accent: {
          violet: "#7C3AED",
          amber: "#D97706",
          emerald: "#059669",
          rose: "#E11D48",
          blue: "#2563EB",
        },
      },
      borderRadius: {
        card: "18px",
        pill: "9999px",
      },
      boxShadow: {
        // Flat, minimal depth — crisp hairlines do most of the work (vastyn-style).
        soft: "0 1px 2px rgba(15,23,42,0.04)",
        lift: "0 10px 30px -12px rgba(15,23,42,0.12)",
        ring: "0 0 0 1px #E2E8F0",
      },
      backgroundImage: {
        "cyan-gradient": "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)",
      },
      fontFamily: {
        // Self-hosted via @fontsource-variable/outfit (imported in Layout.astro)
        sans: ['"Outfit Variable"', "Outfit", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
