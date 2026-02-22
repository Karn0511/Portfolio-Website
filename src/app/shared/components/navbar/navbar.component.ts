import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-navy-900/80 backdrop-blur-lg"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a
            routerLink="/"
            class="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div
              class="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-primary to-gold-light flex items-center justify-center"
            >
              <span class="text-black font-black text-lg">AK</span>
            </div>
            <span class="hidden sm:block text-lg font-bold text-white"
              >Ashutosh</span
            >
          </a>

          <!-- Nav Links -->
          <div class="hidden md:flex items-center gap-1">
            <a
              routerLink="/"
              routerLinkActive="bg-white/10"
              [routerLinkActiveOptions]="{ exact: true }"
              class="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-primary hover:bg-white/5 transition-all duration-300"
            >
              Home
            </a>
            <a
              routerLink="/projects"
              routerLinkActive="bg-white/10"
              class="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-primary hover:bg-white/5 transition-all duration-300"
            >
              Projects
            </a>
            <a
              routerLink="/systems"
              routerLinkActive="bg-white/10"
              class="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-primary hover:bg-white/5 transition-all duration-300"
            >
              Systems
            </a>
            <a
              routerLink="/experience"
              routerLinkActive="bg-white/10"
              class="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-primary hover:bg-white/5 transition-all duration-300"
            >
              Career
            </a>
          </div>

          <!-- CTA Button -->
          <div class="flex items-center gap-4">
            <a
              href="https://github.com/Karn0511"
              target="_blank"
              rel="noopener noreferrer"
              class="hidden sm:flex w-10 h-10 rounded-lg border border-white/20 items-center justify-center text-white/60 hover:text-gold-primary hover:border-gold-primary/50 transition-all duration-300"
            >
              <span class="text-lg">⚡</span>
            </a>
            <a
              href="mailto:karnashutosh6@gmail.com"
              class="px-4 md:px-6 py-2 rounded-lg bg-gradient-to-r from-gold-primary to-gold-light text-black font-semibold text-sm hover:shadow-lg hover:shadow-gold-primary/30 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  ngOnInit() {}
}
