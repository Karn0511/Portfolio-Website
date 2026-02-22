/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Elite Navy Palette
        navy: {
          950: "#020617", // Soft black layers
          900: "#0a0e1a", // Deep midnight
          800: "#0f172a", // Secondary navy
          700: "#1e293b", // Lighter accents
        },
        // Liquid Gold System
        gold: {
          500: "#D4AF37", // Base Gold
          400: "#EAB308", // Bright Gold
          300: "#F4D03F", // Soft Gold
          glow: "rgba(212, 175, 55, 0.3)",
        },
        // Teal/Blue Highlights
        cyan: {
          500: "#2DD4BF", // Soft Teal
          600: "#0891B2", // Deeper Cyan
        },
        // Text hierarchy
        slate: {
          50: "#F8FAFC", // Premium White
          400: "#94A3B8", // Muted secondary
          500: "#64748B", // Deeper muted
        },
      },
      fontFamily: {
        display: ["Outfit", "Inter", "sans-serif"],
        sans: ["Inter", "Satoshi", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        "glass-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "glass-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "glass-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "glow-gold": "0 0 30px rgba(212, 175, 55, 0.15)",
        "glow-teal": "0 0 30px rgba(45, 212, 191, 0.15)",
      },
    },
  },
  plugins: [],
};
