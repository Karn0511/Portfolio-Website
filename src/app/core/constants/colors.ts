/**
 * DESIGN SYSTEM: Color Palette & Tokens
 * Hacker-inspired cinematic aesthetic
 * Deep navy + liquid gold + teal-blue energy
 *
 * Rules:
 * - Navy/Midnight backgrounds set calm foundation
 * - Gold + Teal used as accent (3-5% combined)
 * - Text hierarchy through opacity
 * - No neon green, controlled neon blue/teal only
 * - Hacker energy meets cinematic depth
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

  // ACCENT - Gold (Premium, 2% max)
  gold: {
    primary: "#d4af37", // Main accent, buttons, highlights
    dark: "#a89968", // Hover states, secondary
    muted: "#8b7d2d", // Tertiary, very subtle
    light: "#e8d5b5", // Glow effects only
  },

  // ACCENT - Teal-Blue (Energy, 1-2% max)
  teal: {
    primary: "#06d6d0", // Vibrant accent, code highlights
    dark: "#04b5b0", // Hover variant
    muted: "#03a89f", // Subtle variant
    glow: "#06d6d0", // Terminal highlights, code
  },

  // TEXT HIERARCHY
  text: {
    primary: "#f1f5f9", // Main headlines, primary content
    secondary: "#cbd5e1", // Body text, descriptions
    tertiary: "#94a3b8", // Secondary descriptions
    muted: "#64748b", // Hints, timestamps, metadata
    code: "#06d6d0", // Code snippets, monospace
  },

  // SEMANTIC COLORS (Use Minimally)
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#06d6d0",

  // GLASS LAYERS (For glassmorphism components)
  glass: {
    light: "rgba(255, 255, 255, 0.05)", // Subtle layer
    medium: "rgba(255, 255, 255, 0.08)", // Medium emphasis
    dark: "rgba(255, 255, 255, 0.02)", // Very subtle
    heavy: "rgba(255, 255, 255, 0.12)", // Strong emphasis
  },

  // GOLD OVERLAYS (For ambient effects)
  goldOverlay: {
    veryLight: "rgba(212, 175, 55, 0.05)",
    light: "rgba(212, 175, 55, 0.1)",
    medium: "rgba(212, 175, 55, 0.15)",
    strong: "rgba(212, 175, 55, 0.2)",
  },

  // TEAL OVERLAYS (For terminal/code effects)
  tealOverlay: {
    veryLight: "rgba(6, 214, 208, 0.08)",
    light: "rgba(6, 214, 208, 0.15)",
    medium: "rgba(6, 214, 208, 0.25)",
    strong: "rgba(6, 214, 208, 0.35)",
  },
} as const;

export const GRADIENTS = {
  // Main liquid background gradient
  liquidBase: "linear-gradient(135deg, #0f1419 0%, #1a2a4a 50%, #0f1419 100%)",

  // Liquid flow with teal energy
  liquidFlow:
    "linear-gradient(135deg, rgba(6, 214, 208, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.05) 100%)",

  // Subtle accent gradient (gold + teal)
  goldAccent:
    "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, transparent 100%)",

  // Teal accent for terminal areas
  tealAccent:
    "linear-gradient(135deg, rgba(6, 214, 208, 0.2) 0%, transparent 100%)",

  // Depth gradient
  depth: "linear-gradient(180deg, #1a2a4a 0%, #0f1419 100%)",

  // Glow effect (radial - gold)
  glowGold:
    "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",

  // Glow effect (radial - teal)
  glowTeal:
    "radial-gradient(circle at center, rgba(6, 214, 208, 0.2) 0%, transparent 70%)",

  // Section fade
  sectionFadeIn: "linear-gradient(180deg, transparent 0%, #0f1419 50%)",

  // Terminal panel background
  terminalBg:
    "linear-gradient(180deg, rgba(6, 214, 208, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)",

  // Code highlight
  codeHighlight:
    "linear-gradient(90deg, rgba(6, 214, 208, 0.2) 0%, rgba(6, 214, 208, 0.05) 100%)",
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

  // Teal glow (for terminal areas)
  glowTealSm: "0 0 15px rgba(6, 214, 208, 0.25)",
  glowTealMd: "0 0 30px rgba(6, 214, 208, 0.2)",
  glowTealLg: "0 0 50px rgba(6, 214, 208, 0.15)",

  // Combined glow (gold + teal energy)
  glowEnergyMd:
    "0 0 30px rgba(212, 175, 55, 0.1), 0 0 25px rgba(6, 214, 208, 0.15)",
  glowEnergyLg:
    "0 0 50px rgba(212, 175, 55, 0.08), 0 0 40px rgba(6, 214, 208, 0.12)",

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
