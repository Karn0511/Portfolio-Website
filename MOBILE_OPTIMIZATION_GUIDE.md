# Mobile Optimization & Responsive Design Guide

## Overview

This guide ensures the portfolio website provides an excellent experience across all device sizes while maintaining the calm, professional aesthetic.

---

## Responsive Breakpoints

All responsive design is mobile-first, using Tailwind CSS breakpoints:

```typescript
// From motion.ts
BREAKPOINTS = {
  mobile: 0, // 320px+ (default)
  sm: 640, // 640px+
  md: 768, // 768px+
  lg: 1024, // 1024px+
  xl: 1280, // 1280px+
  "2xl": 1536, // 1536px+
};
```

**Design Sizes:**

- **Mobile**: 320px - 639px (use `no prefix` for mobile-first CSS)
- **Tablet**: 640px - 1023px (use `sm:` to `md:`)
- **Desktop**: 1024px+ (use `lg:` and above)

---

## Component Responsive Rules

### Spacing & Padding

**Mobile (320px+):**

```css
/* Default spacing - tight on mobile */
padding: 1rem; /* 16px */
padding-bottom: 2rem; /* 32px between sections */
gap: 1rem;
```

**Tablet (768px+):**

```css
md:padding: 1.5rem;  /* 24px */
md:padding-bottom: 3rem;
md:gap: 1.5rem;
```

**Desktop (1024px+):**

```css
lg:padding: 2rem;    /* 32px */
lg:padding-bottom: 4rem;
lg:gap: 2rem;
```

### Typography Scaling

**Mobile (320px+):**

```css
h1: 28px (clamp(28px, 5vw, 48px))
h2: 24px (clamp(24px, 5vw, 36px))
h3: 20px (clamp(20px, 4vw, 28px))
body: 14px (clamp(14px, 2vw, 16px))
```

**Tablet (768px+):**

```css
h1: 36px
h2: 28px
h3: 24px
body: 15px
```

**Desktop (1024px+):**

```css
h1: 48px
h2: 36px
h3: 28px
body: 16px
```

### Grid Layouts

**Mobile (320px+):**

```tsx
// Single column
<div class="grid grid-cols-1 gap-4">
  <Card />
  <Card />
</div>
```

**Tablet (640px+):**

```tsx
// 2 columns
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
  <Card />
  <Card />
</div>
```

**Desktop (1024px+):**

```tsx
// 3-4 columns
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <Card />
  <Card />
</div>
```

---

## Touch Interaction Guidelines

### Button & Link Sizing

**Minimum touch target: 44px (44x44px or larger)**

```tsx
// ✅ CORRECT - Touch-friendly
<button class="px-4 py-3 rounded-lg">Click</button>     <!-- 44px+ height -->
<a href="#" class="block p-3 rounded">Link</a>          <!-- 44px+ clickable area -->

// ❌ INCORRECT - Too small
<button class="px-2 py-1 text-xs">Click</button>       <!-- 24px height, too small -->
<a href="#" class="text-xs">Link</a>                    <!-- ~20px height -->
```

### Hover vs Touch States

**Mobile should NOT trigger hover states:**

```tsx
// Use responsive classes to disable hover on mobile
<button class="hover:bg-gold lg:hover:bg-gold transition-colors">
  {/* Hover only on desktop (lg:) */}
</button>

// OR use @media (hover: hover)
<style>
  @media (hover: hover) {
    button:hover {
      background-color: #d4af37;
    }
  }
</style>
```

### Swipe & Gesture Support

```tsx
// Example: Detecting swipe gestures
export class SwipeComponent {
  private touchStartX = 0;
  private touchEndX = 0;

  @HostListener("touchstart", ["$event"])
  handleTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  @HostListener("touchend", ["$event"])
  handleTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const delta = this.touchEndX - this.touchStartX;
    if (delta > 50) {
      /* swiped right */
    }
    if (delta < -50) {
      /* swiped left */
    }
  }
}
```

---

## Reduced Motion Support

Respect users who prefer reduced motion:

```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Implementation in Components:**

```tsx
export class AnimatedComponent {
  private prefersReducedMotion = false;

  constructor() {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.prefersReducedMotion = mediaQuery.matches;
    mediaQuery.addEventListener("change", (e) => {
      this.prefersReducedMotion = e.matches;
    });
  }

  getAnimationDuration(): string {
    return this.prefersReducedMotion ? "0ms" : "800ms";
  }
}
```

---

## Viewport Optimization

### Correct Meta Tags (Already in index.html)

```html
<!-- Responsive viewport -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover"
/>

<!-- Theme color for mobile browser chrome -->
<meta name="theme-color" content="#0f1419" />

<!-- Apple mobile web app settings -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta
  name="apple-mobile-web-app-status-bar-style"
  content="black-translucent"
/>
<meta name="apple-mobile-web-app-title" content="Portfolio" />

<!-- Reduced motion preference -->
<meta name="prefers-color-scheme" content="dark" />
```

---

## Font Loading Optimization

### Mobile Performance

```css
/* Reduce font variants on mobile to improve load time */
@media (max-width: 768px) {
  /* Only load necessary weights on mobile */
  @font-face {
    font-family: "Inter";
    font-weight: 400 700; /* Only regular and bold */
  }

  @font-face {
    font-family: "JetBrains Mono";
    font-weight: 400; /* Only regular */
  }
}
```

### Font Display Strategy

```css
@font-face {
  font-family: "Inter";
  font-display: swap; /* Show fallback immediately, swap when ready */
}
```

---

## Parallax & Animation Performance on Mobile

### Disable Expensive Effects on Mobile

```tsx
export class HeroComponent {
  private isMobileDevice = false;

  ngOnInit() {
    this.isMobileDevice = window.innerWidth < 768;
  }

  applyParallax() {
    if (this.isMobileDevice) {
      // Disable parallax on mobile - saves performance
      return;
    }
    // Apply GSAP parallax only on desktop/tablet
  }
}
```

### Use RequestAnimationFrame Wisely

```tsx
export class LiquidBackgroundService {
  private animationFrameId: number | null = null;

  start() {
    const animate = () => {
      // Update animation
      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  ngOnDestroy() {
    this.stop();
  }
}
```

---

## Image Optimization for Mobile

### Responsive Images

```html
<!-- Serve different image sizes for different devices -->
<picture>
  <source media="(max-width: 640px)" srcset="/images/hero-mobile.jpg" />
  <source media="(max-width: 1024px)" srcset="/images/hero-tablet.jpg" />
  <img src="/images/hero-desktop.jpg" alt="Hero" />
</picture>

<!-- OR use srcset for automatic selection -->
<img
  src="/images/hero.jpg"
  srcset="
    /images/hero-small.jpg   640w,
    /images/hero-medium.jpg 1024w,
    /images/hero-large.jpg  1536w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
  alt="Hero"
/>
```

### Lazy Loading

```html
<!-- Load images only when visible -->
<img src="/images/project.jpg" loading="lazy" alt="Project" />
```

---

## Testing Responsive Design

### Browser DevTools Testing

1. Open DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Test on different device sizes:
   - iPhone SE (375px)
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)

### Mobile Browser Testing

**iOS Safari:**

- Test full-screen mode
- Verify safe areas (notch/home indicator)
- Check scrollbar behavior

**Chrome Android:**

- Test with different DPI settings
- Verify touch interactions
- Check bottom navigation

**Firefox Mobile:**

- Test gesture support
- Verify performance

### Performance Testing

```bash
# Test on 4G network speed
# Monitor Time to Interactive (TTI)
# Check Cumulative Layout Shift (CLS)
# Measure First Contentful Paint (FCP)
```

---

## Accessibility on Mobile

### Touch Target Sizing

```css
/* Minimum 44x44px for all interactive elements */
button,
a,
input {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px; /* Ensures 44px+ tap area */
}
```

### Text Sizing

```css
/* Ensure readable text without zoom on mobile */
body {
  font-size: 16px; /* At least 16px on mobile */
}

/* Use clamp() for fluid typography */
h1 {
  font-size: clamp(24px, 5vw, 48px);
}
```

### Contrast Ratios

- Text: 4.5:1 contrast minimum (WCAG AA)
- Large text: 3:1 minimum
- Test with DevTools Lighthouse

---

## Performance Checklist

- [ ] Lighthouse score > 90 on mobile
- [ ] Time to Interactive < 3 seconds (4G)
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Contentful Paint < 1.8 seconds
- [ ] Images optimized with webp fallback
- [ ] CSS and JS minified
- [ ] Font loading optimized
- [ ] No layout shifts on viewport changes
- [ ] Touch interactions work smoothly
- [ ] Reduced motion is respected

---

## Component Template Example (Mobile-First)

```tsx
import { Component } from "@angular/core";

@Component({
  selector: "app-responsive-card",
  template: `
    <div
      class="
      /* Mobile (320px+) */
      p-4 rounded-lg
      bg-gradient-to-br from-soft-black to-charcoal
      border border-white/10
      
      /* Tablet (768px+) */
      md:p-6 md:rounded-xl
      
      /* Desktop (1024px+) */
      lg:p-8 lg:hover:shadow-lg lg:transition-shadow
    "
    >
      <h3
        class="
        /* Mobile */
        text-xl font-bold text-white
        
        /* Tablet */
        md:text-2xl
        
        /* Desktop */
        lg:text-3xl
      "
      >
        {{ title }}
      </h3>

      <p
        class="
        /* Mobile */
        mt-2 text-sm text-secondary
        
        /* Tablet */
        md:mt-3 md:text-base
        
        /* Desktop */
        lg:mt-4 lg:text-lg
      "
      >
        {{ description }}
      </p>

      <button
        class="
        /* Mobile - touch-friendly */
        mt-4 px-4 py-3 w-full
        bg-gold text-dark font-semibold
        rounded-lg
        
        /* Desktop - hover state */
        lg:w-auto lg:hover:bg-gold/80
        lg:transition-colors lg:duration-200
      "
      >
        Learn More
      </button>
    </div>
  `,
  styles: [
    `
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `,
  ],
})
export class ResponsiveCardComponent {
  title = "Example";
  description = "Mobile-first responsive component";
}
```

---

## Responsive Design Antipatterns to Avoid

❌ **DON'T:**

- Use `px` for responsive sizing everywhere
- Assume everyone uses a desktop browser
- Forget to test touch interactions
- Ignore reduced motion preferences
- Use large unoptimized images
- Rely only on hover states for functionality
- Assume all devices have fast internet
- Use tiny fonts to fit mobile

✅ **DO:**

- Use mobile-first CSS (no prefix for mobile)
- Test on actual mobile devices regularly
- Provide touch-friendly interaction targets (44px+)
- Support prefers-reduced-motion
- Optimize images and use modern formats (webp)
- Use clear, readable typography
- Test on slow network connections (4G)
- Use relative sizing (rem, %) when appropriate

---

## Summary

The portfolio website is optimized for all device sizes while maintaining the calm, professional aesthetic. Follow these guidelines when adding new components to ensure consistency and responsiveness across the entire application.
