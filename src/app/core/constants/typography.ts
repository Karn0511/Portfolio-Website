/**
 * DESIGN SYSTEM: Typography Constants
 * Professional, clear hierarchy
 *
 * Fonts:
 * - Inter: Primary (headlines, body)
 * - JetBrains Mono: Technical (code, tech stack)
 */

export const TYPOGRAPHY_CLASSES = {
  // Display/Hero Sizes
  h1: "text-6xl md:text-7xl font-bold leading-tight tracking-tighter",
  h2: "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold leading-snug tracking-normal",
  h4: "text-xl md:text-2xl font-semibold leading-normal tracking-normal",

  // Body Sizes
  body: "text-base md:text-lg font-normal leading-relaxed",
  bodySmall: "text-sm md:text-base font-normal leading-normal",
  bodyXSmall: "text-xs md:text-sm font-normal leading-normal",

  // Technical/Mono
  mono: "font-mono text-sm md:text-base font-normal leading-normal",
  monoSmall: "font-mono text-xs md:text-sm font-normal leading-normal",

  // Special
  label:
    "text-xs md:text-sm font-medium leading-tight tracking-wider uppercase",
  caption: "text-xs font-normal leading-normal text-text-tertiary",
} as const;

export const TEXT_COLORS = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  muted: "text-text-muted",
  gold: "text-gold-primary",
} as const;

export const TEXT_HIERARCHY = {
  // Headline hierarchy
  headline: {
    primary: "font-bold text-text-primary",
    secondary: "font-semibold text-text-secondary",
  },

  // Body hierarchy
  body: {
    primary: "font-normal text-text-primary",
    secondary: "font-normal text-text-secondary",
    tertiary: "font-normal text-text-tertiary",
  },

  // Interactive
  link: "text-gold-primary hover:text-gold-light transition-colors",
  button: "font-medium text-text-primary",
} as const;

/**
 * Typography scale mapping
 * Use these for responsive type sizing
 */
export const FONT_SIZES = {
  responsive: {
    h1: { base: "2.5rem", md: "3.5rem", lg: "4rem" },
    h2: { base: "2rem", md: "2.5rem", lg: "3rem" },
    h3: { base: "1.5rem", md: "1.875rem", lg: "2rem" },
    body: { base: "0.875rem", md: "1rem", lg: "1rem" },
  },
} as const;
