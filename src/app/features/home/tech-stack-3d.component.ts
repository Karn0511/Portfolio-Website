import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TechBadge3dComponent } from "../../shared/components/tech-badge-3d/tech-badge-3d.component";

interface TechBadge {
  name: string;
  icon: string;
  category: "language" | "framework" | "platform" | "tool";
  color?: string;
}

/**
 * Tech Stack 3D Showcase Component
 * Displays all technologies in clean grid with 3D hover effects
 * Core visual feature of the portfolio
 */

@Component({
  selector: "app-tech-stack-3d",
  standalone: true,
  imports: [CommonModule, TechBadge3dComponent],
  template: `
    <section class="relative z-20 w-full py-20 md:py-32 px-4 md:px-8">
      <!-- Section header -->
      <div class="max-w-6xl mx-auto mb-16 md:mb-24">
        <div class="space-y-4">
          <p
            class="text-amber-600/80 text-sm md:text-base font-semibold uppercase tracking-widest"
          >
            Technology Arsenal
          </p>
          <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
            Professional Stack
          </h2>
          <p
            class="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Carefully selected technologies for building scalable, performant,
            and maintainable systems.
          </p>
        </div>
      </div>

      <!-- Tech badges grid -->
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" role="list">
          <div
            *ngFor="let badge of techStack; let i = index"
            [style.animation-delay]="i * 50 + 'ms'"
            class="h-40 md:h-48 animate-fade-in"
            role="listitem"
          >
            <app-tech-badge-3d [badge]="badge"></app-tech-badge-3d>
          </div>
        </div>
      </div>

      <!-- Category breakdown (optional) -->
      <div class="max-w-6xl mx-auto mt-20 md:mt-32">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div *ngFor="let category of categories" class="space-y-3">
            <h3
              class="text-sm font-semibold text-amber-600/80 uppercase tracking-widest"
            >
              {{ category.name }}
            </h3>
            <p class="text-sm text-slate-400">
              {{ category.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }
    `,
  ],
})
export class TechStack3dComponent implements OnInit {
  techStack: TechBadge[] = [];
  categories = [
    {
      name: "Languages",
      description: "Core programming languages for diverse applications",
    },
    {
      name: "Frameworks",
      description: "Modern, production-ready frameworks",
    },
    {
      name: "Platforms",
      description: "Cloud infrastructure and deployment",
    },
    {
      name: "Tools",
      description: "Development and DevOps tooling",
    },
  ];

  ngOnInit(): void {
    this.initializeTechStack();
  }

  private initializeTechStack(): void {
    this.techStack = [
      // Languages
      {
        name: "Python",
        icon: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        category: "language",
      },
      {
        name: "Java",
        icon: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
        category: "language",
      },
      {
        name: "JavaScript",
        icon: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
        category: "language",
      },
      {
        name: "TypeScript",
        icon: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
        category: "language",
      },

      // Frameworks
      {
        name: "React",
        icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        category: "framework",
      },
      {
        name: "Angular",
        icon: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
        category: "framework",
      },
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
        category: "framework",
      },
      {
        name: "Express",
        icon: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
        category: "framework",
      },

      // Platforms
      {
        name: "Docker",
        icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
        category: "platform",
      },
      {
        name: "Kubernetes",
        icon: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
        category: "platform",
      },
      {
        name: "AWS",
        icon: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=FF9900",
        category: "platform",
      },
      {
        name: "Azure",
        icon: "https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white",
        category: "platform",
      },

      // Tools
      {
        name: "GitHub",
        icon: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
        category: "tool",
      },
      {
        name: "GitHub Actions",
        icon: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
        category: "tool",
      },
      {
        name: "Tailwind CSS",
        icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        category: "tool",
      },
      {
        name: "Firebase",
        icon: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
        category: "tool",
      },
    ];
  }
}
