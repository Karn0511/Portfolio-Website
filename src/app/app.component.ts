import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterModule } from "@angular/router";
import { AiAssistantComponent } from "./features/ai-assistant/ai-assistant.component";
import { MOTION, BREAKPOINTS } from "./core/constants/motion";
import { gsap } from "gsap";
import Lenis from "lenis";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, AiAssistantComponent],
  template: `
    <div
      class="h-screen w-screen bg-[#050505] text-slate-100 flex flex-col md:flex-row overflow-hidden font-sans relative"
    >
      <!-- Static BG Grid -->
      <div
        class="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0"
      ></div>
      <div
        class="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"
      ></div>

      <!-- Desktop Navigation -->
      <nav
        class="hidden md:flex w-24 h-full border-r border-white/5 bg-black/40 flex-col items-center py-10 z-[100] gap-12"
      >
        <div
          class="w-12 h-12 bg-white text-black flex items-center justify-center font-display font-black text-lg hover:bg-sky-400 transition-all cursor-pointer"
        >
          AK
        </div>

        <div class="flex-1 flex flex-col gap-8">
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.path"
            routerLinkActive="active-nav"
            class="w-12 h-12 flex items-center justify-center text-slate-500 hover:text-white transition-all group relative"
          >
            <span
              class="material-symbols-outlined text-xl transition-all group-hover:scale-110"
              >{{ item.icon }}</span
            >
            <div
              class="absolute left-full ml-6 px-3 py-1.5 bg-white text-black text-[9px] font-bold rounded-none opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50"
            >
              {{ item.label }}
            </div>
          </a>
        </div>

        <button
          (click)="toggleAi()"
          class="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-sky-500 transition-all"
        >
          <span class="material-symbols-outlined text-xl">chat_bubble</span>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <nav
        class="md:hidden fixed bottom-6 left-6 right-6 h-16 bg-black/90 border border-white/10 rounded-none z-[100] flex items-center justify-around px-4"
      >
        <a
          *ngFor="let item of navItems"
          [routerLink]="item.path"
          routerLinkActive="mobile-active-nav"
          class="flex flex-col items-center justify-center gap-1 text-slate-500 transition-all"
        >
          <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
        </a>
        <button
          (click)="toggleAi()"
          [class.text-white]="isAiOpen"
          class="text-slate-500 active:scale-95"
        >
          <span class="material-symbols-outlined text-xl">psychology</span>
        </button>
      </nav>

      <!-- Main Content -->
      <main
        #scrollTarget
        class="flex-1 h-screen overflow-y-auto scrollbar-hide relative z-10 pb-28 md:pb-0"
      >
        <div class="h-auto w-full min-h-full">
          <router-outlet></router-outlet>
        </div>
      </main>

      <!-- AI Assistant -->
      <div
        *ngIf="isAiOpen"
        class="fixed inset-4 md:inset-auto md:right-8 md:bottom-8 md:w-[400px] md:h-[650px] z-[200] bg-black border border-white/10 flex flex-col overflow-hidden shadow-2xl"
      >
        <app-ai-assistant (close)="toggleAi()"></app-ai-assistant>
      </div>

      <!-- Infrastructure Status -->
      <div
        class="hidden md:flex fixed bottom-8 right-10 z-50 items-center gap-4 px-5 py-2 border border-white/10 bg-black/80"
      >
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse"></div>
          <span
            class="text-[9px] font-mono text-white/50 tracking-widest uppercase font-bold"
            >Node Healthy</span
          >
        </div>
        <div class="w-px h-3 bg-white/10"></div>
        <div
          class="text-[9px] font-mono text-white/30 uppercase font-bold tracking-tighter"
        >
          Ping: 12ms
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .active-nav {
        @apply text-sky-400 border-r-2 border-sky-400 bg-white/5;
      }
      .mobile-active-nav {
        @apply text-sky-400 scale-110;
      }
    `,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("cursorMain") cursorMain!: ElementRef;
  @ViewChild("cursorRing") cursorRing!: ElementRef;
  @ViewChild("cursorGlow") cursorGlow!: ElementRef;
  @ViewChild("scrollTarget") scrollTarget!: ElementRef;

  isAiOpen = false;
  navItems = [
    { path: "/home", icon: "home", label: "HOME" },
    { path: "/experience", icon: "work", label: "EXPERIENCE" },
    { path: "/projects", icon: "code", label: "PROJECTS" },
    { path: "/systems", icon: "dns", label: "STACK" },
  ];

  private lenis: Lenis | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private mutationObserver: MutationObserver | null = null;
  private listeners: { type: string; handler: any; options?: any }[] = [];

  ngOnInit() {}

  ngAfterViewInit() {
    // Small delay to ensure browser layout is stable
    setTimeout(() => {
      this.initSmoothScroll();
      this.initGlobalCursor();
    }, 50);
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private cleanup() {
    this.lenis?.destroy();
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    this.listeners.forEach(({ type, handler, options }) => {
      document.removeEventListener(type, handler, options);
    });
    this.listeners = [];
  }

  private addManagedListener(type: string, handler: any, options?: any) {
    document.addEventListener(type, handler, options);
    this.listeners.push({ type, handler, options });
  }

  private initSmoothScroll() {
    if (!this.scrollTarget?.nativeElement) return;

    this.lenis = new Lenis({
      wrapper: this.scrollTarget.nativeElement,
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      this.lenis?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    this.lenis.scrollTo(0, { immediate: true });
  }

  private initGlobalCursor() {
    if (window.innerWidth < BREAKPOINTS.DESKTOP) return;
    if (!this.cursorMain?.nativeElement) return;

    let magneticItems: NodeListOf<Element>;
    const updateItems = () => {
      magneticItems = document.querySelectorAll(".magnetic-item");
    };

    updateItems();
    if (this.scrollTarget?.nativeElement) {
      this.mutationObserver = new MutationObserver(() => updateItems());
      this.mutationObserver.observe(this.scrollTarget.nativeElement, {
        childList: true,
        subtree: true,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      requestAnimationFrame(() => {
        if (this.cursorMain?.nativeElement) {
          this.cursorMain.nativeElement.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
        if (this.cursorGlow?.nativeElement) {
          this.cursorGlow.nativeElement.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        }
      });

      gsap.to(this.cursorRing.nativeElement, {
        x,
        y,
        duration: MOTION.DURATION_FAST,
        ease: MOTION.EASE_MAIN,
        overwrite: "auto",
      });

      // Ensure elements are always on top
      this.cursorMain.nativeElement.style.zIndex = "999999";
      this.cursorRing.nativeElement.style.zIndex = "999998";

      magneticItems?.forEach((item: any) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
        );

        if (dist < MOTION.HOVER_RADIUS) {
          gsap.to(item, {
            x: (x - centerX) * MOTION.MAGNETIC_FORCE,
            y: (y - centerY) * MOTION.MAGNETIC_FORCE,
            duration: MOTION.DURATION_FAST + 0.1,
            ease: MOTION.EASE_MAIN,
          });
          gsap.to(this.cursorRing.nativeElement, {
            scale: 1.4,
            borderColor: "rgba(255,255,255,0.7)",
            duration: 0.2,
          });
        } else {
          gsap.to(item, {
            x: 0,
            y: 0,
            duration: MOTION.DURATION_DEFAULT,
            ease: "elastic.out(1, 0.3)",
          });
          if (dist > MOTION.HOVER_RADIUS * 2) {
            gsap.to(this.cursorRing.nativeElement, {
              scale: 1,
              borderColor: "rgba(255,255,255,0.3)",
              duration: 0.2,
            });
          }
        }
      });
    };

    this.addManagedListener("mousemove", onMouseMove, { passive: true });

    const onMouseOver = (e: any) => {
      const isInteractive = (e.target as HTMLElement).closest(
        "button, a, .interactive, .cursor-pointer",
      );
      if (isInteractive) {
        gsap.to(this.cursorMain.nativeElement, {
          scale: 0,
          duration: MOTION.DURATION_FAST,
          ease: MOTION.EASE_MAIN,
        });
        gsap.to(this.cursorRing.nativeElement, {
          scale: 2.2,
          backgroundColor: "rgba(255,255,255,0.1)",
          borderColor: "rgba(255,255,255,0.8)",
          duration: MOTION.DURATION_FAST,
          ease: MOTION.EASE_MAIN,
        });
      }
    };

    const onMouseOut = (e: any) => {
      const isInteractive = (e.target as HTMLElement).closest(
        "button, a, .interactive, .cursor-pointer",
      );
      if (isInteractive) {
        gsap.to(this.cursorMain.nativeElement, {
          scale: 1,
          duration: MOTION.DURATION_FAST,
          ease: MOTION.EASE_MAIN,
        });
        gsap.to(this.cursorRing.nativeElement, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(255,255,255,0.4)",
          duration: MOTION.DURATION_FAST,
          ease: MOTION.EASE_MAIN,
        });
      }
    };

    this.addManagedListener("mouseover", onMouseOver);
    this.addManagedListener("mouseout", onMouseOut);

    const onMouseDown = (e: MouseEvent) => {
      const clickEffect = document.createElement("div");
      clickEffect.className = "cursor-click-effect";
      clickEffect.style.left = `${e.clientX}px`;
      clickEffect.style.top = `${e.clientY}px`;
      clickEffect.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(clickEffect);
      setTimeout(() => clickEffect.remove(), 600);

      gsap.to(this.cursorRing.nativeElement, {
        scale: 0.8,
        duration: 0.1,
        onComplete: () => {
          gsap.to(this.cursorRing.nativeElement, { scale: 1, duration: 0.2 });
        },
      });
    };

    this.addManagedListener("mousedown", onMouseDown);
  }

  toggleAi() {
    this.isAiOpen = !this.isAiOpen;
  }
}
