import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Hero Component - CINEMATIC ARCHITECT STYLE
 * Terminal-inspired control deck with liquid gold flows
 * Deep navy theme with hacker aesthetic
 */

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      #heroSection
      class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-midnight"
    >
      <!-- Liquid Gold Flow Background -->
      <div class="absolute inset-0 z-0 opacity-30">
        <div
          class="absolute top-20 right-0 w-[800px] h-[800px] rounded-full blur-3xl"
          style="background: radial-gradient(circle, rgba(244, 208, 63, 0.25) 0%, transparent 70%); animation: float 8s ease-in-out infinite;"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style="background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%); animation: float 10s ease-in-out infinite reverse;"
        ></div>
      </div>

      <!-- Grid Pattern Overlay -->
      <div
        class="absolute inset-0 z-0 opacity-5"
        style="background-image: linear-gradient(rgba(244, 208, 63, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 208, 63, 0.1) 1px, transparent 1px); background-size: 50px 50px;"
      ></div>

      <!-- Main Content Grid -->
      <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- LEFT: Terminal Panel -->
          <div #terminalPanel class="hidden lg:block lg:col-span-3 opacity-0">
            <div
              class="relative backdrop-blur-md border border-gold-primary/20 p-6 rounded-sm"
              style="background: linear-gradient(135deg, rgba(10, 14, 26, 0.9) 0%, rgba(26, 37, 64, 0.7) 100%);"
            >
              <!-- Terminal Header -->
              <div
                class="flex items-center gap-2 mb-4 pb-3 border-b border-gold-primary/20"
              >
                <div class="flex gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                </div>
                <span class="text-xs text-gold-primary/60 font-mono ml-2"
                  >system.sh</span
                >
              </div>

              <!-- Terminal Content -->
              <div
                class="font-mono text-xs leading-relaxed space-y-2 text-text-secondary"
              >
                <div class="flex items-start gap-2">
                  <span class="text-gold-primary">[BOOT_SEQ]</span>
                  <span class="text-teal-primary">&gt;</span>
                  <span>Initializing system...</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-gold-primary">[KERNEL]</span>
                  <span class="text-teal-primary">&gt;</span>
                  <span>Loading core modules...</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-gold-primary">[USER]</span>
                  <span class="text-teal-primary">&gt;</span>
                  <span>Ashutosh Karn detected.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-gold-primary">[STATUS]</span>
                  <span class="text-teal-primary">&gt;</span>
                  <span class="text-green-400">Access granted.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-gold-primary">[INFO]</span>
                  <span class="text-teal-primary">&gt;</span>
                  <span>Project database loading...</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-gold-primary">[INFO]</span>
                  <span class="text-teal-primary">&gt;</span>
                  <span>Architectural patterns initialized...</span>
                </div>
                <div class="flex items-center gap-2 pt-2">
                  <span class="text-teal-primary">&gt;_</span>
                  <span
                    class="inline-block w-1.5 h-3.5 bg-gold-primary animate-pulse"
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- CENTER: Hero Content -->
          <div
            #heroContent
            class="lg:col-span-6 text-center space-y-8 opacity-0"
          >
            <!-- Label Badge -->
            <div class="flex justify-center">
              <div
                class="inline-flex items-center gap-3 backdrop-blur-md border border-gold-primary/30 rounded-full px-3 py-2 sm:px-5 sm:py-2.5"
                style="background: rgba(244, 208, 63, 0.05);"
              >
                <div
                  class="w-2 h-2 bg-gold-primary rounded-full animate-pulse"
                ></div>
                <span
                  class="text-xs sm:text-sm text-gold-primary font-mono uppercase tracking-wider"
                >
                  CINEMATIC ARCHITECT (VARIANT 2)
                </span>
              </div>
            </div>

            <!-- Main Name Display -->
            <div class="space-y-4">
              <h1
                class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter"
              >
                <span class="block text-white">ASHUTOSH</span>
                <span
                  class="block text-gold-primary relative"
                  style="text-shadow: 0 0 30px rgba(244, 208, 63, 0.4);"
                >
                  KARN
                </span>
              </h1>

              <!-- Subtitle -->
              <p
                class="text-sm sm:text-base md:text-lg lg:text-xl text-gold-secondary font-light tracking-[0.25em] sm:tracking-[0.3em] uppercase"
              >
                SENIOR FRONTEND ENGINEER
              </p>
            </div>

            <!-- Description -->
            <div class="max-w-2xl mx-auto">
              <p
                class="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
              >
                Frontend Engineer • Cloud & AI Enthusiast<br />
                Building intelligent, scalable systems with precision
                engineering
              </p>
            </div>

            <!-- CTA Buttons -->
            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                class="group relative px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-gold-primary text-navy-950 font-bold text-xs sm:text-sm tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,208,63,0.4)] hover:scale-105"
              >
                <span class="relative z-10">VIEW MY WORK</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-gold-secondary to-gold-primary opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
              </button>
              <button
                class="px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 border-2 border-gold-primary text-gold-primary font-bold text-xs sm:text-sm tracking-widest hover:bg-gold-primary/10 transition-all duration-300"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          <!-- RIGHT: Social Links -->
          <div #socialLinks class="hidden lg:block lg:col-span-3 opacity-0">
            <div class="flex flex-col items-end gap-4 text-right">
              <a
                href="https://github.com"
                target="_blank"
                class="group flex items-center gap-3 text-gold-primary hover:text-white transition-all duration-300"
              >
                <span class="text-sm font-mono uppercase tracking-wider"
                  >GitHub</span
                >
                <span
                  class="text-2xl group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                class="group flex items-center gap-3 text-gold-primary hover:text-white transition-all duration-300"
              >
                <span class="text-sm font-mono uppercase tracking-wider"
                  >LinkedIn</span
                >
                <span
                  class="text-2xl group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                class="group flex items-center gap-3 text-gold-primary hover:text-white transition-all duration-300"
              >
                <span class="text-sm font-mono uppercase tracking-wider"
                  >Twitter</span
                >
                <span
                  class="text-2xl group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </a>
              <a
                href="mailto:contact@ashutosh.dev"
                class="group flex items-center gap-3 text-gold-primary hover:text-white transition-all duration-300"
              >
                <span class="text-sm font-mono uppercase tracking-wider"
                  >Email</span
                >
                <span
                  class="text-2xl group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        #scrollIndicator
        class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 hover:opacity-100 transition-opacity"
      >
        <p
          class="text-xs text-text-tertiary uppercase tracking-widest font-mono"
        >
          Scroll
        </p>
        <div
          class="w-0.5 h-16 bg-gradient-to-b from-gold-primary to-transparent rounded-full"
          style="animation: scrollPulse 2s ease-in-out infinite;"
        ></div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      @keyframes scrollPulse {
        0%,
        100% {
          opacity: 1;
          transform: translateY(0);
        }
        50% {
          opacity: 0.3;
          transform: translateY(8px);
        }
      }

      :host ::ng-deep {
        section {
          position: relative;
        }
      }
    `,
  ],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild("terminalPanel") terminalPanel!: ElementRef;
  @ViewChild("heroContent") heroContent!: ElementRef;
  @ViewChild("socialLinks") socialLinks!: ElementRef;
  @ViewChild("scrollIndicator") scrollIndicator!: ElementRef;

  ngAfterViewInit(): void {
    this.setupCinematicAnimations();
  }

  private setupCinematicAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Terminal panel slides and fades in
    tl.to(
      this.terminalPanel.nativeElement,
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
      },
      0,
    );

    // Hero content fades in
    tl.to(
      this.heroContent.nativeElement,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
      },
      0,
    );

    // Social links slide in
    tl.to(
      this.socialLinks.nativeElement,
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.7,
      },
      0,
    );

    // Scroll indicator fades in
    tl.to(
      this.scrollIndicator.nativeElement,
      {
        opacity: 0.5,
        duration: 0.8,
        delay: 1.2,
      },
      0,
    );

    // Parallax scroll effect
    gsap.to(".absolute.inset-0.z-0.opacity-30", {
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 150,
      opacity: 0.1,
    });

    // Fade out scroll indicator
    gsap.to(this.scrollIndicator.nativeElement, {
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "center top",
        scrub: 0.5,
      },
      opacity: 0,
    });
  }
}
