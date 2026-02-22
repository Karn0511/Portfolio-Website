/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Text hierarchy
        text: {
          primary: "#f1f5f9",
          secondary: "#cbd5e1",
          tertiary: "#94a3b8",
          muted: "#64748b",
        },

        // New design system colors
        navy: {
          50: "#f0f4f8",
          900: "#0f1419",
          950: "#0a0d12",
        },
        midnight: "#1a1f2e",
        "soft-black": "#121620",
        charcoal: "#1c2333",
        gold: {
          primary: "#d4af37",
          dark: "#a89968",
          muted: "#8b7d2d",
          light: "#e8d5b5",
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
