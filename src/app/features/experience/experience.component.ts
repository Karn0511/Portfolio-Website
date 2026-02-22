import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperienceTimelineItemComponent } from "../../shared/components/experience-timeline-item/experience-timeline-item.component";
import {
  ExperienceData,
  type ExperienceItem,
} from "../../core/data/experience.data";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, ExperienceTimelineItemComponent],
  template: `
    <section class="relative w-full py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header Signal -->
        <div class="mb-24 space-y-6">
          <div
            class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold-500/20 bg-gold-500/5"
          >
            <div
              class="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"
            ></div>
            <span
              class="text-[10px] uppercase tracking-[0.3em] font-medium text-gold-500"
              >Professional Log</span
            >
          </div>

          <h1
            class="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-glow text-white tracking-tighter uppercase"
          >
            CAREER <span class="text-gold-500 italic">TIMELINE</span>
          </h1>

          <p class="text-slate-500 max-w-2xl font-light leading-relaxed">
            Architecting scalable systems and leading technical teams across
            global organizations. Focused on high-performance infrastructure and
            clean code at scale.
          </p>
        </div>

        <!-- Timeline Archive -->
        <div class="space-y-4">
          <app-experience-timeline-item
            *ngFor="let exp of experiences; let idx = index"
            [experience]="exp"
            [index]="idx"
          ></app-experience-timeline-item>
        </div>

        <!-- Capability Footer -->
        <div
          class="mt-32 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div class="space-y-2">
            <h4 class="text-white text-xs font-bold tracking-widest uppercase">
              Leadership
            </h4>
            <p class="text-slate-500 text-[11px] leading-relaxed">
              Mentoring engineering teams and driving architectural decisions
              for complex product roadmaps.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-white text-xs font-bold tracking-widest uppercase">
              Architecture
            </h4>
            <p class="text-slate-500 text-[11px] leading-relaxed">
              Designing cloud-native, distributed systems with a focus on
              reliability, security, and developer experience.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-white text-xs font-bold tracking-widest uppercase">
              Implementation
            </h4>
            <p class="text-slate-500 text-[11px] leading-relaxed">
              Writing clean, testable, and optimized code that balances speed to
              market with long-term maintainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = ExperienceData.getAll();
}
