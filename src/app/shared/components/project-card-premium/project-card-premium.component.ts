import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { type ProjectItem } from "../../../core/data/projects.data";

/**
 * PROJECT CARD COMPONENT
 * Clean, professional card for displaying project information
 *
 * Features:
 * - Subtle hover elevation
 * - Status badges
 * - Tech stack display
 * - Clean typography
 */

@Component({
  selector: "app-project-card-premium",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="group relative bg-soft-black/40 border border-white/10 rounded-xl p-6 md:p-8 hover:border-gold-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold-primary/10"
      style="backdrop-filter: blur(10px)"
    >
      <!-- Background glow on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/5 group-hover:to-gold-primary/0 transition-all duration-300 pointer-events-none rounded-xl"
      ></div>

      <!-- Content -->
      <div class="relative z-10 space-y-6">
        <!-- Header with status -->
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-text-primary mb-2">
              {{ project.title }}
            </h3>
            <p class="text-base text-text-secondary">
              {{ project.description }}
            </p>
          </div>

          <!-- Status badge -->
          <div
            [ngClass]="{
              'bg-emerald-500/20 text-emerald-300':
                project.status === 'deployed',
              'bg-blue-500/20 text-blue-300': project.status === 'active',
              'bg-slate-500/20 text-slate-300': project.status === 'maintained',
            }"
            class="px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap"
          >
            {{ project.status }}
          </div>
        </div>

        <!-- Long description -->
        <p class="text-text-tertiary leading-relaxed text-sm">
          {{ project.longDescription }}
        </p>

        <!-- Role and impact -->
        <div class="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
          <div>
            <p
              class="text-xs text-text-muted uppercase tracking-widest font-semibold"
            >
              Role
            </p>
            <p class="text-sm text-text-primary mt-1">{{ project.role }}</p>
          </div>
          <div>
            <p
              class="text-xs text-text-muted uppercase tracking-widest font-semibold"
            >
              Impact
            </p>
            <p class="text-sm text-text-primary mt-1">{{ project.impact }}</p>
          </div>
        </div>

        <!-- Technologies -->
        <div>
          <p
            class="text-xs text-text-muted uppercase tracking-widest font-semibold mb-3"
          >
            Technologies
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let tech of project.technologies"
              class="px-2 py-1 bg-gold-primary/10 border border-gold-primary/30 rounded text-xs text-gold-primary"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Links -->
        <div class="flex gap-4 pt-2">
          <a
            *ngIf="project.link"
            [href]="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-gold-primary hover:text-gold-light transition-colors"
          >
            View Project →
          </a>
          <a
            *ngIf="project.github"
            [href]="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-gold-primary hover:text-gold-light transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ProjectCardPremiumComponent {
  @Input() project!: ProjectItem;
}
