import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";

/**
 * AMBIENT PARTICLE SYSTEM - ENHANCED
 *
 * A sophisticated force-field effect where particles respond to cursor proximity.
 * Inspired by antigravity.google but adapted for premium hacker aesthetic.
 *
 * Physics model:
 * - Idle drift (continuous Perlin-like noise)
 * - Cursor attraction (distance-based soft gravitational well)
 * - Orbital influence (weak orbital attractor around cursor)
 * - Spring return force (particles return to origin when cursor leaves)
 * - Scroll coupling (particles respond to scroll velocity)
 * - Wind forces (constant directional drift for organic feel)
 * - Damping (prevents oscillation chaos)
 *
 * Effect intent: "Data points reacting to a magnetic field"
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  mass: number;
  noisePhase: number;
  size: number;
  trail: Array<{ x: number; y: number }>;
  colorVariant: number; // 0-1 blend between gold and teal
}

@Component({
  selector: "app-ambience-particles",
  standalone: true,
  template: `
    <canvas
      #particleCanvas
      class="particle-canvas"
      [style.width.%]="100"
      [style.height.%]="100"
    ></canvas>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }

      .particle-canvas {
        position: absolute;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class AmbienceParticlesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild("particleCanvas", { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId?: number;
  private time: number = 0;

  // Configuration (tuned for premium feel)
  private readonly config = {
    particleCount: 50, // Increased from 40 for richer effect
    minSize: 0.5,
    maxSize: 2.5,
    minMass: 0.8,
    maxMass: 1.2,
    idleDriftSpeed: 0.3, // Slow, organic movement
    cursorAttractRange: 250, // Distance at which cursor affects particles
    cursorAttractStrength: 0.15, // Weak attraction (not snappy)
    cursorOrbitStrength: 0.08, // Even weaker orbital influence
    returnForceStrength: 0.05, // Spring force back to origin
    damping: 0.92, // 0.9 = high damping (smooth), 0.95 = less damping
    maxVelocity: 3, // Velocity ceiling
    scrollInfluence: 0.03, // Scroll velocity effect multiplier
    windStrength: 0.02, // Constant directional wind force
  };

  // Cursor tracking
  private cursorX: number = 0;
  private cursorY: number = 0;
  private cursorActive: boolean = false;
  private cursorFadeStart: number = 0;
  private readonly cursorFadeDuration: number = 800; // ms

  // Scroll tracking
  private lastScrollY: number = 0;
  private scrollVelocity: number = 0;

  ngOnInit() {
    // Track scroll for particle effects
    window.addEventListener("scroll", this.onScroll.bind(this), {
      passive: true,
    });
  }

  ngAfterViewInit() {
    const ctx = this.canvasRef.nativeElement.getContext("2d");

    if (!ctx) {
      console.warn("Canvas context not available");
      return;
    }

    this.ctx = ctx;
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));

    // Initialize particles
    this.initializeParticles();

    // Start animation loop
    this.animate();
  }

  private resize = () => {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  private initializeParticles() {
    this.particles = [];
    const canvas = this.canvasRef.nativeElement;

    for (let i = 0; i < this.config.particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        originX: x,
        originY: y,
        mass:
          this.config.minMass +
          Math.random() * (this.config.maxMass - this.config.minMass),
        noisePhase: Math.random() * Math.PI * 2,
        size:
          this.config.minSize +
          Math.random() * (this.config.maxSize - this.config.minSize),
        trail: [],
        colorVariant: Math.random(), // Blend between gold and teal
      });
    }
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;

    // Clear canvas with fade instead of erase
    this.ctx.fillStyle = "rgba(10, 15, 26, 0.02)"; // Very subtle trail fade
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update particles
    this.particles.forEach((particle) => {
      this.updateParticle(particle);
      this.renderParticle(particle);
    });

    this.time++;
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private updateParticle(p: Particle) {
    // Layer 0: Wind forces (constant directional drift)
    const windTime = this.time * 0.0003;
    const windX = Math.sin(windTime) * this.config.windStrength;
    const windY = Math.cos(windTime * 0.7) * this.config.windStrength * 0.5;
    let ax = windX;
    let ay = windY;

    // Layer 1: Idle drift (continuous Perlin-like noise)
    const noiseScale = 0.02;
    const idleDriftX =
      Math.sin(p.noisePhase + this.time * noiseScale) *
      this.config.idleDriftSpeed;
    const idleDriftY =
      Math.cos(p.noisePhase * 0.7 + this.time * noiseScale * 0.8) *
      this.config.idleDriftSpeed;

    ax += idleDriftX;
    ay += idleDriftY;

    // Layer 2: Scroll coupling (particles respond to page scroll)
    if (this.scrollVelocity !== 0) {
      ax += this.scrollVelocity * this.config.scrollInfluence;
    }

    // Layer 3: Cursor interaction (soft force field)
    if (this.cursorActive) {
      const dx = this.cursorX - p.x;
      const dy = this.cursorY - p.y;
      const dist = Math.hypot(dx, dy); // Use hypot for better precision

      // Attraction force (weak gravitational well)
      if (dist < this.config.cursorAttractRange && dist > 0) {
        // Smooth falloff: 1 at center, 0 at range edge
        const attractForce =
          this.config.cursorAttractStrength *
          (1 - dist / this.config.cursorAttractRange);

        // Apply attraction
        ax += ((dx / dist) * attractForce) / p.mass;
        ay += ((dy / dist) * attractForce) / p.mass;

        // Orbital influence (perpendicular to attract direction)
        // Creates a swirling motion around the cursor
        const perpX = -dy / dist;
        const perpY = dx / dist;

        const orbitForce =
          this.config.cursorOrbitStrength *
          (1 - dist / this.config.cursorAttractRange);
        ax += (perpX * orbitForce) / p.mass;
        ay += (perpY * orbitForce) / p.mass;
      }
    }

    // Layer 4: Return force (spring back to origin)
    const returnDx = p.originX - p.x;
    const returnDy = p.originY - p.y;
    ax += (returnDx * this.config.returnForceStrength) / p.mass;
    ay += (returnDy * this.config.returnForceStrength) / p.mass;

    // Apply acceleration to velocity
    p.vx += ax;
    p.vy += ay;

    // Layer 5: Damping (prevents chaos, keeps things smooth)
    p.vx *= this.config.damping;
    p.vy *= this.config.damping;

    // Velocity capping (use hypot for magnitude)
    const speed = Math.hypot(p.vx, p.vy);
    if (speed > this.config.maxVelocity) {
      const factor = this.config.maxVelocity / speed;
      p.vx *= factor;
      p.vy *= factor;
    }

    // Update position
    p.x += p.vx;
    p.y += p.vy;

    // Wrap around edges
    const canvas = this.canvasRef.nativeElement;
    const margin = 100;
    if (p.x < -margin) p.x = canvas.width + margin;
    if (p.x > canvas.width + margin) p.x = -margin;
    if (p.y < -margin) p.y = canvas.height + margin;
    if (p.y > canvas.height + margin) p.y = -margin;

    // Update noise phase for next frame
    p.noisePhase += 0.01;
  }

  private renderParticle(p: Particle) {
    // Calculate opacity based on distance from cursor
    let opacity = 0.3;
    if (this.cursorActive) {
      const dx = this.cursorX - p.x;
      const dy = this.cursorY - p.y;
      const dist = Math.hypot(dx, dy);

      // Particles glow slightly when near cursor
      if (dist < this.config.cursorAttractRange) {
        const proximity = 1 - dist / this.config.cursorAttractRange;
        opacity = 0.3 + proximity * 0.4; // 0.3 - 0.7
      }
    }

    // Base colors (gold and teal with color variation per particle)
    const goldR = 212,
      goldG = 175,
      goldB = 55;
    const tealR = 56,
      tealG = 182,
      tealB = 212;

    // Blend colors based on particle variant
    const blend = p.colorVariant;
    const centerR = Math.round(
      goldR * (1 - blend * 0.3) + tealR * (blend * 0.2),
    );
    const centerG = Math.round(
      goldG * (1 - blend * 0.3) + tealG * (blend * 0.2),
    );
    const centerB = Math.round(
      goldB * (1 - blend * 0.3) + tealB * (blend * 0.2),
    );

    // Render particle with glow
    const gradient = this.ctx.createRadialGradient(
      p.x,
      p.y,
      0,
      p.x,
      p.y,
      p.size * 3,
    );
    gradient.addColorStop(
      0,
      `rgba(${centerR}, ${centerG}, ${centerB}, ${opacity})`,
    );
    gradient.addColorStop(
      0.5,
      `rgba(${tealR}, ${tealG}, ${tealB}, ${opacity * 0.5})`,
    );
    gradient.addColorStop(1, `rgba(${centerR}, ${centerG}, ${centerB}, 0)`);

    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
    this.ctx.fill();

    // Optional: subtle core glow
    this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
    this.ctx.fill();
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
    this.cursorActive = true;
    this.cursorFadeStart = Date.now();
  }

  @HostListener("document:mouseenter")
  onMouseEnter() {
    this.cursorActive = true;
  }

  @HostListener("document:mouseleave")
  onMouseLeave() {
    this.cursorActive = false;
  }

  private onScroll = () => {
    const currentScrollY = window.scrollY;
    this.scrollVelocity = (currentScrollY - this.lastScrollY) * 0.1; // Smooth velocity
    this.lastScrollY = currentScrollY;
  };

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("scroll", this.onScroll.bind(this));
    window.removeEventListener("resize", this.resize.bind(this));
  }
}
