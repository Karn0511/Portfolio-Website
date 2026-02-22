import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * Custom Interactive Cursor Component
 * Follows mouse, scales on hover, trails particles
 */
@Component({
  selector: "app-custom-cursor",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-wrapper">
      <!-- Main cursor dot -->
      <div
        #mainCursor
        class="cursor-main"
        [style.left.px]="cursorX"
        [style.top.px]="cursorY"
      ></div>

      <!-- Cursor ring (follows slower for lag effect) -->
      <div
        #ringCursor
        class="cursor-ring"
        [style.left.px]="ringX"
        [style.top.px]="ringY"
      ></div>

      <!-- Glow effect -->
      <div
        #glowCursor
        class="cursor-glow"
        [style.left.px]="glowX"
        [style.top.px]="glowY"
      ></div>
    </div>
  `,
  styles: [
    `
      .cursor-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
      }

      .cursor-main {
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #d4af37, #a89968);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        box-shadow:
          0 0 10px rgba(212, 175, 55, 0.6),
          inset 0 0 4px rgba(255, 255, 255, 0.4);
        transition: transform 0.1s ease-out;
        z-index: 10001;
      }

      .cursor-ring {
        position: fixed;
        width: 28px;
        height: 28px;
        border: 2px solid rgba(212, 175, 55, 0.4);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 10000;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .cursor-glow {
        position: fixed;
        width: 60px;
        height: 60px;
        background: radial-gradient(
          circle,
          rgba(212, 175, 55, 0.15),
          transparent
        );
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        filter: blur(10px);
        opacity: 0.6;
      }

      /* Hide default cursor */
      :global(body) {
        cursor: none !important;
      }

      :global(a),
      :global(button),
      :global([role="button"]) {
        cursor: none !important;
      }
    `,
  ],
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  cursorX = 0;
  cursorY = 0;
  ringX = 0;
  ringY = 0;
  glowX = 0;
  glowY = 0;

  private mouseX = 0;
  private mouseY = 0;
  private ringX_smooth = 0;
  private ringY_smooth = 0;
  private animationId: number | null = null;

  ngOnInit() {
    globalThis.addEventListener("mousemove", (e) => this.onMouseMove(e));
    globalThis.addEventListener("mouseenter", () => this.onMouseEnter());
    globalThis.addEventListener("mouseleave", () => this.onMouseLeave());

    // Smooth animation loop for ring cursor
    const animate = () => {
      this.ringX_smooth += (this.mouseX - this.ringX_smooth) * 0.2;
      this.ringY_smooth += (this.mouseY - this.ringY_smooth) * 0.2;

      this.ringX = this.ringX_smooth;
      this.ringY = this.ringY_smooth;
      this.glowX = this.mouseX;
      this.glowY = this.mouseY;

      this.animationId = requestAnimationFrame(animate);
    };

    this.animationId = requestAnimationFrame(animate);
  }

  private onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    // Scale cursor on interactive elements
    const target = e.target as HTMLElement;
    if (
      target?.tagName === "A" ||
      target?.tagName === "BUTTON" ||
      target?.getAttribute("role") === "button"
    ) {
      const mainEl = document.querySelector(".cursor-main") as HTMLElement;
      const ringEl = document.querySelector(".cursor-ring") as HTMLElement;
      if (mainEl) mainEl.style.transform = "translate(-50%, -50%) scale(1.5)";
      if (ringEl) ringEl.style.transform = "translate(-50%, -50%) scale(1.3)";
    }
  }

  private onMouseEnter() {
    const mainEl = document.querySelector(".cursor-main") as HTMLElement;
    if (mainEl) mainEl.style.opacity = "1";
  }

  private onMouseLeave() {
    const mainEl = document.querySelector(".cursor-main") as HTMLElement;
    if (mainEl) mainEl.style.opacity = "0";
  }

  ngOnDestroy() {
    globalThis.removeEventListener("mousemove", (e) => this.onMouseMove(e));
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
