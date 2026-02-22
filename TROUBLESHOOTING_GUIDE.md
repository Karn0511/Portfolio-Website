# Troubleshooting & Common Issues Guide

This guide helps resolve common issues that may arise when developing or maintaining the portfolio website.

---

## Development Setup Issues

### Issue: Node modules not installing

**Symptoms:**

- `npm install` fails
- `Cannot find module` errors

**Solution:**

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -r node_modules
rm package-lock.json

# Reinstall
npm install
```

---

### Issue: Angular CLI not found

**Symptoms:**

- `ng: command not found`

**Solution:**

```bash
# Install Angular CLI globally
npm install -g @angular/cli@19

# Or use npx
npx ng serve
```

---

### Issue: Tailwind CSS classes not applying

**Symptoms:**

- Utility classes don't work
- Styles missing in output

**Solution:**

```bash
# Rebuild Tailwind CSS
npm run build

# Check tailwind.config.js is in root
# Verify content paths are correct:
content: ['./src/**/*.{html,ts}']

# Clear Tailwind cache
rm -r .tailwind-cache
npm run dev
```

---

## Design System Issues

### Issue: Colors don't match design

**Symptoms:**

- Gold looks wrong
- Navy is different shade
- Text colors are off-brand

**Solution:**
Check `src/app/core/constants/colors.ts`:

```typescript
// Verify these exact values
export const COLOR_PALETTE = {
  navy: "#0f1419", // Deep navy base
  midnight: "#1a1f2e", // Slightly lighter
  softBlack: "#121620", // Between navy and midnight
  charcoal: "#1c2333", // Conversational element
  gold: "#d4af37", // Premium accent
};

// Use TEXT_COLORS for all text
export const TEXT_COLORS = {
  primary: "#ffffff", // Main text
  secondary: "rgba(255, 255, 255, 0.75)",
  tertiary: "rgba(255, 255, 255, 0.6)",
  muted: "rgba(255, 255, 255, 0.5)",
};
```

If colors still look different, check DevTools computed styles - CSS specificity might be overriding.

---

### Issue: Spacing looks wrong

**Symptoms:**

- Gap between elements inconsistent
- Padding seems random
- Sections not aligned

**Solution:**
Use spacing from `motion.ts`:

```typescript
// Never use arbitrary spacing like p-5 (5 units)
// Always use defined scale:
p - 4; // 16px
p - 6; // 24px
p - 8; // 32px
gap - 4; // 16px
gap - 6; // 24px
```

Check `tailwind.config.js` for correct extend values:

```javascript
extend: {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '96px',
    '6xl': '112px',
    '7xl': '128px',
  }
}
```

---

### Issue: Typography scales differently than expected

**Symptoms:**

- Text size is wrong
- Different on mobile vs desktop
- Responsive scaling broken

**Solution:**
Use the typography system from `typography.ts`:

```typescript
// Mobile-first approach - use responsive prefixes
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  // 32px on mobile
  // 36px on tablet (md: 768px)
  // 48px on desktop (lg: 1024px)
</h1>

// OR use clamp() for fluid scaling
<h1 class="text-[clamp(28px,5vw,48px)]">
  // Scales from 28px at small to 48px at large
</h1>
```

---

## Animation Issues

### Issue: Animations are too fast/slow

**Symptoms:**

- Hover effects feel snappy
- Scroll reveals are instant
- Transitions barely visible

**Solution:**
Check animation timings in `animations.ts`:

```typescript
export const ANIMATION_TIMINGS = {
  fast: 150, // Quick interactions (hover)
  normal: 300, // Standard transitions
  slow: 500, // Deliberate reveals
  slower: 800, // Scroll animations
  slowest: 2000, // Only for critical paths
};
```

Reference in animations as milliseconds:

```typescript
// ✅ Correct
transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)";

// ❌ Incorrect
transition: "all 1s"; // Not using defined timing
```

---

### Issue: Animations are laggy/janky

**Symptoms:**

- Scroll is not smooth
- Hover effects stutter
- 60fps not achieved

**Solution:**

1. **Check DevTools Performance tab:**

   ```
   F12 > Performance > Record > Scroll > Stop
   Look for long tasks > 50ms
   ```

2. **Disable animations on mobile:**

   ```typescript
   if (window.innerWidth < 768) {
     // Disable Three.js background
     this.liquidBackground.disable();
   }
   ```

3. **Use will-change sparingly:**

   ```css
   /* Only on elements that animate */
   .element-that-animates {
     will-change: transform;
   }
   ```

4. **Avoid expensive operations during scroll:**

   ```typescript
   // ✅ Use RAF and debounce
   let ticking = false;
   window.addEventListener("scroll", () => {
     if (!ticking) {
       requestAnimationFrame(onScroll);
       ticking = true;
     }
   });

   function onScroll() {
     // Light calculations only
     ticking = false;
   }
   ```

---

### Issue: Animations trigger unexpectedly

**Symptoms:**

- Things animate on load
- Multiple animations firing
- Animation loops infinitely

**Solution:**
Check for these common mistakes:

```typescript
// ❌ BAD - triggers immediately
export class BadComponent {
  ngOnInit() {
    gsap.to(".element", { duration: 1, opacity: 1 }); // Animation on load!
  }
}

// ✅ GOOD - only on interaction
export class GoodComponent {
  onClick() {
    gsap.to(".element", { duration: 1, opacity: 1 }); // On-click only
  }
}

// ❌ BAD - infinite animation
gsap.to(".spinner", {
  rotation: 360,
  repeat: -1, // Infinite!
  duration: 1,
});

// ✅ GOOD - finite animation
gsap.to(".element", {
  opacity: 0.5,
  duration: 0.3,
  repeat: 0, // Single play
});
```

---

### Issue: prefers-reduced-motion not working

**Symptoms:**

- Animations still play for users with reduced motion preference
- Page stutters for accessibility users

**Solution:**
Wrap all animations with motion preference check:

```typescript
export class AnimatedComponent {
  private motionSafe = true;

  ngOnInit() {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.motionSafe = !prefersReduced;
  }

  animateElement() {
    if (this.motionSafe) {
      gsap.to(".element", { duration: 1, opacity: 1 });
    } else {
      // Just set the end state instantly
      gsap.set(".element", { opacity: 1 });
    }
  }
}
```

---

## Three.js Background Issues

### Issue: Background canvas not rendering

**Symptoms:**

- Black screen
- No background visible
- Console errors about WebGL

**Solution:**

1. Check browser supports WebGL:

   ```typescript
   const canvas = document.createElement("canvas");
   const gl = canvas.getContext("webgl");
   if (!gl) console.error("WebGL not supported");
   ```

2. Verify canvas created in service:

   ```typescript
   // In liquid-background.service.ts
   private canvas: HTMLCanvasElement;

   ngOnInit() {
     this.canvas = document.createElement('canvas');
     this.canvas.style.position = 'fixed';
     this.canvas.style.top = '0';
     this.canvas.style.left = '0';
     this.canvas.style.width = '100%';
     this.canvas.style.height = '100%';
     this.canvas.style.pointerEvents = 'none';
     document.body.appendChild(this.canvas);
   }
   ```

3. Check for shader compilation errors:
   ```glsl
   // Both vertex and fragment shaders must be valid
   // Common error: uniform not declared before use
   uniform float uTime;  // Must declare
   gl_FragColor = vec4(uTime);  // Then use
   ```

---

### Issue: Background performance terrible

**Symptoms:**

- High CPU usage
- GPU maxed out
- Battery draining fast

**Solution:**
Disable on mobile:

```typescript
private shouldRenderBackground(): boolean {
  const isMobile = window.innerWidth < 768;
  const lowPowerMode = navigator.deviceMemory < 4;
  return !isMobile && !lowPowerMode;
}

ngOnInit() {
  if (!this.shouldRenderBackground()) {
    return;  // Don't initialize canvas
  }
  // ... initialize
}
```

---

## Responsive Design Issues

### Issue: Mobile layout broken

**Symptoms:**

- Text overlaps
- Images don't fit
- Buttons go off-screen

**Solution:**

1. **Use mobile-first breakpoints:**

   ```tsx
   {/* Mobile default - no prefix */}
   <div class="grid grid-cols-1">      {/* 1 column on mobile */}
     <div class="p-4">                 {/* 16px padding -->

     {/* Tablet and up */}
     <div class="md:grid-cols-2">      {/* 2 columns at md (768px+) */}
     <div class="md:p-6">              {/* 24px padding -->
     </div>
   </div>
   ```

2. **Use clamp() for responsive sizing:**

   ```css
   /* Scales between min and max */
   text-[clamp(16px,5vw,24px)]  /* 16px to 24px */
   padding: clamp(1rem, 5vw, 2rem)  /* 16px to 32px */
   ```

3. **Never use hardcoded pixels in responsive context:**

   ```css
   /* ❌ Bad */
   padding: 20px;   /* Same on all sizes */

   /* ✅ Good */
   padding: 1rem;   /* 16px */
   md:padding: 1.5rem;  /* 24px on md+ */
   ```

---

### Issue: Touch interactions not working

**Symptoms:**

- Things don't respond to touch
- Scrolling is janky
- Buttons don't register taps

**Solution:**

1. **Check touch event handlers:**

   ```typescript
   @HostListener('touchstart', ['$event'])
   onTouchStart(e: TouchEvent) {
     e.preventDefault();  // Only if needed
     // Handle touch
   }

   @HostListener('touchend', ['$event'])
   onTouchEnd(e: TouchEvent) {
     // Note: use e.changedTouches, not e.touches
     const touch = e.changedTouches[0];
   }
   ```

2. **Ensure minimum touch target sizes (44x44px):**

   ```tsx
   <button class="px-4 py-3">
     {/* min-height: 44px, clickable area adequate */}
   </button>
   ```

3. **Disable hover states on touch devices:**
   ```css
   /* Only apply hover on devices that support it */
   @media (hover: hover) {
     button:hover {
       background-color: #d4af37;
     }
   }
   ```

---

## Performance Issues

### Issue: Page loads slowly

**Symptoms:**

- Lighthouse score low
- Takes > 3 seconds to load
- Images load late

**Solution:**

```bash
# Run Lighthouse audit
ng build --configuration production
# Check bundle size
npm run build -- --stats-json
# Analyze
npm install webpack-bundle-analyzer
```

Common fixes:

- Lazy-load images (loading="lazy")
- Code-split routes
- Minify CSS/JS
- Use WebP images with fallback
- Remove unused dependencies

---

### Issue: Memory leak

**Symptoms:**

- Memory usage keeps growing
- DevTools shows detached nodes
- Page slows down after time

**Solution:**
Always unsubscribe and cleanup:

```typescript
export class MyComponent implements OnDestroy {
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.service.data$.subscribe(...);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  // Required!
  }
}

// OR use takeUntil pattern
private destroy$ = new Subject<void>();

ngOnInit() {
  this.service.data$
    .pipe(takeUntil(this.destroy$))
    .subscribe(...);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

---

## Browser-Specific Issues

### Issue: Works in Chrome, broken in Safari

**Symptoms:**

- CSS doesn't apply
- JavaScript errors
- Layout different

**Solution:**
Common culprits:

1. **Webkit prefix required:**

   ```css
   -webkit-appearance: none;
   -webkit-backdrop-filter: blur(10px);
   ```

2. **iOS modal/popup issues:**

   ```css
   /* Prevent zoom on input focus */
   input {
     font-size: 16px; /* At least 16px */
   }
   ```

3. **Safari doesn't support some CSS:**
   ```css
   /* Check caniuse.com for support */
   @supports (backdrop-filter: blur(10px)) {
     .card {
       backdrop-filter: blur(10px);
     }
   }
   ```

---

### Issue: Works in Firefox, broken elsewhere

**Symptoms:**

- Layout only breaks in certain browsers
- Flexbox behaves differently
- Grid alignment off

**Solution:**

1. **Test browser compatibility:**
   - Use BrowserStack for real device testing
   - Check caniuse.com for feature support

2. **Provide fallbacks:**
   ```css
   display: flex; /* Fallback */
   display: grid; /* Preferred */
   ```

---

## Component Issues

### Issue: Component doesn't update

**Symptoms:**

- Data changes but view doesn't
- Button click does nothing
- Form not responding

**Solution:**

1. **Check change detection:**

   ```typescript
   export class MyComponent {
     data = "";

     ngOnInit() {
       // Async update - might not trigger CD
       setTimeout(() => {
         this.data = "Updated";
         // Force change detection if needed
         this.cdr.markForCheck();
       }, 1000);
     }

     constructor(private cdr: ChangeDetectorRef) {}
   }
   ```

2. **Use OnPush strategy correctly:**

   ```typescript
   @Component({
     changeDetection: ChangeDetectionStrategy.OnPush,
   })
   export class MyComponent {
     @Input() data: string; // Change triggers update

     constructor(private cdr: ChangeDetectorRef) {}
   }
   ```

---

### Issue: Data service not returning data

**Symptoms:**

- Undefined values in template
- No data displayed
- Service errors

**Solution:**
Check data service structure:

```typescript
// services/example.service.ts
@Injectable({ providedIn: "root" })
export class ExampleService {
  private data = [
    /* ... */
  ];

  // Provide getters
  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data.find((d) => d.id === id);
  }
}

// In component
export class MyComponent {
  data = this.service.getAll(); // Call method, don't just reference

  constructor(private service: ExampleService) {}
}
```

---

## Build Issues

### Issue: Build fails

**Symptoms:**

- `ng build` command fails
- TypeScript errors
- Module not found

**Solution:**

```bash
# Check TypeScript errors
ng build

# Specific error messages
# Fix each error, common ones:
# - Missing imports
# - Type mismatches
# - Circular dependencies

# Check circular dependencies
npm install madge --save-dev
npx madge --circular src/
```

---

### Issue: Production build different from dev

**Symptoms:**

- Works in ng serve, broken in production
- Performance much worse
- Styling different

**Solution:**

1. Build and test production build locally:

   ```bash
   ng build --configuration production
   npx http-server dist/
   ```

2. Check for console errors
3. Verify environment configuration:
   ```typescript
   // environment.production.ts
   export const environment = {
     production: true,
     apiUrl: "https://api.production.com", // Right endpoint?
   };
   ```

---

## Deployment Issues

### Issue: Deploy fails

**Symptoms:**

- Firebase deploy error
- Build succeeds but deploy fails
- Wrong files deployed

**Solution:**

```bash
# Check Firebase configuration
firebase projects:list

# Verify firebase.json
cat firebase.json

# Check build was created
ls -la dist/

# Deploy with verbose output
firebase deploy --debug

# Rollback if needed
firebase hosting:rollback --project=PROJECT_ID
```

---

## Getting Help

**When stuck:**

1. Check this guide first
2. Look at the related constant file (colors.ts, animations.ts, motion.ts)
3. Check the component's parent/child components
4. Use DevTools to inspect computed styles
5. Check browser console for errors
6. Test on different browsers
7. Review similar working components
8. Check TypeScript type errors
9. Run Lighthouse audit
10. Search GitHub issues for the framework/library

**Documentation:**

- Angular: https://angular.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Three.js: https://threejs.org/docs
- GSAP: https://gsap.com/docs

---

## Quick Debug Checklist

- [ ] Check browser console for errors
- [ ] Test in different browser
- [ ] Clear cache (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Check DevTools Elements tab for element presence
- [ ] Check DevTools Styles tab for correct CSS
- [ ] Check DevTools Console for warnings
- [ ] Run `ng build` to check for compilation errors
- [ ] Check file paths are correct (case-sensitive on Linux)
- [ ] Verify imports are correct
- [ ] Check type definitions match usage
- [ ] Look for console-style issues (hardcoded colors/spacing)
- [ ] Test on mobile/tablet sizes
- [ ] Disable CSS/JS to isolate issue
- [ ] Use browser DevTools debugger to step through code
- [ ] Check network tab for failed requests

---

**Remember:** The design system is built to be maintainable. When in doubt, reference the constant files (colors.ts, animations.ts, motion.ts) as the source of truth.
