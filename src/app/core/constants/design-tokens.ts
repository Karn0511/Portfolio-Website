/**
 * DESIGN TOKENS & SYSTEM
 * Premium hacker-inspired portfolio design system
 *
 * Principles:
 * - Liquid gold + midnight blue base
 * - <3% gold usage (precision highlights)
 * - No neon, no chaos
 * - Every color deliberate
 */

// ────────────────────────────────────────
// COLOR PALETTE
// ────────────────────────────────────────
export const COLORS = {
  // Base palette
  background: {
    deep: "#0a0f1a", // Deepest navy (base)
    primary: "#0f141f", // Primary bg
    secondary: "#131824", // Slightly lighter
    tertiary: "#1a1f2e", // For cards/panels
  },

  // Surfaces
  surface: {
    glass: "rgba(15, 20, 31, 0.5)", // Glass panels
    overlap: "rgba(10, 15, 26, 0.3)", // Overlays
    hover: "rgba(212, 175, 55, 0.05)", // Hover state
  },

  // Text
  text: {
    primary: "#ffffff", // Main text
    secondary: "#b0b8c1", // Muted text
    tertiary: "#7a8a99", // Further muted
    accent: "#d4af37", // Gold (VERY rare)
  },

  // Accents (FOR HIGHLIGHTS ONLY)
  accent: {
    gold: "#d4af37", // Premium accent
    goldFaded: "#d4af3740", // 25% opacity
    teal: "#38b6d4", // Optional secondary
    tealdim: "#38b6d460", // Dimmed teal
  },

  // Functional
  status: {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
  },

  // Borders
  border: {
    light: "rgba(212, 175, 55, 0.1)", // Subtle
    medium: "rgba(212, 175, 55, 0.2)", // Visible
    strong: "rgba(212, 175, 55, 0.3)", // Distinct
  },
};

// ────────────────────────────────────────
// SPACING SYSTEM (8px base)
// ────────────────────────────────────────
export const SPACING = {
  xs: "0.5rem", // 8px
  sm: "1rem", // 16px
  md: "1.5rem", // 24px
  lg: "2rem", // 32px
  xl: "3rem", // 48px
  xxl: "4rem", // 64px
  xxxl: "6rem", // 96px
};

// ────────────────────────────────────────
// TYPOGRAPHY
// ────────────────────────────────────────
export const TYPOGRAPHY = {
  // Font families
  family: {
    sans: '"Inter", "Segoe UI", sans-serif',
    mono: '"Fira Code", "Monaco", monospace',
  },

  // Font sizes
  size: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "2rem", // 32px
    "4xl": "2.5rem", // 40px
    "5xl": "3rem", // 48px
    "6xl": "3.5rem", // 56px
    "7xl": "4rem", // 64px
  },

  // Font weights
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  // Line heights
  leading: {
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  // Letter spacing
  tracking: {
    tight: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.1em",
  },
};

// ────────────────────────────────────────
// ANIMATION & MOTION
// ────────────────────────────────────────
export const MOTION = {
  // Easing functions (GSAP compatible)
  easing: {
    smooth: "power2.inOut",
    enter: "power3.out",
    exit: "power2.in",
    bounce: "back.out",
  },

  // Duration (ms)
  duration: {
    instant: 150,
    quick: 300,
    normal: 500,
    slow: 800,
    verySlow: 1200,
  },

  // Delays (stagger)
  stagger: {
    tight: 50,
    normal: 100,
    loose: 150,
  },

  // Parallax depth
  parallax: {
    shallow: "-40px",
    medium: "-80px",
    deep: "-120px",
  },
};

// ────────────────────────────────────────
// BORDER & SHADOW
// ────────────────────────────────────────
export const ELEVATION = {
  // Shadows (subtle, no drama)
  shadow: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.3)",
    md: "0 8px 24px rgba(0, 0, 0, 0.4)",
    lg: "0 16px 48px rgba(0, 0, 0, 0.5)",
    glow: "0 0 30px rgba(212, 175, 55, 0.2)",
  },

  // Border radius
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  // Border width
  border: {
    hairline: "1px",
    thin: "1.5px",
    base: "2px",
  },
};

// ────────────────────────────────────────
// RESPONSIVE BREAKPOINTS
// ────────────────────────────────────────
export const BREAKPOINTS = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// ────────────────────────────────────────
// Z-INDEX STACK (hierarchy)
// ────────────────────────────────────────
export const Z_INDEX = {
  background: -1,
  content: 0,
  dropdown: 10,
  modal: 20,
  popover: 30,
  notification: 40,
  tooltip: 50,
  fixed: 60,
};

// ────────────────────────────────────────
// GLASS EFFECT (Consistency)
// ────────────────────────────────────────
export const GLASS = {
  light: {
    background: "rgba(20, 25, 40, 0.4)",
    backdropFilter: "blur(10px) brightness(1.1)",
    border: "rgba(212, 175, 55, 0.1)",
  },
  medium: {
    background: "rgba(15, 20, 31, 0.5)",
    backdropFilter: "blur(16px) brightness(1.05)",
    border: "rgba(212, 175, 55, 0.15)",
  },
  strong: {
    background: "rgba(10, 15, 26, 0.6)",
    backdropFilter: "blur(20px)",
    border: "rgba(212, 175, 55, 0.2)",
  },
};

// ────────────────────────────────────────
// CONTENT CONSTRAINTS
// ────────────────────────────────────────
export const CONTAINER = {
  maxWidth: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    full: "1536px",
  },
};
