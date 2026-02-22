# 🚀 Portfolio OS - Elite Frontend Engineer Control Interface

> **A premium, thoughtful portfolio website built with modern web technologies.** Clean design. Intelligent interactions. Zero gimmicks.

**Live Demo:** [karnashutosh.web.app](https://karnashutosh.web.app)  
**GitHub:** [Karn0511/Portfolio-Website](https://github.com/Karn0511/Portfolio-Website)

---

## ✨ Overview

Portfolio OS is a sophisticated personal portfolio designed to showcase a full-stack engineer's capabilities through a refined **hacker-inspired aesthetic**. Every element—from the color palette to the animations—is intentionally designed to communicate:

- **Precision** in craftsmanship
- **Intelligence** in execution
- **Professionalism** in presentation

<details>
<summary><b>Design Philosophy</b></summary>

The portfolio follows a strict non-negotiable design principle:

- ✅ **No neon colors** (gold #d4af37 used at <3% as accent only)
- ✅ **No cyberpunk clutter** (clean, minimalist layout)
- ✅ **No fake stats** (all real user data)
- ✅ **No chaotic animations** (every transition is purposeful, 300-800ms)
- ✅ **No gimmicks** (no cursor tricks or unnecessary effects)

**Result:** When shown to a CTO or founder, the reaction is: _"Clean. Confident. Thoughtful. High quality."_

</details>

---

## 🎯 Key Features

### 🎨 **Premium Design System**

- Material Design principles with a hacker aesthetic
- Cohesive color palette: Deep Navy (#0a0f1a) + White (#ffffff) + Gold accent (#d4af37)
- Centralized design tokens (colors, typography, spacing, motion, elevation)
- Glass-morphism effects (backdrop-filter blur, subtle opacity)
- Responsive grid system (2-4 columns depending on viewport)

### ✨ **Smooth Animations**

- **Hero entrance:** Staggered fade-in (0.8s, power3.out easing)
- **Scroll reveals:** Section animations triggered on viewport entry
- **Hover effects:** Subtle elevation, gold underlines, scale transitions
- **Parallax depth:** Liquid background reacts to scroll (2% offset)
- **Micro-interactions:** Button slides, card lifts, icon scales

### 🌌 **Ambient Particle System** ⭐ NEW

A physics-based force-field effect where particles respond intelligently to cursor movement—inspired by [antigravity.google](https://antigravity.google).

**What it does:**

- ✨ 40 particles continuously drift across the screen with organic motion
- 🧲 Particles gently curve _around_ cursor like a magnetic field (not chase it)
- 🌀 Weak orbital influence creates subtle swirling motion
- 📍 Spring force brings particles home when cursor leaves
- 🎨 Gold + teal glow with motion trail effect

**Physics model:**

- Idle drift: Sine/cosine-based continuous motion
- Cursor attraction: Distance-based soft gravitational well
- Orbital influence: Perpendicular force for swirling
- Spring return: Restoring force to original position
- Damping: Smooth velocity reduction to prevent chaos

**Feel:** "Data points reacting to a magnetic field" (premium, calm, intelligent)

See [AMBIENT_PARTICLES_GUIDE.md](AMBIENT_PARTICLES_GUIDE.md) for full technical documentation and tuning options.

### 🧠 **Global Components**

- **LiquidBgComponent:** Organic canvas-rendered background with GPU acceleration
- **AmbienceParticlesComponent:** ⭐ Physics-based ambient particle system with cursor-interactive force fields
- **GlassCardComponent:** Reusable glass panel (light/medium/strong variants)
- **SectionHeaderComponent:** Consistent headings with accent text
- **TechBadge3dComponent:** Premium tech display with subtle 3D tilt (±15° max, no spinning)
- **Navigation:** Fixed header with smooth scroll behavior

### ♿ **Accessibility First**

- ARIA labels on all interactive elements
- `prefers-reduced-motion` media query support
- Proper semantic HTML structure
- Keyboard navigation support
- High contrast text (#ffffff on #0a0f1a)

### ⚡ **Performance Optimized**

- **Bundle size:** 657.01 kB (164.65 kB gzipped)
- **Code splitting:** 7 lazy chunks for features
- **Build time:** ~4.3 seconds (production)
- **Canvas GPU acceleration:** Hardware-accelerated rendering
- **Passive event listeners:** No scroll jank
- **Zero external fonts:** System fonts for fast loading

---

## 🛠️ Technology Stack

### **Frontend**

- **Angular 19** - Standalone components, signals-based reactivity
- **TypeScript** - Strict mode, functional programming
- **Tailwind CSS** - Utility-first styling with design tokens
- **GSAP 3** - Professional animation library with ScrollTrigger
- **Canvas API** - GPU-accelerated background rendering

### **Build & Deployment**

- **Angular CLI** - Build optimization, code splitting
- **Firebase Hosting** - Global CDN, instant deployment, SSL
- **GitHub** - Version control, CI/CD integration

### **Development Tools**

- **Node.js 18+** - JavaScript runtime
- **npm** - Package management
- **VSCode** - Editor (with Angular extensions)

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js ≥ 18.0.0
npm ≥ 9.0.0
Angular CLI ≥ 19.0.0
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Karn0511/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   ng serve
   # Navigate to http://localhost:4200
   ```

4. **Build for production**
   ```bash
   ng build
   # Output in dist/portfolio-os
   ```

### Optional: Configure Ollama AI Assistant

To enable the AI chatbot (requires local Ollama server):

1. Install [Ollama](https://ollama.com)
2. Start Ollama: `ollama serve`
3. Pull model: `ollama pull qwen2.5:3b`
4. Update API endpoint in `src/app/core/services/ai.service.ts`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── constants/
│   │   │   ├── design-tokens.ts      # ★ COLORS, TYPOGRAPHY, MOTION, ELEVATION
│   │   │   ├── animations.ts         # Animation keyframes
│   │   │   ├── colors.ts             # Color utilities
│   │   │   └── typography.ts         # Font families, sizes
│   │   ├── data/
│   │   │   ├── experience.data.ts    # Work experience
│   │   │   ├── projects.data.ts      # Project showcase
│   │   │   └── tech-stack.data.ts    # Technology list
│   │   ├── directives/
│   │   │   └── scroll-reveal.directive.ts  # Scroll animations
│   │   ├── services/
│   │   │   ├── ai.service.ts         # Ollama AI integration
│   │   │   ├── liquid-background.service.ts
│   │   │   ├── parallax.service.ts
│   │   │   └── scroll.service.ts
│   │   └── utils/
│   │       └── spacing.utils.ts      # Spacing helpers
│   │
│   ├── features/
│   │   └── home/
│   │       ├── home.redesigned.component.ts  # ★ Main landing page
│   │       ├── hero.component.ts
│   │       ├── projects-section.component.ts
│   │       └── tech-stack-3d.component.ts
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── liquid-bg/              # ★ Global background
│   │       ├── glass-card/             # ★ Reusable panel
│   │       ├── section-header/         # ★ Section titles
│   │       ├── tech-badge-3d/          # ★ Tech display
│   │       ├── navbar/                 # Navigation
│   │       └── ... (other components)
│   │
│   ├── app.config.ts                 # App configuration
│   ├── app.routes.ts                 # Routing
│   └── styles.css                    # Global styles
│
└── environments/
    └── firebase.config.ts            # Firebase credentials
```

### ★ Core Components

**design-tokens.ts** - The heart of the design system:

```typescript
export const COLORS = {
  background: { deep: "#0a0f1a", primary: "#111b2e", ... },
  text: { primary: "#ffffff", secondary: "#d1d5db", accent: "#d4af37" },
  border: { subtle: "rgba(255,255,255,0.1)", accent: "rgba(212,175,55,0.3)" },
  ... (30+ color definitions)
};

export const TYPOGRAPHY = {
  families: { sans: "Inter", mono: "Fira Code" },
  sizes: { xs: "0.75rem", sm: "0.875rem", ... 7xl: "3.5rem" },
  ... (weights, line-heights, letter-spacing)
};

export const MOTION = {
  easing: { smooth: "cubic-bezier(0.34, 1.56, 0.64, 1)", ... },
  durations: { fast: "200ms", normal: "300ms", slow: "800ms" },
  ... (stagger, parallax values)
};
```

---

## 🎨 Design System

### Color Palette

| Purpose            | Color                 | Usage                         |
| ------------------ | --------------------- | ----------------------------- |
| **Background**     | #0a0f1a               | Primary background            |
| **Text Primary**   | #ffffff               | Main text                     |
| **Text Secondary** | #d1d5db               | Muted text                    |
| **Accent**         | #d4af37               | Links, highlights (<3% usage) |
| **Border**         | rgba(255,255,255,0.1) | Dividers, edges               |
| **Status Success** | #10b981               | Indicators, badges            |

### Typography

- **Display:** Inter 900 7xl (headlines)
- **Body:** Inter 400-500 base (content)
- **Code:** Fira Code 400 sm (technical)

### Spacing

Consistent spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px...  
_Implemented via Tailwind: `px-6 md:px-12` = responsive padding_

### Elevation (Z-Index)

```
Liquid Background:  z-50 (behind all content)
Navigation:         z-50 (top layer)
Modals/Overlays:    z-40
Default Content:    z-10
Backgrounds:        z-0
```

---

## 📊 Build & Performance Metrics

### Bundle Analysis

```
Initial Chunks:
├─ main                 278.70 kB (core Angular)
├─ chunk-7QDKYHGJ      142.60 kB (dependencies)
├─ styles              98.93 kB  (CSS)
├─ chunk-3NCW5I5V      89.85 kB  (GSAP + Canvas)
├─ polyfills           34.58 kB  (browser polyfills)
└─ chunk-LUDD5KVK      12.35 kB  (utilities)

Total Initial:         657.01 kB (164.65 kB gzipped)

Lazy Chunks:
├─ home-redesigned     71.66 kB  (main page)
├─ chunk-CDNQBUKV      70.00 kB  (features)
├─ chunk-EFSBX37U      67.59 kB  (browser compatibility)
└─ ... (6 more chunks)

Build Time:            4.3 seconds
CLS (Layout Shift):    0 (fixed layout)
FCP (First Paint):     ~800ms
LCP (Largest Paint):   ~1.2s
```

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 98+
- **Best Practices:** 95+
- **SEO:** 98+

---

## 🎬 Animations & Interactions

### Entrance Animations

```typescript
// Hero fade-in with stagger
gsap.from("section:first-child", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
});

// Section scroll reveals
gsap.from('section:nth-child(3) [class*="glass"]', {
  scrollTrigger: { trigger: "section:nth-child(3)", start: "top 70%" },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.15,
  ease: "power3.out",
});
```

### Micro-Interactions

**CTA Button Hover:**

- Background slide-in (left to right)
- Lift with shadow depth
- Smooth cubic-bezier easing

**Glass Card Hover:**

- Translate Y -4px (float up)
- Shadow enhancement
- Border opacity increase

**Tech Badge Hover:**

- 3D rotation ±15° (coupled to cursor position)
- Gold accent line appears
- Icon scales 1.1x

### Parallax Effect

The liquid background adjusts position based on scroll:

```typescript
const parallaxOffset = this.scrollY * 0.02; // 2% depth
```

---

## ⚙️ Configuration

### Firebase Hosting

**File:** `firebase.json`

```json
{
  "hosting": {
    "site": "karnashutosh",
    "public": "dist/portfolio-os",
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

**Deploy:**

```bash
npm run build
firebase deploy
```

### Environment Variables

**File:** `src/environments/firebase.config.ts`

```typescript
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    projectId: "studio-6750795046-5e9b4",
    // ...
  },
};
```

### Customize User Data

Update these files with your information:

1. **Name & Email:** `src/app/features/home/home.redesigned.component.ts`

   ```typescript
   <h1 class="text-8xl">YOUR_NAME</h1>
   <p>Senior Frontend Engineer & Cloud Architect</p>
   ```

2. **Projects:** `src/app/core/data/projects.data.ts`

   ```typescript
   export const PROJECTS = [
     { name: "Project Name", description: "...", link: "..." },
     // ...
   ];
   ```

3. **Tech Stack:** `src/app/features/home/home.redesigned.component.ts`

   ```html
   <app-tech-badge-3d
     [badge]="{
     name: 'TypeScript',
     icon: '/assets/tech/typescript.svg',
     category: 'language'
   }"
   ></app-tech-badge-3d>
   ```

4. **Colors:** `src/app/core/constants/design-tokens.ts`
   ```typescript
   export const COLORS = {
     background: { deep: "#0a0f1a" }, // Customize
     ...
   };
   ```

---

## 🔒 Security Features

### Implemented Protection

- ✅ XSS prevention (Angular's sanitization)
- ✅ CSRF tokens in forms
- ✅ Content Security Policy headers
- ✅ Secure headers (X-Frame-Options, X-Content-Type-Options)
- ✅ HTTPS enforcement (Firebase Hosting)
- ✅ No sensitive data in frontend code

### API Integration

If integrating with APIs:

- Use environment-specific configurations
- Implement request/response interceptors
- Validate all user inputs
- Use HTTPS only

---

## 📈 Scalability & Maintenance

### Code Quality

- **TypeScript Strict Mode:** Enabled for type safety
- **Linting:** ESLint + SonarQube rules
- **Testing:** Unit & E2E test structure ready
- **Documentation:** Inline comments + README

### Performance Optimization

- **Code Splitting:** Lazy-loaded feature modules (71.66 kB chunks)
- **Tree Shaking:** Unused code removed at build time
- **Minification:** Production builds fully minified
- **Caching:** Firebase caching headers configured

### Monitoring

- **Build Logs:** Console output for deployment tracking
- **Error Tracking:** Sentry integration ready
- **Analytics:** Google Analytics compatible structure

---

## 🤝 Contributing

### Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards

- Follow Angular style guide
- Use TypeScript strict mode
- Add comments for complex logic
- Test new features before opening PR

---

## 📦 Deployment

### Automatic Deployment (via `sync.ps1`)

```bash
npm run build              # Angular build
firebase deploy           # Firebase Hosting
git add . && git commit   # Version control
git push                 # GitHub sync
```

### Manual Deployment (Step by Step)

```bash
# 1. Build production bundle
ng build --configuration production

# 2. Deploy to Firebase
firebase login
firebase deploy --only hosting:karnashutosh

# 3. Verify deployment
# Visit https://karnashutosh.web.app
```

### GitHub Pages Alternative

```bash
ng build --base-href /Portfolio-Website/
# Deploy dist/portfolio-os to gh-pages branch
```

---

## 🐛 Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm ci

# Check Angular version
ng version

# Detailed build output
ng build --verbose
```

### Runtime Issues

```bash
# Check console for errors
# Press F12 → Console tab

# Common fixes:
# 1. Clear browser cache (Ctrl+Shift+Del)
# 2. Hard refresh (Ctrl+Shift+R)
# 3. Check Firebase config in console
```

### Deployment Issues

```bash
# Firebase authentication
firebase login --reauth

# Check deployment status
firebase hosting:channel:list

# Rollback to previous version
firebase hosting:rollback
```

---

## 📚 Resources

### Official Documentation

- [Angular Docs](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://gsap.com/docs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

### Design Inspiration

- [Hacker News](https://news.ycombinator.com)
- [Designer Inspirations](https://dribbble.com)
- [Awwwards](https://www.awwwards.com)

### Learning Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [Frontend Masters](https://frontendmasters.com)
- [CSS Tricks](https://css-tricks.com)

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Ashutosh Karn**

- **GitHub:** [@Karn0511](https://github.com/Karn0511)
- **LinkedIn:** [@Karn1105](https://linkedin.com/in/Karn1105)
- **Email:** [karnashutosh6@gmail.com](mailto:karnashutosh6@gmail.com)

---

## 🙏 Acknowledgments

- **Angular Team** for the amazing framework
- **Tailwind Labs** for utility-first CSS
- **GSAP** for powerful animations
- **Firebase** for seamless hosting
- All contributors and supporters

---

## 📝 Changelog

### v2.0.0 (Current)

- ✨ Complete UI/UX redesign with premium hacker aesthetic
- ✨ New design token system (COLORS, TYPOGRAPHY, MOTION, ELEVATION)
- ✨ Global liquid background animation (Canvas GPU-accelerated)
- ✨ Micro-interactions and scroll animations
- ✨ Enhanced accessibility (ARIA labels, prefers-reduced-motion)
- ✨ Code quality fixes (readonly, globalThis, Math.hypot)
- 🐛 Fixed all build errors and warnings
- ⚡ Performance optimizations (657.01 kB initial bundle)

### v1.0.0

- Initial portfolio launch
- Basic component structure
- Firebase hosting setup
- GitHub integration

---

<div align="center">

**[🌐 Live Demo](https://karnashutosh.web.app) • [📂 Source Code](https://github.com/Karn0511/Portfolio-Website) • [📧 Contact](mailto:karnashutosh6@gmail.com)**

_Made with ❤️ & Angular_

</div>
