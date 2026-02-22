import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechBadge3dComponent } from "../../shared/components/tech-badge-3d/tech-badge-3d.component";

interface TechBadge {
  name: string;
  icon: string;
  color: string;
  category: "language" | "framework" | "platform" | "tool";
}

/**
 * Tech Stack 3D Showcase - REFINED PROFESSIONAL STYLE
 * Real brand logos in premium 3D grid
 * Inspired by dribbble.com/shots/25148150
 */

@Component({
  selector: "app-tech-stack-3d",
  standalone: true,
  imports: [CommonModule, TechBadge3dComponent],
  template: `
    <section
      id="stack"
      class="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <!-- Section Header -->
      <div class="relative z-10 max-w-7xl mx-auto mb-16 md:mb-24">
        <div class="flex items-start justify-between">
          <!-- Left: Title -->
          <div class="space-y-4 max-w-2xl">
            <h2
              class="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Refined Professional<br />
              <span class="text-gold-primary">Tech Stack Grid</span>
            </h2>
            <p class="text-lg text-text-secondary leading-relaxed">
              Navigating the digital void with high-performance reactive
              interfaces and robust backend infrastructure. Scroll to explore
              the stack.
            </p>
          </div>

          <!-- Right: Label -->
          <div class="hidden md:block">
            <div
              class="inline-flex items-center gap-2 backdrop-blur-md border border-gold-primary/30 rounded-full px-4 py-2"
              style="background: rgba(244, 208, 63, 0.05);"
            >
              <span
                class="text-xs text-gold-primary font-mono uppercase tracking-wider"
              >
                > SYSTEM COMPONENTS
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Grid Container with Side Panel -->
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Grid: Tech Logos -->
          <div class="lg:col-span-8">
            <div
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
              #techGrid
            >
              <!-- Tech Cards using 3D Badge Component -->
              <div
                *ngFor="let tech of techStack; let i = index"
                class="h-32 md:h-40"
                [style.animation-delay]="i * 50 + 'ms'"
                (mouseenter)="onTechHover(tech)"
              >
                <app-tech-badge-3d [badge]="tech"></app-tech-badge-3d>
              </div>
            </div>
          </div>

          <!-- Side Info Panel -->
          <div class="lg:col-span-4">
            <div
              class="sticky top-24 backdrop-blur-md border border-gold-primary/20 rounded-xl p-8"
              style="background: linear-gradient(135deg, rgba(10, 14, 26, 0.9) 0%, rgba(26, 37, 64, 0.7) 100%);"
            >
              <!-- Current Selection Display -->
              <div class="space-y-6">
                <!-- Header -->
                <div
                  class="flex items-center gap-3 pb-4 border-b border-gold-primary/20"
                >
                  <div
                    class="w-2 h-2 bg-gold-primary rounded-full animate-pulse"
                  ></div>
                  <span
                    class="text-sm text-gold-primary font-mono uppercase tracking-wider"
                  >
                    > SELECTED STACK: {{ selectedTech?.name || "React" }}
                  </span>
                </div>

                <!-- Version Info -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-text-tertiary font-mono">CATEGORY:</span>
                    <span class="text-white font-mono uppercase">{{
                      selectedTech?.category
                    }}</span>
                  </div>
                </div>

                <!-- Key Features -->
                <div class="space-y-3">
                  <span
                    class="text-sm text-gold-primary font-mono uppercase tracking-wider"
                  >
                    > STATUS:
                  </span>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400 font-mono text-sm"
                      >Production Ready</span
                    >
                  </div>
                </div>

                <!-- Scroll Hint -->
                <div class="pt-4 mt-4 border-t border-gold-primary/20">
                  <p
                    class="text-xs text-text-muted font-mono uppercase tracking-wider"
                  >
                    [HOVER TO INSPECT]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* Grid fade-in animation logic handled by GSAP in AfterViewInit */
    `,
  ],
})
export class TechStack3dComponent implements AfterViewInit {
  @ViewChild("techGrid") techGrid!: ElementRef;

  selectedTech: TechBadge | null = null;

  techStack: TechBadge[] = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "rgba(97, 218, 251, 0.15)",
      category: "framework",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      color: "rgba(221, 0, 49, 0.15)",
      category: "framework",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "rgba(0, 122, 204, 0.15)",
      category: "language",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "rgba(240, 219, 79, 0.15)",
      category: "language",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "rgba(104, 160, 99, 0.15)",
      category: "platform",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "rgba(55, 118, 171, 0.15)",
      category: "language",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "rgba(248, 152, 32, 0.15)",
      category: "language",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "rgba(255, 153, 0, 0.15)",
      category: "platform",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "rgba(0, 151, 230, 0.15)",
      category: "tool",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      color: "rgba(51, 103, 214, 0.15)",
      category: "tool",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      color: "rgba(0, 120, 212, 0.15)",
      category: "platform",
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "rgba(24, 23, 23, 0.15)",
      category: "tool",
    },
  ];

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
    this.selectedTech = this.techStack[0];
  }

  onTechHover(tech: TechBadge): void {
    this.selectedTech = tech;
  }

  private setupScrollAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.techGrid.nativeElement.children, {
      scrollTrigger: {
        trigger: this.techGrid.nativeElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
    });
  }
}
