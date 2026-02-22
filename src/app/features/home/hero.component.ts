import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Hero Component - Redesigned
 * Professional, calm, cinematic introduction
 * Parallax depth effect, minimal animation
 */

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      #heroSection
      class="relative z-10 w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Parallax background layers -->
      <div
        #bgLayer1
        class="absolute inset-0 opacity-20"
        [style.background]="
          'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.1), transparent 60%)'
        "
      ></div>

      <!-- Main content container -->
      <div
        class="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6 md:space-y-8"
      >
        <!-- Subtitle - Premium accent -->
        <div
          #subtitle
          class="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md"
        >
          <div class="w-2 h-2 bg-gold-primary rounded-full animate-pulse"></div>
          <p class="text-sm md:text-base text-gold-primary/80 font-medium">
            Welcome to my digital space
          </p>
        </div>

        <!-- Main headline -->
        <div #headline class="space-y-4">
          <h1
            class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
          >
            Ashutosh Karn
          </h1>
          <p
            class="text-lg md:text-2xl text-slate-400 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
          >
            Software Engineer • AI Enthusiast • Cloud Architect
          </p>
        </div>

        <!-- Professional statement -->
        <div #statement class="max-w-2xl mx-auto pt-4">
          <p class="text-base md:text-lg text-slate-300 leading-relaxed">
            Building scalable systems with deep technical expertise across
            full-stack development, cloud infrastructure, and machine learning.
            Focused on creating solutions that matter.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          #cta
          class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 md:pt-12"
        >
          <button
            class="px-8 py-3 bg-gold-primary text-navy-900 font-semibold rounded-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View My Work
          </button>
          <button
            class="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        #scrollIndicator
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        <p class="text-xs text-slate-400 uppercase tracking-widest">
          Scroll to explore
        </p>
        <div
          class="w-0.5 h-8 bg-gradient-to-b from-gold-primary to-transparent rounded-full animate-scroll"
        ></div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes scroll {
        0%,
        10% {
          opacity: 1;
          transform: translateY(0);
        }
        90%,
        100% {
          opacity: 0;
          transform: translateY(12px);
        }
      }

      .animate-scroll {
        animation: scroll 2s ease-in-out infinite;
      }

      :host ::ng-deep {
        section {
          background: radial-gradient(
            circle at 50% 100%,
            rgba(26, 42, 74, 0.3) 0%,
            transparent 60%
          );
        }
      }
    `,
  ],
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  private setupAnimations(): void {
    const tl = gsap.timeline();

    // Staggered fade-in effect
    tl.from('[data-gsap="hero-intro"]', {
      duration: 0.6,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: "power2.out",
    });

    // Parallax on scroll
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('[data-gsap="hero-parallax"]', {
      scrollTrigger: {
        trigger: '[data-gsap="hero-parallax"]',
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        markers: false,
      },
      y: -100,
      ease: "power2.inOut",
    });
  }
}
