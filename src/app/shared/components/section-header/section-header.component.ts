import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * Section Header Component
 * Calm, professional heading for portfolio sections
 */

@Component({
  selector: "app-section-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4 mb-12 md:mb-16">
      <p
        *ngIf="subtitle"
        class="text-amber-600/80 text-sm md:text-base font-semibold uppercase tracking-widest"
      >
        {{ subtitle }}
      </p>
      <h2
        class="text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl"
      >
        {{ title }}
      </h2>
      <p
        *ngIf="description"
        class="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed"
      >
        {{ description }}
      </p>
    </div>
  `,
})
export class SectionHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() description?: string;
}
