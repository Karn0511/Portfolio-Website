import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero.component";
import { TechStack3dComponent } from "./tech-stack-3d.component";
import { ProjectsSectionComponent } from "./projects-section.component";
import { ExperienceTimelineComponent } from "./experience-timeline.component";

/**
 * Redesigned Home Component
 * Brings together all portfolio sections in a cohesive, cinematic experience
 */

@Component({
  selector: "app-home-redesigned",
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TechStack3dComponent,
    ProjectsSectionComponent,
    ExperienceTimelineComponent,
  ],
  template: `
    <div class="relative w-full">
      <!-- Hero Section -->
      <app-hero></app-hero>

      <!-- Tech Stack Showcase -->
      <app-tech-stack-3d></app-tech-stack-3d>

      <!-- Projects Section -->
      <app-projects-section></app-projects-section>

      <!-- Experience Timeline -->
      <app-experience-timeline></app-experience-timeline>

      <!-- Footer -->
      <footer
        class="relative z-20 w-full py-16 md:py-20 px-4 md:px-8 border-t border-white/10"
      >
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- About Footer -->
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Ashutosh Karn</h3>
              <p class="text-slate-400 leading-relaxed">
                Senior software engineer focused on building scalable systems,
                cloud infrastructure, and AI-powered applications. Passionate
                about clean code and thoughtful design.
              </p>
            </div>

            <!-- Quick Links -->
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Quick Links</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class="text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    View Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Stack
                  </a>
                </li>
              </ul>
            </div>

            <!-- Connect -->
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Connect</h3>
              <div class="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-gold-primary hover:border-gold-primary transition-all"
                  title="GitHub"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-gold-primary hover:border-gold-primary transition-all"
                  title="LinkedIn"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:contact@example.com"
                  class="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-gold-primary hover:border-gold-primary transition-all"
                  title="Email"
                >
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div
            class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p class="text-sm text-slate-500">
              © 2026 Ashutosh Karn. All rights reserved.
            </p>
            <p class="text-sm text-slate-500">Designed & Built with Care</p>
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class HomeRedesignedComponent {}
