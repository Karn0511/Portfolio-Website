import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ProjectCardComponent,
  ProjectInfo,
} from "../../shared/components/project-card/project-card.component";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";

/**
 * Projects Section Component
 * Displays all portfolio projects in a clean grid
 */

@Component({
  selector: "app-projects-section",
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, SectionHeaderComponent],
  template: `
    <section class="section-container relative py-24 md:py-32 px-6 md:px-12">
      <div class="max-w-7xl mx-auto">
        <!-- Section header -->
        <app-section-header
          title="Featured Projects"
          subtitle="Portfolio"
          description="Production-ready applications built with modern technologies and best practices"
        ></app-section-header>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div
            *ngFor="let project of projects; let i = index"
            [style.animation-delay]="i * 100 + 'ms'"
            class="fade-in h-full"
          >
            <app-project-card [project]="project"></app-project-card>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent implements OnInit {
  projects: ProjectInfo[] = [];

  ngOnInit(): void {
    this.initializeProjects();
  }

  private initializeProjects(): void {
    this.projects = [
      {
        title: "SkyCast Weather Advance App",
        description:
          "Developed a real-time weather application with 5-day weather forecast and an optimized user interface. Integrated OpenWeatherMap API with enhanced functionality and interactive interface.",
        role: "Full Stack Developer",
        technologies: [
          "TypeScript",
          "React",
          "OpenWeatherMap API",
          "Chart.js",
          "Tailwind CSS",
        ],
        highlights: [
          "Real-time weather data",
          "5-day forecast visualization",
          "Interactive & optimized UI",
          "Responsive design",
        ],
        link: "https://github.com/Karn0511/skycast",
      },
      {
        title: "Arogya Vault Health Record App",
        description:
          "Developed a secure platform for managing digital medical records with Role-Based Access Control. Implemented NLP-driven summarization to extract key insights from uploaded health documents.",
        role: "Lead Developer",
        technologies: [
          "Angular 18",
          "Node.js",
          "MongoDB",
          "AWS S3",
          "Docker",
          "NLP",
        ],
        highlights: [
          "Role-Based Access Control (RBAC)",
          "NLP-driven summarization",
          "Secure REST API",
          "AWS S3 & Docker integration",
        ],
        link: "https://github.com/Karn0511/Arogya-Vault-Health-Record-App",
      },
      {
        title: "Portfolio OS - Personal Brand Site",
        description:
          "High-performance portfolio website with cinematic design, smooth scrolling, and interactive 3D tech stack showcase. Built with Angular, WebGL, and modern CSS techniques.",
        role: "Designer & Developer",
        technologies: [
          "Angular 19",
          "Three.js",
          "Tailwind CSS",
          "WebGL",
          "GSAP",
        ],
        highlights: [
          "Liquid morphing background with WebGL",
          "3D tech badge showcase",
          "Smooth parallax scrolling",
          "Hacker-inspired aesthetic",
        ],
        link: "https://github.com/Karn0511",
      },
    ];
  }
}
