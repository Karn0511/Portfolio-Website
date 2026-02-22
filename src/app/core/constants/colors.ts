/**
 * DESIGN SYSTEM: Color Palette & Tokens
 * Deep, calm, professional aesthetic
 *
 * Rules:
 * - Navy/Midnight backgrounds set calm foundation
 * - Gold used ONLY as accent (2-3% of design)
 * - Text hierarchy through opacity
 * - No neon, no random gradients
 */

export const COLOR_PALETTE = {
  // PRIMARY BASE - Deep Foundation
  navy: {
    900: "#0f1419", // Main background
    950: "#0a0d12", // Darkest backgrounds
  },

  // SECONDARY BASE - Depth Layers
  midnight: "#1a1f2e", // Accent background, section dividers
  softBlack: "#121620", // Card backgrounds, componentry
  charcoal: "#1c2333", // Hover states, interactive layers

  // ACCENT - Gold (Use Sparingly: 2-3% max)
  gold: {
    primary: "#d4af37", // Main accent, buttons, highlights
    dark: "#a89968", // Hover states, secondary
    muted: "#8b7d2d", // Tertiary, very subtle
    light: "#e8d5b5", // Glow effects only
  },

  // TEXT HIERARCHY
  text: {
    primary: "#f1f5f9", // Main headlines, primary content
    secondary: "#cbd5e1", // Body text, descriptions
    tertiary: "#94a3b8", // Secondary descriptions
    muted: "#64748b", // Hints, timestamps, metadata
  },

  // SEMANTIC COLORS (Use Minimally)
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#3b82f6",

  // GLASS LAYERS (For glassmorphism components)
  glass: {
    light: "rgba(255, 255, 255, 0.05)", // Subtle layer
    medium: "rgba(255, 255, 255, 0.08)", // Medium emphasis
    dark: "rgba(255, 255, 255, 0.02)", // Very subtle
  },

  // GOLD OVERLAYS (For ambient effects)
  goldOverlay: {
    veryLight: "rgba(212, 175, 55, 0.05)",
    light: "rgba(212, 175, 55, 0.1)",
    medium: "rgba(212, 175, 55, 0.15)",
    strong: "rgba(212, 175, 55, 0.2)",
  },
} as const;

export const GRADIENTS = {
  // Main liquid background gradient
  liquidBase: "linear-gradient(135deg, #0f1419 0%, #1a2a4a 50%, #0f1419 100%)",

  // Subtle accent gradient
  goldAccent:
    "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, transparent 100%)",

  // Depth gradient
  depth: "linear-gradient(180deg, #1a2a4a 0%, #0f1419 100%)",

  // Glow effect (radial)
  glowGold:
    "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",

  // Section fade
  sectionFadeIn: "linear-gradient(180deg, transparent 0%, #0f1419 50%)",
} as const;

export const SHADOWS = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",

  // Soft glow (gold accent)
  glowSm: "0 0 15px rgba(212, 175, 55, 0.2)",
  glowMd: "0 0 30px rgba(212, 175, 55, 0.15)",
  glowLg: "0 0 50px rgba(212, 175, 55, 0.1)",

  // Depth shadow
  depth: "0 20px 60px rgba(0, 0, 0, 0.3)",
} as const;

export const OPACITY = {
  disabled: 0.5,
  hover: {
    light: 0.8,
    dark: 0.6,
  },
  glass: 0.7,
  overlay: 0.85,
} as const;
