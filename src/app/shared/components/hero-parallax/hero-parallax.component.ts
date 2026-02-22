import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParallaxService } from "../../../core/services/parallax.service";
import gsap from "gsap";

/**
 * Parallax Hero Section
 * Dynamic background that responds to scroll and mouse
 * Amazing animations and creative effects
 */
@Component({
  selector: "app-hero-parallax",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative min-h-[100vh] w-full overflow-hidden flex items-center justify-center"
      data-section="hero"
    >
      <!-- Background layers with parallax -->
      <div class="absolute inset-0 -z-20">
        <!-- Color-shifting gradient background -->
        <div
          class="absolute inset-0 transition-all duration-1000"
          [style.background]="getDynamicBackground()"
        ></div>

        <!-- Parallax blob 1 -->
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-primary/30 via-gold-primary/10 to-transparent rounded-full blur-3xl opacity-40"
          [style.transform]="'translate(0, ' + getParallaxY(0.15) + 'px)'"
        ></div>

        <!-- Parallax blob 2 -->
        <div
          class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl opacity-30"
          [style.transform]="'translate(0, ' + getParallaxY(0.25) + 'px)'"
        ></div>

        <!-- Parallax blob 3 -->
        <div
          class="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/15 to-transparent rounded-full blur-3xl opacity-25"
          [style.transform]="'translate(0, ' + getParallaxY(0.1) + 'px)'"
        ></div>

        <!-- Animated grid background -->
        <div
          class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_25%,rgba(212,175,55,0.1)_50%,transparent_50%,transparent_75%,rgba(212,175,55,0.1)_75%,rgba(212,175,55,0.1))] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]"
        ></div>
      </div>

      <!-- Animated floating elements -->
      <div
        *ngFor="let float of floatingElements; let i = index"
        class="absolute rounded-full pointer-events-none will-change-transform"
        [style.width.px]="float.size"
        [style.height.px]="float.size"
        [style.left.%]="float.x"
        [style.top.%]="float.y"
        [style.background]="
          'radial-gradient(circle, ' +
          float.color +
          '40, ' +
          float.color +
          '10)'
        "
        [style.boxShadow]="
          '0 0 30px ' + float.color + '66, inset 0 0 20px ' + float.color + '33'
        "
        [style.animation]="
          'float-' + i + ' ' + float.duration + 's ease-in-out infinite'
        "
        [style.animationDelay]="float.delay + 's'"
      ></div>

      <!-- Main content -->
      <div class="relative z-10 container mx-auto px-4 text-center">
        <!-- Animated introduction -->
        <div
          class="mb-6 inline-block"
          [style.transform]="'translateY(' + getParallaxY(0.05) + 'px)'"
        >
          <div
            class="px-6 py-3 rounded-full border border-gold-primary/50 bg-gold-primary/10 backdrop-blur-sm inline-block"
          >
            <span
              class="text-gold-primary text-sm font-bold uppercase tracking-widest"
            >
              🎯 FULL STACK ARCHITECT
            </span>
          </div>
        </div>

        <!-- Main headline with word animation -->
        <div class="space-y-6 mb-8">
          <h1
            class="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter"
          >
            <span class="text-white">ASHUTOSH</span>
            <br />
            <span
              class="bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]"
            >
              KARN
            </span>
          </h1>
        </div>

        <!-- Dynamic subtitle with parallax -->
        <div
          class="mb-12 px-4"
          [style.transform]="'translateY(' + getParallaxY(0.08) + 'px)'"
        >
          <p
            class="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Building
            <span class="text-gold-primary font-bold"
              >production-grade systems</span
            >
            with modern tech stacks • Cloud architect • Full-stack engineer
          </p>
        </div>

        <!-- CTA Buttons with hover effects -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          [style.transform]="'translateY(' + getParallaxY(0.1) + 'px)'"
        >
          <a
            href="#tech-stack"
            class="group relative px-8 py-4 rounded-lg font-bold text-white uppercase tracking-widest overflow-hidden"
          >
            <!-- Animated background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-gold-primary to-gold-light transition-all duration-300 group-hover:scale-110"
            ></div>
            <span class="relative flex items-center gap-2">
              View Tech Stack
              <span class="group-hover:translate-x-1 transition-transform"
                >→</span
              >
            </span>
          </a>

          <a
            href="#projects"
            class="group relative px-8 py-4 rounded-lg font-bold text-white uppercase tracking-widest border-2 border-gold-primary/50 hover:border-gold-primary transition-all duration-300"
          >
            <div
              class="absolute inset-0 bg-gold-primary/10 group-hover:bg-gold-primary/20 transition-colors"
            ></div>
            <span class="relative flex items-center gap-2">
              Featured Projects
              <span class="group-hover:translate-x-1 transition-transform"
                >→</span
              >
            </span>
          </a>
        </div>

        <!-- Scroll indicator with animation -->
        <div
          class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span
            class="text-sm text-slate-400 font-semibold uppercase tracking-widest"
          >
            Scroll to explore
          </span>
          <div
            class="w-6 h-10 border-2 border-gold-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <div
              class="w-1 h-2 bg-gold-primary rounded-full animate-[scroll_2s_ease-in-out_infinite]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes float-0 {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-30px) translateX(15px);
        }
        50% {
          transform: translateY(-50px) translateX(-10px);
        }
        75% {
          transform: translateY(-25px) translateX(10px);
        }
      }
      @keyframes float-1 {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-25px) translateX(-12px);
        }
        50% {
          transform: translateY(-45px) translateX(15px);
        }
        75% {
          transform: translateY(-20px) translateX(-8px);
        }
      }
      @keyframes float-2 {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-35px) translateX(20px);
        }
        50% {
          transform: translateY(-55px) translateX(-15px);
        }
        75% {
          transform: translateY(-30px) translateX(12px);
        }
      }
      @keyframes float-3 {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-20px) translateX(-18px);
        }
        50% {
          transform: translateY(-40px) translateX(10px);
        }
        75% {
          transform: translateY(-18px) translateX(-12px);
        }
      }
      @keyframes float-4 {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-28px) translateX(16px);
        }
        50% {
          transform: translateY(-48px) translateX(-12px);
        }
        75% {
          transform: translateY(-25px) translateX(14px);
        }
      }

      @keyframes scroll {
        0%,
        20% {
          opacity: 1;
          transform: translateY(0);
        }
        50% {
          opacity: 1;
          transform: translateY(8px);
        }
        100% {
          opacity: 0;
          transform: translateY(16px);
        }
      }

      @keyframes slide {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 60px 60px;
        }
      }
    `,
  ],
})
export class HeroParallaxComponent implements OnInit, OnDestroy {
  scrollProgress = 0;

  floatingElements = [
    { size: 100, x: 10, y: 20, color: "#d4af37", duration: 8, delay: 0 },
    { size: 80, x: 85, y: 30, color: "#3776ab", duration: 10, delay: -2 },
    {
      size: 120,
      x: 50,
      y: 70,
      color: "#61dafb",
      duration: 12,
      delay: -4,
    },
    { size: 60, x: 15, y: 80, color: "#339933", duration: 9, delay: -3 },
    { size: 90, x: 75, y: 15, color: "#dd0031", duration: 11, delay: -5 },
  ];

  constructor(private parallaxService: ParallaxService) {}

  ngOnInit() {
    this.parallaxService.getScrollProgress$().subscribe((progress) => {
      this.scrollProgress = progress;
    });

    // Animate headline on mount
    gsap.from("h1 span", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from("[data-section='hero'] p, a", {
      duration: 0.6,
      opacity: 0,
      y: 10,
      stagger: 0.1,
      delay: 0.3,
      ease: "power2.out",
    });
  }

  getDynamicBackground(): string {
    const hue = 240 - this.scrollProgress * 30;
    return `linear-gradient(135deg, 
      hsl(240, 10%, 4%) 0%, 
      hsl(${hue}, 30%, 12%) 25%,
      hsl(240, 10%, 4%) 50%,
      hsl(${hue + 60}, 25%, 10%) 75%,
      hsl(240, 10%, 4%) 100%)`;
  }

  getParallaxY(speed: number): number {
    return Math.min(this.scrollProgress * 400 * speed, 200);
  }

  ngOnDestroy() {
    // Cleanup
  }
}
