import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { GlassCardComponent } from "../../shared/components/glass-card/glass-card.component";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  type: "education" | "experience";
}

/**
 * Experience Timeline Component
 * Professional and educational background displayed in timeline format
 */

@Component({
  selector: "app-experience-timeline",
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, GlassCardComponent],
  template: `
    <section class="section-container">
      <div class="content-wrapper">
        <!-- Section header -->
        <app-section-header
          title="Experience & Education"
          subtitle="Background"
          description="Professional journey spanning web development, AI/ML, and cloud infrastructure"
        ></app-section-header>

        <!-- Timeline -->
        <div class="relative space-y-8">
          <!-- Timeline line (desktop only) -->
          <div
            class="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-primary via-gold-primary/50 to-transparent"
          ></div>

          <!-- Timeline items -->
          <div
            *ngFor="let item of timeline; let i = index"
            [style.animation-delay]="i * 100 + 'ms'"
            class="fade-in"
          >
            <!-- Alternate layout for desktop -->
            <div
              [class.md:ml-auto]="i % 2 === 0"
              [class.md:mr-auto]="i % 2 === 1"
              class="md:w-1/2"
            >
              <div class="relative">
                <!-- Timeline dot (desktop only) -->
                <div
                  class="hidden md:block absolute right-[-41px] top-6 w-4 h-4 bg-gold-primary rounded-full border-4 border-navy-900 shadow-glow-md"
                  [class.left-[-41px]]="i % 2 === 0"
                  [class.right-auto]="i % 2 === 0"
                ></div>

                <!-- Content card -->
                <app-glass-card [interactive]="false" class="md:px-8">
                  <div class="space-y-4">
                    <!-- Header -->
                    <div class="space-y-2">
                      <div class="flex items-start justify-between gap-4">
                        <div>
                          <h3 class="text-lg md:text-xl font-bold text-white">
                            {{ item.title }}
                          </h3>
                          <p class="text-gold-primary/80 font-semibold text-sm">
                            {{ item.organization }}
                          </p>
                        </div>
                        <span
                          class="text-xs font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap"
                          [class.text-blue-500]="item.type === 'education'"
                          [class.text-gold-primary]="item.type === 'experience'"
                        >
                          {{ item.type }}
                        </span>
                      </div>
                      <p class="text-sm text-slate-400">{{ item.period }}</p>
                    </div>

                    <!-- Description -->
                    <p class="text-base text-slate-300 leading-relaxed">
                      {{ item.description }}
                    </p>

                    <!-- Skills -->
                    <div class="flex flex-wrap gap-2 pt-2">
                      <span
                        *ngFor="let skill of item.skills"
                        class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-slate-400 hover:border-gold-primary/30 transition-colors"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </app-glass-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceTimelineComponent implements OnInit {
  timeline: TimelineItem[] = [];

  ngOnInit(): void {
    this.initializeTimeline();
  }

  private initializeTimeline(): void {
    this.timeline = [
      {
        title: "Bachelor of Technology (In-Progress)",
        organization:
          "Sam Higginbottom University of Agriculture, Science and Technology (SHUATS)",
        period: "2022 - 2026",
        description:
          "Computer Science Engineering with focus on full-stack development and emerging technologies. Currently in 4th year with CGPA 7.5. Active involvement in technical projects and continuous learning.",
        skills: [
          "Computer Science",
          "Data Structures",
          "Database Design",
          "Software Engineering",
          "Web Technologies",
        ],
        type: "education",
      },
      {
        title: "Web Development Training",
        organization: "Internshala",
        period: "2023 - 2024",
        description:
          "Comprehensive training in modern web development including frontend (HTML, CSS, JavaScript, React) and backend (Node.js, PHP). Built production-ready applications with focus on best practices and performance.",
        skills: [
          "React",
          "JavaScript",
          "CSS3",
          "HTML5",
          "Node.js",
          "PHP",
          "REST APIs",
        ],
        type: "experience",
      },
      {
        title: "AI/ML Internship",
        organization: "SmartED",
        period: "2023 - 2024",
        description:
          "Worked on machine learning model development, data analysis, and model deployment. Implemented data preprocessing pipelines, trained classification models, and deployed solutions in production environments.",
        skills: [
          "Python",
          "TensorFlow",
          "Data Analysis",
          "Model Deployment",
          "scikit-learn",
          "Pandas",
        ],
        type: "experience",
      },
      {
        title: "AWS Cloud Computing Certification",
        organization: "Internshala (Top Performer - 90%)",
        period: "2024",
        description:
          "Advanced AWS training covering EC2, S3, Lambda, RDS, and deployment best practices. Achieved top performer status with 90% score. Built and deployed scalable cloud applications.",
        skills: [
          "AWS EC2",
          "AWS S3",
          "Lambda",
          "RDS",
          "CloudFormation",
          "Cloud Architecture",
          "DevOps",
        ],
        type: "experience",
      },
      {
        title: "Full Stack Software Engineer",
        organization: "Independent Projects",
        period: "2024 - Present",
        description:
          "Building production-grade applications with Angular, React, Node.js, and cloud technologies. Focus on architecture, performance optimization, and best practices. Leading multiple projects from concept to deployment.",
        skills: [
          "Angular",
          "React",
          "TypeScript",
          "Node.js",
          "Docker",
          "Kubernetes",
          "AWS",
          "Azure",
          "MongoDB",
          "PostgreSQL",
        ],
        type: "experience",
      },
    ];
  }
}
