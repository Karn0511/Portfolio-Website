import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { CustomCursorComponent } from "../../shared/components/custom-cursor/custom-cursor.component";

interface CareerItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  type: "education" | "experience" | "achievement";
  icon: string;
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, NavbarComponent, CustomCursorComponent],
  template: `
    <!-- Custom Cursor -->
    <app-custom-cursor></app-custom-cursor>

    <!-- Navigation -->
    <app-navbar></app-navbar>

    <!-- Background -->
    <div
      id="background-container"
      class="fixed inset-0 -z-30 bg-navy-900"
    ></div>

    <!-- Main Content -->
    <main class="relative pt-20 min-h-screen pb-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="py-20">
          <div
            class="inline-block mb-6 px-4 py-2 rounded-full border border-gold-primary/30 bg-gold-primary/5"
          >
            <span
              class="text-sm font-bold text-gold-primary uppercase tracking-widest"
              >Career Path</span
            >
          </div>
          <h1 class="text-6xl md:text-7xl font-black text-white mb-6">
            Experience
          </h1>
          <p class="text-xl text-slate-300 max-w-2xl">
            My professional journey from education through autonomous
            engineering
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-primary/50 via-gold-primary/30 to-transparent"
          ></div>

          <!-- Timeline items -->
          <div class="space-y-12 md:space-y-16">
            <div
              *ngFor="let item of careerItems; let i = index"
              class="relative md:w-1/2"
              [class.md:ml-auto]="i % 2 === 0"
            >
              <!-- Timeline dot -->
              <div
                class="absolute -left-10 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full border-4 border-navy-900 bg-gold-primary flex items-center justify-center text-navy-900 font-bold text-sm z-10"
              >
                {{ item.icon }}
              </div>

              <!-- Content Card -->
              <div
                class="ml-12 md:ml-0 p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-gold-primary/50 transition-all duration-300"
              >
                <!-- Header -->
                <div class="flex items-center justify-between mb-4">
                  <span
                    class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    [ngClass]="
                      item.type === 'education'
                        ? 'bg-blue-primary/20 text-blue-400'
                        : item.type === 'achievement'
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'bg-gold-primary/20 text-gold-light'
                    "
                  >
                    {{ item.type }}
                  </span>
                  <span class="text-sm font-bold text-gold-primary">{{
                    item.year
                  }}</span>
                </div>

                <!-- Title -->
                <h3 class="text-2xl md:text-3xl font-black text-white mb-2">
                  {{ item.title }}
                </h3>

                <!-- Organization -->
                <p class="text-sm text-slate-400 font-semibold mb-4">
                  {{ item.organization }}
                </p>

                <!-- Description -->
                <p class="text-slate-300 leading-relaxed mb-6">
                  {{ item.description }}
                </p>

                <!-- Highlights -->
                <ul class="space-y-2">
                  <li
                    *ngFor="let highlight of item.highlights"
                    class="flex items-center gap-2 text-slate-400"
                  >
                    <span class="w-1 h-1 rounded-full bg-gold-primary"></span>
                    {{ highlight }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [],
})
export class ExperienceComponent implements OnInit, OnDestroy {
  careerItems: CareerItem[] = [
    {
      year: "2022-2026",
      title: "B.Tech Computer Science",
      organization: "SHUATS University",
      description:
        "Rigorous curriculum in systems design, algorithms, and distributed computing with focus on backend architecture.",
      highlights: [
        "Strong academic foundation in core CS principles",
        "Hands-on projects in system design",
        "Database design and optimization",
      ],
      type: "education",
      icon: "🎓",
    },
    {
      year: "2023-2024",
      title: "Web Development Specialist",
      organization: "Internshala Certificate Program",
      description:
        "Comprehensive training in modern web technologies covering front-end and full-stack development.",
      highlights: [
        "Advanced HTML, CSS, JavaScript mastery",
        "React and Angular frameworks",
        "Database design with MySQL and MongoDB",
      ],
      type: "education",
      icon: "💻",
    },
    {
      year: "2023-2024",
      title: "AI/ML Internship",
      organization: "SmartED Technologies",
      description:
        "Real-world experience building and deploying machine learning pipelines in production environments.",
      highlights: [
        "ML model training and optimization",
        "End-to-end pipeline development",
        "Production deployment experience",
      ],
      type: "experience",
      icon: "🤖",
    },
    {
      year: "May-August 2024",
      title: "AWS Cloud Certification",
      organization: "Internshala Academy",
      description:
        "Intensive AWS training covering cloud architecture, deployment strategies, and best practices.",
      highlights: [
        "90% exam score - Top Performer",
        "Cloud infrastructure mastery",
        "Real AWS services hands-on lab experience",
      ],
      type: "achievement",
      icon: "🏆",
    },
    {
      year: "2024-Present",
      title: "Full Stack Engineer",
      organization: "Independent Projects",
      description:
        "Building production-grade applications using modern tech stacks with focus on scalability and performance.",
      highlights: [
        "Arogya Vault - Secure health records platform",
        "SkyCast Radar - Real-time weather visualization",
        "This portfolio - Interactive full-stack dashboard",
      ],
      type: "experience",
      icon: "⚙️",
    },
  ];

  ngOnInit() {}
  ngOnDestroy() {}
}
