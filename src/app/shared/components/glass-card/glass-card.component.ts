import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

type GlassVariant = "light" | "medium" | "strong";

/**
 * GLASS CARD COMPONENT
 * Premium glass panel with consistent styling
 * Aligns with new design system
 */
@Component({
  selector: "app-glass-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="glass-card"
      [ngClass]="[
        'glass-' + variant,
        interactive ? 'interactive' : ''
      ]"
      [style.padding]="padding"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .glass-card {
        background: rgba(15, 20, 31, 0.5);
        backdrop-filter: blur(16px) brightness(1.05);
        border: 1px solid rgba(212, 175, 55, 0.15);
        border-radius: 12px;
        transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .glass-card.interactive:hover {
        background: rgba(15, 20, 31, 0.6);
        border-color: rgba(212, 175, 55, 0.25);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        transform: translateY(-2px);
      }

      .glass-light {
        background: rgba(20, 25, 40, 0.4);
        backdrop-filter: blur(10px) brightness(1.1);
        border-color: rgba(212, 175, 55, 0.1);
      }

      .glass-medium {
        background: rgba(15, 20, 31, 0.5);
        backdrop-filter: blur(16px) brightness(1.05);
        border-color: rgba(212, 175, 55, 0.15);
      }

      .glass-strong {
        background: rgba(10, 15, 26, 0.6);
        backdrop-filter: blur(20px);
        border-color: rgba(212, 175, 55, 0.2);
      }
    `,
  ],
})
export class GlassCardComponent {
  @Input() variant: GlassVariant = "medium";
  @Input() padding: string = "24px";
  @Input() interactive: boolean = false;
}
