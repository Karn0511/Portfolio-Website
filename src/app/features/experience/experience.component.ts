import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MOTION } from "../../core/constants/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col p-6 md:p-12 xl:p-20 relative bg-transparent">
      <header
        class="mb-12 md:mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end relative z-20 gap-8"
      >
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-sky-500"></span>
            <span
              class="font-mono text-[10px] text-sky-400 tracking-[0.4em] uppercase font-bold"
              >Career Vector</span
            >
          </div>
          <h2
            class="text-[clamp(3.5rem,10vw,7rem)] font-display font-black tracking-tighter text-white leading-[0.9] uppercase"
          >
            Experience<br /><span class="text-white/20">& Education</span>
          </h2>
        </div>

        <div class="flex gap-6 pb-4 lg:pb-8 border-b border-white/5">
          <a
            href="mailto:karnashutosh6@gmail.com"
            class="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-sky-500 hover:text-sky-500 transition-all"
          >
            <span class="material-symbols-outlined text-xl">mail</span>
          </a>
          <button
            class="px-8 md:px-12 h-14 bg-white text-black text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-sky-400 transition-colors"
          >
            DOWNLOAD_RESUME
          </button>
        </div>
      </header>

      <div
        class="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 relative z-20 pb-32"
      >
        <!-- Main Timeline -->
        <div class="xl:col-span-8 space-y-16 md:space-y-24">
          <div
            *ngFor="let item of timeline"
            class="group relative pl-10 md:pl-16 border-l border-white/10"
          >
            <div
              class="absolute -left-[1px] top-0 w-[1px] h-full bg-sky-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
            ></div>

            <div class="mb-8">
              <span
                class="font-mono text-[11px] text-sky-400 tracking-[0.2em] uppercase mb-4 block font-bold"
                >{{ item.period }}</span
              >
              <h3
                class="text-3xl md:text-5xl font-display font-black text-white mb-2 tracking-tighter leading-none uppercase"
              >
                {{ item.role }}
              </h3>
              <div
                class="text-white/40 font-mono text-[12px] tracking-widest uppercase"
              >
                {{ item.company }}
              </div>
            </div>

            <p
              class="text-slate-400 text-lg md:text-xl font-sans font-light leading-relaxed mb-10 max-w-3xl"
            >
              {{ item.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                *ngFor="let t of item.tech"
                class="px-4 py-1.5 bg-white/5 border border-white/5 text-[10px] font-bold text-white/30 uppercase tracking-widest"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>

        <!-- Sidebar (Stats & Info) -->
        <div class="xl:col-span-4 space-y-12">
          <div class="bg-white/[0.02] border border-white/5 p-10 space-y-12">
            <h3
              class="font-display text-sm text-white uppercase tracking-[0.4em] flex items-center gap-4 font-black"
            >
              <span class="w-1 h-6 bg-sky-500"></span>
              Tech Stack
            </h3>

            <div class="space-y-12">
              <div *ngFor="let group of skillGroups" class="space-y-6">
                <div
                  class="text-[10px] font-bold text-sky-400 uppercase tracking-widest"
                >
                  {{ group.category }}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let skill of group.skills"
                    class="px-3 py-1.5 bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-tighter"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/[0.02] border border-white/5 p-10 space-y-12">
            <h3
              class="font-display text-sm text-white uppercase tracking-[0.4em] flex items-center gap-4 font-black"
            >
              <span class="w-1 h-6 bg-white/20"></span>
              Education
            </h3>
            <div class="space-y-10">
              <div *ngFor="let edu of education" class="space-y-4">
                <div
                  class="text-white font-sans font-black text-xl tracking-tight uppercase"
                >
                  {{ edu.title }}
                </div>
                <div class="text-white/40 text-sm font-sans font-light">
                  {{ edu.school }}
                </div>
                <div
                  class="flex justify-between items-center pt-4 border-t border-white/5"
                >
                  <span
                    class="text-sky-400/50 text-[10px] font-mono font-bold tracking-widest"
                    >{{ edu.date }}</span
                  >
                  <span
                    class="text-white text-[9px] font-mono font-bold uppercase tracking-widest bg-white/5 px-3 py-1"
                    >{{ edu.grade }}</span
                  >
                </div>
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
    `,
  ],
})
export class ExperienceComponent implements OnInit, AfterViewInit, OnDestroy {
  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  timeline: TimelineItem[] = [
    {
      period: "MAY 2024 - JULY 2024",
      role: "AI Developer Intern",
      company: "SmartED",
      description:
        "Engineered machine learning models for large-scale data analysis. Developed and deployed predictive modules, specializing in neural network optimization and data ingestion pipelines.",
      tech: [
        "Python",
        "TensorFlow",
        "Scikit-Learn",
        "Data Analysis",
        "AI Deployment",
      ],
    },
    {
      period: "JAN 2024 - APRIL 2024",
      role: "Cloud Engineering Training",
      company: "AWS Academy",
      description:
        "Recognized as a top performer (90% score). Architected secure, scalable, and fault-tolerant cloud environments. Implemented advanced infrastructure-as-code and serverless protocols.",
      tech: ["AWS", "Cloud Architecture", "EC2", "S3", "IAM", "VPC"],
    },
    {
      period: "DEC 2024 - FEB 2025",
      role: "Full Stack Development",
      company: "Internshala Trainings",
      description:
        "Developed comprehensive web applications with a focus on reactive frontend architectures and efficient backend synchronization using modern framework standards.",
      tech: ["React", "Node.js", "PostgreSQL", "Redux", "Bootstrap"],
    },
  ];

  skillGroups = [
    {
      category: "Frontend",
      skills: [
        "Angular 19",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
      ],
    },
    {
      category: "Backend & DB",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "REST API",
        "Firebase",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Linux", "Git", "GitHub Actions"],
    },
    {
      category: "Languages",
      skills: ["Python", "Java", "C++", "SQL"],
    },
  ];

  education = [
    {
      title: "B.Tech Computer Science Engineering",
      school: "SHUATS, Prayagraj",
      date: "2022 - 2026",
      grade: "7.5 CGPA",
    },
  ];
}
