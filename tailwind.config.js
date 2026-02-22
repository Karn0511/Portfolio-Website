/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Cinematic Navy Base
        navy: {
          50: "#f0f4f8",
          800: "#141824",
          900: "#0a0e1a",
          950: "#060913",
        },
        midnight: "#0f1420",
        "soft-black": "#080b14",
        charcoal: "#141824",

        // Liquid Gold System
        gold: {
          primary: "#f4d03f",
          secondary: "#e6b422",
          muted: "#c49a1a",
          light: "#ffeaa7",
        },

        // Teal/Cyan Accents
        teal: {
          primary: "#00d4ff",
          dark: "#0099cc",
          muted: "#006688",
          glow: "#00d4ff",
        },

        // Text hierarchy
        text: {
          primary: "#ffffff",
          secondary: "#e2e8f0",
          tertiary: "#94a3b8",
          muted: "#64748b",
          code: "#00d4ff",
        },

        // Legacy HSL colors (kept for compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slate: {
          950: "#020617",
        },
      },
      fontFamily: {
        display: ["Inter", "Clash Display", "Outfit", "sans-serif"],
        sans: ["Inter", "Satoshi", "Space Grotesk", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "Share Tech Mono",
          "ui-monospace",
          "SFMono-Regular",
        ],
        orbitron: ["Orbitron", "sans-serif"],
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
        "5xl": "80px",
        "6xl": "96px",
        "7xl": "112px",
        "8xl": "128px",
        // Section spacing
        "section-mobile": "48px",
        "section-tablet": "64px",
        "section-desktop": "80px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        // Glass card shadows
        "glass-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "glass-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "glass-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",

        // Gold glow shadows
        "glow-sm": "0 0 15px rgba(212, 175, 55, 0.2)",
        "glow-md": "0 0 30px rgba(212, 175, 55, 0.15)",
        "glow-lg": "0 0 50px rgba(212, 175, 55, 0.1)",

        // Teal glow shadows
        "glowTeal-sm": "0 0 15px rgba(6, 214, 208, 0.25)",
        "glowTeal-md": "0 0 30px rgba(6, 214, 208, 0.2)",
        "glowTeal-lg": "0 0 50px rgba(6, 214, 208, 0.15)",

        // Combined energy glow
        "glowEnergy-md":
          "0 0 30px rgba(212, 175, 55, 0.1), 0 0 25px rgba(6, 214, 208, 0.15)",
        "glowEnergy-lg":
          "0 0 50px rgba(212, 175, 55, 0.08), 0 0 40px rgba(6, 214, 208, 0.12)",

        // Depth shadow
        depth: "0 20px 60px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
};
