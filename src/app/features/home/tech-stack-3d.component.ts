import { Component, ElementRef, ViewChild, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  TechStackData,
  type TechStackItem,
} from "../../core/data/tech-stack.data";
import { gsap } from "gsap";

@Component({
  selector: "app-tech-stack-3d",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative w-full py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header Signal -->
        <div
          class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div class="space-y-4">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-glow">
              FORGED IN <span class="text-gold-500 italic">SYSTEMS</span>
            </h2>
            <p class="text-slate-500 max-w-xl font-light">
              High-performance architectural patterns implemented across the
              full stack. Optimized for scale, security, and cinematic
              interaction.
            </p>
          </div>
          <div
            class="font-mono text-[10px] text-gold-500 tracking-[0.4em] uppercase opacity-40"
          >
            [ TECH_SPEC_V3.0 ]
          </div>
        </div>

        <!-- Tech Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            *ngFor="let tech of techStack"
            class="tech-card glass-panel group relative aspect-square p-8 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden"
            (mousemove)="handleTilt($event, card)"
            (mouseleave)="resetTilt(card)"
            #card
          >
            <!-- Rotating Gradient Border (Hover Only) -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
            >
              <div
                class="absolute inset-[-100%] bg-[conic-gradient(from_var(--angle),transparent_70%,var(--glow-color))] animate-rotate"
                [style.--glow-color]="tech.color"
                [style.--angle]="'0deg'"
              ></div>
            </div>

            <!-- Card Background Shim (keeps glass effect on top of border) -->
            <div
              class="absolute inset-[1px] bg-navy-950/90 rounded-inherit z-10"
            ></div>

            <!-- Hover Glow Inner -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-glow z-20"
              [style.background]="
                'radial-gradient(circle at center, ' +
                tech.color +
                '20 0%, transparent 70%)'
              "
            ></div>

            <!-- Brand Mark -->
            <div
              class="relative z-30 w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
            >
              <img
                [src]="tech.logo"
                [alt]="tech.name"
                class="w-full h-full object-contain filter group-hover:brightness-110"
              />
            </div>

            <!-- Ident -->
            <div class="relative z-30 text-center">
              <span
                class="text-[10px] font-mono text-slate-500 group-hover:text-gold-500 transition-colors uppercase tracking-widest"
                >{{ tech.name }}</span
              >
            </div>

            <!-- Description Signal -->
            <div
              class="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-30"
            >
              <p
                class="text-[8px] font-mono text-slate-500 px-4 uppercase leading-tight"
              >
                {{ tech.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .tech-card {
        transform-style: preserve-3d;
        perspective: 1000px;
      }

      @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
      }

      @keyframes rotate {
        to {
          --angle: 360deg;
        }
      }

      .animate-rotate {
        animation: rotate 4s linear infinite;
      }
    `,
  ],
})
export class TechStack3dComponent {
  techStack: TechStackItem[] = TechStackData.TECHNOLOGIES;

  handleTilt(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  resetTilt(card: HTMLElement) {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
  }
}
