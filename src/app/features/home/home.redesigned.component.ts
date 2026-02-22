import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidBgComponent } from "../../shared/components/liquid-bg/liquid-bg.component";
import { GlassCardComponent } from "../../shared/components/glass-card/glass-card.component";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { TechBadge3dComponent } from "../../shared/components/tech-badge-3d/tech-badge-3d.component";
import { AmbienceParticlesComponent } from "../../shared/components/ambience-particles/ambience-particles.component";

gsap.registerPlugin(ScrollTrigger);

/**
 * NEW REDESIGNED HOME COMPONENT
 * Premium hacker-inspired portfolio following design system
 * - Liquid background
 * - Clean hero dashboard
 * - Modern tech stack showcase
 * - Smooth animations
 * - Zero gimmicks
 */
@Component({
  selector: "app-home-redesigned",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LiquidBgComponent,
    AmbienceParticlesComponent,
    GlassCardComponent,
    SectionHeaderComponent,
    TechBadge3dComponent,
  ],
  template: `
    <!-- Global Liquid Background -->
    <app-liquid-bg></app-liquid-bg>

    <!-- Ambient Particle System (cursor-interactive force field) -->
    <app-ambience-particles></app-ambience-particles>

    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-amber-600/10"
      aria-label="Main navigation"
    >
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between"
      >
        <div class="text-amber-600 font-mono text-sm font-bold tracking-widest">
          ASHUTOSH.SYS
        </div>
        <div class="hidden md:flex gap-12 text-sm text-gray-400">
          <a
            href="#about"
            class="hover:text-amber-600 transition-colors"
            aria-label="Navigate to About section"
            >About</a
          >
          <a
            href="#stack"
            class="hover:text-amber-600 transition-colors"
            aria-label="Navigate to Tech Stack section"
            >Stack</a
          >
          <a
            href="#projects"
            class="hover:text-amber-600 transition-colors"
            aria-label="Navigate to Projects section"
            >Projects</a
          >
          <a
            href="#contact"
            class="hover:text-amber-600 transition-colors"
            aria-label="Navigate to Contact section"
            >Contact</a
          >
        </div>
      </div>
    </nav>

    <!-- HERO: Control Dashboard Interface -->
    <section
      class="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12"
    >
      <div class="max-w-5xl w-full">
        <!-- Grid decorations -->
        <div
          class="absolute top-32 left-6 md:left-12 w-20 h-20 border border-amber-600/15 rounded-lg pointer-events-none"
        ></div>
        <div
          class="absolute bottom-32 right-6 md:right-12 w-32 h-32 border border-amber-600/10 rounded-lg pointer-events-none"
        ></div>

        <!-- Hero content -->
        <div class="relative z-10 space-y-8">
          <!-- System status badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-sm text-emerald-500 font-mono"
          >
            <span
              class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
            ></span>
            SYSTEM_INIT:COMPLETE
          </div>

          <!-- Main headline: Premium positioning -->
          <div class="space-y-4">
            <h1
              class="text-6xl md:text-8xl font-black leading-tight tracking-tight"
            >
              <span class="block text-white">ASHUTOSH</span>
              <span class="block text-amber-600">KARN</span>
            </h1>
          </div>

          <!-- Professional identity -->
          <div class="space-y-4 max-w-2xl">
            <p class="text-xl md:text-2xl text-gray-200 font-light">
              Senior Frontend Engineer & Cloud Architect
            </p>
            <p class="text-base md:text-lg text-gray-400 leading-relaxed">
              Building intelligent systems with precision. Specializing in
              modern web architecture, cloud infrastructure, and scalable
              applications. Thoughtful engineering meets clean design.
            </p>
          </div>

          <!-- CTA: Minimal and clean -->
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="#projects"
              class="cta-btn px-8 py-3 rounded-lg bg-amber-600 text-black font-semibold hover:bg-amber-500 transition-colors"
              aria-label="View my work and projects"
            >
              View Work
            </a>
            <a
              href="#contact"
              class="cta-btn px-8 py-3 rounded-lg border border-amber-600/50 text-amber-600 font-semibold hover:bg-amber-600/10 transition-colors"
              aria-label="Get in touch with me"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div class="flex flex-col items-center gap-2">
            <span class="text-xs text-gray-500 font-mono tracking-wider"
              >SCROLL</span
            >
            <div
              class="w-0.5 h-8 bg-gradient-to-b from-amber-600/60 to-transparent"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"
    ></div>

    <!-- ABOUT SECTION -->
    <section id="about" class="relative py-24 md:py-32 px-6 md:px-12">
      <div class="max-w-5xl mx-auto">
        <app-section-header
          accentText="WHO I AM"
          primaryText="Full Stack Architect"
          description="Specializing in scalable frontend systems and cloud infrastructure"
        ></app-section-header>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="glass-card-wrapper">
            <app-glass-card variant="medium" padding="32px">
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-amber-600">
                  Technical Expertise
                </h3>
                <ul class="space-y-2 text-gray-300 text-sm leading-relaxed">
                  <li>• Angular 19 with standalone components & signals</li>
                  <li>• React & Next.js for modern frontend systems</li>
                  <li>• Node.js & Express backend development</li>
                  <li>• AWS & Kubernetes cloud architecture</li>
                  <li>• System design & performance optimization</li>
                  <li>• Real-time systems & WebSockets</li>
                </ul>
              </div>
            </app-glass-card>
          </div>

          <div class="glass-card-wrapper">
            <app-glass-card variant="medium" padding="32px">
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-amber-600">
                  Professional Background
                </h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Computer Science student at Sam Higginbottom University.
                  Experience building production systems at Internshala and
                  AmarEi. AWS Certified Solutions Architect with expertise in
                  microservices, containerization, and CI/CD pipelines.
                </p>
                <div class="pt-4 text-xs text-gray-400 font-mono space-y-1">
                  <p>📧 karnashutosh6@gmail.com</p>
                  <p>📱 +91 6261251641</p>
                </div>
              </div>
            </app-glass-card>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK SECTION -->
    <section id="stack" class="relative py-24 md:py-32 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <app-section-header
          accentText="TECHNICAL"
          primaryText="Stack & Capabilities"
          description="Professional technologies and platforms"
        ></app-section-header>

        <!-- Tech grid: 4 columns on desktop, 2 on mobile -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'TypeScript',
                icon: '/assets/tech/typescript.svg',
                category: 'language',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'Angular',
                icon: '/assets/tech/angular.svg',
                category: 'framework',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'React',
                icon: '/assets/tech/react.svg',
                category: 'framework',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'Node.js',
                icon: '/assets/tech/nodejs.svg',
                category: 'platform',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'Python',
                icon: '/assets/tech/python.svg',
                category: 'language',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'Docker',
                icon: '/assets/tech/docker.svg',
                category: 'tool',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'AWS',
                icon: '/assets/tech/aws.svg',
                category: 'platform',
              }"
            ></app-tech-badge-3d>
          </div>
          <div class="h-28 rounded-lg">
            <app-tech-badge-3d
              [badge]="{
                name: 'Kubernetes',
                icon: '/assets/tech/kubernetes.svg',
                category: 'platform',
              }"
            ></app-tech-badge-3d>
          </div>
        </div>
      </div>
    </section>

    <!-- DIVIDER -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"
    ></div>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="relative py-24 md:py-32 px-6 md:px-12">
      <div class="max-w-5xl mx-auto">
        <app-section-header
          accentText="FEATURED"
          primaryText="Projects & Work"
          description="Selected professional projects and systems"
        ></app-section-header>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="glass-card-wrapper">
            <app-glass-card variant="medium" padding="32px">
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-white">
                  SkyCast Weather Intelligence
                </h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Real-time weather forecasting platform with ML-powered
                  predictions. Integration with OpenWeatherMap API and advanced
                  analytics dashboard.
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    class="text-xs px-3 py-1 rounded bg-amber-600/20 text-amber-600 font-mono"
                    >React</span
                  >
                  <span
                    class="text-xs px-3 py-1 rounded bg-amber-600/20 text-amber-600 font-mono"
                    >API</span
                  >
                  <span
                    class="text-xs px-3 py-1 rounded bg-amber-600/20 text-amber-600 font-mono"
                    >ML</span
                  >
                </div>
              </div>
            </app-glass-card>
          </div>

          <div class="glass-card-wrapper">
            <app-glass-card variant="medium" padding="32px">
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-white">
                  Arogya Vault Platform
                </h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                  HIPAA-compliant medical records system with end-to-end
                  encryption. Role-based access control and secure health data
                  management.
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    class="text-xs px-3 py-1 rounded bg-amber-600/20 text-amber-600 font-mono"
                    >Node.js</span
                  >
                  <span
                    class="text-xs px-3 py-1 rounded bg-amber-600/20 text-amber-600 font-mono"
                    >Security</span
                  >
                  <span
                    class="text-xs px-3 py-1 rounded bg-amber-600/20 text-amber-600 font-mono"
                    >RBAC</span
                  >
                </div>
              </div>
            </app-glass-card>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="relative py-12 px-6 md:px-12 border-t border-amber-600/10">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12 mb-12">
          <div class="space-y-3">
            <h4
              class="text-sm font-semibold text-amber-600 uppercase tracking-wider"
            >
              About
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed">
              Full-stack engineer dedicated to building scalable systems with
              precision and thoughtful design.
            </p>
          </div>
          <div class="space-y-3">
            <h4
              class="text-sm font-semibold text-amber-600 uppercase tracking-wider"
            >
              Quick Links
            </h4>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>
                <a
                  href="#projects"
                  class="hover:text-amber-600 transition-colors"
                  >Projects</a
                >
              </li>
              <li>
                <a href="#stack" class="hover:text-amber-600 transition-colors"
                  >Tech Stack</a
                >
              </li>
              <li>
                <a href="#about" class="hover:text-amber-600 transition-colors"
                  >About</a
                >
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h4
              class="text-sm font-semibold text-amber-600 uppercase tracking-wider"
            >
              Connect
            </h4>
            <div class="flex gap-3">
              <a
                href="https://github.com/Karn0511"
                class="text-gray-400 hover:text-amber-600 transition-colors text-sm"
                aria-label="Visit my GitHub profile"
                >GitHub</a
              >
              <a
                href="https://linkedin.com/in/Karn1105"
                class="text-gray-400 hover:text-amber-600 transition-colors text-sm"
                aria-label="Visit my LinkedIn profile"
                >LinkedIn</a
              >
              <a
                href="mailto:karnashutosh6@gmail.com"
                class="text-gray-400 hover:text-amber-600 transition-colors text-sm"
                aria-label="Send me an email"
                >Email</a
              >
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div
          class="border-t border-amber-600/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
        >
          <span>© 2026 Ashutosh Karn. All rights reserved.</span>
          <span class="font-mono">DESIGNED & BUILT WITH CARE</span>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #0a0f1a;
        color: #ffffff;
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation: none !important;
          transition: none !important;
        }
      }

      /* CTA Button Interactions */
      .cta-btn {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .cta-btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(212, 175, 55, 0.1);
        transition: left 0.4s ease;
        z-index: -1;
      }

      .cta-btn:hover::before {
        left: 0;
      }

      .cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(212, 175, 55, 0.15);
      }

      /* Glass Card Hover Effect */
      app-glass-card {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .glass-card-wrapper:hover app-glass-card {
        transform: translateY(-4px);
      }

      /* Section dividers with subtle animation */
      .section-divider {
        opacity: 0.3;
        transition: opacity 0.3s ease;
      }

      /* Nav link highlight on hover */
      nav a {
        position: relative;
        transition: color 0.3s ease;
      }

      nav a::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: #d4af37;
        transition: width 0.3s ease;
      }

      nav a:hover::after {
        width: 100%;
      }
    `,
  ],
})
export class HomeRedesignedComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private gsapContext: any;

  ngOnInit() {
    (globalThis.document ?? document).documentElement.style.scrollBehavior =
      "smooth";
  }

  ngAfterViewInit() {
    this.setupAnimations();
  }

  private setupAnimations() {
    this.gsapContext = gsap.context(() => {
      // Hero entrance animation
      gsap.from('section:first-child [class*="space-y"]', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // About section scroll reveal
      gsap.from('section:nth-child(3) [class*="glass"]', {
        scrollTrigger: {
          trigger: "section:nth-child(3)",
          start: "top 70%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Tech stack grid staggered reveal
      gsap.from('section:nth-child(4) [class*="h-28"]', {
        scrollTrigger: {
          trigger: "section:nth-child(4)",
          start: "top 65%",
          once: true,
        },
        opacity: 0,
        scale: 0.92,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });

      // Projects section reveal
      gsap.from('section:nth-child(5) [class*="glass"]', {
        scrollTrigger: {
          trigger: "section:nth-child(5)",
          start: "top 70%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Footer scroll up on reveal
      gsap.from('footer [class*="max-w"]', {
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
      });
    });
  }

  ngOnDestroy() {
    if (this.gsapContext) {
      this.gsapContext.revert();
    }
  }
}
