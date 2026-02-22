import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { HeroComponent } from "./hero.component";
import { TechStack3dComponent } from "./tech-stack-3d.component";
import { ProjectsSectionComponent } from "./projects-section.component";
import { ExperienceTimelineComponent } from "./experience-timeline.component";
import { filter } from "rxjs/operators";

/**
 * Home Page - CINEMATIC ARCHITECT REDESIGN
 * Complete page layout with all sections
 */

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TechStack3dComponent,
    ProjectsSectionComponent,
    ExperienceTimelineComponent,
  ],
  template: `
    <div class="relative w-full min-h-screen">
      <!-- Hero Section -->
      <app-hero></app-hero>

      <!-- Golden Divider -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent"
      ></div>

      <!-- Experience Timeline (Moved up for better flow) -->
      <div id="experience">
        <app-experience-timeline></app-experience-timeline>
      </div>

      <!-- Golden Divider -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent"
      ></div>

      <!-- Projects Section -->
      <div id="projects">
        <app-projects-section></app-projects-section>
      </div>

      <!-- Golden Divider -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent"
      ></div>

      <!-- Tech Stack Section -->
      <div id="systems">
        <app-tech-stack-3d></app-tech-stack-3d>
      </div>

      <!-- Footer -->
      <footer
        class="relative w-full py-12 px-6 md:px-12 border-t border-white/5 bg-navy-950/50 backdrop-blur-md"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-text-muted text-sm font-mono text-center md:text-left">
              © 2026 Ashutosh Karn. Crafted with precision & Angular 19.
            </div>
            <div class="flex items-center gap-6">
              <a
                href="https://github.com/Karn0511"
                class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
                >GitHub</a
              >
              <a
                href="https://linkedin.com/in/Karn1105"
                class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
                >LinkedIn</a
              >
              <a
                href="mailto:karnashutosh6@gmail.com"
                class="text-gold-primary hover:text-white transition-colors text-sm font-mono uppercase tracking-wider"
                >Email</a
              >
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // smooth scroll setup
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // Check initial route and scroll
    this.scrollToSection(this.router.url);

    // Subscribe to route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.scrollToSection(event.url);
      });
  }

  private scrollToSection(url: string): void {
    const section = url.split("/")[1]; // get 'projects' from '/projects'
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
        // Scroll to top if home
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
