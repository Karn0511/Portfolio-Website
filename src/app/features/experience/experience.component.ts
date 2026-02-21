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
        class="mb-12 md:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end relative z-20 reveal-stagger gap-8"
      >
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-white/20"></span>
            <span
              class="font-mono text-[9px] text-white/30 tracking-[0.4em] uppercase"
              >Archive // The_Vector</span
            >
          </div>
          <h2
            class="text-[clamp(3.5rem,10vw,8rem)] font-display font-black tracking-tighter text-white leading-[0.85] uppercase"
          >
            Mission<br /><span class="text-white/20">Log</span>
          </h2>
        </div>

        <div class="flex gap-6 pb-4 lg:pb-8 border-b border-white/5">
          <a
            href="mailto:karnashutosh6@gmail.com"
            class="sh-button-outline w-14 h-14 rounded-2xl flex items-center justify-center interactive shadow-xl"
          >
            <span class="material-symbols-outlined text-white/40 text-xl"
              >mail</span
            >
          </a>
          <button
            class="sh-button-primary px-8 md:px-12 h-14 text-[10px] font-black tracking-[0.2em] uppercase interactive shadow-xl"
          >
            EXPORT_FULL_CV
          </button>
        </div>
      </header>

      <div
        class="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 relative z-20 pb-32"
      >
        <!-- Main Timeline -->
        <div class="xl:col-span-8 space-y-20 md:space-y-32">
          <div
            *ngFor="let item of timeline"
            class="group relative pl-10 md:pl-20 border-l-2 border-white/5 interactive"
          >
            <div
              class="absolute -left-[9px] top-0 w-4 h-4 bg-white scale-0 group-hover:scale-100 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            ></div>

            <div class="mb-10 md:mb-12">
              <span
                class="font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase mb-6 block font-black"
                >{{ item.period }}</span
              >
              <h3
                class="text-4xl md:text-7xl font-display font-black text-white mb-4 tracking-tighter group-hover:text-white/60 transition-colors leading-[0.9]"
              >
                {{ item.role }}
              </h3>
              <div
                class="text-white/40 font-mono text-[11px] md:text-[12px] tracking-[0.4em] uppercase font-black"
              >
                {{ item.company }}
              </div>
            </div>

            <p
              class="text-slate-400 text-xl md:text-2xl font-sans font-light leading-relaxed mb-12 max-w-3xl opacity-80 group-hover:opacity-100 transition-opacity"
            >
              {{ item.description }}
            </p>

            <div class="flex flex-wrap gap-4">
              <span
                *ngFor="let t of item.tech"
                class="px-6 py-2.5 glass-panel rounded-xl text-[10px] font-black text-white/30 group-hover:border-white/20 group-hover:text-white/80 transition-all uppercase tracking-widest"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>

        <!-- Sidebar (Stats & Info) -->
        <div class="xl:col-span-4 space-y-12 md:space-y-16">
          <div class="glass-card p-10 md:p-14 space-y-12 md:space-y-16">
            <h3
              class="font-display text-lg md:text-xl text-white uppercase tracking-[0.4em] flex items-center gap-6 font-black"
            >
              <span class="w-1.5 h-8 bg-white"></span>
              Proficiency
            </h3>
            <div class="space-y-10 md:space-y-12">
              <div *ngFor="let skill of skills" class="space-y-6 group">
                <div class="flex justify-between items-end">
                  <span
                    class="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors font-black"
                    >{{ skill.name }}</span
                  >
                  <span class="text-[10px] font-mono text-white font-black"
                    >{{ skill.level }}%</span
                  >
                </div>
                <div class="h-[3px] bg-white/5 overflow-hidden rounded-full">
                  <div
                    class="h-full bg-white transition-all duration-1000 group-hover:bg-sky-400 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    [style.width.%]="skill.level"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="glass-panel p-10 md:p-14 space-y-12 md:space-y-16 rounded-[3rem]"
          >
            <h3
              class="font-display text-lg md:text-xl text-white uppercase tracking-[0.4em] flex items-center gap-6 font-black"
            >
              <span class="w-1.5 h-8 bg-white/20"></span>
              Education
            </h3>
            <div class="space-y-12 md:space-y-16">
              <div *ngFor="let edu of education" class="space-y-4 group">
                <div
                  class="text-white font-sans font-black text-xl md:text-2xl tracking-tight group-hover:text-white/70 transition-colors"
                >
                  {{ edu.title }}
                </div>
                <div class="text-white/40 text-base font-sans font-light">
                  {{ edu.school }}
                </div>
                <div
                  class="flex justify-between items-center pt-4 border-t border-white/5"
                >
                  <span
                    class="text-white/20 text-[10px] font-mono font-black tracking-widest"
                    >{{ edu.date }}</span
                  >
                  <span
                    class="text-white text-[10px] font-mono font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-lg"
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
    const timelineItems = document.querySelectorAll(".group.relative.pl-8");
    timelineItems.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
        x: -20,
        opacity: 0,
        duration: MOTION.DURATION_DEFAULT,
        ease: MOTION.EASE_MAIN,
      });
    });

    const skillBars = document.querySelectorAll(".h-full.bg-white");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("style")?.match(/width:\s*([\d.]+)%/)?.[1];
      if (width) {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            scrollTrigger: {
              trigger: bar,
              start: "top bottom-=20",
              toggleActions: "play none none reverse",
            },
            width: `${width}%`,
            duration: MOTION.DURATION_SLOW,
            ease: MOTION.EASE_MAIN,
          },
        );
      }
    });
  }

  timeline: TimelineItem[] = [
    {
      period: "DEC 2024 - FEB 2025",
      role: "Full Stack Architecture",
      company: "Internshala Trainings",
      description:
        "Developed scalable React-driven modules with robust state synchronization. Specialized in high-performance frontend workflows and system optimization.",
      tech: ["React", "Node.js", "PostgreSQL", "Redux", "Architecture"],
    },
    {
      period: "MAY 2024 - JULY 2024",
      role: "Machine Learning Logic",
      company: "SmartED (Collab)",
      description:
        "Integrated neural networks into data production cycles. Automated large-scale diagnostic workflows for enterprise-grade cognitive layers.",
      tech: ["Python", "TensorFlow", "Scikit-Learn", "Azure Data Lake"],
    },
    {
      period: "APRIL 2024 - JULY 2024",
      role: "Cloud Engineering",
      company: "AWS Cert. Track",
      description:
        "Architected multiple high-availability cloud environments. Implemented secure, fault-tolerant infrastructure protocols with 90% optimization rate.",
      tech: ["AWS", "EC2", "S3", "Lambda", "Terraform"],
    },
  ];

  skills: Skill[] = [
    { name: "Angular 19 / Reactive Nodes", level: 92, category: "Frontend" },
    { name: "System Design / Microservices", level: 90, category: "Backend" },
    { name: "AWS / Cloud Architecture", level: 88, category: "Cloud" },
    { name: "Neural Logic / AI Integration", level: 82, category: "AI" },
  ];

  education = [
    {
      title: "B.Tech CSE",
      school: "SHUATS, Prayagraj",
      date: "2022 - 2026",
      grade: "7.5 CGPA",
    },
    {
      title: "Higher Secondary",
      school: "Sunshine Prep",
      date: "2020 - 2022",
      grade: "78.4 %",
    },
  ];
}
