import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionComponent } from "../../shared/components/section/section.component";
import { ContainerComponent } from "../../shared/components/container/container.component";
import { ProjectCardPremiumComponent } from "../../shared/components/project-card-premium/project-card-premium.component";
import { ProjectsData, type ProjectItem } from "../../core/data/projects.data";

/**
 * PROJECTS COMPONENT
 * Professional project portfolio showcase
 *
 * Design:
 * - Clean cards with subtle hover elevation
 * - Clear descriptions and impacts
 * - Tech stack display
 * - Status indicators
 * - No exaggerated animations
 */

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [
    CommonModule,
    SectionComponent,
    ContainerComponent,
    ProjectCardPremiumComponent,
  ],
  template: `
    <!-- Projects Section -->
    <app-section [spacingVariant]="'lg'">
      <app-container [maxWidth]="'xl'">
        <div class="space-y-16">
          <!-- Section Header -->
          <div class="space-y-6">
            <div class="space-y-2">
              <span
                class="font-mono text-xs text-teal-primary uppercase tracking-widest"
              >
                Portfolio
              </span>
              <h2
                class="text-5xl md:text-6xl font-bold text-text-primary leading-tight"
              >
                Featured
                <span
                  class="bg-gradient-to-r from-gold-primary to-teal-primary bg-clip-text text-transparent"
                >
                  Projects
                </span>
              </h2>
            </div>
            <p
              class="text-lg text-text-secondary max-w-3xl leading-relaxed border-l-2 border-teal-primary/40 pl-6"
            >
              A selection of significant projects where I've led architecture
              decisions, solved complex technical challenges, and delivered
              measurable impact. Each project demonstrates expertise in
              full-stack development, cloud infrastructure, and system design.
            </p>
          </div>

          <!-- Projects Grid -->
          <div class="space-y-8">
            <app-project-card-premium
              *ngFor="let project of projects"
              [project]="project"
            ></app-project-card-premium>
          </div>
        </div>
      </app-container>
    </app-section>
  `,
})
export class ProjectsComponent {
  projects: ProjectItem[] = ProjectsData.getAll();
}
