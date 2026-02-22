import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionComponent } from "../../shared/components/section/section.component";
import { ContainerComponent } from "../../shared/components/container/container.component";
import { ExperienceTimelineItemComponent } from "../../shared/components/experience-timeline-item/experience-timeline-item.component";
import {
  ExperienceData,
  type ExperienceItem,
} from "../../core/data/experience.data";

/**
 * EXPERIENCE COMPONENT
 * Professional work history timeline
 *
 * Design:
 * - Timeline-based layout
 * - Minimal icons/visual noise
 * - Professional tone
 * - Achievements and impact highlighted
 * - No exaggeration
 */

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    ContainerComponent,
    ExperienceTimelineItemComponent,
  ],
  template: `
    <!-- Experience Section -->
    <app-section [spacingVariant]="'lg'">
      <app-container [maxWidth]="'lg'">
        <div class="space-y-16">
          <!-- Section Header -->
          <div class="space-y-6">
            <div class="space-y-2">
              <span
                class="font-mono text-xs text-teal-primary uppercase tracking-widest"
              >
                Professional Journey
              </span>
              <h2
                class="text-5xl md:text-6xl font-bold text-text-primary leading-tight"
              >
                <span
                  class="bg-gradient-to-r from-gold-primary to-teal-primary bg-clip-text text-transparent"
                >
                  Experience & Growth
                </span>
              </h2>
            </div>
            <p
              class="text-lg text-text-secondary max-w-3xl leading-relaxed border-l-2 border-teal-primary/40 pl-6"
            >
              {{ yearsOfExperience }}+ years building robust, scalable systems
              across startups and enterprises. Leadership experience mentoring
              teams, creating CI/CD infrastructure, and driving technical
              decisions at scale.
            </p>
          </div>

          <!-- Timeline -->
          <div class="space-y-2">
            <app-experience-timeline-item
              *ngFor="let exp of experiences; let idx = index"
              [experience]="exp"
              [index]="idx"
            ></app-experience-timeline-item>
          </div>

          <!-- Summary Stats with Energy -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10"
          >
            <div
              class="space-y-2 p-4 bg-gold-primary/5 rounded-lg border border-gold-primary/20"
            >
              <p
                class="text-3xl font-bold bg-gradient-to-r from-gold-primary to-gold-dark bg-clip-text text-transparent"
              >
                {{ yearsOfExperience }}+
              </p>
              <p class="text-sm text-text-tertiary">Years of Experience</p>
            </div>
            <div
              class="space-y-2 p-4 bg-teal-primary/5 rounded-lg border border-teal-primary/20"
            >
              <p
                class="text-3xl font-bold bg-gradient-to-r from-teal-primary to-teal-dark bg-clip-text text-transparent"
              >
                {{ experiences.length }}
              </p>
              <p class="text-sm text-text-tertiary">Companies & Roles</p>
            </div>
            <div class="space-y-2">
              <p class="text-3xl font-bold text-gold-primary">M+</p>
              <p class="text-sm text-text-tertiary">Users Impacted</p>
            </div>
          </div>
        </div>
      </app-container>
    </app-section>
  `,
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = ExperienceData.getAll();
  yearsOfExperience: number = ExperienceData.getYearsOfExperience();
}
