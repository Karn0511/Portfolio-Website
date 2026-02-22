import { Component, OnInit, OnDestroy, OnAfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionComponent } from "../../shared/components/section/section.component";
import { ContainerComponent } from "../../shared/components/container/container.component";
import { ScrollRevealDirective } from "../../core/directives/scroll-reveal.directive";
import { ANIMATION_TIMINGS, EASING } from "../../core/constants/animations";
import { MOTION, LAYOUT } from "../../core/constants/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * HOME COMPONENT - Hacker Control Dashboard
 * Cinematic, energetic, hacker-inspired
 * 
 * Design:
 * - Full viewport height hero
 * - Terminal-inspired control panel UI
 * - Liquid background with teal energy
 * - Professional, not chaotic
 * - Calm motion with visual energy
 */

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionComponent,
    ContainerComponent,
    ScrollRevealDirective,
  ],
  template: `
    <!-- Hero Section: Control Dashboard -->
    <section
      class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
      #heroSection
    >
      <!-- Animated Background Layers -->
      <div
        class="absolute inset-0 z-0"
        #parallaxBg1
        style="background: linear-gradient(135deg, rgba(15, 20, 25, 0.6) 0%, rgba(26, 42, 74, 0.4) 50%, rgba(15, 20, 25, 0.6) 100%)"
      ></div>

      <!-- Teal Energy Glow (right side) -->
      <div
        class="absolute top-1/4 right-1/6 w-96 h-96 rounded-full opacity-20 z-0 blur-3xl"
        style="background: radial-gradient(circle, rgba(6, 214, 208, 0.4) 0%, transparent 70%)"
        #parallaxBg2
      ></div>

      <!-- Gold Glow (left side) -->
      <div
        class="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full opacity-15 z-0 blur-3xl"
        style="background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)"
        #parallaxBg3
      ></div>

      <!-- Main Content Grid -->
      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Terminal Panel -->
          <div 
            class="lg:col-span-1 order-2 lg:order-1"
            appScrollReveal="slideUp"
            [scrollRevealDelay]="100"
          >
            <div 
              class="border border-teal-primary/40 bg-navy-900/80 backdrop-blur-sm rounded-lg p-6 font-mono text-sm leading-relaxed"
              style="background: linear-gradient(180deg, rgba(6, 214, 208, 0.05) 0%, rgba(212, 175, 55, 0.03) 100%)"
            >
              <!-- Terminal Lines -->
              <div class="space-y-3 text-text-muted">
                <div><span class="text-teal-primary">[BOOT_SEQ]</span> > Initializing system...</div>
                <div><span class="text-teal-primary">[KERNEL]</span> > Loading core modules...</div>
                <div><span class="text-teal-primary">[USER]</span> > Ashutosh Karn detected.</div>
                <div><span class="text-gold-primary">[STATUS]</span> > Access granted.</div>
                <div><span class="text-text-muted">[INFO]</span> > Engineering expertise loaded...</div>
                <div>
                  <span class="text-text-muted">[INFO]</span> > Architectural patterns initialized...
                </div>
                <div class="flex items-center gap-2 pt-2">
                  <span class="text-teal-primary">>_</span>
                  <span class="w-1 h-4 bg-teal-primary/60 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Center Column: Hero Headline & CTA -->
          <div 
            class="lg:col-span-1 order-1 lg:order-2"
            appScrollReveal="fadeIn"
          >
            <div class="space-y-8">
              <!-- Identifier Badge -->
              <div class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-teal-primary/30 bg-teal-primary/5">
                <span class="w-2 h-2 rounded-full bg-teal-primary animate-pulse"></span>
                <span class="text-xs font-mono text-teal-primary uppercase tracking-widest">Senior Engineer</span>
              </div>

              <!-- Main Headline -->
              <div class="space-y-6">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-text-primary">
                  Ashutosh<br />
                  <span class="bg-gradient-to-r from-gold-primary via-teal-primary to-gold-primary bg-clip-text text-transparent">
                    Karn
                  </span>
                </h1>
                
                <p class="text-xl md:text-2xl font-medium text-teal-primary">
                  Frontend Engineer | Cloud & AI Enthusiast
                </p>

                <!-- Professional Statement -->
                <p class="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl border-l-2 border-gold-primary/50 pl-6">
                  Building intelligent systems with precision.
                  <span class="text-text-primary font-medium">
                    Expertise in architecturing scalable web systems, cloud infrastructure, and AI integration.
                  </span>
                </p>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  [routerLink]="['/projects']"
                  class="relative px-8 py-3 bg-gradient-to-r from-gold-primary to-teal-primary text-navy-900 font-semibold rounded-lg hover:shadow-glowEnergyMd transition-all duration-300 ease-out group overflow-hidden"
                >
                  <span class="relative z-10">View Projects</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-teal-primary to-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </button>
                <button
                  class="px-8 py-3 border-2 border-teal-primary/50 text-text-primary font-semibold rounded-lg hover:border-teal-primary hover:shadow-glowTealMd hover:bg-teal-primary/5 transition-all duration-300 ease-out"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Tech Stats Panel -->
          <div 
            class="lg:col-span-1 order-3"
            appScrollReveal="slideUp"
            [scrollRevealDelay]="200"
          >
            <div 
              class="border border-gold-primary/40 bg-navy-900/80 backdrop-blur-sm rounded-lg p-8 space-y-6"
              style="background: linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, rgba(6, 214, 208, 0.03) 100%)"
            >
              <!-- Stat Item 1 -->
              <div class="space-y-2">
                <div class="flex items-baseline justify-between">
                  <span class="text-sm font-mono text-text-muted uppercase tracking-widest">Experience</span>
                  <span class="text-2xl font-bold text-gold-primary">10+</span>
                </div>
                <div class="h-1 bg-navy-900/50 rounded-full overflow-hidden">
                  <div class="h-full w-5/6 bg-gradient-to-r from-gold-primary to-teal-primary rounded-full"></div>
                </div>
              </div>

              <!-- Stat Item 2 -->
              <div class="space-y-2">
                <div class="flex items-baseline justify-between">
                  <span class="text-sm font-mono text-text-muted uppercase tracking-widest">Projects</span>
                  <span class="text-2xl font-bold text-teal-primary">20+</span>
                </div>
                <div class="h-1 bg-navy-900/50 rounded-full overflow-hidden">
                  <div class="h-full w-4/5 bg-gradient-to-r from-teal-primary to-gold-primary rounded-full"></div>
                </div>
              </div>

              <!-- Stat Item 3 -->
              <div class="space-y-2">
                <div class="flex items-baseline justify-between">
                  <span class="text-sm font-mono text-text-muted uppercase tracking-widest">Stack</span>
                  <span class="text-2xl font-bold text-gold-primary">17+</span>
                </div>
                <div class="h-1 bg-navy-900/50 rounded-full overflow-hidden">
                  <div class="h-full w-11/12 bg-gradient-to-r from-gold-primary to-teal-primary rounded-full"></div>
                </div>
              </div>

              <!-- Status Badge -->
              <div class="pt-4 border-t border-gold-primary/20 flex items-center gap-2 text-teal-primary font-mono text-xs">
                <span class="w-2 h-2 rounded-full bg-teal-primary"></span>
                Available for opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
        #scrollIndicator
      >
        <span class="text-xs text-text-muted uppercase tracking-widest font-mono">Scroll</span>
        <div class="w-0.5 h-8 bg-gradient-to-b from-teal-primary via-gold-primary to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>

    <!-- Introduction Section -->
    <app-section [spacingVariant]="'lg'" appScrollReveal [revealType]="'slideUp'">
      <app-container [maxWidth]="'lg'">
        <div class="space-y-8">
          <div class="space-y-4">
            <span class="font-mono text-xs text-teal-primary uppercase tracking-widest">About</span>
            <h2 class="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Engineering with Purpose
            </h2>
          </div>

          <p class="text-lg text-text-secondary leading-relaxed max-w-3xl">
            I'm a software engineer specializing in cloud architecture, AI systems, and full-stack development.
            Focused on building scalable, maintainable solutions that solve real problems for users and businesses.
          </p>

          <p class="text-base text-text-tertiary leading-relaxed max-w-3xl">
            My experience spans from early-stage startups to enterprise systems, working with modern tooling
            including AWS, Azure, Kubernetes, and AI/ML frameworks. Passionate about clean code, thoughtful design,
            and continuous learning.
          </p>
        </div>
      </app-container>
    </app-section>
  `,
  styles: [
    `
      @keyframes subtle-float {
        0%, 100% {
          transform: translateY(0px);
          opacity: 1;
        }
        50% {
          transform: translateY(-8px);
          opacity: 0.95;
        }
      }

      @keyframes glow-pulse {
        0%, 100% {
          filter: drop-shadow(0 0 15px rgba(6, 214, 208, 0.3));
        }
        50% {
          filter: drop-shadow(0 0 25px rgba(6, 214, 208, 0.5));
        }
      }

      :host ::ng-deep {
        .glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit, OnAfterViewInit, OnDestroy {
  private gsapContext: any;

  ngOnInit() {
    // Smooth scroll setup (non-blocking)
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      html.style.scrollBehavior = "smooth";
    }
  }

  ngAfterViewInit() {
    // Setup parallax animations
    this.setupParallax();
  }

  private setupParallax() {
    const heroSection = document.querySelector('[#heroSection]');
    if (!heroSection) return;

    this.gsapContext = gsap.context(() => {
      // Parallax background layers on scroll
      gsap.to('[#parallaxBg1]', {
        scrollTrigger: {
          trigger: '[#heroSection]',
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          markers: false,
        },
        y: -50,
        opacity: 0.8,
        duration: 1,
      });

      gsap.to('[#parallaxBg2]', {
        scrollTrigger: {
          trigger: '[#heroSection]',
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
        y: -80,
        opacity: 0.15,
        duration: 1,
      });

      gsap.to('[#parallaxBg3]', {
        scrollTrigger: {
          trigger: '[#heroSection]',
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
        y: -60,
        opacity: 0.12,
        duration: 1,
      });

      // Fade out scroll indicator
      gsap.to('[#scrollIndicator]', {
        scrollTrigger: {
          trigger: '[#heroSection]',
          start: "top top",
          end: "center top",
          scrub: 0.2,
        },
        opacity: 0,
        duration: 0.5,
      });
    });
  }

  ngOnDestroy() {
    if (this.gsapContext) {
      this.gsapContext.revert();
    }
  }
}

      :host ::ng-deep .animate-pulse {
        animation: subtle-float 2s ease-in-out infinite;
      }
    `,
  ],
})
export class HomeComponent implements OnInit, OnDestroy, OnAfterViewInit {
  private scrollTrigger: any;

  constructor() {}

  ngOnInit(): void {
    // Initialize on component creation
  }

  ngAfterViewInit(): void {
    this.setupParallaxAnimations();
  }

  /**
   * Setup smooth parallax animations
   * No ScrollTrigger for simplicity - manual scroll listener
   */
  private setupParallaxAnimations(): void {
    const heroSection = document.querySelector("[#heroSection]") as HTMLElement;
    if (!heroSection) return;

    // Smooth parallax on scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / window.innerHeight, 1);

      // Parallax layers move at different speeds
      const bg1 = document.querySelector("[#parallaxBg1]") as HTMLElement;
      const bg2 = document.querySelector("[#parallaxBg2]") as HTMLElement;
      const scrollIndicator = document.querySelector("[#scrollIndicator]") as HTMLElement;

      if (bg1) {
        gsap.to(bg1, {
          y: scrollY * 0.3,
          opacity: 1 - progress * 0.3,
          duration: 0,
        });
      }

      if (bg2) {
        gsap.to(bg2, {
          y: scrollY * 0.2,
          opacity: Math.max(0, 1 - progress * 0.5),
          duration: 0,
        });
      }

      // Hide scroll indicator as user scrolls
      if (scrollIndicator) {
        scrollIndicator.style.opacity = String(Math.max(0, 1 - progress * 2));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }
}
              class="text-[10px] font-bold text-white/40 hover:text-white transition-colors underline underline-offset-8"
            >
              VIEW_ALL_NODES
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div class="flex gap-6 items-start">
              <div
                class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#FFD700]"
              >
                01
              </div>
              <div>
                <div class="text-white font-bold text-xl mb-2 italic">
                  AROGYA_VAULT
                </div>
                <div class="text-white/40 text-sm leading-relaxed">
                  Secure multi-node health data orchestration.
                </div>
              </div>
            </div>
            <div class="flex gap-6 items-start">
              <div
                class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#00A3FF]"
              >
                02
              </div>
              <div>
                <div class="text-white font-bold text-xl mb-2 italic">
                  SKYCAST_RADAR
                </div>
                <div class="text-white/40 text-sm leading-relaxed">
                  Atmospheric predictive engine with real-time telemetry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
      .ease-expo {
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      }
    `,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  pillars = [
    {
      id: "0x01",
      title: "Cloud Infrastructure",
      desc: "AWS architecture optimized for multi-zone fault tolerance.",
    },
    {
      id: "0x02",
      title: "Reactive Systems",
      desc: "Angular 19 Signal-based state for atomic-grade performance.",
    },
    {
      id: "0x03",
      title: "Scalable Logic",
      desc: "Distributed backends for massive throughput handling.",
    },
  ];

  private readonly scene!: THREE.Scene;
  private readonly camera!: THREE.PerspectiveCamera;
  private readonly renderer!: THREE.WebGLRenderer;
  private readonly torus!: THREE.Mesh;
  private readonly frameId!: number;
  private readonly mouse = { x: 0, y: 0 };

  ngOnInit() {
    // Staggered fade-in animation
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
    );
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
