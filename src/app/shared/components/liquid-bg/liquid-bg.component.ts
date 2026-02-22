import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { COLORS } from "../../../core/constants/design-tokens";

/**
 * GLOBAL LIQUID BACKGROUND
 *
 * Renders an animated blue liquid energy flow.
 * - GPU-accelerated Canvas
 * - Organic, seamless loop
 * - Parallax-reactive
 * - Stays behind all content
 */
@Component({
  selector: "app-liquid-bg",
  standalone: true,
  template: ` <canvas #liquidCanvas class="liquid-bg-canvas"></canvas> `,
  styles: [
    `
      .liquid-bg-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
      }
    `,
  ],
})
export class LiquidBgComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("liquidCanvas", { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId?: number;
  private time: number = 0;
  private readonly particles: LiquidParticle[] = [];
  private scrollY: number = 0;
  private scrollListener?: () => void;
  private resizeListener?: () => void;

  ngOnInit() {
    this.scrollListener = () => {
      this.scrollY = window.scrollY;
    };
    window.addEventListener("scroll", this.scrollListener, { passive: true });
  }

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext("2d", { willReadFrequently: false });

    if (!ctx) {
      console.warn("Canvas 2D context not available");
      return;
    }

    this.ctx = ctx;

    // Enable GPU acceleration
    try {
      const gl = canvas.getContext("webgl", {
        powerPreference: "high-performance",
      });
      if (gl) {
        this.ctx.canvas.style.imageRendering = "crisp-edges";
      }
    } catch (e) {
      // GPU not available, continue with software rendering
      console.debug("WebGL not available, using 2D canvas");
    }

    this.resize();
    this.resizeListener = () => this.resize();
    window.addEventListener("resize", this.resizeListener);

    this.initializeParticles();
    this.animate();
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initializeParticles() {
    const particleCount = 5;
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvasRef.nativeElement.width,
        y: Math.random() * this.canvasRef.nativeElement.height,
        size: 200 + Math.random() * 300,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.3,
        color: this.getGradientColor(i, particleCount),
      });
    }
  }

  private getGradientColor(index: number, total: number): CanvasGradient {
    const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 100);

    // Create blue-to-gold gradient variations
    const hues = [
      ["rgba(26, 42, 74, 0.15)", "rgba(26, 42, 74, 0)"], // Deep blue
      ["rgba(212, 175, 55, 0.08)", "rgba(212, 175, 55, 0)"], // Gold
      ["rgba(56, 182, 212, 0.08)", "rgba(56, 182, 212, 0)"], // Teal
    ];

    const hue = hues[index % hues.length];
    gradient.addColorStop(0, hue[0]);
    gradient.addColorStop(1, hue[1]);

    return gradient;
  }

  private readonly animate = () => {
    const canvas = this.canvasRef.nativeElement;

    // Clear with dark background (allows layering)
    this.ctx.fillStyle = COLORS.background.deep;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw subtle grid (optional hacker touch)
    this.drawGrid();

    // Update and draw particles
    this.particles.forEach((particle) => {
      // Perlin-like organic movement
      particle.x +=
        particle.speedX + Math.sin(this.time * 0.0005 + particle.x) * 0.1;
      particle.y +=
        particle.speedY + Math.cos(this.time * 0.0003 + particle.y) * 0.1;

      // Parallax effect based on scroll
      const parallaxOffset = this.scrollY * 0.02;

      // Wrap around edges
      if (particle.x > canvas.width + 200) particle.x = -200;
      if (particle.x < -200) particle.x = canvas.width + 200;
      if (particle.y > canvas.height + 200) particle.y = -200;
      if (particle.y < -200) particle.y = canvas.height + 200;

      // Draw particle glow
      const gradient = this.ctx.createRadialGradient(
        particle.x,
        particle.y + parallaxOffset,
        0,
        particle.x,
        particle.y + parallaxOffset,
        particle.size,
      );

      gradient.addColorStop(0, "rgba(212, 175, 55, 0.08)");
      gradient.addColorStop(0.5, "rgba(56, 182, 212, 0.04)");
      gradient.addColorStop(1, "rgba(212, 175, 55, 0)");

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(
        particle.x,
        particle.y + parallaxOffset,
        particle.size,
        0,
        Math.PI * 2,
      );
      this.ctx.fill();
    });

    this.time++;
    this.animationId = requestAnimationFrame(this.animate);
  };

  private drawGrid() {
    const canvas = this.canvasRef.nativeElement;
    const gridSize = 200;
    const opacity = 0.02;

    this.ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
    this.ctx.lineWidth = 0.5;

    // Vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, canvas.height);
      this.ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(canvas.width, y);
      this.ctx.stroke();
    }
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
    }
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
    }
  }
}

interface LiquidParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: CanvasGradient;
}
