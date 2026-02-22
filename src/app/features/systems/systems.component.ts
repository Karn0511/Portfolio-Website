import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionComponent } from "../../shared/components/section/section.component";
import { ContainerComponent } from "../../shared/components/container/container.component";
import { TechBadge3dComponent } from "../../shared/components/tech-badge-3d-premium/tech-badge-3d-premium.component";
import {
  TechStackData,
  type TechStackItem,
} from "../../core/data/tech-stack.data";

/**
 * TECH STACK COMPONENT
 * Displays professional 3D technology logo showcase
 *
 * Design:
 * - Premium 3D badge presentation
 * - Organized by category
 * - Smooth hover interactions
 * - Fully responsive grid
 */

@Component({
  selector: "app-systems",
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    ContainerComponent,
    TechBadge3dComponent,
  ],
  template: `
    <!-- Tech Stack Section -->
    <app-section [spacingVariant]="'lg'">
      <app-container [maxWidth]="'xl'">
        <div class="space-y-16">
          <!-- Section Header -->
          <div class="space-y-6">
            <div class="space-y-2">
              <span
                class="font-mono text-xs text-gold-primary uppercase tracking-widest"
              >
                Technical Arsenal
              </span>
              <h2
                class="text-5xl md:text-6xl font-bold text-text-primary leading-tight"
              >
                Technology Stack
              </h2>
            </div>
            <p class="text-lg text-text-secondary max-w-3xl leading-relaxed">
              A carefully curated set of modern tools and frameworks, selected
              for scalability, reliability, and performance. Each technology is
              chosen for a specific purpose in building enterprise-grade
              systems.
            </p>
          </div>

          <!-- Technologies by Category -->
          <div class="space-y-20">
            <div *ngFor="let category of categories" class="space-y-8">
              <!-- Category Title -->
              <div>
                <h3
                  class="text-xl font-semibold text-text-primary uppercase tracking-widest"
                >
                  {{ category }}
                </h3>
                <div class="h-px w-12 bg-gold-primary/40 mt-3"></div>
              </div>

              <!-- Tech Grid for Category -->
              <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                <app-tech-badge-3d
                  *ngFor="let tech of getTechByCategory(category)"
                  [tech]="tech"
                ></app-tech-badge-3d>
              </div>
            </div>
          </div>

          <!-- Summary Stats -->
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10"
          >
            <div class="space-y-2">
              <div class="text-3xl font-bold text-gold-primary">
                {{ technologies.length }}+
              </div>
              <p class="text-sm text-text-tertiary">Technologies Mastered</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-gold-primary">
                {{ categories.length }}
              </div>
              <p class="text-sm text-text-tertiary">Categories of Expertise</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-gold-primary">10+ yrs</div>
              <p class="text-sm text-text-tertiary">Combined Experience</p>
            </div>
          </div>
        </div>
      </app-container>
    </app-section>
  `,
  styles: [],
})
export class SystemsComponent {
  technologies: TechStackItem[] = TechStackData.TECHNOLOGIES;
  categories: string[] = TechStackData.getCategories();

  getTechByCategory(category: string): TechStackItem[] {
    return TechStackData.getByCategory(category);
  }
}
