import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterModule } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
} from "@angular/animations";
import { LiquidBgComponent } from "./shared/components/liquid-bg/liquid-bg.component";
import { AmbienceParticlesComponent } from "./shared/components/ambience-particles/ambience-particles.component";
import { BootOverlayComponent } from "./shared/components/boot-overlay/boot-overlay.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    LiquidBgComponent,
    AmbienceParticlesComponent,
    BootOverlayComponent,
  ],
  animations: [
    trigger("routeAnimations", [
      transition("* <=> *", [
        style({ position: "relative" }),
        query(
          ":enter, :leave",
          [
            style({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              opacity: 0,
              transform: "translateY(10px)",
            }),
          ],
          { optional: true },
        ),
        query(
          ":enter",
          [
            animate(
              "600ms cubic-bezier(0.4, 0, 0.2, 1)",
              style({ opacity: 1, transform: "translateY(0)" }),
            ),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
  template: `
    <div class="relative w-full min-h-screen">
      <!-- Signature Boot Sequence -->
      <app-boot-overlay></app-boot-overlay>

      <!-- Signature Background System -->
      <app-liquid-bg></app-liquid-bg>
      <app-ambience-particles></app-ambience-particles>

      <!-- Minimal Glass Navigation -->
      <nav
        class="fixed bottom-6 lg:bottom-auto lg:top-8 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 lg:px-10 lg:py-4 flex items-center gap-6 lg:gap-10 rounded-full border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] bg-[#000511]/40 backdrop-blur-3xl"
      >
        <a
          routerLink="/"
          routerLinkActive="text-gold-500 shadow-glow-gold bg-white/5 rounded-full px-4 py-1"
          [routerLinkActiveOptions]="{ exact: true }"
          class="text-[10px] md:text-xs font-medium tracking-[0.2em] hover:text-gold-500 transition-all uppercase px-4 py-1"
          >HOME</a
        >
        <a
          routerLink="/experience"
          routerLinkActive="text-gold-500 shadow-glow-gold bg-white/5 rounded-full px-4 py-1"
          class="text-[10px] md:text-xs font-medium tracking-[0.2em] hover:text-gold-500 transition-all uppercase px-4 py-1"
          >EXPERIENCE</a
        >
        <a
          routerLink="/projects"
          routerLinkActive="text-gold-500 shadow-glow-gold bg-white/5 rounded-full px-4 py-1"
          class="text-[10px] md:text-xs font-medium tracking-[0.2em] hover:text-gold-500 transition-all uppercase px-4 py-1"
          >PROJECTS</a
        >
        <a
          routerLink="/systems"
          routerLinkActive="text-gold-500 shadow-glow-gold bg-white/5 rounded-full px-4 py-1"
          class="text-[10px] md:text-xs font-medium tracking-[0.2em] hover:text-gold-500 transition-all uppercase px-4 py-1"
          >STACK</a
        >
      </nav>

      <!-- Page Content -->
      <main
        class="relative z-10 pt-10 pb-32 lg:pb-10 lg:pt-32 min-h-screen"
        [@routeAnimations]="prepareRoute(outlet)"
      >
        <router-outlet #outlet="outlet"></router-outlet>
      </main>

      <!-- Footer / Contact Signal -->
      <footer
        class="py-12 px-6 border-t border-white/5 bg-navy-950/20 backdrop-blur-sm lg:mb-0 mb-20"
      >
        <div
          class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div class="flex flex-col gap-2 items-center md:items-start">
            <h4
              class="text-sm font-display tracking-wider text-slate-50 uppercase text-center md:text-left"
            >
              Ashutosh Karn
            </h4>
            <p
              class="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none text-center md:text-left"
            >
              B.Tech Computer Science Engineering
            </p>
          </div>
          <div class="flex gap-8">
            <a
              href="mailto:karnashutosh6@gmail.com"
              class="text-[10px] font-mono hover:text-gold-500 transition-colors tracking-widest uppercase"
              >Email</a
            >
            <a
              href="https://linkedin.com/in/Karn1105"
              target="_blank"
              class="text-[10px] font-mono hover:text-gold-500 transition-colors tracking-widest uppercase"
              >LinkedIn</a
            >
            <a
              href="https://github.com/Karn0511"
              target="_blank"
              class="text-[10px] font-mono hover:text-gold-500 transition-colors tracking-widest uppercase"
              >GitHub</a
            >
          </div>
        </div>
      </footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
