import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxService } from "../../core/services/parallax.service";
import { CustomCursorComponent } from "../../shared/components/custom-cursor/custom-cursor.component";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-home-amazing",
  standalone: true,
  imports: [CommonModule, RouterModule, CustomCursorComponent, NavbarComponent],
  template: `
    <!-- Custom Cursor -->
    <app-custom-cursor></app-custom-cursor>

    <!-- Navigation -->
    <app-navbar></app-navbar>

    <!-- Hero Section -->
    <section
      class="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-900 flex items-center justify-center"
      data-section="hero"
    >
      <!-- Background parallax elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Animated gradient orb 1 -->
        <div
          class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-gold-primary/20 to-transparent rounded-full blur-3xl"
          [style.transform]="'translateY(' + scrollProgress * -100 + 'px)'"
        ></div>

        <!-- Animated gradient orb 2 -->
        <div
          class="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-3xl"
          [style.transform]="'translateY(' + scrollProgress * 80 + 'px)'"
        ></div>

        <!-- Grid background -->
        <div
          class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,transparent_24%,rgba(212,175,55,.05)_25%,rgba(212,175,55,.05)_26%,transparent_27%,transparent_74%,rgba(212,175,55,.05)_75%,rgba(212,175,55,.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"
        ></div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 text-center px-4 md:px-8">
        <div class="space-y-8">
          <!-- Badge -->
          <div
            class="inline-block px-6 py-3 rounded-full border border-gold-primary/30 bg-gold-primary/5 backdrop-blur-sm"
          >
            <span
              class="text-gold-primary text-sm font-semibold tracking-widest uppercase"
              >Full Stack Architect</span
            >
          </div>

          <!-- Main headline -->
          <div class="space-y-4">
            <h1
              class="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter"
            >
              <span class="block text-white">ASHUTOSH</span>
              <span
                class="block bg-gradient-to-r from-gold-primary via-yellow-400 to-gold-primary bg-clip-text text-transparent animate-pulse"
                >KARN</span
              >
            </h1>
          </div>

          <!-- Subtitle -->
          <p
            class="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting
            <span class="text-gold-primary font-semibold"
              >production-grade systems</span
            >
            with cutting-edge technologies
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href="#projects"
              class="group relative px-10 py-4 rounded-xl font-bold uppercase tracking-widest overflow-hidden text-white transition-all duration-300 hover:scale-105"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-gold-primary to-yellow-400 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              ></div>
              <span class="relative flex items-center justify-center gap-2">
                View My Work
                <span class="group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </span>
            </a>
            <a
              href="#tech"
              class="group relative px-10 py-4 rounded-xl font-bold uppercase tracking-widest border-2 border-gold-primary/40 text-white transition-all duration-300 hover:border-gold-primary hover:bg-gold-primary/10"
            >
              <span class="relative flex items-center justify-center gap-2">
                Tech Stack
                <span class="group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </span>
            </a>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div
          class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce"
        >
          <span
            class="text-sm text-slate-400 uppercase tracking-widest font-mono"
            >Scroll to explore</span
          >
          <svg
            class="w-6 h-6 text-gold-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section
      class="relative py-20 md:py-32 px-4 md:px-8 bg-navy-900 overflow-hidden"
      id="tech"
      data-section="tech"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-16 md:mb-24">
          <div
            class="inline-block px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5 mb-6"
          >
            <span
              class="text-gold-primary text-xs font-semibold tracking-widest uppercase"
              >Tech Arsenal</span
            >
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white mb-4">
            Technologies I Master
          </h2>
          <p class="text-xl text-slate-300 max-w-2xl mx-auto">
            Leveraging modern tools and frameworks to build scalable solutions
          </p>
        </div>

        <!-- Tech grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div *ngFor="let tech of technologies" class="group relative">
            <div
              class="relative h-40 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 hover:border-gold-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <!-- Gradient background on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- Tech name -->
              <span
                class="relative text-center text-sm font-bold text-white group-hover:text-gold-primary transition-colors"
                >{{ tech }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section
      class="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-navy-900 to-navy-950 overflow-hidden"
      id="projects"
      data-section="projects"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-16 md:mb-24">
          <div
            class="inline-block px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5 mb-6"
          >
            <span
              class="text-gold-primary text-xs font-semibold tracking-widest uppercase"
              >Portfolio</span
            >
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white mb-4">
            Featured Projects
          </h2>
          <p class="text-xl text-slate-300 max-w-2xl mx-auto">
            Innovative solutions delivering real-world impact
          </p>
        </div>

        <!-- Projects grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div *ngFor="let project of projects" class="group relative">
            <div
              class="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-gold-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] overflow-hidden"
            >
              <!-- Background glow -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/5 group-hover:to-gold-primary/10 transition-all duration-500"
              ></div>

              <!-- Content -->
              <div class="relative">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-2xl font-bold text-white">
                    {{ project.name }}
                  </h3>
                  <span
                    class="px-3 py-1 rounded-full text-xs font-semibold bg-gold-primary/20 text-gold-primary"
                    >{{ project.status }}</span
                  >
                </div>
                <p class="text-slate-300 mb-6 leading-relaxed">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    *ngFor="let tech of project.tech"
                    class="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-cyan-300"
                    >{{ tech }}</span
                  >
                </div>
                <a
                  [href]="project.link"
                  target="_blank"
                  class="inline-flex items-center gap-2 text-gold-primary font-semibold hover:gap-4 transition-all duration-300"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section
      class="relative py-20 md:py-32 px-4 md:px-8 bg-navy-900 overflow-hidden"
      data-section="experience"
    >
      <div class="max-w-4xl mx-auto">
        <!-- Section header -->
        <div class="text-center mb-16 md:mb-24">
          <div
            class="inline-block px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5 mb-6"
          >
            <span
              class="text-gold-primary text-xs font-semibold tracking-widest uppercase"
              >Career Journey</span
            >
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white mb-4">
            Experience
          </h2>
          <p class="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional growth and technical expertise
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-primary to-gold-primary/30 md:transform md:-translate-x-1/2"
          ></div>

          <!-- Timeline items -->
          <div
            *ngFor="let item of experiences; let i = index"
            [class.md:ml-auto]="i % 2 === 0"
            [class.md:mr-auto]="i % 2 !== 0"
            class="mb-12 md:mb-16 md:w-1/2 md:px-8 relative"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-0 md:left-1/2 top-4 w-4 h-4 bg-gold-primary rounded-full border-4 border-navy-900 md:transform md:-translate-x-1/2"
            ></div>

            <!-- Content -->
            <div
              class="ml-8 md:ml-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-gold-primary/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <h3 class="text-xl font-bold text-white mb-1">{{ item.role }}</h3>
              <p class="text-gold-primary text-sm font-semibold mb-2">
                {{ item.company }}
              </p>
              <p class="text-slate-300 text-sm mb-3">{{ item.period }}</p>
              <p class="text-slate-300">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-navy-900 to-navy-950 overflow-hidden"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6">
          Let's Build Something
        </h2>
        <p class="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Let's create something
          amazing together.
        </p>
        <a
          href="mailto:contact@ashutosh.com"
          class="inline-block px-12 py-4 rounded-xl font-bold uppercase tracking-widest bg-gradient-to-r from-gold-primary to-yellow-400 text-navy-900 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      :host {
        display: block;
        background: linear-gradient(
          135deg,
          #0f1117 0%,
          #1a1f2e 50%,
          #0f1117 100%
        );
        min-height: 100vh;
      }

      .animate-pulse {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }

      .bg-gradient-radial {
        background: radial-gradient(var(--tw-gradient-stops));
      }
    `,
  ],
})
export class HomeAmazingComponent implements OnInit, OnDestroy {
  scrollProgress = 0;

  technologies = [
    "TypeScript",
    "Angular",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kubernetes",
  ];

  projects = [
    {
      name: "Arogya Vault",
      description:
        "Encrypted health record management system with blockchain verification",
      status: "Live",
      tech: ["Angular", "Node.js", "PostgreSQL", "AWS"],
      link: "#",
    },
    {
      name: "SkyCast Radar",
      description:
        "Real-time weather intelligence platform with predictive analytics",
      status: "Live",
      tech: ["React", "Python", "ML", "Google Maps API"],
      link: "#",
    },
  ];

  experiences = [
    {
      role: "Full Stack Engineer",
      company: "Tech Company",
      period: "2024 - Present",
      description:
        "Leading the development of cloud-native applications and microservices architecture",
    },
    {
      role: "Senior Developer",
      company: "Innovation Labs",
      period: "2023 - 2024",
      description:
        "Architected scalable solutions and mentored junior developers",
    },
    {
      role: "Full Stack Developer",
      company: "Digital Studios",
      period: "2022 - 2023",
      description:
        "Built full-stack applications with modern frameworks and best practices",
    },
  ];

  constructor(private readonly parallaxService: ParallaxService) {}

  ngOnInit() {
    this.parallaxService.getScrollProgress$().subscribe((progress) => {
      this.scrollProgress = progress;
    });

    // Add GSAP animations
    gsap.fromTo(
      "h1 span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      "p, a",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      },
    );

    ScrollTrigger.create({
      onUpdate: (self) => {
        document.documentElement.style.setProperty(
          "--scroll-percent",
          `${self.progress * 100}%`,
        );
      },
    });
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
