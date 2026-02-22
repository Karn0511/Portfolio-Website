import { Component, Input, HostListener, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ANIMATION_TIMINGS, EASING } from "../../../core/constants/animations";

/**
 * TECH BADGE 3D COMPONENT
 * Displays technology logo with 3D tilt effect on hover
 *
 * Features:
 * - Smooth 3D perspective tilt
 * - Soft gold glow on hover
 * - No spinning, no bouncing
 * - Responsive sizing
 */

interface TechBadgeData {
  name: string;
  logoPath: string;
  category: string;
  color?: string;
}

@Component({
  selector: "app-tech-badge-3d",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="tech-badge-container relative w-full aspect-square rounded-xl overflow-hidden group"
      [attr.data-tech]="tech.name"
    >
      <!-- Glass Card Background -->
      <div
        class="absolute inset-0 bg-soft-black/40 border border-white/10 backdrop-blur-sm group-hover:border-gold-primary/30 transition-all duration-300"
        style="transform: translateZ(0)"
      ></div>

      <!-- Glow Effect on Hover -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/10 group-hover:to-gold-primary/5 transition-all duration-300 pointer-events-none"
        style="transform: translateZ(10px)"
      ></div>

      <!-- Logo Container with Perspective -->
      <div
        class="absolute inset-0 flex items-center justify-center perspective"
        #logoContainer
      >
        <!-- Logo Image -->
        <img
          [src]="tech.logoPath"
          [alt]="tech.name"
          class="w-1/2 h-1/2 object-contain filter drop-shadow-lg transition-all duration-300"
          loading="lazy"
        />
      </div>

      <!-- Bottom Label -->
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 to-transparent px-4 py-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p
          class="text-xs font-semibold text-text-primary uppercase tracking-widest"
        >
          {{ tech.name }}
        </p>
        <p class="text-[10px] text-text-muted">{{ tech.category }}</p>
      </div>

      <!-- Edge Glow Border -->
      <div
        class="absolute inset-0 pointer-events-none rounded-xl"
        style="border: 1px solid transparent; box-shadow: inset 0 0 20px rgba(212, 175, 55, 0)"
        #glowBorder
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        perspective: 1000px;
      }

      .tech-badge-container {
        transform-style: preserve-3d;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .tech-badge-container:hover {
        transform: translateZ(8px);
      }

      .perspective {
        transform-style: preserve-3d;
      }
    `,
  ],
})
export class TechBadge3dComponent {
  @Input() tech!: TechBadgeData;

  constructor(private elementRef: ElementRef) {}

  @HostListener("mousemove", ["$event"])
  onMouseMove(event: MouseEvent): void {
    const container = this.elementRef.nativeElement.querySelector(
      ".tech-badge-container",
    ) as HTMLElement;
    const logoContainer = this.elementRef.nativeElement.querySelector(
      "[#logoContainer]",
    ) as HTMLElement;
    const glowBorder = this.elementRef.nativeElement.querySelector(
      "[#glowBorder]",
    ) as HTMLElement;

    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = (y - centerY) / 10; // Small rotation
    const rotateY = (centerX - x) / 10;

    // Apply 3D rotation
    gsap.to(logoContainer, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: ANIMATION_TIMINGS.normal / 1000,
      ease: EASING.smooth,
      overwrite: "auto",
    });

    // Apply glow effect
    if (glowBorder) {
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
      );
      const intensity = Math.max(
        0,
        1 - distance / (Math.sqrt(centerX * centerX + centerY * centerY) * 1.5),
      );

      glowBorder.style.boxShadow = `inset 0 0 20px rgba(212, 175, 55, ${intensity * 0.3})`;
    }
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    const logoContainer = this.elementRef.nativeElement.querySelector(
      "[#logoContainer]",
    ) as HTMLElement;
    const glowBorder = this.elementRef.nativeElement.querySelector(
      "[#glowBorder]",
    ) as HTMLElement;

    if (logoContainer) {
      gsap.to(logoContainer, {
        rotationX: 0,
        rotationY: 0,
        duration: ANIMATION_TIMINGS.normal / 1000,
        ease: EASING.smooth,
      });
    }

    if (glowBorder) {
      glowBorder.style.boxShadow = "inset 0 0 20px rgba(212, 175, 55, 0)";
    }
  }
}
