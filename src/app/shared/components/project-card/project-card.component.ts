import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlassCardComponent } from "../glass-card/glass-card.component";

export interface ProjectInfo {
  title: string;
  description: string;
  shortDesc?: string;
  technologies: string[];
  link?: string;
  image?: string;
  role?: string;
  highlights?: string[];
}

/**
 * Project Card Component
 * Clean, professional project display with glassmorphism
 */

@Component({
  selector: "app-project-card",
  standalone: true,
  imports: [CommonModule, GlassCardComponent],
  template: `
    <app-glass-card [interactive]="true">
      <div class="space-y-4">
        <!-- Project header -->
        <div class="space-y-2">
          <h3 class="text-xl md:text-2xl font-bold text-white">
            {{ project.title }}
          </h3>
          <p
            *ngIf="project.role"
            class="text-sm text-gold-primary/80 font-semibold uppercase tracking-widest"
          >
            {{ project.role }}
          </p>
        </div>

        <!-- Project description -->
        <p class="text-base text-slate-300 leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Highlights -->
        <ul
          *ngIf="project.highlights && project.highlights.length > 0"
          class="space-y-2"
        >
          <li
            *ngFor="let highlight of project.highlights"
            class="flex items-start gap-3 text-sm text-slate-400"
          >
            <span class="text-gold-primary/60 font-bold mt-1">→</span>
            <span>{{ highlight }}</span>
          </li>
        </ul>

        <!-- Technologies -->
        <div class="space-y-3 pt-4 border-t border-white/10">
          <p
            class="text-xs font-semibold text-slate-500 uppercase tracking-widest"
          >
            Technologies
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let tech of project.technologies"
              class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-semibold text-slate-300 hover:border-gold-primary/30 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- CTA -->
        <div *ngIf="project.link" class="pt-2">
          <a
            [href]="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-gold-primary hover:text-gold-light transition-colors text-sm font-semibold"
          >
            View Project
            <span>→</span>
          </a>
        </div>
      </div>
    </app-glass-card>
  `,
})
export class ProjectCardComponent {
  @Input() project!: ProjectInfo;
}
