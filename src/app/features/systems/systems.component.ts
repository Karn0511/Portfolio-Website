import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CustomCursorComponent } from "../../shared/components/custom-cursor/custom-cursor.component";

interface Technology {
  name: string;
  category: string;
  proficiency: number;
}

@Component({
  selector: "app-systems",
  standalone: true,
  imports: [CommonModule, NavbarComponent, CustomCursorComponent],
  template: `
    <!-- Custom Cursor -->
    <app-custom-cursor></app-custom-cursor>

    <!-- Navigation -->
    <app-navbar></app-navbar>

    <!-- Background -->
    <div
      id="background-container"
      class="fixed inset-0 -z-30 bg-navy-900"
    ></div>

    <!-- Main Content -->
    <main class="relative pt-20 min-h-screen pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="py-20">
          <div
            class="inline-block mb-6 px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5"
          >
            <span
              class="text-sm font-bold text-gold-primary uppercase tracking-widest"
              >Infrastructure</span
            >
          </div>
          <h1 class="text-6xl md:text-7xl font-black text-white mb-6">
            Technical Stack
          </h1>
          <p class="text-xl text-slate-300 max-w-2xl">
            Modern technologies for building scalable, performant systems
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div class="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
              <div class="text-3xl font-black text-gold-primary mb-2">
                99.9%
              </div>
              <div class="text-sm text-slate-400">Uptime SLA</div>
            </div>
            <div class="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
              <div class="text-3xl font-black text-emerald-400 mb-2">
                STABLE
              </div>
              <div class="text-sm text-slate-400">System Status</div>
            </div>
            <div class="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
              <div class="text-3xl font-black text-blue-400 mb-2">20+</div>
              <div class="text-sm text-slate-400">Technologies</div>
            </div>
            <div class="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
              <div class="text-3xl font-black text-gold-primary mb-2">
                &lt;100ms
              </div>
              <div class="text-sm text-slate-400">Response Time</div>
            </div>
          </div>
        </div>

        <!-- Tech Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let tech of technologies"
            class="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-gold-primary/50 transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-4">
              <h3
                class="text-lg font-bold text-white group-hover:text-gold-primary transition-colors"
              >
                {{ tech.name }}
              </h3>
              <span
                class="text-xs font-bold px-2 py-1 rounded text-gold-primary bg-gold-primary/10"
                >{{ tech.category }}</span
              >
            </div>
            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-gold-primary to-gold-light"
                [style.width.%]="tech.proficiency"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [],
})
export class SystemsComponent {
  technologies: Technology[] = [
    { name: "TypeScript", category: "Language", proficiency: 95 },
    { name: "Angular", category: "Frontend", proficiency: 92 },
    { name: "React", category: "Frontend", proficiency: 85 },
    { name: "Node.js", category: "Backend", proficiency: 90 },
    { name: "Python", category: "Backend", proficiency: 88 },
    { name: "FastAPI", category: "Framework", proficiency: 85 },
    { name: "PostgreSQL", category: "Database", proficiency: 87 },
    { name: "MongoDB", category: "Database", proficiency: 85 },
    { name: "Redis", category: "Cache", proficiency: 80 },
    { name: "Docker", category: "DevOps", proficiency: 90 },
    { name: "Kubernetes", category: "DevOps", proficiency: 85 },
    { name: "AWS", category: "Cloud", proficiency: 88 },
    { name: "Azure", category: "Cloud", proficiency: 82 },
    { name: "Firebase", category: "Backend", proficiency: 85 },
    { name: "GraphQL", category: "API", proficiency: 80 },
    { name: "REST", category: "API", proficiency: 95 },
    { name: "GSAP", category: "Animation", proficiency: 88 },
    { name: "Three.js", category: "3D", proficiency: 87 },
    { name: "TensorFlow", category: "AI/ML", proficiency: 82 },
    { name: "Git", category: "VCS", proficiency: 95 },
  ];
}
