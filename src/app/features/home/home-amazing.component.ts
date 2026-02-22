import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroParallaxComponent } from "../../shared/components/hero-parallax/hero-parallax.component";
import { TechStackRealComponent } from "../../shared/components/tech-stack-real/tech-stack-real.component";
import { ProjectsFeaturedComponent } from "../../shared/components/projects-featured/projects-featured.component";
import { ExperienceTimelineComponent } from "./experience-timeline.component";
import { CustomCursorComponent } from "../../shared/components/custom-cursor/custom-cursor.component";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { LiquidBackgroundService } from "../../core/services/liquid-background.service";
import { ScrollService } from "../../core/services/scroll.service";

/**
 * Professional Home Page
 * Unified design system with smooth animations and proper navigation
 */
@Component({
  selector: "app-home-amazing",
  standalone: true,
  imports: [
    CommonModule,
    CustomCursorComponent,
    NavbarComponent,
    HeroParallaxComponent,
    TechStackRealComponent,
    ProjectsFeaturedComponent,
    ExperienceTimelineComponent,
  ],
  template: `
    <!-- Custom Cursor -->
    <app-custom-cursor></app-custom-cursor>

    <!-- Navigation -->
    <app-navbar></app-navbar>

    <!-- Background container for liquid effect -->
    <div id="background-container" class="fixed inset-0 -z-30 bg-navy-900">
      <!-- This will be populated by liquid background service -->
    </div>

    <!-- Main content with top padding for navbar -->
    <main class="relative pt-20">
      <!-- Hero Section with Parallax -->
      <app-hero-parallax></app-hero-parallax>

      <!-- Tech Stack with Real Logos -->
      <app-tech-stack-real></app-tech-stack-real>

      <!-- Featured Projects -->
      <app-projects-featured></app-projects-featured>

      <!-- Experience Timeline -->
      <app-experience-timeline></app-experience-timeline>

      <!-- Footer -->
      <footer
        class="relative z-20 border-t border-white/10 bg-navy-950/50 backdrop-blur-sm"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <!-- Footer Grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <!-- About -->
            <div>
              <h3 class="text-lg font-bold text-white mb-4">About</h3>
              <p class="text-sm text-slate-400 leading-relaxed">
                Full-stack architect designing scalable systems and building
                high-performance applications on modern tech stacks.
              </p>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-bold text-white mb-4">Links</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#hero"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#tech-stack"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <!-- Social -->
            <div>
              <h3 class="text-lg font-bold text-white mb-4">Connect</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="https://github.com/Karn0511"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/Karn1105"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:karnashutosh6@gmail.com"
                    class="text-sm text-slate-400 hover:text-gold-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <!-- Contact CTA -->
            <div>
              <h3 class="text-lg font-bold text-white mb-4">Get In Touch</h3>
              <a
                href="mailto:karnashutosh6@gmail.com"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-primary/20 border border-gold-primary/50 text-gold-primary hover:bg-gold-primary/30 transition-all duration-300 font-semibold"
              >
                Let's Talk
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- Bottom bar -->
          <div
            class="border-t border-white/10 pt-8 flex items-center justify-between"
          >
            <div class="text-sm text-slate-500">
              © 2026 Ashutosh Karn. All rights reserved.
            </div>
            <div class="text-sm text-slate-500">
              Engineered with precision. Deployed to production.
            </div>
          </div>
        </div>
      </footer>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class HomeAmazingComponent implements OnInit, OnDestroy {
  constructor(
    private liquidBackground: LiquidBackgroundService,
    private scrollService: ScrollService,
  ) {}

  ngOnInit() {
    // Initialize liquid background
    const bgContainer = document.getElementById("background-container");
    if (bgContainer) {
      this.liquidBackground.initialize(bgContainer);
    }

    // Initialize smooth scroll
    this.scrollService.initialize();
  }

  ngOnDestroy() {
    this.liquidBackground.destroy();
    this.scrollService.destroy();
  }
}
