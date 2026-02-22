import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-matrix-rain",
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas
      #matrixCanvas
      class="absolute inset-0 w-full h-full opacity-20"
      [style.filter]="'hue-rotate(' + hueRotate + 'deg)'"
    ></canvas>
  `,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
      }
    `,
  ],
})
export class MatrixRainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("matrixCanvas", { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId?: number;
  private drops: number[] = [];
  private readonly fontSize = 14;
  hueRotate = 0; // For gold effect: 50, for green: 0, for blue: 200

  // Matrix characters (mix of code symbols and Japanese katakana)
  private readonly chars = String.raw`ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789<>{}[]()+-*/=|\~$#@&`;

  ngOnInit() {
    // Gold/amber matrix effect
    this.hueRotate = 50;
  }

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext("2d")!;

    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener("resize", () => this.resize());
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const columns = Math.floor(canvas.width / this.fontSize);
    this.drops = new Array(columns).fill(1);
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;

    // Fade effect
    this.ctx.fillStyle = "rgba(10, 15, 30, 0.05)";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw characters
    this.ctx.fillStyle = "#0f0"; // Green (will be hue-rotated to gold)
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(char, x, y);

      // Reset drop randomly
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}
