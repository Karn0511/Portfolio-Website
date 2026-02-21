import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MOTION } from "../../core/constants/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  tag: string;
  image: string;
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col p-6 md:p-12 xl:p-20 relative bg-transparent">
      <header
        class="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end relative z-20 reveal-stagger gap-8"
      >
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-white/20"></span>
            <span
              class="font-mono text-[9px] text-white/30 tracking-[0.4em] uppercase"
              >Archive // Project_Matrix</span
            >
          </div>
          <h2
            class="text-[clamp(3.5rem,10vw,8rem)] font-display font-black tracking-tighter text-white leading-[0.85] uppercase"
          >
            Digital<br /><span class="text-white/20">Artifacts</span>
          </h2>
        </div>

        <div
          class="flex items-center gap-6 text-white/30 font-mono text-[10px] tracking-widest pb-4 uppercase border-b border-white/5"
        >
          ACTIVE_NODES: {{ projects.length }}
          <span
            class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          ></span>
        </div>
      </header>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-20 pb-32"
      >
        <div
          *ngFor="let project of projects"
          class="glass-card group flex flex-col overflow-hidden interactive"
        >
          <!-- Project Viewport -->
          <div
            class="h-[300px] sm:h-[400px] xl:h-[500px] relative overflow-hidden bg-black"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10"
            ></div>
            <img
              [src]="project.image"
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[3s] ease-out"
            />

            <!-- Floating Metadata -->
            <div class="absolute top-8 left-8 z-20 flex items-center gap-4">
              <div
                class="px-5 py-2 glass-panel rounded-full text-[10px] font-black text-white tracking-[0.2em] uppercase shadow-2xl"
              >
                {{ project.tag }}
              </div>
            </div>
          </div>

          <!-- Project Analytics -->
          <div class="p-8 md:p-12 -mt-20 md:-mt-28 relative z-20">
            <div
              class="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl group-hover:border-white/20 transition-all"
            >
              <div
                class="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10"
              >
                <h3
                  class="text-4xl md:text-6xl font-display font-black text-white tracking-tighter group-hover:text-white/80 transition-colors uppercase leading-[0.9]"
                >
                  {{ project.title }}
                </h3>
                <a
                  [href]="project.link"
                  target="_blank"
                  class="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/60 hover:text-black hover:bg-white hover:border-white transition-all shadow-xl"
                >
                  <span class="material-symbols-outlined text-lg"
                    >arrow_outward</span
                  >
                </a>
              </div>

              <p
                class="text-slate-400 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity"
              >
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-3">
                <span
                  *ngFor="let tech of project.technologies"
                  class="text-[10px] font-black px-5 py-2 bg-white/5 border border-white/5 rounded-xl text-white/30 group-hover:text-white/70 transition-all uppercase tracking-widest"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      .ease-expo {
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      }
    `,
  ],
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  ngOnInit() {
    gsap.from(".reveal-stagger > *", {
      y: 30,
      opacity: 0,
      duration: MOTION.DURATION_DEFAULT,
      stagger: 0.1,
      ease: MOTION.EASE_MAIN,
    });
  }

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  private initScrollAnimations() {
    const cards = document.querySelectorAll(".sh-card-hover");

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: MOTION.DURATION_DEFAULT,
        delay: index % 2 === 0 ? 0 : 0.1,
        ease: MOTION.EASE_MAIN,
      });
    });
  }

  projects: Project[] = [
    {
      title: "SkyCast Intelligence",
      description:
        "Atmospheric analytics platform utilizing high-fidelity weather telemetry. Engineered with real-time reactive streams and predictive modeling.",
      technologies: ["React", "TypeScript", "Tailwind", "RESTful API", "GSAP"],
      link: "https://github.com/Karn0511/SkyCast-weather-advance",
      tag: "Neural_Node_01",
      image:
        "https://images.unsplash.com/photo-1592210594358-c8585a4208a1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Arogya Vault_Core",
      description:
        "Distributed health data ledger with integrated NLP diagnostics. Secure, encrypted medical record infrastructure with autonomous triage units.",
      technologies: [
        "Angular 19",
        "Node.js",
        "AWS",
        "Docker",
        "NLP",
        "Firebase",
      ],
      link: "https://github.com/Karn0511",
      tag: "Cluster_Sync_04",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "CyberSync Terminal",
      description:
        "High-performance real-time synchronization grid for distributed assets. Low-latency data propagation via custom WebSocket orchestration.",
      technologies: ["WebSockets", "Go", "Redis", "Protobuf", "Rust"],
      link: "https://github.com/Karn0511",
      tag: "Network_Vector",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop",
    },
    {
      title: "Neural Vision Layer",
      description:
        "Computer vision framework for autonomous entity detection within secure digital environments utilizing edge-compute modules.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Kubernetes", "CUDA"],
      link: "https://github.com/Karn0511",
      tag: "AI_Asset_X",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    },
  ];
}
