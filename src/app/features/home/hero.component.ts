import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden"
    >
      <div
        class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <!-- OS Terminal / Brain Panel -->
        <div
          #terminal
          class="hidden lg:block lg:col-span-4 opacity-0 -translate-x-12"
        >
          <div
            class="glass-panel p-8 border-gold-500/10 shadow-glow-blue bg-navy-950/40 backdrop-blur-3xl relative overflow-hidden"
          >
            <!-- Light Glow Detail -->
            <div
              class="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
            ></div>

            <div class="flex gap-2 mb-8 border-b border-white/5 pb-4">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
              <span
                class="ml-4 text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]"
                >kernel.sys_init</span
              >
            </div>

            <div class="font-mono text-[11px] leading-relaxed space-y-4">
              <div class="flex gap-3 terminal-line opacity-0">
                <span class="text-gold-500/60 font-bold">01</span>
                <span class="text-slate-300">NEURAL_SYS: LOADED</span>
              </div>
              <div class="flex gap-3 terminal-line opacity-0">
                <span class="text-cyan-500/60 font-bold">02</span>
                <span class="text-slate-300">AUTH: KARN_VERIFIED</span>
              </div>
              <div
                class="flex gap-3 terminal-line opacity-0 text-emerald-500/60"
              >
                <span class="font-bold">03</span>
                <span>ENV_STABLE: OK</span>
              </div>

              <div class="pt-6 border-t border-white/5 mt-6">
                <p
                  class="text-[8px] text-slate-500 mb-3 uppercase tracking-widest"
                >
                  Architectural Target:
                </p>
                <div class="grid grid-cols-1 gap-2 text-[10px]">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-1 h-1 bg-gold-500 shadow-glow-gold rounded-full"
                    ></div>
                    <span class="text-slate-300 uppercase"
                      >Scalable Intelligence</span
                    >
                  </div>
                  <div class="flex items-center gap-2 text-slate-500">
                    <div class="w-1 h-1 bg-slate-700 rounded-full"></div>
                    <span class="uppercase">Cinematic Interaction</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 pt-6">
                <span class="text-gold-500">></span>
                <span
                  id="terminal-cursor-text"
                  class="text-slate-200 uppercase tracking-tighter"
                ></span>
                <span class="gradient-cursor"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile HUD Scanner (Hidden on PC) -->
        <div class="lg:hidden w-full flex justify-center mb-6 opacity-80">
          <div
            class="flex items-center gap-4 px-6 py-2 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md"
          >
            <div
              class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"
            ></div>
            <span
              class="text-[10px] font-mono text-red-500 uppercase tracking-widest"
              >Sys_Override: Active</span
            >
          </div>
        </div>

        <!-- Hero Content -->
        <div
          #heroContent
          class="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 opacity-0 translate-y-12"
        >
          <div
            class="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold-500/10 bg-gold-500/2 backdrop-blur-md"
          >
            <span
              class="text-[10px] uppercase tracking-[0.5em] font-bold text-gold-500/80"
              >State-of-the-art Engineering</span
            >
          </div>

          <div class="space-y-4">
            <h1
              class="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter text-white"
            >
              <span class="block overflow-visible relative"
                ><span class="reveal-text block" #nameLine1></span
              ></span>
              <span
                class="text-gold-500 italic block overflow-visible mt-2 relative drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                ><span class="reveal-text block" #nameLine2></span
              ></span>
            </h1>
            <p
              #subtitle
              class="text-lg md:text-xl lg:text-2xl text-slate-400 font-light tracking-[0.4em] md:tracking-[0.5em] uppercase opacity-0"
            ></p>
          </div>

          <div class="max-w-2xl">
            <p class="text-slate-400 leading-relaxed text-lg font-light">
              <span #roleText class="text-white font-medium"></span><br />
              <span #descText class="text-slate-500 mt-2 block"></span>
            </p>
          </div>

          <div class="flex flex-wrap gap-6 pt-4">
            <a
              href="#projects"
              class="group relative px-12 py-5 bg-gold-500 text-navy-950 text-xs font-bold tracking-[0.3em] rounded-lg transition-all overflow-hidden uppercase"
            >
              <span class="relative z-10">EXPLORE_ARCHIVE</span>
              <div
                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              ></div>
            </a>
            <a
              href="mailto:karnashutosh6@gmail.com"
              class="px-10 py-5 border border-white/10 rounded-lg text-xs font-bold tracking-[0.3em] text-white hover:bg-white/5 transition-all uppercase"
              >GET_IN_TOUCH</a
            >
          </div>
        </div>
      </div>

      <!-- Detail Layer (Cinematic) -->
      <div
        class="absolute bottom-16 left-16 hidden md:flex flex-col gap-1 opacity-20 drifter"
      >
        <div class="flex items-center gap-3">
          <div class="w-6 h-px bg-slate-500"></div>
          <span
            class="text-[8px] font-mono tracking-[0.5em] text-slate-500 uppercase"
            >Lat: 25.4358° N</span
          >
        </div>
      </div>

      <div
        class="absolute bottom-16 right-16 hidden md:flex flex-col items-end gap-2 opacity-40 drifter"
      >
        <span
          class="text-[9px] font-mono tracking-[0.4em] text-slate-500 uppercase"
          >Sys: Operational</span
        >
        <div class="flex items-center gap-2">
          <span class="w-1 h-1 rounded-full bg-gold-500 animate-pulse"></span>
          <span
            class="text-[9px] font-mono tracking-[0.4em] text-gold-500 uppercase"
            >V.3.1.2-STABLE</span
          >
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gradient-cursor {
        display: inline-block;
        width: 2px;
        height: 14px;
        background: linear-gradient(to bottom, #2dd4bf, #d4af37);
        animation: blink 1s step-end infinite;
        vertical-align: middle;
      }

      @keyframes blink {
        from,
        to {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }

      .reveal-text {
        transform: translateY(110%);
      }

      .shadow-glow-blue {
        box-shadow: 0 0 40px -10px rgba(45, 212, 191, 0.1);
      }

      .glitch-fx-active {
        text-shadow:
          3px 0 #ff003c,
          -3px 0 #00f0ff;
        animation: active-glitch 0.1s infinite linear alternate-reverse;
      }

      @keyframes active-glitch {
        0% {
          transform: translate(0, 0) skew(0deg);
        }
        20% {
          transform: translate(-3px, 2px) skew(2deg);
          filter: hue-rotate(90deg) brightness(1.5);
        }
        40% {
          transform: translate(-2px, -2px) skew(-2deg);
        }
        60% {
          transform: translate(3px, 2px) skew(3deg);
          filter: hue-rotate(-90deg) contrast(1.5);
        }
        80% {
          transform: translate(2px, -2px) skew(-3deg);
        }
        100% {
          transform: translate(0, 0) skew(0deg);
        }
      }
    `,
  ],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild("terminal") terminal!: ElementRef;
  @ViewChild("heroContent") heroContent!: ElementRef;
  @ViewChild("nameLine1") nameLine1!: ElementRef;
  @ViewChild("nameLine2") nameLine2!: ElementRef;
  @ViewChild("subtitle") subtitle!: ElementRef;
  @ViewChild("roleText") roleText!: ElementRef;
  @ViewChild("descText") descText!: ElementRef;

  private scrollY = 0;

  @HostListener("window:scroll")
  onScroll() {
    this.scrollY = window.scrollY;
    this.updateParallax();
  }

  ngAfterViewInit() {
    this.animateHero();
  }

  private animateHero() {
    const expoCustom = "cubic-bezier(0.19, 1, 0.22, 1)";
    const tl = gsap.timeline({ defaults: { ease: expoCustom, duration: 2 } });

    // Terminal Entry
    tl.to(
      this.terminal.nativeElement,
      {
        opacity: 1,
        x: 0,
        delay: 0.8,
      },
      0,
    );

    // Terminal Lines
    tl.to(
      ".terminal-line",
      {
        opacity: 1,
        y: -4,
        stagger: 0.2,
        duration: 0.8,
      },
      1.2,
    );

    // Hero Content Fade
    tl.to(
      this.heroContent.nativeElement,
      {
        opacity: 1,
        y: 0,
      },
      0.5,
    );

    // Hacker Reveal for Name
    this.hackerReveal(this.nameLine1.nativeElement, "ASHUTOSH", 0.8);
    this.hackerReveal(this.nameLine2.nativeElement, "KARN", 1.2);

    // Character Reveal Animation
    tl.to(
      [this.nameLine1.nativeElement, this.nameLine2.nativeElement],
      {
        y: 0,
        stagger: 0.2,
        duration: 1.8,
      },
      0.8,
    );

    // Subtitle Reveal & Glitch
    tl.to(
      this.subtitle.nativeElement,
      {
        opacity: 1,
        letterSpacing: "0.5em",
        duration: 2.5,
      },
      1.5,
    );
    this.hackerReveal(
      this.subtitle.nativeElement,
      "Architecting Digital Experiences",
      1.8,
    );

    // Role and Desc Reveal
    this.hackerReveal(
      this.roleText.nativeElement,
      "Frontend Architect • Cloud Engineer • AI Developer",
      2.2,
    );
    this.hackerReveal(
      this.descText.nativeElement,
      "Building high-density distributed systems with aesthetic precision.",
      2.8,
    );

    // Terminal Cursor Typing
    gsap.to("#terminal-cursor-text", {
      duration: 3,
      text: "deploy_profile --elite --cinematic",
      ease: "none",
      delay: 2.5,
    });

    // Drift Animation for Micro-details
    gsap.to(".drifter", {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  private hackerReveal(element: HTMLElement, finalText: string, delay: number) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";
    let iteration = 0;

    // Add glitch class temporarily for visual distortion
    element.classList.add("glitch-fx-active");

    gsap.delayedCall(delay, () => {
      const interval = setInterval(() => {
        element.innerText = finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index]; // Resolved character
            }
            if (index < iteration + 4) {
              return chars[Math.floor(Math.random() * chars.length)]; // Glitched trailing characters
            }
            return ""; // Hidden characters
          })
          .join("");

        if (iteration >= finalText.length) {
          clearInterval(interval);
          element.innerText = finalText;
          element.classList.remove("glitch-fx-active");
        }

        iteration += 1 / 3;
      }, 30);
    });
  }

  private updateParallax() {
    const terminal = this.terminal.nativeElement;
    const heroContent = this.heroContent.nativeElement;

    gsap.to(terminal, {
      y: this.scrollY * 0.1,
      duration: 0.5,
      ease: "power1.out",
    });

    gsap.to(heroContent, {
      y: this.scrollY * -0.05,
      duration: 0.5,
      ease: "power1.out",
    });
  }
}
