import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * SECTION HEADER COMPONENT
 * Consistent section titles with gold accent
 * Premium, refined styling
 */
@Component({
  selector: "app-section-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header">
      <h2 class="section-title">
        <span class="text-accent">{{ accentText }}</span>
        <span class="text-primary" *ngIf="primaryText">{{ primaryText }}</span>
      </h2>
      <p class="section-description" *ngIf="description">{{ description }}</p>
    </div>
  `,
  styles: [
    `
      .section-header {
        margin-bottom: 3rem;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.02em;
        margin: 0 0 1rem 0;
      }

      .text-accent {
        color: #d4af37;
        display: block;
      }

      .text-primary {
        color: #ffffff;
        display: block;
      }

      .section-description {
        font-size: 1.125rem;
        color: #b0b8c1;
        max-width: 600px;
        line-height: 1.7;
        margin: 1rem 0 0 0;
      }

      @media (max-width: 768px) {
        .section-header {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.875rem;
        }

        .section-description {
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class SectionHeaderComponent {
  @Input() accentText: string = "";
  @Input() primaryText: string = "";
  @Input() description: string = "";
}
