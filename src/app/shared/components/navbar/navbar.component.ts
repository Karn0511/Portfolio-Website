import { Component, OnInit, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.nav-scrolled]="isScrolled"
      [class.backdrop-blur-xl]="isScrolled"
      [style.background]="
        isScrolled
          ? 'linear-gradient(135deg, rgba(10, 14, 26, 0.95) 0%, rgba(15, 20, 32, 0.9) 100%)'
          : 'transparent'
      "
      [style.border-bottom]="
        isScrolled ? '1px solid rgba(244, 208, 63, 0.1)' : 'none'
      "
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex items-center justify-between h-20">
          <!-- Logo / Brand -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div
              class="text-gold-primary font-mono text-sm font-bold tracking-widest uppercase hover:text-gold-secondary transition-colors"
            >
              CINEMATIC ARCHITECT (VARIANT 2)
            </div>
          </a>

          <!-- Center Nav Links -->
          <div class="hidden md:flex items-center gap-8">
            <a
              href="#about"
              class="relative text-sm font-mono text-text-secondary hover:text-gold-primary transition-colors uppercase tracking-wider group"
            >
              <span>ABOUT</span>
              <div
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"
              ></div>
            </a>
            <a
              href="#projects"
              class="relative text-sm font-mono text-text-secondary hover:text-gold-primary transition-colors uppercase tracking-wider group"
            >
              <span>PROJECTS</span>
              <div
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"
              ></div>
            </a>
            <a
              href="#blog"
              class="relative text-sm font-mono text-text-secondary hover:text-gold-primary transition-colors uppercase tracking-wider group"
            >
              <span>BLOG</span>
              <div
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"
              ></div>
            </a>
            <a
              href="#contact"
              class="relative text-sm font-mono text-text-secondary hover:text-gold-primary transition-colors uppercase tracking-wider group"
            >
              <span>CONTACT</span>
              <div
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"
              ></div>
            </a>
          </div>

          <!-- Right: CTA -->
          <div class="flex items-center gap-4">
            <button
              class="px-6 py-2.5 border border-gold-primary text-gold-primary font-mono text-xs uppercase tracking-wider hover:bg-gold-primary/10 transition-all duration-300"
            >
              RESUME
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .nav-scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;

  ngOnInit(): void {
    if (typeof globalThis.window !== "undefined") {
      this.checkScroll();
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    if (typeof globalThis.window !== "undefined") {
      this.isScrolled = globalThis.window.pageYOffset > 50;
    }
  }
}
