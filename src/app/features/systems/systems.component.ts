import { Component, signal, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionComponent } from "../../shared/components/section/section.component";
import { ContainerComponent } from "../../shared/components/container/container.component";
import { TechBadge3dComponent } from "../../shared/components/tech-badge-3d-premium/tech-badge-3d-premium.component";
import {
  TechStackData,
  type TechStackItem,
} from "../../core/data/tech-stack.data";

interface StackDetail {
  name: string;
  version: string;
  features: string[];
  status: string;
}

@Component({
  selector: "app-systems",
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    ContainerComponent,
    TechBadge3dComponent,
  ],
  template: `
    <!-- Tech Stack Section -->
    <app-section [spacingVariant]="'lg'">
      <app-container [maxWidth]="'xl'">
        <!-- Section Header -->
        <div class="mb-20">
          <span
            class="font-mono text-xs text-gold-primary uppercase tracking-widest"
          >
            Professional Arsenal
          </span>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6"
          >
            <span
              class="bg-gradient-to-r from-gold-primary to-gold-primary/60 bg-clip-text text-transparent"
            >
              Refined Professional </span
            ><br />
            <span class="text-white">Tech Stack</span>
          </h2>
          <p
            class="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed"
          >
            A curated selection of enterprise-grade technologies and frameworks,
            optimized for scalability, performance, and maintainability.
          </p>
        </div>

        <!-- Tech Grid with Sidebar -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Tech Badges Grid (Left / Full) -->
          <div class="lg:col-span-3">
            <div
              class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
            >
              <div
                *ngFor="let tech of technologies; let i = index"
                class="group cursor-pointer transition-all duration-300 hover:scale-110"
                (click)="selectStack(i)"
              >
                <app-tech-badge-3d [tech]="tech"></app-tech-badge-3d>
              </div>
            </div>
          </div>

          <!-- Sidebar: Selected Stack Details -->
          <div class="lg:col-span-1">
            <div
              class="border-2 border-gold-primary/70 bg-gradient-to-b from-navy-900/70 to-navy-950/70 rounded-lg p-8 backdrop-blur-sm sticky top-32"
            >
              <div class="space-y-6">
                <!-- Header -->
                <div>
                  <span
                    class="text-gold-primary text-xs font-mono uppercase tracking-widest block mb-3"
                  >
                    > SELECTED STACK:
                  </span>
                  <h3 class="text-xl sm:text-2xl font-bold text-white">
                    {{ selectedStack().name }}
                  </h3>
                </div>

                <!-- Version -->
                <div class="border-t border-gold-primary/40 pt-6">
                  <span
                    class="text-gold-primary text-xs font-mono uppercase tracking-widest block mb-2"
                  >
                    > VERSION:
                  </span>
                  <p class="text-gray-300 font-mono text-base sm:text-lg">
                    {{ selectedStack().version }}
                  </p>
                </div>

                <!-- Key Features -->
                <div class="border-t border-gold-primary/40 pt-6">
                  <span
                    class="text-gold-primary text-xs font-mono uppercase tracking-widest block mb-3"
                  >
                    > KEY FEATURES:
                  </span>
                  <ul class="space-y-2">
                    <li
                      *ngFor="let feature of selectedStack().features"
                      class="text-gray-300 text-xs sm:text-sm flex items-start gap-2"
                    >
                      <span class="text-gold-primary">- </span>
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <!-- Status -->
                <div class="border-t border-gold-primary/40 pt-6">
                  <span
                    class="text-gold-primary text-xs font-mono uppercase tracking-widest block"
                  >
                    > STATUS:
                    <span class="text-green-400">{{
                      selectedStack().status
                    }}</span>
                  </span>
                </div>

                <!-- Scroll Hint -->
                <div class="border-t border-gold-primary/40 pt-6 text-center">
                  <span class="text-gold-primary/60 text-xs font-mono"
                    >[ SCROLL FOR MORE DATA ]</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Navigation -->
        <div
          class="mt-16 pt-12 border-t border-gold-primary/20 flex justify-between items-center text-gray-500 font-mono text-xs"
        >
          <span>[ HOME ] [ ABOUT ] [ PROJECTS ] [ CONTACT ]</span>
          <span class="hidden md:inline">GH | LI | TW | EM</span>
        </div>
      </app-container>
    </app-section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SystemsComponent implements OnInit {
  technologies: TechStackItem[] = TechStackData.TECHNOLOGIES;
  selectedIndex = signal(0);

  stackDetails: StackDetail[] = [
    {
      name: "React.js",
      version: "18.2.0",
      features: [
        "Component-Based Architecture",
        "Virtual DOM",
        "Hooks & Context API",
        "Server-Side Rendering (SSR)",
      ],
      status: "Active & Optimized",
    },
    {
      name: "Angular",
      version: "19.0.0",
      features: [
        "Full-Featured Framework",
        "Dependency Injection",
        "RxJS & Signals",
        "Built-in Routing & Forms",
      ],
      status: "Active & Optimized",
    },
    {
      name: "TypeScript",
      version: "5.3.3",
      features: [
        "Static Type Checking",
        "Advanced Type System",
        "Interface-Based Development",
        "Compile-Time Error Detection",
      ],
      status: "Active & Optimized",
    },
    {
      name: "Node.js",
      version: "20.0.0",
      features: [
        "Scalable Microservices",
        "Non-Blocking I/O",
        "Package Ecosystem (npm)",
        "Server-Side Rendering",
      ],
      status: "Production Ready",
    },
    {
      name: "AWS",
      version: "Latest",
      features: [
        "Cloud Infrastructure",
        "Auto-Scaling Solutions",
        "CDN & Caching",
        "Database Management",
      ],
      status: "Active & Optimized",
    },
    {
      name: "Docker",
      version: "24.0.0",
      features: [
        "Containerization",
        "Environment Consistency",
        "Microservices Architecture",
        "CI/CD Integration",
      ],
      status: "Production Ready",
    },
    {
      name: "Kubernetes",
      version: "1.28.0",
      features: [
        "Container Orchestration",
        "Auto-Scaling",
        "Self-Healing",
        "Service Discovery",
      ],
      status: "Active & Optimized",
    },
    {
      name: "Python",
      version: "3.11.0",
      features: [
        "Data Science & ML",
        "Clean Syntax",
        "Extensive Libraries",
        "AI/ML Frameworks",
      ],
      status: "Active & Optimized",
    },
  ];

  ngOnInit(): void {
    this.selectStack(0);
  }

  selectStack(index: number): void {
    this.selectedIndex.set(index);
  }

  selectedStack(): StackDetail {
    return this.stackDetails[this.selectedIndex()] || this.stackDetails[0];
  }
}
