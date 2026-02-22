import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Navigation Bar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between backdrop-blur-sm"
    >
      <div
        class="text-gold-primary font-mono text-sm font-bold tracking-widest"
      >
        CINEMATIC ARCHITECT
      </div>
      <div class="hidden md:flex items-center gap-8 text-gray-300">
        <a
          href="#about"
          class="hover:text-gold-primary transition-colors duration-300 font-mono text-xs hover:underline"
          >ABOUT</a
        >
        <a
          href="#projects"
          class="hover:text-gold-primary transition-colors duration-300 font-mono text-xs hover:underline"
          >PROJECTS</a
        >
        <a
          href="#blog"
          class="hover:text-gold-primary transition-colors duration-300 font-mono text-xs hover:underline"
          >BLOG</a
        >
        <a
          href="#contact"
          class="hover:text-gold-primary transition-colors duration-300 font-mono text-xs hover:underline"
          >CONTACT</a
        >
      </div>
    </nav>

    <!-- Hero Section: Cinematic Control Deck -->
    <section
      class="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900"
      #heroSection
    >
      <!-- Animated Liquid Gold Waves Background -->
      <svg
        class="absolute inset-0 z-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="liquidWaves">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="150" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#goldGradient)"
          filter="url(#liquidWaves)"
        />
      </svg>

      <!-- Static Liquid Gradient Overlay -->
      <div class="absolute inset-0 z-0 opacity-40">
        <div
          class="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-b from-gold-primary/20 via-gold-primary/5 to-transparent rounded-full blur-3xl"
          style="filter: blur(100px)"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-gold-primary/15 via-gold-primary/5 to-transparent rounded-full blur-3xl"
          style="filter: blur(100px)"
        ></div>
      </div>

      <!-- Deep Blue Glow (Bottom Left) -->
      <div
        class="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 z-0"
        style="background: radial-gradient(circle, rgba(26, 42, 74, 0.6) 0%, transparent 70%); filter: blur(80px)"
      ></div>

      <!-- Gold Accent Glow (Top Right) -->
      <div
        class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25 z-0"
        style="background: radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, transparent 70%); filter: blur(100px)"
      ></div>

      <!-- Hero Content: Centered Layout -->
      <div
        class="relative z-10 container mx-auto px-6 md:px-12 flex items-center justify-center min-h-screen"
      >
        <div class="w-full max-w-7xl">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
          >
            <!-- Left Column: Terminal Panel (Desktop Only) -->
            <div class="hidden lg:col-span-3 lg:block">
              <div
                class="border-l-4 border-b-4 border-gold-primary/70 p-6 backdrop-blur-sm"
                style="background: linear-gradient(135deg, rgba(15, 20, 25, 0.7) 0%, rgba(212, 175, 55, 0.08) 100%)"
              >
                <div
                  class="font-mono text-xs leading-relaxed space-y-1.5 text-gray-300"
                >
                  <div>
                    <span class="text-gold-primary">[BOOT_SEQ]</span> >
                    Initializing system...
                  </div>
                  <div>
                    <span class="text-gold-primary">[KERNEL]</span> > Loading
                    core modules...
                  </div>
                  <div>
                    <span class="text-gold-primary">[USER]</span> > Ashutosh
                    Karn detected.
                  </div>
                  <div>
                    <span class="text-gold-primary">[STATUS]</span> > Access
                    granted
                  </div>
                  <div>
                    <span class="text-gold-primary">[INFO]</span> > Project
                    database loading...
                  </div>
                  <div>
                    <span class="text-gold-primary">[INFO]</span> >
                    Architectural patterns initialized...
                  </div>
                  <div class="flex items-center gap-2 pt-1">
                    <span class="text-gold-primary">>_</span>
                    <span
                      class="inline-block w-1.5 h-3 bg-gold-primary/80 animate-pulse"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Center Column: Hero Content (Main Focus) -->
            <div class="lg:col-span-6 text-center space-y-10">
              <!-- Animated Main Headline -->
              <div class="space-y-6">
                <h1
                  class="text-6xl md:text-8xl lg:text-8xl font-black leading-none tracking-tight text-white drop-shadow-2xl"
                >
                  ASHUTOSH<br />
                  <span class="block relative">
                    <span
                      class="absolute inset-0 text-gold-primary blur-2xl opacity-60"
                      style="filter: blur(25px)"
                      >KARN</span
                    >
                    <span class="relative text-gold-primary drop-shadow-lg"
                      >KARN</span
                    >
                  </span>
                </h1>

                <!-- Subtitle -->
                <p
                  class="text-2xl md:text-4xl text-gold-primary/90 font-light tracking-[0.3em] leading-relaxed"
                >
                  SENIOR FRONTEND ENGINEER
                </p>

                <!-- Description -->
                <p
                  class="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  Architecting intelligent systems with precision engineering.
                  Expertise in Cloud Architecture, AI Integration, and
                  Full-Stack Development.
                </p>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <button
                  [routerLink]="['/projects']"
                  class="px-10 md:px-14 py-4 bg-gradient-to-r from-gold-primary to-gold-primary/80 text-navy-900 font-bold text-sm tracking-widest hover:shadow-glowEnergyMd transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  VIEW PROJECTS
                </button>
                <button
                  class="px-10 md:px-14 py-4 border-2 border-gold-primary text-gold-primary font-bold text-sm tracking-widest hover:bg-gold-primary/10 transition-all duration-300 active:bg-gold-primary/20"
                >
                  CONTACT
                </button>
              </div>
            </div>

            <!-- Right Column: Social Links (Desktop Only) -->
            <div
              class="hidden lg:col-span-3 lg:flex flex-col items-center gap-8"
            >
              <div class="flex flex-col gap-4 text-right">
                <a
                  href="https://github.com"
                  target="_blank"
                  class="text-gold-primary hover:text-white transition-colors text-sm font-mono hover:translate-x-1 duration-300"
                  >GH</a
                >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  class="text-gold-primary hover:text-white transition-colors text-sm font-mono hover:translate-x-1 duration-300"
                  >LI</a
                >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  class="text-gold-primary hover:text-white transition-colors text-sm font-mono hover:translate-x-1 duration-300"
                  >TW</a
                >
                <a
                  href="mailto:contact@ashutosh.dev"
                  class="text-gold-primary hover:text-white transition-colors text-sm font-mono hover:translate-x-1 duration-300"
                  >EM</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        #scrollIndicator
      >
        <span class="text-xs text-gray-400 font-mono uppercase tracking-widest"
          >Scroll</span
        >
        <div
          class="w-0.5 h-12 bg-gradient-to-b from-gold-primary via-gold-primary/50 to-transparent rounded-full"
        ></div>
      </div>
    </section>

    <!-- Divider -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent"
    ></div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      @keyframes liquidWave {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-5px) translateX(10px);
        }
        50% {
          transform: translateY(0px) translateX(20px);
        }
        75% {
          transform: translateY(5px) translateX(10px);
        }
      }

      @keyframes glowPulse {
        0%,
        100% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.6;
        }
      }

      svg {
        animation: liquidWave 8s ease-in-out infinite;
      }

      /* Cinematic depth */
      ::ng-deep .drop-shadow-2xl {
        filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5));
      }
    `,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private gsapContext: any;

  ngOnInit(): void {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }

  ngAfterViewInit(): void {
    this.setupCinematicAnimations();
  }

  private setupCinematicAnimations(): void {
    const heroSection = document.querySelector("[#heroSection]") as HTMLElement;
    if (!heroSection) return;

    this.gsapContext = gsap.context(() => {
      // Parallax depth on scroll
      gsap.to("[#parallaxBg1]", {
        scrollTrigger: {
          trigger: "[#heroSection]",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
        y: -80,
        opacity: 0.5,
        duration: 1.5,
      });

      // Fade out scroll indicator smoothly
      gsap.to("[#scrollIndicator]", {
        scrollTrigger: {
          trigger: "[#heroSection]",
          start: "top top",
          end: "center center",
          scrub: 0.3,
        },
        opacity: 0,
        duration: 0.8,
      });

      // Stagger text animation on load
      gsap.from("h1", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from("p:first-of-type", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from("button", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
        stagger: 0.2,
      });
    });
  }

  ngOnDestroy(): void {
    if (this.gsapContext) {
      this.gsapContext.revert();
    }
  }
}
