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
    <section class="section-container">
      <div class="content-wrapper">
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
        title: "SkyCast - Advanced Weather App",
        description:
          "A sophisticated weather forecasting application built with React and TypeScript, featuring real-time weather updates, beautiful data visualizations, and an intuitive user interface.",
        role: "Full Stack Developer",
        technologies: [
          "React",
          "TypeScript",
          "OpenWeatherMap API",
          "Chart.js",
          "Tailwind CSS",
        ],
        highlights: [
          "Real-time weather data from OpenWeatherMap API",
          "Beautiful interactive charts and data visualization",
          "Responsive design for all devices",
          "Location-based weather forecasting",
          "Dark mode support",
        ],
        link: "#",
      },
      {
        title: "Arogya Vault - Health Records Platform",
        description:
          "Enterprise-grade health record management system with role-based access control, NLP-powered summarization, and secure cloud storage. Deployed on AWS with Docker containerization.",
        role: "Lead Developer",
        technologies: [
          "Angular 18",
          "Node.js",
          "MongoDB",
          "AWS S3",
          "Docker",
          "Kubernetes",
        ],
        highlights: [
          "Role-based access control (RBAC)",
          "NLP-powered health data summarization",
          "Secure REST API with authentication",
          "AWS S3 integration for document storage",
          "Fully containerized with Docker",
          "Kubernetes deployment ready",
        ],
        link: "#",
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
          "3D tech badge showcase with hover effects",
          "Smooth parallax scrolling",
          "Glassmorphic design system",
          "Fully responsive and accessible",
        ],
        link: "#",
      },
      {
        title: "AI Integration Framework",
        description:
          "Custom framework for integrating machine learning models into web applications. Includes model deployment pipeline, real-time inference, and performance monitoring.",
        role: "Architecture Lead",
        technologies: [
          "Python",
          "TensorFlow",
          "FastAPI",
          "Docker",
          "AWS Lambda",
          "Azure",
        ],
        highlights: [
          "FastAPI-based inference server",
          "Real-time model predictions",
          "Automated model deployment pipeline",
          "Performance monitoring and logging",
          "Multi-cloud deployment support",
        ],
        link: "#",
      },
    ];
  }
}
