import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TechBadge {
  name: string;
  logo: string;
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
  imports: [CommonModule],
  template: `
    <section
      class="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style="background: linear-gradient(180deg, #0a0e1a 0%, #0f1420 50%, #0a0e1a 100%);"
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
              <!-- Tech Cards -->
              <div
                *ngFor="let tech of techStack; let i = index"
                class="tech-card group relative aspect-square backdrop-blur-md border border-white/5 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold-primary/40"
                [style.animation-delay]="i * 50 + 'ms'"
                style="background: linear-gradient(135deg, rgba(15, 20, 32, 0.6) 0%, rgba(26, 37, 64, 0.4) 100%);"
                (mouseenter)="onTechHover(tech)"
              >
                <!-- Hover Glow Effect -->
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  [style.background]="
                    'radial-gradient(circle at center, ' +
                    tech.color +
                    ' 0%, transparent 70%)'
                  "
                ></div>

                <!-- Logo Container -->
                <div
                  class="relative z-10 w-full h-full flex items-center justify-center p-6 group-hover:scale-110 transition-transform duration-500"
                >
                  <img
                    [src]="tech.logo"
                    [alt]="tech.name"
                    class="w-full h-full object-contain drop-shadow-2xl"
                    style="filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));"
                  />
                </div>

                <!-- Soft Border Glow on Hover -->
                <div
                  class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  [style.box-shadow]="'inset 0 0 20px ' + tech.color"
                ></div>
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
                    > SELECTED STACK: {{ selectedTech?.name || "React.js" }}
                  </span>
                </div>

                <!-- Version Info -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-text-tertiary font-mono">VERSION:</span>
                    <span class="text-white font-mono">18.2.0</span>
                  </div>
                </div>

                <!-- Key Features -->
                <div class="space-y-3">
                  <span
                    class="text-sm text-gold-primary font-mono uppercase tracking-wider"
                  >
                    > KEY FEATURES:
                  </span>
                  <ul class="space-y-2 text-sm text-text-secondary">
                    <li class="flex items-start gap-2">
                      <span class="text-gold-primary mt-0.5">-</span>
                      <span>Component-Based Architecture</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-gold-primary mt-0.5">-</span>
                      <span>Virtual DOM</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-gold-primary mt-0.5">-</span>
                      <span>Hooks & Context API</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-gold-primary mt-0.5">-</span>
                      <span>Server-Side Rendering (SSR)</span>
                    </li>
                  </ul>
                </div>

                <!-- Related Skills -->
                <div class="space-y-3">
                  <span
                    class="text-sm text-gold-primary font-mono uppercase tracking-wider"
                  >
                    > RELATED SKILLS:
                  </span>
                  <ul class="space-y-2 text-sm text-text-secondary">
                    <li class="flex items-start gap-2">
                      <span class="text-teal-primary mt-0.5">-</span>
                      <span>Next.js</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-teal-primary mt-0.5">-</span>
                      <span>Redux Toolkit</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-teal-primary mt-0.5">-</span>
                      <span>React Native</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-teal-primary mt-0.5">-</span>
                      <span>TypeScript</span>
                    </li>
                  </ul>
                </div>

                <!-- Status -->
                <div class="pt-4 border-t border-gold-primary/20">
                  <div class="flex items-center gap-2">
                    <span class="text-sm text-text-tertiary font-mono"
                      >STATUS:</span
                    >
                    <span class="text-green-400 font-mono text-sm"
                      >Active & Optimized</span
                    >
                  </div>
                </div>

                <!-- Scroll Hint -->
                <div class="pt-4">
                  <p
                    class="text-xs text-text-muted font-mono uppercase tracking-wider"
                  >
                    [SCROLL FOR MORE DATA]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Social Links Row -->
      <div
        class="relative z-10 max-w-7xl mx-auto mt-16 pt-16 border-t border-white/5"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-8">
            <a
              href="#"
              class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
              >[ HOME ]</a
            >
            <a
              href="#"
              class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
              >[ ABOUT ]</a
            >
            <a
              href="#"
              class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
              >[ PROJECTS ]</a
            >
            <a
              href="#"
              class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
              >[ CONTACT ]</a
            >
          </div>
          <div class="flex items-center gap-6">
            <span class="text-xs text-text-muted font-mono">GH</span>
            <span class="text-xs text-text-muted font-mono">LI</span>
            <span class="text-xs text-text-muted font-mono">TW</span>
            <span class="text-xs text-text-muted font-mono">EM</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .tech-card {
        animation: fadeIn 0.8s ease-out forwards;
        opacity: 0;
      }

      :host ::ng-deep {
        .drop-shadow-2xl {
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
        }
      }
    `,
  ],
})
export class TechStack3dComponent implements AfterViewInit {
  @ViewChild("techGrid") techGrid!: ElementRef;

  selectedTech: TechBadge | null = null;

  techStack: TechBadge[] = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "rgba(97, 218, 251, 0.15)",
      category: "framework",
    },
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      color: "rgba(221, 0, 49, 0.15)",
      category: "framework",
    },
    {
      name: "Vue",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      color: "rgba(65, 184, 131, 0.15)",
      category: "framework",
    },
    {
      name: "Svelte",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      color: "rgba(255, 62, 0, 0.15)",
      category: "framework",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "rgba(104, 160, 99, 0.15)",
      category: "platform",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "rgba(55, 118, 171, 0.15)",
      category: "language",
    },
    {
      name: "Go",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      color: "rgba(0, 173, 216, 0.15)",
      category: "language",
    },
    {
      name: "Rust",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
      color: "rgba(206, 74, 31, 0.15)",
      category: "language",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "rgba(255, 153, 0, 0.15)",
      category: "platform",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      color: "rgba(0, 120, 212, 0.15)",
      category: "platform",
    },
    {
      name: "GCP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      color: "rgba(66, 133, 244, 0.15)",
      category: "platform",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "rgba(0, 151, 230, 0.15)",
      category: "tool",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      color: "rgba(51, 103, 214, 0.15)",
      category: "tool",
    },
    {
      name: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      color: "rgba(225, 0, 152, 0.15)",
      category: "tool",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "rgba(71, 162, 72, 0.15)",
      category: "tool",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "rgba(51, 103, 145, 0.15)",
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

    gsap.from(".tech-card", {
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
