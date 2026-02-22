import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CustomCursorComponent } from "../../shared/components/custom-cursor/custom-cursor.component";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  link: string;
  github: string;
  status: "production" | "active" | "archived";
  highlights: string[];
}

@Component({
  selector: "app-projects",
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
              >Featured Work</span
            >
          </div>
          <h1 class="text-6xl md:text-7xl font-black text-white mb-6">
            Projects
          </h1>
          <p class="text-xl text-slate-300 max-w-2xl">
            Production-grade applications and systems engineered with precision
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <div
            *ngFor="let project of projects"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold-primary/50 transition-all duration-500 p-8 flex flex-col"
          >
            <!-- Gradient Border Animation -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/10 to-gold-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Header -->
              <div class="flex items-start justify-between mb-6">
                <div>
                  <span
                    class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    [ngClass]="
                      project.status === 'production'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : project.status === 'active'
                          ? 'bg-gold-primary/20 text-gold-light'
                          : 'bg-slate-500/20 text-slate-300'
                    "
                  >
                    {{ project.status }}
                  </span>
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-gold-primary transition-colors"
              >
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-slate-300 leading-relaxed mb-6">
                {{ project.fullDescription }}
              </p>

              <!-- Highlights -->
              <ul class="space-y-2 mb-8">
                <li
                  *ngFor="let highlight of project.highlights"
                  class="flex items-center gap-2 text-slate-400"
                >
                  <span class="w-1 h-1 rounded-full bg-gold-primary"></span>
                  {{ highlight }}
                </li>
              </ul>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span
                  *ngFor="let tech of project.technologies"
                  class="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:border-gold-primary/50 transition-colors"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div
                class="flex items-center gap-4 pt-6 border-t border-white/10"
              >
                <a
                  [href]="project.link"
                  target="_blank"
                  class="text-sm font-bold text-gold-primary hover:text-gold-light transition-colors flex items-center gap-2"
                >
                  View Project
                  <span>→</span>
                </a>
                <a
                  [href]="project.github"
                  target="_blank"
                  class="text-sm font-bold text-slate-400 hover:text-gold-primary transition-colors flex items-center gap-2"
                >
                  Code
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: "Arogya Vault",
      description: "Secure health records management",
      fullDescription:
        "HIPAA-compliant medical records system with end-to-end encryption, role-based access control, and AI-powered health insights.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "AWS",
        "Kubernetes",
      ],
      link: "https://example.com/arogya",
      github: "https://github.com/Karn0511/arogya-vault",
      status: "production",
      highlights: [
        "End-to-end encryption",
        "HIPAA compliant",
        "Real-time sync",
        "AI health insights",
      ],
    },
    {
      id: 2,
      title: "SkyCast Radar",
      description: "Real-time weather intelligence",
      fullDescription:
        "Advanced weather visualization with real-time data streams, predictive modeling, and WebGL-powered 3D weather mapping.",
      technologies: [
        "React",
        "TypeScript",
        "Three.js",
        "D3.js",
        "Firebase",
        "OpenWeatherMap",
      ],
      link: "https://example.com/skycast",
      github: "https://github.com/Karn0511/skycast",
      status: "production",
      highlights: [
        "3D weather visualization",
        "Real-time updates",
        "Predictive modeling",
        "Global coverage",
      ],
    },
    {
      id: 3,
      title: "Portfolio OS",
      description: "Interactive developer portfolio",
      fullDescription:
        "This portfolio - a full-stack application demonstrating parallax effects, custom animations, smooth scrolling, and responsive design.",
      technologies: [
        "Angular",
        "TypeScript",
        "GSAP",
        "Three.js",
        "Tailwind CSS",
        "Firebase",
      ],
      link: "https://karnashutosh.web.app",
      github: "https://github.com/Karn0511/portfolio",
      status: "production",
      highlights: [
        "Custom cursor tracking",
        "Parallax scrolling",
        "GSAP animations",
        "3D backgrounds",
      ],
    },
    {
      id: 4,
      title: "AI Integration Framework",
      description: "ML deployment and serving",
      fullDescription:
        "Production-ready framework for deploying machine learning models with auto-scaling, monitoring, and inference optimization.",
      technologies: [
        "Python",
        "FastAPI",
        "TensorFlow",
        "Docker",
        "AWS Lambda",
        "Kubernetes",
      ],
      link: "https://example.com/ai-framework",
      github: "https://github.com/Karn0511/ai-framework",
      status: "active",
      highlights: [
        "Auto-scaling inference",
        "Model versioning",
        "A/B testing",
        "Performance monitoring",
      ],
    },
  ];
}
