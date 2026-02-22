import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectCardPremiumComponent } from "../../shared/components/project-card-premium/project-card-premium.component";
import { ProjectsData, type ProjectItem } from "../../core/data/projects.data";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, ProjectCardPremiumComponent],
  template: `
    <section class="relative w-full py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header Signal -->
        <div class="mb-24 space-y-6">
          <div
            class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5"
          >
            <div
              class="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"
            ></div>
            <span
              class="text-[10px] uppercase tracking-[0.3em] font-medium text-gold-500"
              >Project Archive</span
            >
          </div>

          <h1
            class="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-glow text-white tracking-tighter uppercase"
          >
            SELECTED <span class="text-gold-500 italic">WORKS</span>
          </h1>

          <p class="text-slate-500 max-w-2xl font-light leading-relaxed">
            A selection of architectural implementations and high-frequency
            systems built with precision and scale in mind.
          </p>
        </div>

        <!-- Project Deck -->
        <div class="space-y-12">
          <app-project-card-premium
            *ngFor="let project of projects"
            [project]="project"
          ></app-project-card-premium>
        </div>

        <!-- System Footer -->
        <div
          class="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div
            class="text-[10px] font-mono text-slate-500 uppercase tracking-widest"
          >
            Detailed case studies available upon request
          </div>
          <div class="flex gap-8">
            <a
              href="https://github.com/Karn0511"
              target="_blank"
              class="text-[10px] font-mono text-gold-500 hover:text-white transition-colors tracking-widest uppercase"
              >Full Repository</a
            >
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects: ProjectItem[] = ProjectsData.getAll();
}
