# 📐 Visual Blueprint & Component Reference

## Page Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    Responsive Navigation                     │
│  Desktop: Left Sidebar (80px wide)  Mobile: Bottom Bar       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                      HERO SECTION                            │
│                   (Full Viewport Height)                     │
│                                                               │
│                  Ashutosh Karn                               │
│              Software Engineer | AI Enthusiast               │
│                      Professional Statement                  │
│                    [View Work] [Contact]                     │
│                                                               │
│                 ↓ Scroll to explore ↓                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│               TECHNOLOGY ARSENAL                             │
│            3D Tech Stack Showcase                            │
│                                                               │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│   │Python│ │ Java │ │  JS  │ │  TS  │                       │
│   └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                               │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│   │React │ │Angular│ │Node.js│Express│                      │
│   └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                               │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│   │Docker│ │ K8s  │ │ AWS  │ │Azure │                       │
│   └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                               │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│   │GitHub│Actions│Tailwind│Firebase│                        │
│   └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                               │
│       Hover any badge to see 3D tilt effect ✨              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│               FEATURED PROJECTS                              │
│        Production-Ready Applications                         │
│                                                               │
│   ┌────────────────────────┐  ┌────────────────────────┐    │
│   │  Project 1             │  │  Project 2             │    │
│   │  SkyCast               │  │  Arogya Vault          │    │
│   │                        │  │                        │    │
│   │  React weather app     │  │  Health records system │    │
│   │  Real-time data        │  │  Role-based access     │    │
│   │                        │  │                        │    │
│   │  React • TypeScript    │  │  Angular • Node.js     │    │
│   │  OpenWeatherMap API    │  │  Docker • AWS S3       │    │
│   └────────────────────────┘  └────────────────────────┘    │
│                                                               │
│   ┌────────────────────────┐  ┌────────────────────────┐    │
│   │  Project 3             │  │  Project 4             │    │
│   │  Portfolio OS          │  │  AI Framework          │    │
│   │                        │  │                        │    │
│   │  Personal brand site   │  │  ML deployment system  │    │
│   │  Cinematic design      │  │  Real-time inference   │    │
│   │                        │  │                        │    │
│   │  Angular • WebGL       │  │  Python • FastAPI      │    │
│   │  Three.js • Tailwind   │  │  Docker • Kubernetes   │    │
│   └────────────────────────┘  └────────────────────────┘    │
│                                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│          EXPERIENCE & EDUCATION TIMELINE                     │
│                                                               │
│     Timeline Line ────────────────────────────────────────   │
│                                                               │
│  2022-2026:  ● B.Tech Computer Science (SHUATS)             │
│              ✓ CGPA 7.5 | 4th Year                          │
│              Skills: Data Structures, Database Design       │
│                                                               │
│  2023-2024:  ● Web Development Training (Internshala)       │
│              ✓ React, Node.js, PHP, REST APIs              │
│              Built production applications                  │
│                                                               │
│  2023-2024:  ● AI/ML Internship (SmartED)                   │
│              ✓ TensorFlow, Data Analysis, Deployment       │
│              Implemented ML pipelines                       │
│                                                               │
│  2024:       ● AWS Cloud Computing (Top Performer 90%)      │
│              ✓ EC2, S3, Lambda, CloudFormation             │
│              Deployed scalable applications                 │
│                                                               │
│  2024-Now:   ● Full Stack Engineer (Independent)            │
│              ✓ Angular, TypeScript, Docker, Kubernetes     │
│              Leading multiple projects                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        FOOTER                                │
│                                                               │
│  Ashutosh Karn  │  Quick Links  │  Connect                  │
│  About blurb    │  • Projects   │  • GitHub                 │
│  Professional   │  • Experience │  • LinkedIn               │
│  focused        │  • Stack      │  • Email                  │
│                                                               │
│  © 2026 Ashutosh Karn. All rights reserved.                 │
│  Designed & Built with Care                                │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy & Assembly

```
home-redesigned (Main Container)
├── hero
│   ├── Name + title
│   ├── Professional statement
│   ├── CTA buttons
│   └── Scroll indicator
│
├── tech-stack-3d
│   ├── section-header
│   ├── 4x4 grid of tech-badge-3d
│   │   └── Each badge: 3D tilt on hover
│   └── Category breakdown
│
├── projects-section
│   ├── section-header
│   └── 2-column grid of project-card
│       ├── Title + role
│       ├── Description
│       ├── Highlights
│       ├── Tech badges
│       └── CTA link
│
├── experience-timeline
│   ├── section-header
│   └── Timeline items (alternating left/right)
│       ├── Title + organization
│       ├── Period
│       ├── Description
│       └── Skill badges
│
└── footer
    ├── About section
    ├── Quick links
    └── Social connect
```

---

## Color Usage Map

```
BACKGROUND ELEMENTS (80% of page)
├── Main bg:           Navy 900 (#0f1419)
├── Section bg:        Midnight (#1a1f2e) - optional overlay
├── Card bg:           Soft Black (#121620) with glassmorphism
└── Hover bg:          Charcoal (#1c2333)

TEXT ELEMENTS (15% of page)
├── Headlines:         Primary White (#f1f5f9)
├── Body text:         Secondary White (#cbd5e1)
├── Descriptions:      Tertiary White (#94a3b8)
└── Hints/Metadata:    Muted White (#64748b)

ACCENT ELEMENTS (2-3% of page - Use Sparingly!)
├── Buttons:           Gold Primary (#d4af37)
├── Hover glow:        Gold Dark (#a89968)
├── Links:             Gold Primary (#d4af37)
└── Active nav:        Gold Primary (#d4af37)
```

---

## Animation Map

```
ALWAYS ANIMATING (Background)
├── Liquid background:  12s fluid morph cycle
│   └── Continuous, never stops
└── Wave motion:        Sine/cos waves at ~0.3-0.25 speed

TRIGGERED BY SCROLL
├── Parallax background: Responsive to scroll position
│   └── Smooth Y-axis shift
└── Fade-in content:     As elements enter viewport
    └── 800ms ease-out stagger

TRIGGERED BY HOVER
├── Tech badges:        300ms 3D tilt (-10° to +10°)
├── Cards:              200ms translateY(-4px)
├── Buttons:            200ms glow intensity change
└── Links:              Color transition 200ms

MOUSE MOVEMENT
└── Background:         Soft distortion near cursor (500px radius)
    └── Smooth follow, no jank
```

---

## Typography Map

```
H1 (Hero Headlines)
├── Size:      40px (mobile), 64px (desktop)
├── Weight:    700 (bold)
├── Spacing:   -0.02em letter-spacing
└── Color:     Primary white (#f1f5f9)

H2 (Section Headers)
├── Size:      32px (mobile), 48px (desktop)
├── Weight:    700
└── Color:     Primary white

H3 (Card Headers)
├── Size:      24px
├── Weight:    600
└── Color:     Primary white

Body Text
├── Size:      14px (mobile), 16px (desktop)
├── Weight:    400
├── Line:      1.5-1.6
└── Color:     Secondary white (#cbd5e1)

Small Text
├── Size:      12px
├── Weight:    400
└── Color:     Tertiary/Muted white

Code
├── Font:      JetBrains Mono
├── Size:      0.875em
├── Color:     Tertiary white
└── Background: rgba(255,255,255,0.05)
```

---

## Responsive Breakpoints

```
MOBILE (< 768px)
├── Layout:        1 column, stacked
├── Nav:           Bottom bar (20px height)
├── Grid:          grid-cols-1 or grid-cols-2
├── Padding:       px-4 (default)
├── Hero:          Smaller text, centered
└── Tech badges:   2 columns

TABLET (768px - 1024px)
├── Layout:        2 column or 2x2 grid
├── Nav:           Starting to show sidebar preview
├── Grid:          grid-cols-2
├── Hero:          Medium text
└── Tech badges:   3 columns

DESKTOP (1024px+)
├── Layout:        Full width optimized
├── Nav:           Fix left sidebar (80px)
├── Grid:          grid-cols-4 (tech), grid-cols-2 (projects)
├── Content:       max-w-6xl centered
├── Padding:       px-8
└── Tech badges:   4 columns in grid
```

---

## Component States

### Tech Badge

```
DEFAULT:
├── Background:    Glass (rgba(255,255,255,0.05))
├── Border:        white/10
├── Icon Scale:    100%
└── Text Color:    white/90

HOVER:
├── Background:    Glass (rgba(255,255,255,0.08))
├── Border:        white/20
├── Icon Scale:    110%
├── Shadow:        Gold glow
├── Rotation:      3D tilt effect
└── Below bar:     Gold gradient line appears
```

### Project Card

```
DEFAULT:
├── Background:    Glassmorphic
├── Border:        white/10
├── Elevation:     0px
└── Shadow:        None

HOVER:
├── Background:    Slightly more opaque
├── Border:        white/20
├── Elevation:     -4px translateY
└── Shadow:        Glow md (gold)
```

### Navigation Item

```
DEFAULT:
├── Color:         slate-400
├── Border:        transparent
└── Background:    transparent

HOVER:
├── Color:         gold-primary
├── Border:        white/10
└── Background:    white/5 (subtle)

ACTIVE:
├── Color:         gold-primary
├── Border:        gold-primary (bottom)
└── Background:    white/5
```

---

## Accessibility Components

```
KEYBOARD NAVIGATION
├── Tab order:     Logical left-to-right, top-to-bottom
├── Focus ring:    Visible gold border
├── Skip link:     Optional skip-to-main
└── Landmarks:     nav, main, footer properly marked

COLOR CONTRAST
├── Text on navy:  AAA (21:1 white on #0f1419)
├── Gold text:     AA (4.5:1 minimum)
└── Border colors: Visible on all backgrounds

SCREEN READERS
├── Link labels:   Descriptive text
├── Image alt:     All images have alt text
├── Form labels:   Associated with inputs
├── ARIA labels:   For icon buttons
└── Landmarks:     nav, main, footer tags

MOTION PREFERENCES
├── prefers-reduced-motion: All animations disabled
├── Auto-disabled:  Automatic CSS @media query
└── Fallback:       Static experience still works
```

---

## Performance Optimization Points

```
BACKGROUND CANVAS
├── Hardware acceleration: WebGL GPU rendering
├── Resolution:    Adjusted for device pixel ratio
├── Update rate:   RequestAnimationFrame (60fps)
└── Cleanup:       Properly disposed on destroy

SCROLL PERFORMANCE
├── Lenis library:  Smooth, optimized scrolling
├── RAF scheduling: Outside Angular zone (NGZone)
└── Event handling: Passive event listeners

COMPONENT LOADING
├── Lazy loading:  Routes load on demand
├── Change detection: OnPush strategy
└── Unsubscribe:   Cleanup in ngOnDestroy

IMAGE OPTIMIZATION
├── Logo format:   SVG or PNG with sizing
├── CDN delivery:  shields.io for tech logos
└── Lazy loading:  Images load as needed
```

---

## File Size Estimates

```
CSS:
├── Tailwind output:    ~150-200 KB (production)
└── Custom styles:      ~50 KB

JavaScript:
├── Angular core:       ~500 KB
├── Three.js:           ~400 KB
├── Components bundle:  ~200 KB
└── GSAP/Lenis:         ~100 KB

Total Production Size (Gzipped):
├── JS Bundle:          ~300-400 KB
├── CSS:                ~30-50 KB
└── Initial load:       ~50-100 KB
```

---

## Error Handling & Edge Cases

```
BACKGROUND NOT SUPPORTED
├── Fallback:      Solid navy background
├── Detection:     WebGL support check
└── Graceful:      Still fully functional

IMAGE LOAD FAILURE
├── Tech badges:   Show placeholder
├── Project images: Gray box with icon
└── Fallback:      Text still visible

SCROLL SERVICE FAILURE
├── Fallback:      Native browser scroll
├── Detection:     Lenis initialization error
└── Graceful:      Page still scrollable

ANIMATION NOT SUPPORTED
├── Detection:     prefers-reduced-motion
├── Fallback:      Instant transitions
└── Graceful:      All content accessible
```

---

## Summary Visual

```
🎨 DESIGN SYSTEM
├── Colors:     Navy + Gold (luxury aesthetic)
├── Type:       Inter + JetBrains Mono (clean, professional)
├── Layout:     Grid-based (responsive)
└── Animation:  Smooth, purposeful (never jarring)

🎬 EXPERIENCE
├── Hero:       Impressive yet calm
├── Tech:       3D showcase of real expertise
├── Projects:   Professional portfolio work
├── Timeline:   Clear career progression
└── Overall:    "This person is professional"

📊 METRICS
├── Performance: 95+ Lighthouse
├── Motion:     60fps smooth
├── Access:     WCAG AA compliant
└── Responsive: Mobile to desktop

✨ RESULT
"A senior engineer's portfolio that demonstrates
technical depth, design thinking, and attention to detail."
```

---

This visual blueprint serves as the complete reference for how the portfolio looks, feels, and functions. Use it during implementation to ensure everything matches the intended design.
