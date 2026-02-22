import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlassCardComponent } from "../glass-card/glass-card.component";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  year: string;
}

/**
 * Featured Projects Section
 * Real projects from CV with amazing animations
 */
@Component({
  selector: "app-projects-featured",
  standalone: true,
  imports: [CommonModule, GlassCardComponent],
  template: `
    <section data-section="projects" class="relative min-h-screen py-32">
      <!-- Background -->
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gold-primary/5 to-transparent"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-24">
          <div class="inline-block mb-8">
            <span
              class="text-gold-primary text-sm font-bold uppercase tracking-widest"
            >
              FEATURED WORK
            </span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white mb-6">
            Real-World Projects
          </h2>
          <p class="text-lg text-slate-300 max-w-2xl mx-auto">
            Production systems demonstrating full-stack expertise
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div
            *ngFor="let project of projects"
            class="group relative"
            [attr.data-project]="project.id"
          >
            <app-glass-card [interactive]="true">
              <div class="space-y-6 h-full flex flex-col">
                <!-- Project number and year -->
                <div class="flex items-start justify-between">
                  <span
                    class="text-5xl font-black text-gold-primary/40 group-hover:text-gold-primary/60 transition-colors"
                  >
                    0{{ project.id }}
                  </span>
                  <span
                    class="text-xs font-bold text-gold-primary uppercase tracking-widest"
                  >
                    {{ project.year }}
                  </span>
                </div>

                <!-- Title -->
                <h3
                  class="text-2xl md:text-3xl font-black text-white group-hover:text-gold-primary transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>

                <!-- Description -->
                <p class="text-base text-slate-300 leading-relaxed flex-grow">
                  {{ project.fullDescription }}
                </p>

                <!-- Highlights -->
                <ul class="space-y-2">
                  <li
                    *ngFor="let highlight of project.highlights | slice: 0 : 3"
                    class="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span class="text-gold-primary/60 font-bold mt-0.5">✓</span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>

                <!-- Technology tags -->
                <div class="pt-6 border-t border-white/10">
                  <p
                    class="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3"
                  >
                    Technologies
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      *ngFor="let tech of project.technologies"
                      class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-semibold text-slate-300 group-hover:border-gold-primary/50 transition-colors"
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
                    class="inline-flex items-center gap-2 text-gold-primary hover:text-gold-light transition-colors text-sm font-bold uppercase tracking-wider"
                  >
                    Explore Project
                    <span class="group-hover:translate-x-1 transition-transform"
                      >→</span
                    >
                  </a>
                </div>
              </div>
            </app-glass-card>
          </div>
        </div>

        <!-- All Projects Link -->
        <div class="text-center pt-8">
          <a
            href="#more"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-gold-primary/50 hover:border-gold-primary text-gold-primary font-bold uppercase tracking-widest transition-all duration-300 group"
          >
            View All Projects
            <span class="group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsFeaturedComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: "Arogya Vault",
      description: "Secure health records orchestration",
      fullDescription:
        "Enterprise-grade medical record management with multi-region fault tolerance, NLP-driven document summarization, and role-based access control for HIPAA compliance.",
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "AWS S3",
        "Docker",
        "Kubernetes",
      ],
      highlights: [
        "Role-based access control with real-time permissions",
        "NLP pipeline for medical document analysis",
        "Deployed on AWS with 99.9% uptime",
        "Docker & Kubernetes for container orchestration",
        "Handled 50K+ medical records at scale",
      ],
      year: "2023-2024",
      link: "https://github.com/Karn0511",
    },
    {
      id: 2,
      title: "SkyCast Radar",
      description: "Real-time atmospheric forecasting engine",
      fullDescription:
        "5-day predictive weather application with real-time telemetry processing, optimized data visualization, and WebGL-rendered atmospheric layers.",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeatherMap API",
        "GSAP",
        "Three.js",
      ],
      highlights: [
        "Real-time data from OpenWeatherMap API",
        "Interactive 3D atmospheric visualization",
        "5-day predictive weather intervals",
        "Mobile-responsive design",
        "Sub-500ms response time",
      ],
      year: "2023",
      link: "https://github.com/Karn0511",
    },
    {
      id: 3,
      title: "Portfolio OS",
      description: "This project - full-stack architecture",
      fullDescription:
        "Personal brand website operating as a high-performance dashboard. Full-stack Angular application with WebGL rendering, continuous deployment, and real-time monitoring.",
      technologies: [
        "Angular 19",
        "Three.js",
        "GSAP",
        "Tailwind CSS",
        "Firebase",
        "TypeScript",
      ],
      highlights: [
        "WebGL liquid background with custom shaders",
        "3D tech visualization with real logos",
        "95+ Lighthouse performance score",
        "Continuous deployment pipeline",
        "WCAG AA accessibility",
      ],
      year: "2026",
      link: "https://karnashutosh6.web.app",
    },
    {
      id: 4,
      title: "AI Integration Framework",
      description: "Serverless ML deployment platform",
      fullDescription:
        "Full-stack ML deployment system leveraging AWS Lambda for serverless inference, with automated training pipelines and real-time monitoring dashboards.",
      technologies: [
        "Python",
        "FastAPI",
        "TensorFlow",
        "AWS Lambda",
        "Docker",
        "SQL",
      ],
      highlights: [
        "Serverless MLOps pipeline on AWS",
        "FastAPI for sub-200ms inference",
        "Automated model retraining",
        "Real-time performance monitoring",
        "99.99% availability SLA",
      ],
      year: "2024",
      link: "https://github.com/Karn0511",
    },
  ];

  ngOnInit() {
    // Animation on scroll - handled by parallax service
  }
}
