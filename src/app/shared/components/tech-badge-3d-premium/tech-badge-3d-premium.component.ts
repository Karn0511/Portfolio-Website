import { Component, Input, HostListener, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ANIMATION_TIMINGS, EASING } from "../../../core/constants/animations";

/**
 * TECH BADGE 3D COMPONENT
 * Displays technology logo with 3D tilt & energy glow
 *
 * Features:
 * - Smooth 3D perspective tilt (controlled energy)
 * - Dual glow: gold + teal energy
 * - No spinning, no bouncing
 * - Responsive sizing
 * - Hacker-inspired premium polish
 */

interface TechBadgeData {
  name: string;
  logoPath: string;
  category: string;
  glowColor?: "gold" | "teal" | "both"; // Control glow color
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
      <!-- Glass Card Background with Energy -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-soft-black/40 to-charcoal/40 border transition-all duration-300"
        [class]="getGlassClass()"
        style="transform: translateZ(0)"
      ></div>

      <!-- Primary Glow Effect on Hover -->
      <div
        class="absolute inset-0 bg-gradient-to-br transition-all duration-300 pointer-events-none"
        [class]="getGlowClass()"
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
          class="w-1/2 h-1/2 object-contain filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(6,214,208,0.3)]"
          loading="lazy"
        />
      </div>

      <!-- Bottom Label with Tech Info -->
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent px-4 py-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p
          class="text-xs font-semibold text-text-primary uppercase tracking-widest"
        >
          {{ tech.name }}
        </p>
        <p class="text-[10px] text-teal-glow/80 font-mono">
          {{ tech.category }}
        </p>
      </div>

      <!-- Edge Glow Border with Energy -->
      <div
        class="absolute inset-0 pointer-events-none rounded-xl"
        style="border: 1px solid transparent"
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

  constructor(private readonly elementRef: ElementRef) {}

  getGlassClass(): string {
    const baseClasses =
      "border-white/10 group-hover:border-gold-primary/40 transition-colors";
    return baseClasses;
  }

  getGlowClass(): string {
    const glowType = this.tech.glowColor || "both";
    const classes: Record<string, string> = {
      gold: "from-gold-primary/10 to-gold-primary/5 group-hover:from-gold-primary/20 group-hover:to-gold-primary/10",
      teal: "from-teal-primary/15 to-teal-primary/5 group-hover:from-teal-primary/25 group-hover:to-teal-primary/10",
      both: "from-gold-primary/8 via-teal-primary/8 to-transparent group-hover:from-gold-primary/15 group-hover:via-teal-primary/15 group-hover:to-teal-primary/5",
    };
    return classes[glowType] || classes["both"];
  }

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

    const rotateX = (y - centerY) / 10; // Small rotation for controlled energy
    const rotateY = (centerX - x) / 10;

    // Apply 3D rotation with smooth easing
    gsap.to(logoContainer, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: ANIMATION_TIMINGS.normal / 1000,
      ease: EASING.smooth,
      overwrite: "auto",
    });

    // Apply dual-color glow effect based on cursor position
    if (glowBorder) {
      const distance = Math.hypot(x - centerX, y - centerY);
      const intensity = Math.max(
        0,
        1 - distance / (Math.sqrt(centerX * centerX + centerY * centerY) * 1.5),
      );

      // Create dual glow: gold + teal
      const goldIntensity = intensity * 0.2;
      const tealIntensity = intensity * 0.25;

      glowBorder.style.boxShadow = `
        inset 0 0 20px rgba(212, 175, 55, ${goldIntensity}),
        inset 0 0 15px rgba(6, 214, 208, ${tealIntensity})
      `;
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
