import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero.component";
import { TechStack3dComponent } from "./tech-stack-3d.component";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";

/**
 * Home Page - CINEMATIC ARCHITECT REDESIGN
 * Complete page layout with all sections
 */

@Component({
  selector: "app-home-redesigned",
  standalone: true,
  imports: [CommonModule, HeroComponent, TechStack3dComponent, NavbarComponent],
  template: `
    <div
      class="relative w-full min-h-screen overflow-x-hidden"
      style="background: #0a0e1a;"
    >
      <!-- Navigation -->
      <app-navbar></app-navbar>

      <!-- Hero Section -->
      <app-hero></app-hero>

      <!-- Golden Divider -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent"
      ></div>

      <!-- Tech Stack Section -->
      <app-tech-stack-3d></app-tech-stack-3d>

      <!-- Core Architecture Section -->
      <section
        class="relative w-full py-24 md:py-32 px-6 md:px-12"
        style="background: linear-gradient(180deg, #0f1420 0%, #0a0e1a 100%);"
      >
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="mb-16 text-center">
            <div class="inline-flex items-center gap-2 mb-4">
              <div
                class="w-2 h-2 bg-teal-primary rounded-full animate-pulse"
              ></div>
              <span
                class="text-sm text-teal-primary font-mono uppercase tracking-wider"
              >
                > SYSTEM OVERVIEW
              </span>
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-white mb-6">
              CORE ARCHITECTURE
            </h2>
            <p class="text-lg text-text-secondary max-w-3xl mx-auto">
              Navigating the digital void with high-performance reactive
              interfaces and robust backend infrastructure. Scroll to explore
              the stack.
            </p>
          </div>

          <!-- Architecture Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- React Ecosystem Card -->
            <div
              class="group relative backdrop-blur-md border border-white/10 rounded-xl p-8 overflow-hidden hover:border-teal-primary/40 transition-all duration-500"
              style="background: linear-gradient(135deg, rgba(15, 20, 32, 0.8) 0%, rgba(26, 37, 64, 0.6) 100%);"
            >
              <!-- Icon -->
              <div class="mb-6">
                <div
                  class="w-16 h-16 rounded-lg flex items-center justify-center"
                  style="background: rgba(97, 218, 251, 0.1);"
                >
                  <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#61dafb"
                      stroke-width="1.5"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      stroke="#61dafb"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      stroke="#61dafb"
                      stroke-width="1.5"
                      fill="none"
                      transform="rotate(60 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4"
                      stroke="#61dafb"
                      stroke-width="1.5"
                      fill="none"
                      transform="rotate(120 12 12)"
                    />
                  </svg>
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-3">
                React Ecosystem
              </h3>
              <p class="text-text-secondary mb-6">
                Advanced state management with Redux Toolkit and server-side
                rendering using Next.js.
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs px-3 py-1 bg-teal-primary/10 text-teal-primary border border-teal-primary/30 rounded-full"
                >
                  Redux
                </span>
                <span
                  class="text-xs px-3 py-1 bg-teal-primary/10 text-teal-primary border border-teal-primary/30 rounded-full"
                >
                  Next.js
                </span>
                <span
                  class="text-xs px-3 py-1 bg-teal-primary/10 text-teal-primary border border-teal-primary/30 rounded-full"
                >
                  React Query
                </span>
              </div>

              <!-- Glow Effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style="background: radial-gradient(circle at center, rgba(97, 218, 251, 0.1) 0%, transparent 70%);"
              ></div>
            </div>

            <!-- Node Runtime Card -->
            <div
              class="group relative backdrop-blur-md border border-white/10 rounded-xl p-8 overflow-hidden hover:border-green-400/40 transition-all duration-500"
              style="background: linear-gradient(135deg, rgba(15, 20, 32, 0.8) 0%, rgba(26, 37, 64, 0.6) 100%);"
            >
              <!-- Icon -->
              <div class="mb-6">
                <div
                  class="w-16 h-16 rounded-lg flex items-center justify-center"
                  style="background: rgba(104, 160, 99, 0.1);"
                >
                  <svg class="w-10 h-10" viewBox="0 0 256 289" fill="none">
                    <path
                      d="M128 288.464l-63.37-36.63v-73.26l63.37 36.63 63.37-36.63v73.26L128 288.464z"
                      fill="#68A063"
                    />
                  </svg>
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-3">Node Runtime</h3>
              <p class="text-text-secondary mb-6">
                Scalable microservices architecture with NestJS and
                high-throughput event streams using WS.
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs px-3 py-1 bg-green-400/10 text-green-400 border border-green-400/30 rounded-full"
                >
                  Express
                </span>
                <span
                  class="text-xs px-3 py-1 bg-green-400/10 text-green-400 border border-green-400/30 rounded-full"
                >
                  Socket.io
                </span>
              </div>

              <!-- Glow Effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style="background: radial-gradient(circle at center, rgba(104, 160, 99, 0.1) 0%, transparent 70%);"
              ></div>
            </div>

            <!-- Cloud Native Card -->
            <div
              class="group relative backdrop-blur-md border border-white/10 rounded-xl p-8 overflow-hidden hover:border-gold-primary/40 transition-all duration-500"
              style="background: linear-gradient(135deg, rgba(15, 20, 32, 0.8) 0%, rgba(26, 37, 64, 0.6) 100%);"
            >
              <!-- Icon -->
              <div class="mb-6">
                <div
                  class="w-16 h-16 rounded-lg flex items-center justify-center"
                  style="background: rgba(244, 208, 63, 0.1);"
                >
                  <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#f4d03f"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#f4d03f"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#f4d03f"
                      stroke-width="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-3">Cloud Native</h3>
              <p class="text-text-secondary mb-6">
                AWS architected solutions via ECS, AWS Lambda for serverless
                compute, and serverless compute.
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  class="text-xs px-3 py-1 bg-gold-primary/10 text-gold-primary border border-gold-primary/30 rounded-full"
                >
                  AWS
                </span>
                <span
                  class="text-xs px-3 py-1 bg-gold-primary/10 text-gold-primary border border-gold-primary/30 rounded-full"
                >
                  Docker
                </span>
                <span
                  class="text-xs px-3 py-1 bg-gold-primary/10 text-gold-primary border border-gold-primary/30 rounded-full"
                >
                  Terraform
                </span>
              </div>

              <!-- Glow Effect -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style="background: radial-gradient(circle at center, rgba(244, 208, 63, 0.1) 0%, transparent 70%);"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Stats Section -->
      <section class="relative w-full py-16 md:py-24 px-6 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <!-- Stat 1 -->
            <div class="text-center">
              <div
                class="text-5xl md:text-6xl font-black text-gold-primary mb-2"
              >
                42
              </div>
              <div
                class="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-gold-primary to-transparent mb-3"
              ></div>
              <div
                class="text-sm text-text-tertiary font-mono uppercase tracking-wider"
              >
                Completed Projects
              </div>
            </div>

            <!-- Stat 2 -->
            <div class="text-center">
              <div
                class="text-5xl md:text-6xl font-black text-teal-primary mb-2"
              >
                08
              </div>
              <div
                class="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-teal-primary to-transparent mb-3"
              ></div>
              <div
                class="text-sm text-text-tertiary font-mono uppercase tracking-wider"
              >
                Years Experience
              </div>
            </div>

            <!-- Stat 3 -->
            <div class="text-center">
              <div
                class="text-5xl md:text-6xl font-black text-gold-primary mb-2"
              >
                2.5k
              </div>
              <div
                class="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-gold-primary to-transparent mb-3"
              ></div>
              <div
                class="text-sm text-text-tertiary font-mono uppercase tracking-wider"
              >
                GitHub Stars
              </div>
            </div>

            <!-- Stat 4 -->
            <div class="text-center">
              <div
                class="text-5xl md:text-6xl font-black text-teal-primary mb-2"
              >
                99
              </div>
              <div
                class="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-teal-primary to-transparent mb-3"
              ></div>
              <div
                class="text-sm text-text-tertiary font-mono uppercase tracking-wider"
              >
                Client Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer
        class="relative w-full py-12 px-6 md:px-12 border-t border-white/5"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between">
            <div class="text-text-muted text-sm font-mono">
              © 2026 Ashutosh Karn. Crafted with precision.
            </div>
            <div class="flex items-center gap-6">
              <a
                href="#"
                class="text-gold-primary hover:text-white transition-colors text-sm font-mono"
                >GitHub</a
              >
              <a
                href="#"
                class="text-gold-primary hover:text-white transition-colors text-sm font-mono"
                >LinkedIn</a
              >
              <a
                href="#"
                class="text-gold-primary hover:text-white transition-colors text-sm font-mono"
                >Twitter</a
              >
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [],
})
export class HomeRedesignedComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Smooth scroll behavior
    if (globalThis.window !== undefined) {
      globalThis.document.documentElement.style.scrollBehavior = "smooth";
    }
  }
}
