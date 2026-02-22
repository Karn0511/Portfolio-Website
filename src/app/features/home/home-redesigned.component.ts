import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero.component";
import { TechStack3dComponent } from "./tech-stack-3d.component";
import { ProjectCardPremiumComponent } from "../../shared/components/project-card-premium/project-card-premium.component";
import { ProjectsData, type ProjectItem } from "../../core/data/projects.data";

@Component({
  selector: "app-home-redesigned",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TechStack3dComponent,
    ProjectCardPremiumComponent,
  ],
  template: `
    <div class="relative w-full overflow-hidden">
      <!-- Global Scanline Texture -->
      <div
        class="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] scanlines"
      ></div>

      <!-- Hero Section -->
      <app-hero></app-hero>

      <!-- Tech Systems Module -->
      <app-tech-stack-3d></app-tech-stack-3d>

      <!-- Featured Architecture (Projects) -->
      <section id="projects" class="relative w-full py-48 px-6">
        <!-- Corner Metadata (Antigravity Style) -->
        <div
          class="absolute top-12 left-12 opacity-10 font-mono text-[8px] tracking-[0.6em] text-slate-500 uppercase vertical-text"
        >
          SYS_ARCH_MOD_LOADED // AUTH_OK
        </div>

        <div class="max-w-7xl mx-auto">
          <div class="mb-24 space-y-6">
            <div
              class="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm border border-gold-500/10 bg-gold-500/2 backdrop-blur-md"
            >
              <div
                class="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-glow-gold"
              ></div>
              <span
                class="text-[10px] font-mono text-gold-500 uppercase tracking-[0.5em] font-bold"
                >Selected Archives</span
              >
            </div>
            <h2
              class="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter uppercase leading-[0.8]"
            >
              FEATURED <br />
              <span class="text-gold-500 italic">ARCHITECTURE</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-12 md:gap-20">
            <app-project-card-premium
              *ngFor="let project of projects"
              [project]="project"
            >
            </app-project-card-premium>
          </div>
        </div>
      </section>

      <!-- Terminal Bridge (Contact Close) -->
      <section class="py-48 px-6 relative">
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/2 to-transparent opacity-50"
        ></div>

        <div
          class="max-w-4xl mx-auto glass-panel p-20 text-center space-y-12 border-gold-500/10 bg-navy-950/40 backdrop-blur-3xl relative overflow-hidden group"
        >
          <!-- Hover Blur Detail -->
          <div
            class="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] group-hover:opacity-100 transition-opacity"
          ></div>

          <div class="space-y-6">
            <span
              class="text-[10px] font-mono text-gold-500 uppercase tracking-[0.6em] font-bold"
              >Network.Establish_Connection()</span
            >
            <h2
              class="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter leading-tight"
            >
              INITIATE <span class="italic text-gold-500">SESSION</span>
            </h2>
          </div>

          <p
            class="text-slate-400 text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Architecting the future of distributed systems and high-fidelity
            user experiences. Available for elite engineering engagements.
          </p>

          <div class="flex flex-col items-center gap-8 pt-6">
            <a
              href="mailto:karnashutosh6@gmail.com"
              class="group relative px-16 py-6 bg-gold-500 text-navy-950 text-xs font-bold tracking-[0.4em] rounded-lg transition-all overflow-hidden uppercase shadow-glow-gold"
            >
              <span class="relative z-10">REACH_OUT&#64;SYSTEM</span>
              <div
                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              ></div>
            </a>

            <div class="flex gap-4 items-center opacity-40">
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-glow-emerald"
              ></span>
              <span
                class="text-[10px] font-mono text-slate-500 tracking-[0.4em] uppercase"
                >Status: Available for deployment</span
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .scanlines {
        background: linear-gradient(
          to bottom,
          transparent 50%,
          rgba(0, 0, 0, 0.5) 51%,
          transparent 52%
        );
        background-size: 100% 4px;
      }

      .vertical-text {
        writing-mode: vertical-rl;
      }

      .shadow-glow-emerald {
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
      }
    `,
  ],
})
export class HomeRedesignedComponent {
  projects: ProjectItem[] = ProjectsData.getAll();
}
