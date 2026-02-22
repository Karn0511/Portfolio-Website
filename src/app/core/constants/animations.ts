/**
 * DESIGN SYSTEM: Animation Rules & Timings
 * Restrained, intentional motion
 */

export const ANIMATION_TIMINGS = {
  // Timing constants (ms)
  instant: 0,
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 800,
  verySlow: 1200,
  xSlow: 2000,

  // For background/ambient effects
  breathing: 6000,
  drift: 8000,
  flow: 12000,
} as const;

export const EASING = {
  // Standard easings
  linear: "linear",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",

  // Cubic Bezier for more control
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  smoothIn: "cubic-bezier(0.4, 0, 1, 1)",
  smoothOut: "cubic-bezier(0, 0, 0.2, 1)",
  smoothInOut: "cubic-bezier(0.4, 0, 0.2, 1)",

  // Bounce (minimal)
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",

  // Spring-like
  bounce_soft: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

export const ANIMATION_RULES = {
  // Background / Ambient
  background: {
    morphing: {
      duration: "12s",
      easing: "ease-in-out",
      iteration: "infinite",
      description: "Liquid background subtle morph",
    },
    parallax: {
      duration: null, // Scroll-driven
      easing: "ease-out",
      description: "Background depth shift on scroll",
    },
  },

  // Hero / Viewport
  hero: {
    fadeIn: {
      duration: "800ms",
      easing: EASING.smoothOut,
      description: "Hero headline and subtext fade in",
    },
    parallaxShift: {
      duration: null, // Scroll-driven
      easing: "linear",
      description: "Hero background parallax depth",
    },
  },

  // Cards & Components
  card: {
    hover: {
      duration: "200ms",
      easing: EASING.smooth,
      transform: "translateY(-4px)",
      description: "Card subtle lift on hover",
    },
    hoverGlow: {
      duration: "200ms",
      easing: EASING.smooth,
      description: "Card glow fade in on hover",
    },
  },

  // Tech Badges (3D)
  techBadge: {
    hoverTilt: {
      duration: "300ms",
      easing: EASING.smooth,
      description: "3D rotation effect on hover",
    },
    glowPulse: {
      duration: "2s",
      easing: "ease-in-out",
      iteration: "infinite",
      description: "Subtle background glow pulse",
    },
  },

  // Cursor
  cursor: {
    follow: {
      duration: "60ms",
      easing: EASING.smooth,
      description: "Smooth cursor following",
    },
    distortion: {
      duration: "200ms",
      easing: EASING.smooth,
      description: "Background distortion near cursor",
    },
  },

  // Scroll-triggered content
  scroll: {
    fadeInUp: {
      duration: "800ms",
      easing: EASING.smoothOut,
      description: "Content fades in as it scrolls into view",
    },
    staggerDelay: 100, // ms between staggered items
  },

  // Navigation
  nav: {
    activeIndicator: {
      duration: "200ms",
      easing: EASING.smooth,
      description: "Nav indicator slide/glow",
    },
  },
} as const;

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
