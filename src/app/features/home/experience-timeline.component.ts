import { Component } from "@angular/core";
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
                    class="absolute -left-12 top-8 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-navy-900 bg-gold-primary flex items-center justify-center text-navy-900 font-bold text-sm"
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
export class ExperienceTimelineComponent {
  timeline: TimelineItem[] = [
    {
      year: "Dec 2024 - Feb 2025",
      title: "Web Development",
      organization: "Internshala Trainings (Remote)",
      description:
        "Completed an 8-week intensive training in full-stack web development.",
      details: [
        "Built responsive web apps with strong front-end & back-end integration",
        "Stack: HTML, CSS, Bootstrap, PHP, JavaScript, React",
        "AI web integration",
      ],
      type: "experience",
      icon: "💻",
    },
    {
      year: "May 2024 - July 2024",
      title: "Artificial Intelligence Internship",
      organization: "SmartED (Collaborators: Microsoft, Roadpil)",
      description:
        "Worked on real-world AI projects involving ML, data analysis, and model deployment.",
      details: [
        "Strengthened AI problem solving and model building skills",
        "Hands-on experience with ML pipelines",
        "Data analysis and model deployment",
      ],
      type: "experience",
      icon: "🤖",
    },
    {
      year: "April 2024 - July 2024",
      title: "Cloud Computing with AWS",
      organization: "Internshala Trainings (Remote)",
      description:
        "Completed AWS Cloud Computing course with 90% score; recognized as top performer.",
      details: [
        "Designed secure, scalable, and cost-effective cloud solutions",
        "Gained expertise in core AWS services",
        "90% Score Achievement",
      ],
      type: "achievement",
      icon: "☁️",
    },
    {
      year: "2022 - 2026",
      title: "B.Tech Computer Science Engineering",
      organization: "SHUATS (Prayagraj, Uttar Pradesh)",
      description: "Undergraduate degree focusing on computer science fundamentals.",
      details: [
        "CGPA: 7.5",
        "Current Year: 4th Year",
        "Expected Graduation: 2026",
      ],
      type: "education",
      icon: "🎓",
    },
    {
      year: "2020 - 2022",
      title: "Higher Secondary Certificate",
      organization: "Sunshine Preparatory High School (Muzaffarpur, Bihar)",
      description: "CBSE Board secondary education.",
      details: [
        "Percentage: 78.4%",
        "Major Subjects: Mathematics, Physics, Chemistry",
      ],
      type: "education",
      icon: "🏫",
    },
  ];
}
