import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * Glass Card Component
 * Glassmorphism design - clean, subtle, premium
 * Used for projects, experience, contact sections
 */

@Component({
  selector: "app-glass-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="group relative h-full p-6 md:p-8 transition-all duration-300 ease-out"
      [class.hover:translate-y-[-4px]]="interactive"
      [class.hover:shadow-glowMd]="interactive"
    >
      <!-- Glass background -->
      <div
        class="absolute inset-0 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300"
        [class.group-hover:bg-white/8]="interactive"
        [class.group-hover:border-white/20]="interactive"
      ></div>

      <!-- Glow overlay (appears on hover) -->
      <div
        *ngIf="interactive"
        class="absolute -inset-px rounded-lg bg-gradient-to-br from-amber-500/0 via-transparent to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none"
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <ng-content></ng-content>
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
export class GlassCardComponent {
  @Input() interactive = true;
}
