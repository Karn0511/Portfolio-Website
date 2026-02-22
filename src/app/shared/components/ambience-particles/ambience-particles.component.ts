import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  NgZone,
  HostListener,
} from "@angular/core";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  size: number;
  type: "dot" | "pill";
  rotation: number;
  hue: number;
  brightness: number;
}

@Component({
  selector: "app-ambience-particles",
  standalone: true,
  template: `<canvas
    #canvas
    class="fixed inset-0 pointer-events-none z-[1]"
  ></canvas>`,
  styles: [
    `
      :host {
        display: block;
        position: fixed;
        inset: 0;
        pointer-events: none;
      }
    `,
  ],
})
export class AmbienceParticlesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild("canvas") canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private frameId?: number;
  private mouse = { x: -1000, y: -1000 };
  private scrollY = 0;

  private readonly config = {
    count: 200,
    connectionDist: 100,
    forceFieldRadius: 180,
    cursorForce: 0.1,
    springStrength: 0.02,
    damping: 0.9,
    glowIntensity: 1.5,
    defaultBrightness: 0.3,
  };

  constructor(private ngZone: NgZone) {}

  @HostListener("window:scroll")
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext("2d")!;
    this.resize();
    this.initParticles();
    this.animate();

    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    this.ctx.scale(dpr, dpr);
    this.initParticles();
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.config.count; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const type = Math.random() > 0.7 ? "pill" : "dot";

      this.particles.push({
        x,
        y,
        vx: 0,
        vy: 0,
        originX: x,
        originY: y,
        size: type === "pill" ? 1.2 : Math.random() * 0.6 + 0.4,
        type,
        rotation: Math.random() * Math.PI,
        hue: 200, // Midnight blue base
        brightness: this.config.defaultBrightness,
      });
    }
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const loop = (time: number) => {
        this.update();
        this.draw();
        this.frameId = requestAnimationFrame(loop);
      };
      this.frameId = requestAnimationFrame(loop);
    });
  }

  private update() {
    this.particles.forEach((p) => {
      // 1. Parallax on Scroll
      const scrollSpeed = p.type === "pill" ? 0.06 : 0.03;
      const targetY = p.originY - this.scrollY * scrollSpeed;

      // 2. Cursor interaction
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.config.forceFieldRadius) {
        const force = 1 - dist / this.config.forceFieldRadius;
        // Brighten & Color Shift
        p.brightness =
          this.config.defaultBrightness + force * this.config.glowIntensity;
        p.hue = 200 - force * 20; // Towards Cyan

        // Repulsion/Attraction mix
        p.vx -= (dx / dist) * force * 0.5;
        p.vy -= (dy / dist) * force * 0.5;
      } else {
        p.brightness += (this.config.defaultBrightness - p.brightness) * 0.05;
        p.hue += (200 - p.hue) * 0.05;
      }

      // 3. Spring return
      p.vx += (p.originX - p.x) * this.config.springStrength;
      p.vy += (targetY - p.y) * this.config.springStrength;

      // 4. Physics
      p.vx *= this.config.damping;
      p.vy *= this.config.damping;

      p.x += p.vx;
      p.y += p.vy;
    });
  }

  private draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw connection lines
    this.ctx.lineWidth = 0.5;
    for (let i = 0; i < this.particles.length; i++) {
      // Optimization: only test some
      if (i % 2 !== 0) continue;
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < this.config.connectionDist * this.config.connectionDist) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / this.config.connectionDist) * 0.06;
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    this.particles.forEach((p) => {
      this.ctx.fillStyle = `hsla(${p.hue}, 70%, 80%, ${p.brightness})`;

      if (p.type === "pill") {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);

        this.ctx.beginPath();
        // Pill as 1x3 rounded rect
        const w = 1.2;
        const h = 3.5;
        this.ctx.roundRect(-w / 2, -h / 2, w, h, w / 2);
        this.ctx.fill();

        if (p.brightness > 0.8) {
          this.ctx.shadowBlur = 4;
          this.ctx.shadowColor = `hsla(${p.hue}, 70%, 80%, 0.3)`;
          this.ctx.fill();
        }
        this.ctx.restore();
      } else {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }

  private onMouseMove(e: MouseEvent) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  ngOnDestroy() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("resize", this.resize);
  }
}
