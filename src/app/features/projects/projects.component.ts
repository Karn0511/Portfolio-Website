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
        class="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end relative z-20 gap-8"
      >
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-sky-500"></span>
            <span
              class="font-mono text-[10px] text-sky-400 tracking-[0.4em] uppercase font-bold"
              >Engineering Portfolio</span
            >
          </div>
          <h2
            class="text-[clamp(3.5rem,10vw,7rem)] font-display font-black tracking-tighter text-white leading-[0.9] uppercase"
          >
            Featured<br /><span class="text-white/20">Projects</span>
          </h2>
        </div>

        <div
          class="flex items-center gap-6 text-white/30 font-mono text-[10px] tracking-widest pb-4 uppercase border-b border-white/5"
        >
          PROJECT_NODES: {{ projects.length }}
        </div>
      </header>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-20 pb-32"
      >
        <div
          *ngFor="let project of projects"
          class="bg-white/[0.02] border border-white/5 group flex flex-col overflow-hidden hover:border-sky-500/30 transition-all duration-500"
        >
          <div
            class="h-[250px] sm:h-[350px] relative overflow-hidden bg-black/40"
          >
            <img
              [src]="project.image"
              class="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
            />
            <div class="absolute top-6 left-6 z-20">
              <div
                class="px-4 py-1.5 bg-sky-500 text-[9px] font-black text-black tracking-[0.2em] uppercase"
              >
                {{ project.tag }}
              </div>
            </div>
          </div>

          <div class="p-8 md:p-10 flex flex-col flex-1">
            <div class="flex justify-between items-start mb-6">
              <h3
                class="text-3xl md:text-4xl font-display font-black text-white tracking-tighter uppercase leading-none"
              >
                {{ project.title }}
              </h3>
              <a
                [href]="project.link"
                target="_blank"
                class="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-sky-500 transition-all"
              >
                <span class="material-symbols-outlined text-sm"
                  >arrow_outward</span
                >
              </a>
            </div>

            <p
              class="text-slate-400 text-base md:text-lg font-sans font-light leading-relaxed mb-10"
            >
              {{ project.description }}
            </p>

            <div class="mt-auto flex flex-wrap gap-2">
              <span
                *ngFor="let tech of project.technologies"
                class="text-[9px] font-bold px-3 py-1.5 bg-white/5 border border-white/5 text-white/40 uppercase tracking-widest"
              >
                {{ tech }}
              </span>
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
    `,
  ],
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  projects: Project[] = [
    {
      title: "Arogya Vault",
      description:
        "A secure, scalable platform for managing digital medical records with Role-Based Access Control. Features automated NLP-driven summarization for rapid document insight extraction.",
      technologies: [
        "Angular 19",
        "Node.js",
        "AWS S3",
        "Docker",
        "MongoDB",
        "NLP",
      ],
      link: "https://github.com/Karn0511",
      tag: "Cloud_Health_Architecture",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "SkyCast",
      description:
        "Sophisticated 5-day weather forecasting engine utilizing atmospheric data streams. Built with a focus on real-time reactive UI and predictive visualization accuracy.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "OpenWeatherMap API",
      ],
      link: "https://github.com/Karn0511/SkyCast-weather-advance",
      tag: "Data_Visualization",
      image:
        "https://images.unsplash.com/photo-1592210594358-c8585a4208a1?q=80&w=2070&auto=format&fit=crop",
    },
  ];
}
