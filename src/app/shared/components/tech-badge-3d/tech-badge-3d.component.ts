import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * 3D Tech Badge Component
 * Displays technology logos with subtle 3D tilt effect
 * Clean, professional, premium feel
 */

interface TechBadge {
  name: string;
  icon: string; // SVG or image URL
  category: "language" | "framework" | "platform" | "tool";
  color?: string; // Optional brand color
}

@Component({
  selector: "app-tech-badge-3d",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #badgeContainer
      class="relative w-full h-full group perspective transition-transform duration-300 ease-out"
      [style.transform-style]="'preserve-3d'"
      [style.transform]="transform"
    >
      <!-- Glass background container -->
      <div
        class="absolute inset-0 rounded-xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-lg border border-white/10 transition-all duration-300 ease-out overflow-hidden"
        [class.group-hover:from-white/12]="true"
        [class.group-hover:to-white/4]="true"
        [class.group-hover:border-white/20]="true"
      >
        <!-- Glow effect on hover -->
        <div
          class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          [style.background]="glowGradient"
        ></div>
      </div>

      <!-- Content container -->
      <div
        class="relative z-10 h-full flex flex-col items-center justify-center p-6 gap-3"
      >
        <!-- Icon/Logo -->
        <div
          class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300"
          [class.group-hover:scale-110]="true"
        >
          <img
            [src]="badge.icon"
            [alt]="badge.name"
            class="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        <!-- Label -->
        <div class="text-center">
          <p
            class="text-xs md:text-sm font-semibold text-white/90 transition-colors duration-300 group-hover:text-white"
          >
            {{ badge.name }}
          </p>
          <p class="text-[10px] md:text-xs text-white/50 capitalize">
            {{ badge.category }}
          </p>
        </div>

        <!-- Category accent line -->
        <div
          class="w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        perspective: 1200px;
      }
    `,
  ],
})
export class TechBadge3dComponent implements OnDestroy {
  @Input() badge!: TechBadge;
  @ViewChild("badgeContainer") badgeContainer!: ElementRef;

  transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  glowGradient =
    "radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.1), transparent)";

  private readonly mouseX = 0;
  private readonly mouseY = 0;
  private readonly animationId: number | null = null;

  @HostListener("mousemove", ["$event"])
  onMouseMove(event: MouseEvent): void {
    if (!this.badgeContainer) return;

    const rect = this.badgeContainer.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate rotation based on mouse position
    const rotateY = (x / rect.width - 0.5) * 20; // -10 to 10 degrees
    const rotateX = (y / rect.height - 0.5) * -20; // -10 to 10 degrees

    this.updateTransform(rotateX, rotateY);
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.updateTransform(0, 0);
  }

  private updateTransform(rotateX: number, rotateY: number): void {
    this.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0px)`;
  }

  ngOnDestroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
