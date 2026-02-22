import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";

interface TechBadge {
  name: string;
  icon: string;
  category: "language" | "framework" | "platform" | "tool";
  color?: string;
}

/**
 * TECH BADGE 3D COMPONENT
 * Premium tech stack display with subtle 3D tilt
 * No spinning, no chaos - just elegant interaction
 */
@Component({
  selector: "app-tech-badge-3d",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #badgeContainer class="tech-badge" [style.transform]="transform">
      <!-- Glass background -->
      <div class="badge-bg"></div>

      <!-- Content -->
      <div class="badge-content">
        <!-- Icon -->
        <div class="badge-icon">
          <img [src]="badge.icon" [alt]="badge.name" />
        </div>

        <!-- Label -->
        <div class="badge-label">
          <p class="badge-name">{{ badge.name }}</p>
          <p class="badge-category">{{ badge.category }}</p>
        </div>

        <!-- Accent line (appears on hover) -->
        <div class="badge-accent"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .tech-badge {
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 1200px;
        transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .badge-bg {
        position: absolute;
        inset: 0;
        background: rgba(15, 20, 31, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(212, 175, 55, 0.1);
        border-radius: 12px;
        transition: all 300ms ease;
      }

      .tech-badge:hover .badge-bg {
        background: rgba(15, 20, 31, 0.5);
        border-color: rgba(212, 175, 55, 0.2);
        box-shadow:
          0 8px 24px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
      }

      .badge-content {
        position: relative;
        z-index: 10;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 24px 16px;
        gap: 12px;
      }

      .badge-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 300ms ease;
      }

      .tech-badge:hover .badge-icon {
        transform: scale(1.1);
      }

      .badge-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
      }

      .badge-label {
        text-align: center;
      }

      .badge-name {
        font-size: 0.875rem;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
        transition: color 300ms ease;
      }

      .tech-badge:hover .badge-name {
        color: #d4af37;
      }

      .badge-category {
        font-size: 0.75rem;
        color: #7a8a99;
        margin: 0;
        text-transform: capitalize;
        letter-spacing: 0.05em;
      }

      .badge-accent {
        width: 24px;
        height: 1px;
        background: linear-gradient(90deg, transparent, #d4af37, transparent);
        opacity: 0;
        transition: opacity 300ms ease;
      }

      .tech-badge:hover .badge-accent {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .badge-content {
          padding: 16px 12px;
          gap: 8px;
        }

        .badge-icon {
          width: 48px;
          height: 48px;
        }

        .badge-name {
          font-size: 0.75rem;
        }
      }
    `,
  ],
})
export class TechBadge3dComponent implements OnDestroy {
  @Input() badge!: TechBadge;
  @ViewChild("badgeContainer") badgeContainer!: ElementRef;

  transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";

  @HostListener("mousemove", ["$event"])
  onMouseMove(event: MouseEvent): void {
    if (!this.badgeContainer) return;

    const rect = this.badgeContainer.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 15;
    const rotateX = (y / rect.height - 0.5) * -15;

    this.updateTransform(rotateX, rotateY);
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.updateTransform(0, 0);
  }

  private updateTransform(rotateX: number, rotateY: number): void {
    this.transform = `rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) translateZ(0)`;
  }

  ngOnDestroy() {
    // No cleanup needed - component manages no external resources
  }
}
