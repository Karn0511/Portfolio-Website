import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { type ExperienceItem } from "../../../core/data/experience.data";

@Component({
  selector: "app-experience-timeline-item",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative group pb-16 last:pb-0">
      <!-- Architecture Line -->
      <div
        class="absolute left-[3px] top-6 bottom-0 w-px bg-white/10 last:hidden"
      ></div>

      <!-- Node -->
      <div
        class="absolute left-0 top-3 w-2.5 h-2.5 rounded-full border-2 border-gold-500/40 bg-navy-950 z-10 group-hover:bg-gold-500 group-hover:scale-125 transition-all duration-500"
      ></div>

      <!-- Content Module -->
      <div class="pl-12 space-y-6">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div class="space-y-1">
            <h3
              class="text-2xl font-display font-bold text-white group-hover:text-gold-500 transition-colors uppercase tracking-tight"
            >
              {{ experience.role }}
            </h3>
            <p
              class="text-gold-500 font-mono text-xs uppercase tracking-[0.2em]"
            >
              {{ experience.company }}
            </p>
          </div>
          <div
            class="text-[10px] font-mono text-slate-300 border border-white/20 px-4 py-1.5 rounded bg-white/5 uppercase tracking-widest whitespace-nowrap"
          >
            {{ experience.startMonth }} {{ experience.startYear }} —
            {{ experience.endMonth }} {{ experience.endYear || "PRESENT" }}
          </div>
        </div>

        <p
          class="text-slate-400 text-base leading-relaxed max-w-3xl font-light"
        >
          {{ experience.description }}
        </p>

        <!-- Intelligence Output (Achievements) -->
        <div class="grid grid-cols-1 gap-4">
          <div
            *ngFor="let achievement of experience.achievements; let i = index"
            class="flex gap-4 group/item"
          >
            <span
              class="text-gold-500/60 text-[10px] font-mono pt-1 tracking-tighter"
              >{{ (i + 1).toString().padStart(2, "0") }}</span
            >
            <p class="text-slate-300 text-sm leading-relaxed font-light">
              {{ achievement }}
            </p>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-3 pt-2">
          <span
            *ngFor="let tech of experience.technologies"
            class="text-[9px] font-mono text-slate-400 border border-white/10 px-3 py-1 rounded-sm bg-white/2 uppercase tracking-widest"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class ExperienceTimelineItemComponent {
  @Input() experience!: ExperienceItem;
  @Input() index: number = 0;
}
