import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { type ExperienceItem } from "../../../core/data/experience.data";

/**
 * EXPERIENCE TIMELINE ITEM COMPONENT
 * Clean timeline entry with hacker energy aesthetic
 *
 * Features:
 * - Timeline connecting line with gradient
 * - Dual-color dots (gold/teal alternating)
 * - Rich achievement display
 * - Tech stack showcase
 * - Energetic but minimal styling
 */

@Component({
  selector: "app-experience-timeline-item",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative pb-12 last:pb-0 group">
      <!-- Timeline connector with gradient -->
      <div
        class="absolute left-0 top-8 w-px h-full bg-gradient-to-b from-gold-primary/40 via-teal-primary/30 to-transparent last:hidden"
      ></div>

      <!-- Timeline dot with energy (alternating gold/teal) -->
      <div
        [class]="
          'absolute left-0 top-2 w-2.5 h-2.5 rounded-full transform -translate-x-[6px] group-hover:scale-150 transition-transform duration-300 ' +
          dotColor
        "
      ></div>

      <!-- Content with hover effect -->
      <div
        class="ml-8 space-y-4 p-4 rounded-lg group-hover:bg-gold-primary/5 transition-colors duration-300"
      >
        <!-- Header -->
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3
                class="text-xl font-bold text-text-primary group-hover:text-gold-primary transition-colors"
              >
                {{ experience.role }}
              </h3>
              <p class="text-base text-teal-primary font-medium">
                {{ experience.company }}
              </p>
            </div>
            <div
              [class]="
                'px-3 py-1 border rounded text-xs font-semibold whitespace-nowrap ' +
                badgeClass
              "
            >
              {{ experience.startYear }}-{{ experience.endYear || "Present" }}
            </div>
          </div>
          <p class="text-sm text-text-tertiary leading-relaxed">
            {{ experience.description }}
          </p>
        </div>

        <!-- Achievements with alternating colors -->
        <div class="space-y-2">
          <ul class="space-y-1">
            <li
              *ngFor="
                let achievement of experience.achievements;
                let idx = index
              "
              class="text-sm text-text-tertiary leading-relaxed flex gap-3"
            >
              <span
                [class]="
                  idx % 2 === 0 ? 'text-gold-primary' : 'text-teal-primary'
                "
                class="font-bold shrink-0"
                >→</span
              >
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>

        <!-- Technologies with dual colors -->
        <div class="flex flex-wrap gap-2 pt-2">
          <span
            *ngFor="let tech of experience.technologies; let idx = index"
            [class]="
              idx % 2 === 0
                ? 'bg-gold-primary/15 border-gold-primary/40 text-gold-primary'
                : 'bg-teal-primary/15 border-teal-primary/40 text-teal-primary'
            "
            class="px-2 py-1 border rounded text-xs font-mono transition-all hover:shadow-glowEnergy-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class ExperienceTimelineItemComponent {
  @Input() experience!: ExperienceItem;
  @Input() index: number = 0;

  get dotColor(): string {
    // Alternate between gold and teal dots
    return this.index % 2 === 0
      ? "bg-gold-primary shadow-glowSm"
      : "bg-teal-primary shadow-glowTealSm";
  }

  get badgeClass(): string {
    // Alternate between gold and teal badges
    return this.index % 2 === 0
      ? "bg-gold-primary/10 border-gold-primary/30 text-gold-primary"
      : "bg-teal-primary/10 border-teal-primary/30 text-teal-primary";
  }
}
