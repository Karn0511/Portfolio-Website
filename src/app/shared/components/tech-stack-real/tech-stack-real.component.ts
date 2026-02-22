import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParallaxService } from "../../../core/services/parallax.service";
import gsap from "gsap";

interface Technology {
  name: string;
  logo: string; // Real logo URL
  color: string; // Brand color for glow
  category: string;
}

/**
 * 3D Animated Tech Stack with Real Logos
 * Displays technologies with animated, colored logos
 * Responds to parallax and scroll effects
 */
@Component({
  selector: "app-tech-stack-real",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      data-section="tech-stack"
      class="relative min-h-[120vh] py-32 overflow-hidden"
    >
      <!-- Animated background that changes with scroll -->
      <div
        class="absolute inset-0 -z-10"
        [style.background]="getBackgroundGradient()"
      >
        <!-- Parallax background elements -->
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-primary/20 to-transparent rounded-full blur-3xl"
          [style.transform]="'translateY(' + getParallaxOffset(0.1) + 'px)'"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"
          [style.transform]="'translateY(' + getParallaxOffset(0.15) + 'px)'"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-24">
          <div class="inline-block mb-8">
            <span
              class="text-gold-primary text-sm font-bold uppercase tracking-widest"
            >
              TECHNICAL FOUNDATION
            </span>
          </div>
          <h2
            class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
            [style.transform]="'translateY(' + getParallaxOffset(0.05) + 'px)'"
          >
            Tech Stack
          </h2>
          <p
            class="text-lg text-slate-300 max-w-2xl mx-auto"
            [style.transform]="'translateY(' + getParallaxOffset(0.08) + 'px)'"
          >
            Real-world technologies powering production systems
          </p>
        </div>

        <!-- Tech Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 perspective"
        >
          <div
            *ngFor="let tech of technologies; let i = index"
            class="tech-card-wrapper group"
            [style.--i]="i"
          >
            <!-- Main card container with 3D effect -->
            <div
              class="relative h-44 md:h-52 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-white/40 cursor-pointer"
              [style.transform]="'preserve-3d'"
            >
              <!-- Gradient border effect underneath -->
              <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                [style.background]="
                  'linear-gradient(135deg, ' +
                  tech.color +
                  ', ' +
                  tech.color +
                  '33)'
                "
              ></div>

              <!-- Inner glass effect -->
              <div
                class="absolute inset-px rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
              ></div>

              <!-- Glow under logo -->
              <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                [style.background]="
                  'linear-gradient(90deg, ' +
                  tech.color +
                  ', ' +
                  tech.color +
                  '33, ' +
                  tech.color +
                  ')'
                "
              ></div>

              <!-- Content container -->
              <div
                class="relative z-10 flex flex-col items-center gap-4 transition-all duration-300 group-hover:mb-2"
              >
                <!-- Logo with 3D hover effect -->
                <div class="relative">
                  <img
                    [src]="tech.logo"
                    [alt]="tech.name"
                    class="w-14 md:w-16 h-14 md:h-16 object-contain transition-all duration-500 group-hover:drop-shadow-2xl"
                    [style.filter]="
                      'drop-shadow(0 0 12px ' +
                      tech.color +
                      '99) brightness(1.1)'
                    "
                  />
                  <!-- Floating animation -->
                  <style>
                    :host ::ng-deep .tech-card-wrapper:nth-child(1) img {
                      animation: float 6s ease-in-out infinite;
                    }
                    :host ::ng-deep .tech-card-wrapper:nth-child(2) img {
                      animation: float 7s ease-in-out infinite -0.5s;
                    }
                    :host ::ng-deep .tech-card-wrapper:nth-child(3) img {
                      animation: float 8s ease-in-out infinite -1s;
                    }
                    :host ::ng-deep .tech-card-wrapper:nth-child(4) img {
                      animation: float 6.5s ease-in-out infinite -1.5s;
                    }
                    :host ::ng-deep .tech-card-wrapper:nth-child(5) img {
                      animation: float 7.5s ease-in-out infinite -2s;
                    }
                    :host ::ng-deep .tech-card-wrapper:nth-child(6) img {
                      animation: float 8.5s ease-in-out infinite -2.5s;
                    }
                    @keyframes float {
                      0%,
                      100% {
                        transform: translateY(0px);
                      }
                      50% {
                        transform: translateY(-6px);
                      }
                    }
                  </style>
                </div>

                <!-- Tech name -->
                <span
                  class="text-xs md:text-sm font-bold text-center text-white group-hover:text-gold-primary transition-colors duration-300 line-clamp-2"
                >
                  {{ tech.name }}
                </span>
              </div>

              <!-- Hover shine effect -->
              <div
                class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                [style.background]="
                  'linear-gradient(135deg, ' + tech.color + '44, transparent)'
                "
              ></div>
            </div>
          </div>
        </div>

        <!-- Category breakdown -->
        <div class="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            *ngFor="let category of categories"
            class="tech-category p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-gold-primary/50 transition-all duration-300 group"
          >
            <h3
              class="text-gold-primary font-bold uppercase tracking-wider mb-4"
            >
              {{ category.title }}
            </h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              {{ category.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                *ngFor="let tech of category.techs"
                class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-300 group-hover:border-gold-primary/30 transition-colors"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .tech-card {
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px) translateX(0px);
        }
        25% {
          transform: translateY(-8px) translateX(4px);
        }
        50% {
          transform: translateY(-15px) translateX(-4px);
        }
        75% {
          transform: translateY(-8px) translateX(4px);
        }
      }

      .tech-card:nth-child(2n) {
        animation-delay: -1s;
      }

      .tech-card:nth-child(3n) {
        animation-delay: -2s;
      }

      .tech-category {
        animation: slideUp 0.6s ease-out;
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class TechStackRealComponent implements OnInit, OnDestroy {
  scrollProgress = 0;
  parallaxOffset = 0;

  technologies: Technology[] = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      color: "#3776ab",
      category: "Languages",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      color: "#007396",
      category: "Languages",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      color: "#f7df1e",
      category: "Languages",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      color: "#3178c6",
      category: "Languages",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "#61dafb",
      category: "Frameworks",
    },
    {
      name: "Angular",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
      color: "#dd0031",
      category: "Frameworks",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      category: "Frameworks",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      color: "#ffffff",
      category: "Frameworks",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      color: "#2496ed",
      category: "DevOps",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      color: "#326ce5",
      category: "DevOps",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#ff9900",
      category: "Cloud",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      color: "#0078d4",
      category: "Cloud",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      color: "#ffffff",
      category: "Tools",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06b6d4",
      category: "Tools",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      color: "#ffa500",
      category: "Tools",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      color: "#009688",
      category: "Frameworks",
    },
  ];

  categories = [
    {
      title: "Languages",
      description: "Core programming languages for systems design and logic",
      techs: ["Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks",
      description:
        "Modern frameworks powering reactive and scalable applications",
      techs: ["React", "Angular", "Node.js", "Express", "FastAPI"],
    },
    {
      title: "DevOps",
      description: "Container orchestration and infrastructure as code",
      techs: ["Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Cloud",
      description: "Cloud platforms for scalable deployment and management",
      techs: ["AWS Academy Certified", "Azure", "Google Cloud"],
    },
  ];

  constructor(private parallaxService: ParallaxService) {}

  ngOnInit() {
    this.parallaxService.getScrollProgress$().subscribe((progress) => {
      this.scrollProgress = progress;
    });
  }

  getParallaxOffset(speed: number): number {
    return this.scrollProgress * 300 * speed;
  }

  getBackgroundGradient(): string {
    // Change background based on scroll
    const hue = Math.floor(this.scrollProgress * 360);
    return `linear-gradient(135deg, hsl(${240}, 10%, 4%) 0%, hsl(${hue}, 60%, 25%) 50%, hsl(${240}, 10%, 4%) 100%)`;
  }

  onTechHover(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    gsap.to(card, {
      duration: 0.3,
      y: -20,
      scale: 1.1,
      ease: "elastic.out(1.2, 0.75)",
    });

    // Animate nearby cards
    const allCards = document.querySelectorAll(".tech-card");
    allCards.forEach((c, i) => {
      if (Math.abs(i - index) <= 2 && i !== index) {
        gsap.to(c, { duration: 0.3, opacity: 0.7 });
      }
    });
  }

  onTechLeave(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    gsap.to(card, { duration: 0.3, y: 0, scale: 1, ease: "power2.out" });

    // Restore nearby cards
    const allCards = document.querySelectorAll(".tech-card");
    allCards.forEach((c) => {
      gsap.to(c, { duration: 0.3, opacity: 1 });
    });
  }

  ngOnDestroy() {
    // Cleanup if needed
  }
}
