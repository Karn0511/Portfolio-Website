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
 * HOME COMPONENT - Hero Dashboard
 * Professional, calm, command-center aesthetic
 * 
 * Design:
 * - Full viewport height hero
 * - Minimal text: Name | Role | Statement
 * - Smooth parallax on scroll
 * - No chaotic animations
 * - Cinematic, deep, confident
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
    <!-- Hero Section: Calm Dashboard -->
    <section
      class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
      #heroSection
    >
      <!-- Parallax Layer 1: Deep Background -->
      <div
        class="absolute inset-0 z-0"
        #parallaxBg1
        style="background: linear-gradient(135deg, rgba(15, 20, 25, 0.5) 0%, rgba(26, 42, 74, 0.3) 50%, rgba(15, 20, 25, 0.5) 100%)"
      ></div>

      <!-- Parallax Layer 2: Accent Glow (subtle) -->
      <div
        class="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10 z-0 blur-3xl"
        style="background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)"
        #parallaxBg2
      ></div>

      <!-- Main Content -->
      <div class="relative z-10 w-full max-w-6xl mx-auto px-lg md:px-xl lg:px-2xl">
        <div class="flex flex-col gap-8 md:gap-12" appScrollReveal="slideUp">
          <!-- Identifier Line -->
          <div class="flex items-center gap-3 text-text-muted">
            <div class="h-px w-8 bg-gold-primary/40"></div>
            <span class="font-mono text-xs md:text-sm font-semibold tracking-widest uppercase">
              Software Engineer
            </span>
          </div>

          <!-- Main Headline: Name & Role -->
          <div class="space-y-4">
            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-text-primary">
              Ashutosh Karn
            </h1>
            <p class="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary leading-tight">
              AI, Cloud, & Full-Stack Engineering
            </p>
          </div>

          <!-- Professional Statement -->
          <div class="max-w-2xl">
            <p class="text-base md:text-lg text-text-tertiary leading-relaxed border-l-2 border-gold-primary/40 pl-xl">
              Building thoughtful systems for meaningful problems.
              <span class="text-text-secondary font-medium">
                Expertise in large-scale architecture, AI integration, and cloud deployment.
              </span>
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              [routerLink]="['/projects']"
              class="px-8 py-3 bg-gold-primary text-navy-900 font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 ease-out hover:shadow-glow-md"
            >
              View Work
            </button>
            <button
              class="px-8 py-3 border border-text-tertiary text-text-primary font-semibold rounded-lg hover:border-gold-primary hover:text-gold-primary transition-all duration-300 ease-out"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator (visible on hero only) -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        #scrollIndicator
      >
        <span class="text-xs text-text-muted uppercase tracking-widest">Scroll to explore</span>
        <div class="w-0.5 h-8 bg-gradient-to-b from-gold-primary to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>

    <!-- Introduction Section -->
    <app-section [spacingVariant]="'lg'" appScrollReveal [revealType]="'slideUp'">
      <app-container [maxWidth]="'lg'">
        <div class="space-y-8">
          <div class="space-y-4">
            <span class="font-mono text-xs text-gold-primary uppercase tracking-widest">About</span>
            <h2 class="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Engineering with Purpose
            </h2>
          </div>

          <p class="text-lg text-text-secondary leading-relaxed max-w-3xl">
            I'm a software engineer specializing in cloud architecture, AI systems, and full-stack development.
            I focus on building scalable, maintainable solutions that solve real problems for users and businesses.
          </p>

          <p class="text-base text-text-tertiary leading-relaxed max-w-3xl">
            My experience spans from early-stage startups to enterprise systems, working with modern tooling
            including AWS, Azure, Kubernetes, and AI/ML frameworks. I'm passionate about clean code, thoughtful design,
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
