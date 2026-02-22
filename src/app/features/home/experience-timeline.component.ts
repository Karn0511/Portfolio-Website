import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  details: string[];
  type: "education" | "experience" | "achievement";
  icon: string;
}

/**
 * Experience Timeline Component
 * Education, Work, and Achievements displayed chronologically
 */

@Component({
  selector: "app-experience-timeline",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section data-section="experience" class="relative min-h-screen py-32">
      <!-- Background -->
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-t from-gold-primary/5 to-transparent"
      ></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-24">
          <div class="inline-block mb-8">
            <span
              class="text-gold-primary text-sm font-bold uppercase tracking-widest"
            >
              TIMELINE
            </span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white mb-6">
            Career Progression
          </h2>
          <p class="text-lg text-slate-300 max-w-2xl mx-auto">
            From education to autonomous full-stack engineering
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-primary/50 via-gold-primary/30 to-transparent"
          ></div>

          <!-- Timeline items -->
          <div class="space-y-12 md:space-y-16">
            <div
              *ngFor="let item of timeline; let i = index"
              [class.text-right]="i % 2 === 0"
              class="relative"
            >
              <div
                [class.md:ml-auto]="i % 2 === 0"
                [class.md:mr-auto]="i % 2 !== 0"
                class="md:w-5/12 w-full"
              >
                <!-- Card -->
                <div
                  class="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold-primary/50 transition-all duration-300"
                >
                  <!-- Timeline dot -->
                  <div
                    class="absolute -left-12 top-8 md:left-1/2 md:translate-x-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-navy-900 bg-gold-primary flex items-center justify-center text-navy-900 font-bold text-sm"
                  >
                    {{ item.icon }}
                  </div>

                  <!-- Content -->
                  <div [class.text-right]="i % 2 === 0">
                    <!-- Time and type -->
                    <div class="flex items-center gap-2 mb-3 justify-end">
                      <span
                        class="text-xs font-bold text-gold-primary uppercase tracking-widest"
                        >{{ item.year }}</span
                      >
                      <span
                        class="px-3 py-1 text-xs font-semibold rounded-full"
                        [ngClass]="{
                          'bg-blue-primary/20 text-blue-400':
                            item.type === 'education',
                          'bg-gold-primary/20 text-gold-light':
                            item.type === 'experience',
                          'bg-purple-500/20 text-purple-300':
                            item.type === 'achievement',
                        }"
                        >{{ item.type }}</span
                      >
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl md:text-2xl font-bold text-white mb-1">
                      {{ item.title }}
                    </h3>

                    <!-- Organization -->
                    <p class="text-sm text-gold-primary font-semibold mb-3">
                      {{ item.organization }}
                    </p>

                    <!-- Description -->
                    <p class="text-base text-slate-300 mb-4 leading-relaxed">
                      {{ item.description }}
                    </p>

                    <!-- Details -->
                    <ul class="space-y-2">
                      <li
                        *ngFor="let detail of item.details"
                        class="flex items-start gap-2 text-sm text-slate-400"
                        [class.flex-row-reverse]="i % 2 === 0"
                      >
                        <span class="text-gold-primary/60 font-bold mt-0.5"
                          >✓</span
                        >
                        <span>{{ detail }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceTimelineComponent implements OnInit {
  timeline: TimelineItem[] = [
    {
      year: "2022-2026",
      title: "B.Tech CSE",
      organization: "Shuats University of Agriculture, Technology & Sciences",
      description:
        "Computer Science Engineering - Rigorous curriculum in systems design, algorithms, and distributed computing.",
      details: [
        "CGPA: 7.5/10",
        "Major Subjects: Mathematics, Physics, Chemistry",
        "Focus: System Design & Backend Architecture",
      ],
      type: "education",
      icon: "🎓",
    },
    {
      year: "2023-2024",
      title: "Web Development Specialist",
      organization: "Internshala",
      description:
        "Comprehensive training in modern web technologies and full-stack development.",
      details: [
        "Advanced HTML, CSS, Bootstrap, PHP, JavaScript",
        "Hands-on projects in React and Angular",
        "Database design with MySQL and MongoDB",
      ],
      type: "education",
      icon: "💻",
    },
    {
      year: "2023-2024",
      title: "AI/ML Internship",
      organization: "SmartED",
      description:
        "Real-world experience with machine learning pipelines and AI model deployment.",
      details: [
        "Strengthened AI problem solving and model building skills",
        "Experience with AI frameworks and model deployment",
        "End-to-end ML pipeline implementation",
      ],
      type: "experience",
      icon: "🤖",
    },
    {
      year: "2024 (May-Aug)",
      title: "AWS Cloud Computing Certification",
      organization: "Internshala",
      description:
        "Intensive AWS training covering core cloud services and best practices.",
      details: [
        "AWS Academy Certified - Top Performer (90%+ score)",
        "Cloud computing architecture and deployment",
        "Hands-on lab sessions with real AWS services",
      ],
      type: "achievement",
      icon: "🏆",
    },
    {
      year: "2024-Present",
      title: "Full Stack Engineer",
      organization: "Independent Projects",
      description:
        "Building production-grade applications using modern technology stack.",
      details: [
        "Arogya Vault: Secure health records with Node.js & MongoDB",
        "SkyCast: Real-time weather app with React & WebGL",
        "Portfolio OS: Full-stack dashboard with Angular & Three.js",
      ],
      type: "experience",
      icon: "⚙️",
    },
  ];

  ngOnInit() {
    // Animation initialization
  }
}
