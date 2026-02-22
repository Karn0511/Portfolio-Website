import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { type ExperienceItem } from "../../../core/data/experience.data";

/**
 * EXPERIENCE TIMELINE ITEM COMPONENT
 * Clean timeline entry for professional experience
 *
 * Features:
 * - Timeline connecting line/dots
 * - Rich achievement display
 * - Tech stack showcase
 * - Minimal, professional styling
 */

@Component({
  selector: "app-experience-timeline-item",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative pb-12 last:pb-0">
      <!-- Timeline connector -->
      <div
        class="absolute left-0 top-8 w-px h-full bg-gradient-to-b from-gold-primary/40 to-transparent last:hidden"
      ></div>

      <!-- Timeline dot -->
      <div
        class="absolute left-0 top-2 w-2 h-2 bg-gold-primary rounded-full transform -translate-x-[5px]"
      ></div>

      <!-- Content -->
      <div class="ml-8 space-y-4">
        <!-- Header -->
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-xl font-bold text-text-primary">
                {{ experience.role }}
              </h3>
              <p class="text-base text-text-secondary">
                {{ experience.company }}
              </p>
            </div>
            <div
              class="px-3 py-1 bg-gold-primary/10 border border-gold-primary/30 rounded text-xs font-semibold text-gold-primary whitespace-nowrap"
            >
              {{ experience.startYear }}-{{ experience.endYear || "Present" }}
            </div>
          </div>
          <p class="text-sm text-text-tertiary">{{ experience.description }}</p>
        </div>

        <!-- Achievements -->
        <div class="space-y-2">
          <ul class="space-y-1">
            <li
              *ngFor="let achievement of experience.achievements"
              class="text-sm text-text-tertiary leading-relaxed flex gap-3"
            >
              <span class="text-gold-primary font-bold">•</span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2 pt-2">
          <span
            *ngFor="let tech of experience.technologies"
            class="px-2 py-1 bg-soft-black/60 border border-white/10 rounded text-xs text-text-secondary"
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
}
