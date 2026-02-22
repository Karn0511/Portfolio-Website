/**
 * DESIGN SYSTEM: Motion, Spacing, & Layout Tokens
 * Centralized system for motion, timing, and spatial relationships
 */

export const MOTION = {
  // Main easing functions (GSAP)
  EASE_MAIN: "power3.out",
  EASE_EXPO: "expo.out",
  EASE_SMOOTH: "power2.inOut",
  EASE_LINEAR: "none",

  // Durations (seconds)
  DURATION_INSTANT: 0,
  DURATION_FAST: 0.15,
  DURATION_NORMAL: 0.3,
  DURATION_DEFAULT: 0.5,
  DURATION_SLOW: 0.8,
  DURATION_SLOWER: 1.2,
  DURATION_XSLOW: 2,

  // Ambient durations
  DURATION_BREATHING: 6,
  DURATION_DRIFT: 8,
  DURATION_FLOW: 12,

  // Interaction
  HOVER_RADIUS: 80, // Cursor effect radius
  HOVER_DELAY: 0.1, // Hover state delay
  HOVER_LIFT: 4, // px - card hover lift
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultraWide: 1536,
} as const;

export const SPACING = {
  // Core spacing scale (px)
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 64,
  "5xl": 80,
  "6xl": 96,
  "7xl": 112,
  "8xl": 128,
} as const;

export const LAYOUT = {
  // Margin/Padding
  margin: {
    page: {
      desktop: `${SPACING["2xl"]}px`, // 32px
      tablet: `${SPACING.xl}px`, // 24px
      mobile: `${SPACING.lg}px`, // 16px
    },
    section: {
      desktop: `${SPACING["5xl"]}px`, // 80px
      tablet: `${SPACING["4xl"]}px`, // 64px
      mobile: `${SPACING["3xl"]}px`, // 48px
    },
    sectionVertical: {
      desktop: `${SPACING["6xl"]}px`, // 96px
      tablet: `${SPACING["5xl"]}px`, // 80px
      mobile: `${SPACING["4xl"]}px`, // 64px
    },
  },

  // Container widths
  container: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    full: "100%",
  },

  // Grid
  gridGap: {
    desktop: `${SPACING.xl}px`, // 24px
    tablet: `${SPACING.lg}px`, // 16px
    mobile: `${SPACING.md}px`, // 12px
  },

  // Column widths
  columnWidth: {
    "1": "100%",
    "2": "50%",
    "3": "33.333%",
    "4": "25%",
  },

  // Z-index system
  zIndex: {
    base: 0,
    elevated: 10,
    floating: 20,
    modal: 30,
    tooltip: 40,
    notification: 50,
  },
} as const;

export const TYPOGRAPHY = {
  // Font sizes (responsive)
  fontSize: {
    // Display/Hero
    h1: { desktop: 64, tablet: 48, mobile: 40 },
    h2: { desktop: 48, tablet: 36, mobile: 32 },
    h3: { desktop: 32, tablet: 28, mobile: 24 },
    h4: { desktop: 24, tablet: 20, mobile: 18 },

    // Body
    body: { desktop: 16, tablet: 16, mobile: 14 },
    bodySmall: { desktop: 14, tablet: 14, mobile: 12 },
    bodyXSmall: { desktop: 12, tablet: 12, mobile: 11 },

    // Mono
    mono: { desktop: 14, tablet: 14, mobile: 12 },
    monoSmall: { desktop: 12, tablet: 12, mobile: 11 },
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter spacing
  letterSpacing: {
    tight: "-0.02em",
    normal: "0em",
    wide: "0.02em",
    wider: "0.04em",
  },

  // Font weights
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const DEPTH = {
  // Parallax speeds (scroll factor)
  parallax: {
    slow: 0.3, // Moves slowly
    normal: 0.5, // Default offset
    fast: 0.8, // Moves quickly
  },

  // Layer depths for 3D effects
  layers: {
    background: -10,
    content: 0,
    floating: 10,
    modal: 20,
  },
} as const;

export const SCROLL = {
  // Scroll behavior
  behavior: "smooth",
  smoothness: 0.1, // Lenis smoothness

  // Scroll trigger settings
  trigger: {
    start: "top 80%",
    end: "top 20%",
    scrub: false,
  },

  // Parallax trigger
  parallaxTrigger: {
    start: "top 0%",
    end: "bottom 100%",
  },
} as const;
