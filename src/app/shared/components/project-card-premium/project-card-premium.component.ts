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
      class="group relative bg-gradient-to-br from-soft-black/60 to-charcoal/40 border border-white/10 rounded-xl p-6 md:p-8 hover:border-gold-primary/40 transition-all duration-300 hover:shadow-glowEnergy-lg"
      style="backdrop-filter: blur(10px)"
    >
      <!-- Dual-color glow on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gold-primary/0 via-teal-primary/0 to-gold-primary/0 group-hover:from-gold-primary/8 group-hover:via-teal-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none rounded-xl"
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

          <!-- Status badge with teal accent -->
          <div
            [ngClass]="{
              'bg-emerald-500/20 text-emerald-300 border-emerald-500/30':
                project.status === 'deployed',
              'bg-teal-primary/20 text-teal-primary border-teal-primary/40':
                project.status === 'active',
              'bg-slate-500/20 text-slate-300 border-slate-500/30':
                project.status === 'maintained',
            }"
            class="px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap border"
          >
            {{ project.status }}
          </div>
        </div>

        <!-- Long description -->
        <p class="text-text-tertiary leading-relaxed text-sm">
          {{ project.longDescription }}
        </p>

        <!-- Role and impact with teal accent -->
        <div class="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
          <div>
            <p
              class="text-xs text-teal-primary/70 uppercase tracking-widest font-semibold"
            >
              Role
            </p>
            <p class="text-sm text-text-primary mt-1 font-medium">
              {{ project.role }}
            </p>
          </div>
          <div>
            <p
              class="text-xs text-teal-primary/70 uppercase tracking-widest font-semibold"
            >
              Impact
            </p>
            <p class="text-sm text-gold-primary mt-1 font-medium">
              {{ project.impact }}
            </p>
          </div>
        </div>

        <!-- Technologies with dual-color accents -->
        <div>
          <p
            class="text-xs text-text-muted uppercase tracking-widest font-semibold mb-3"
          >
            Technologies
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let tech of project.technologies; let idx = index"
              [class]="
                idx % 2 === 0
                  ? 'bg-gold-primary/15 border-gold-primary/40 text-gold-primary'
                  : 'bg-teal-primary/15 border-teal-primary/40 text-teal-primary'
              "
              class="px-2 py-1 border rounded text-xs font-mono transition-all duration-200 hover:shadow-glowEnergy-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Links with enhanced hover -->
        <div class="flex gap-4 pt-2">
          <a
            *ngIf="project.link"
            [href]="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-gold-primary hover:text-teal-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(6,214,208,0.4)]"
          >
            View Project →
          </a>
          <a
            *ngIf="project.github"
            [href]="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-teal-primary hover:text-gold-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
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
