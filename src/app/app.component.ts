import {
  Component,
  OnInit,
  AfterViewInit,
  NgZone,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterModule } from "@angular/router";
import { LiquidBackgroundService } from "./core/services/liquid-background.service";
import { ScrollService } from "./core/services/scroll.service";
import { AiAssistantComponent } from "./features/ai-assistant/ai-assistant.component";

/**
 * App Root Component - Redesigned
 * Integrates new design system, background animation, smooth scrolling
 * Professional, calm, cinematic experience
 */

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, AiAssistantComponent],
  template: `
    <div
      class="relative w-full min-h-screen bg-navy-900 text-white overflow-x-hidden"
    >
      <!-- Liquid Background Canvas (WebGL) -->
      <div
        id="background-container"
        class="fixed inset-0 z-0 pointer-events-none"
      ></div>

      <!-- Main layout -->
      <div class="relative z-10 flex flex-col md:flex-row">
        <!-- Desktop Navigation Sidebar -->
        <nav
          class="hidden md:flex fixed left-0 top-0 h-screen w-20 border-r border-white/10 bg-navy-900/80 backdrop-blur-md flex-col items-center py-8 gap-8"
        >
          <!-- Logo -->
          <div
            class="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-dark flex items-center justify-center font-bold text-lg text-navy-900 rounded-lg shadow-glow-md hover:shadow-glow-lg transition-shadow"
          >
            AK
          </div>

          <!-- Navigation -->
          <div class="flex-1 flex flex-col gap-6">
            <a
              *ngFor="let item of navItems"
              [routerLink]="item.path"
              routerLinkActive="nav-active"
              class="group relative w-12 h-12 flex items-center justify-center text-slate-400 hover:text-gold-primary transition-colors duration-300 rounded-lg border border-transparent hover:border-white/10"
              [title]="item.label"
            >
              <span class="text-xl">{{ item.icon }}</span>

              <!-- Tooltip -->
              <div
                class="absolute left-full ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
              >
                {{ item.label }}
              </div>
            </a>
          </div>

          <!-- AI Button -->
          <button
            (click)="toggleAi()"
            class="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-gold-primary border border-white/10 rounded-lg transition-all duration-300"
            [class.text-gold-primary]="isAiOpen"
            [class.border-gold-primary]="isAiOpen"
            title="AI Assistant"
          >
            <span class="text-xl">✨</span>
          </button>
        </nav>

        <!-- Main Content -->
        <main class="flex-1 md:ml-20 w-full min-h-screen">
          <router-outlet></router-outlet>
        </main>
      </div>

      <!-- Mobile Bottom Navigation -->
      <nav
        class="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-navy-900/95 backdrop-blur-md border-t border-white/10 z-[100] flex items-center justify-around px-4"
      >
        <a
          *ngFor="let item of navItems"
          [routerLink]="item.path"
          routerLinkActive="nav-active"
          class="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-gold-primary transition-colors"
          [title]="item.label"
        >
          <span class="text-2xl">{{ item.icon }}</span>
          <span class="text-[10px] font-semibold">{{ item.label }}</span>
        </a>
        <button
          (click)="toggleAi()"
          class="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-gold-primary transition-colors"
          [class.text-gold-primary]="isAiOpen"
          title="AI Assistant"
        >
          <span class="text-2xl">✨</span>
          <span class="text-[10px] font-semibold">Chat</span>
        </button>
      </nav>

      <!-- AI Assistant Panel -->
      <div
        *ngIf="isAiOpen"
        class="fixed inset-4 md:inset-auto md:right-8 md:bottom-8 md:w-[420px] md:h-[600px] z-[200] rounded-xl border border-white/20 bg-navy-900/95 backdrop-blur-md shadow-lg overflow-hidden flex flex-col"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-gold-primary/5 via-transparent to-transparent pointer-events-none"
        ></div>
        <app-ai-assistant (close)="toggleAi()"></app-ai-assistant>
      </div>

      <!-- Scroll indicator (hero section only) -->
      <div
        *ngIf="showScrollIndicator"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <div class="flex flex-col items-center gap-2">
          <p class="text-xs text-slate-500 uppercase tracking-widest">
            Scroll to explore
          </p>
          <div
            class="w-0.5 h-8 bg-gradient-to-b from-gold-primary to-transparent rounded-full animate-scroll"
          ></div>
        </div>
      </div>
    </div>
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

      .nav-active {
        @apply text-gold-primary border-gold-primary bg-white/5;
      }

      /* Scrollbar styling */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(212, 175, 55, 0.5);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(212, 175, 55, 0.8);
      }
    `,
  ],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  isAiOpen = false;
  showScrollIndicator = true;

  navItems = [
    { path: "", icon: "🏠", label: "HOME" },
    { path: "experience", icon: "💼", label: "EXPERIENCE" },
    { path: "projects", icon: "🚀", label: "PROJECTS" },
    { path: "systems", icon: "⚙️", label: "STACK" },
  ];

  constructor(
    private readonly liquidBg: LiquidBackgroundService,
    private readonly scrollService: ScrollService,
    private readonly ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    // Initialize services
    this.scrollService.initialize();
  }

  ngAfterViewInit(): void {
    // Initialize background after view is rendered
    const bgContainer = document.getElementById("background-container");
    if (bgContainer) {
      this.liquidBg.initialize(bgContainer);
    }

    // Hide scroll indicator after hero section
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener("scroll", () => {
        this.showScrollIndicator = window.scrollY < window.innerHeight * 0.8;
      });
    });
  }

  ngOnDestroy(): void {
    this.liquidBg.destroy();
    this.scrollService.destroy();
  }

  toggleAi(): void {
    this.isAiOpen = !this.isAiOpen;
  }
}
