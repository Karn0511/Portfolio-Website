/**
 * DESIGN SYSTEM: Animation Rules & Timings
 * Philosophy: Restraint. Every motion must earn its place.
 *
 * Rules:
 * - Fast (150ms) for hover states only
 * - Normal (300ms) for card interactions
 * - Slow (800ms) for entrance animations
 * - XSlow (2000ms+) for background only
 * - NO bouncy/elastic animations
 * - NO text animations unless revealing content
 * - Scroll-driven animations use linear/ease-out only
 */

export const ANIMATION_TIMINGS = {
  // Interaction Timings
  instant: 0,
  fast: 150, // Hover effects
  normal: 300, // Card lifts, button states
  slow: 500, // Fade-ins, reveals
  slower: 800, // Hero entrance, scroll-in
  verySlow: 1200, // Large section transitions
  xSlow: 2000, // Background effects

  // Ambient/Background (Long cycles)
  breathing: 6000, // Gentle pulse
  drift: 8000, // Slow movement
  flow: 12000, // Background morph
  undulate: 15000, // Liquid wave
} as const;

export const EASING = {
  // Linear - for scroll-driven animations
  linear: "linear",

  // CSS Keywords
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",

  // Cubic Bezier - Standard
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // Default smooth
  smoothIn: "cubic-bezier(0.4, 0, 1, 1)", // In curve
  smoothOut: "cubic-bezier(0, 0, 0.2, 1)", // Out curve
  smoothInOut: "cubic-bezier(0.4, 0, 0.2, 1)", // In-out curve

  // Cubic Bezier - Intentional
  snappy: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Slightly bouncy (USE SPARINGLY)
  fluid: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Natural flow
  settle: "cubic-bezier(0.23, 0.1, 0.68, 0.1)", // Settling motion

  // For scroll-linked animations
  scrollLinear: "linear",
  scrollSmooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
} as const;

export const ANIMATION_SPECS = {
  // BACKGROUND / AMBIENT - Always running
  background: {
    morphing: {
      duration: "15s",
      easing: EASING.linear,
      iteration: "infinite",
      description: "Liquid background subtle morph - ambient, never intrusive",
    },
    parallax: {
      // Scroll-driven, no duration
      easing: EASING.linear,
      description: "Background depth shift on scroll - smooth parallax",
    },
    cursorDistortion: {
      duration: "300ms",
      easing: EASING.smoothOut,
      description: "Ambient light shift near cursor - very subtle",
    },
  },

  // HERO / VIEWPORT ENTRANCE
  hero: {
    fadeIn: {
      duration: `${ANIMATION_TIMINGS.slower}ms`,
      easing: EASING.smoothOut,
      description: "Hero headline and subtext fade in on load",
    },
    parallaxShift: {
      // Scroll-driven
      easing: EASING.linear,
      description: "Hero background parallax on scroll - natural parallax",
    },
    entryDelay: {
      text: `${ANIMATION_TIMINGS.slow}ms`, // Staggered
      subtext: `${ANIMATION_TIMINGS.slow + 100}ms`,
    },
  },

  // CARDS & CONTAINERS
  card: {
    hoverLift: {
      duration: `${ANIMATION_TIMINGS.fast}ms`,
      easing: EASING.smooth,
      transform: "translateY(-4px)",
      description: "Card subtle lift on hover - not dramatic",
    },
    hoverGlow: {
      duration: `${ANIMATION_TIMINGS.fast}ms`,
      easing: EASING.smooth,
      description: "Card glow fade in on hover",
    },
    hoverBorder: {
      duration: `${ANIMATION_TIMINGS.fast}ms`,
      easing: EASING.smooth,
      description: "Card border glow on hover",
    },
  },

  // TECH BADGES (3D showcase)
  techBadge: {
    hoverTilt: {
      duration: `${ANIMATION_TIMINGS.normal}ms`,
      easing: EASING.smooth,
      description: "3D tilt on hover - gentle, not aggressive",
    },
    hoverGlow: {
      duration: `${ANIMATION_TIMINGS.fast}ms`,
      easing: EASING.smooth,
      description: "Badge glow edge highlight on hover",
    },
    glowPulse: {
      duration: "2s",
      easing: EASING.linear,
      iteration: "infinite",
      description: "Subtle glow pulse - very ambient",
    },
  },

  // SCROLL REVEAL
  scrollReveal: {
    fadeIn: {
      duration: `${ANIMATION_TIMINGS.slower}ms`,
      easing: EASING.smoothOut,
      description: "Fade in as section scrolls into view",
    },
    slideUp: {
      duration: `${ANIMATION_TIMINGS.slower}ms`,
      easing: EASING.smoothOut,
      description: "Subtle slide up on scroll reveal",
    },
  },

  // BUTTONS & INTERACTIVE
  button: {
    hover: {
      duration: `${ANIMATION_TIMINGS.fast}ms`,
      easing: EASING.smooth,
      description: "Button color/glow on hover",
    },
    active: {
      duration: `${ANIMATION_TIMINGS.fast}ms`,
      easing: EASING.smooth,
      description: "Button state on click",
    },
  },
} as const;

// Type exports for use in components
export type AnimationTiming = keyof typeof ANIMATION_TIMINGS;
export type EasingFunction = keyof typeof EASING;

// GSAP Timeline defaults
export const GSAP_DEFAULTS = {
  duration: 0.5,
  ease: "power2.inOut",
  stagger: {
    amount: 0.3,
    from: "start",
  },
} as const;

// What should NEVER animate according to design rules
export const NO_ANIMATION_ELEMENTS = [
  "body", // Body text
  "p", // Paragraphs
  "li", // List items
  "[data-no-animate]", // Any element with this attribute
  "code", // Code blocks
  "pre", // Pre-formatted text
] as const;

// Breakpoint-specific animation changes
export const REDUCED_MOTION_RULES = {
  enabled: "@media (prefers-reduced-motion: reduce)",
  apply: {
    "animation-duration": "0.01ms",
    "animation-iteration-count": "1",
  },
} as const;
