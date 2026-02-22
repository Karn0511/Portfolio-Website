/**
 * SPACING UTILITIES & HELPERS
 * Centralized spacing system for consistent visual rhythm
 */

export const SPACING_CLASS_MAP = {
  xs: "gap-xs space-y-xs",
  sm: "gap-sm space-y-sm",
  md: "gap-md space-y-md",
  lg: "gap-lg space-y-lg",
  xl: "gap-xl space-y-xl",
  "2xl": "gap-2xl space-y-2xl",
  "3xl": "gap-3xl space-y-3xl",
  "4xl": "gap-4xl space-y-4xl",
} as const;

export const PADDING_CLASS_MAP = {
  xs: "p-xs",
  sm: "p-sm",
  md: "p-md",
  lg: "p-lg",
  xl: "p-xl",
  "2xl": "p-2xl",
  "3xl": "p-3xl",
  "4xl": "p-4xl",
} as const;

export const MARGIN_CLASS_MAP = {
  xs: "m-xs",
  sm: "m-sm",
  md: "m-md",
  lg: "m-lg",
  xl: "m-xl",
  "2xl": "m-2xl",
  "3xl": "m-3xl",
  "4xl": "m-4xl",
} as const;

/**
 * Section spacing presets for consistent vertical rhythm
 */
export const SECTION_SPACING = {
  mobile: "py-section-mobile px-lg",
  tablet: "py-section-tablet px-xl",
  desktop: "py-section-desktop px-2xl",
  responsive:
    "py-section-mobile md:py-section-tablet lg:py-section-desktop px-lg md:px-xl lg:px-2xl",
} as const;

/**
 * Get responsive spacing classes
 */
export function getResponsiveSpacing(
  mobile: keyof typeof SPACING_CLASS_MAP,
  tablet: keyof typeof SPACING_CLASS_MAP,
  desktop: keyof typeof SPACING_CLASS_MAP,
): string {
  return `${SPACING_CLASS_MAP[mobile]} md:${SPACING_CLASS_MAP[tablet]} lg:${SPACING_CLASS_MAP[desktop]}`;
}

/**
 * Get responsive padding classes
 */
export function getResponsivePadding(
  mobile: keyof typeof PADDING_CLASS_MAP,
  tablet: keyof typeof PADDING_CLASS_MAP,
  desktop: keyof typeof PADDING_CLASS_MAP,
): string {
  return `${PADDING_CLASS_MAP[mobile]} md:${PADDING_CLASS_MAP[tablet]} lg:${PADDING_CLASS_MAP[desktop]}`;
}

/**
 * Create margin shorthand
 */
export function createMargin(value: keyof typeof MARGIN_CLASS_MAP): string {
  return MARGIN_CLASS_MAP[value];
}
