import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { type ProjectItem } from "../../../core/data/projects.data";

@Component({
  selector: "app-project-card-premium",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="group relative glass-panel p-8 md:p-16 overflow-hidden transition-all duration-700 hover:border-gold-500/20 bg-navy-950/40 backdrop-blur-3xl rounded-2xl border border-white/5 hover:shadow-light-glow"
    >
      <!-- Accent Glow Detail (Top Left) -->
      <div
        class="absolute -top-32 -left-32 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
      ></div>

      <!-- Content Bridge -->
      <div class="relative z-10 flex flex-col md:flex-row gap-16">
        <!-- Identity Module -->
        <div class="md:w-1/3 space-y-8">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-gold-500/60"></div>
              <span
                class="text-gold-500/60 text-[9px] font-mono uppercase tracking-[0.5em] block"
                >ID: {{ project.id }}</span
              >
            </div>
            <h3
              class="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter group-hover:text-gold-500 transition-colors duration-700"
            >
              {{ project.title }}
            </h3>
          </div>

          <div class="flex flex-col gap-2 pt-4">
            <div class="flex items-center gap-4">
              <span
                class="text-[10px] font-mono text-slate-500 uppercase tracking-widest"
                >Year</span
              >
              <div class="h-px flex-1 bg-white/5"></div>
              <span
                class="text-[10px] font-mono text-slate-300 uppercase tracking-widest"
                >{{ project.year || "2024" }}</span
              >
            </div>
            <div class="flex items-center gap-4">
              <span
                class="text-[10px] font-mono text-slate-500 uppercase tracking-widest"
                >Role</span
              >
              <div class="h-px flex-1 bg-white/5"></div>
              <span
                class="text-[10px] font-mono text-gold-500 uppercase tracking-widest"
                >{{ project.role }}</span
              >
            </div>
          </div>

          <!-- Status Signal -->
          <div
            class="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-gold-500/5 border border-gold-500/10 backdrop-blur-md"
          >
            <div
              class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
            ></div>
            <span
              class="text-[9px] font-mono text-gold-500 uppercase tracking-[0.3em] font-bold"
              >{{ project.status }}</span
            >
          </div>
        </div>

        <!-- Intelligence Module -->
        <div class="md:w-2/3 space-y-10">
          <div class="space-y-6">
            <p class="text-slate-300 text-xl font-light leading-relaxed">
              {{ project.description }}
            </p>
            <p
              class="text-slate-500 text-base leading-relaxed font-light border-l-2 border-gold-500/20 pl-6"
            >
              {{ project.longDescription }}
            </p>
          </div>

          <!-- Capability Output -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-white/5"
          >
            <div class="space-y-5">
              <span
                class="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] font-bold"
                >Stack Core</span
              >
              <div class="flex flex-wrap gap-2">
                <span
                  *ngFor="let tech of project.technologies"
                  class="text-[10px] font-mono text-slate-400 border border-white/10 px-3 py-1 rounded-sm bg-white/5 hover:border-gold-500/30 hover:text-white transition-all"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="space-y-5">
              <span
                class="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] font-bold"
                >Connections</span
              >
              <div class="flex gap-8">
                <a
                  *ngIf="project.github"
                  [href]="project.github"
                  target="_blank"
                  class="text-[10px] font-mono text-gold-500 hover:text-white transition-colors tracking-[0.4em] uppercase font-bold flex items-center gap-2"
                >
                  <span class="w-1 h-1 bg-gold-500 rounded-full"></span>
                  ARCHIVE
                </a>
                <a
                  *ngIf="project.link"
                  [href]="project.link"
                  target="_blank"
                  class="text-[10px] font-mono text-gold-500 hover:text-white transition-colors tracking-[0.4em] uppercase font-bold flex items-center gap-2"
                >
                  <span class="w-1 h-1 bg-gold-500 rounded-full"></span>
                  DEPLOYMENT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Watermark ID (Subtle Backdrop) -->
      <div
        class="absolute bottom-[-10%] right-[-5%] p-8 opacity-[0.02] group-hover:opacity-10 transition-all duration-1000 pointer-events-none"
      >
        <div
          class="text-[25vw] font-display font-bold leading-none tracking-tighter text-white"
        >
          {{ project.id }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .hover\\:shadow-light-glow:hover {
        box-shadow: 0 0 60px -20px rgba(212, 175, 55, 0.15);
      }
    `,
  ],
})
export class ProjectCardPremiumComponent {
  @Input() project!: ProjectItem;
}
