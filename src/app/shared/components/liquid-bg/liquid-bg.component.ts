import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  NgZone,
} from "@angular/core";
import * as THREE from "three";

@Component({
  selector: "app-liquid-bg",
  standalone: true,
  template: `<canvas
    #canvas
    class="w-full h-full pointer-events-none"
  ></canvas>`,
  styles: [
    `
      :host {
        display: block;
        position: fixed;
        inset: 0;
        z-index: -1;
      }
    `,
  ],
})
export class LiquidBgComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("canvas") canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.OrthographicCamera;
  private mesh!: THREE.Mesh;
  private material!: THREE.ShaderMaterial;
  private frameId?: number;

  private uniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_resolution: { value: new THREE.Vector2() },
    u_scroll: { value: 0 },
  };

  private readonly vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  private readonly fragmentShader = `
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform float u_scroll;
    varying vec2 vUv;

    // High-performance hash for noise
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      // Adjust p for aspect ratio
      vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
      
      float time = u_time * 0.15;
      
      // Liquid displacement logic (swirling)
      for(float i = 1.0; i < 6.0; i++) {
        p.x += 0.3 / i * sin(i * 1.5 * p.y + time + u_mouse.x * 2.0);
        p.y += 0.3 / i * cos(i * 1.5 * p.x + time + u_mouse.y * 2.0 + u_scroll * 5.0);
      }
      
      // Synthwave & Cyberpunk Fluid Palette
      vec3 darkBlue = vec3(0.04, 0.0, 0.18);   // Deep Space Blue
      vec3 purple   = vec3(0.35, 0.0, 0.55);   // Amazing Purple
      vec3 pink     = vec3(0.9, 0.1, 0.45);    // Vibrant Pink
      vec3 red      = vec3(0.9, 0.0, 0.1);     // Aggressive Red
      
      // Flow pattern drivers
      float flow1 = sin(p.x + p.y + time) * 0.5 + 0.5;
      float flow2 = cos(p.x * 1.5 - p.y * 0.5 + time * 1.2) * 0.5 + 0.5;
      float flow3 = sin(p.x * 0.5 + p.y * 1.2 - time * 0.8) * 0.5 + 0.5;
      
      // Fluid blending of the color array
      vec3 finalColor = mix(darkBlue, purple, flow1);
      finalColor = mix(finalColor, pink, flow2 * 0.7);
      finalColor = mix(finalColor, red, flow3 * 0.4);
      
      // Cinematic Noise Texture (Grain)
      float grain = hash(uv + time) * 0.04;
      finalColor += grain;

      // Soft Vignette for framing
      float vignette = smoothstep(2.0, 0.2, length(p * 0.3));
      finalColor *= vignette;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initThree();
    this.animate();

    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("scroll", this.onScroll.bind(this), {
      passive: true,
    });
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    this.onResize();
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const loop = (time: number) => {
        this.uniforms.u_time.value = time * 0.001;
        this.renderer.render(this.scene, this.camera);
        this.frameId = requestAnimationFrame(loop);
      };
      this.frameId = requestAnimationFrame(loop);
    });
  }

  private onMouseMove(event: MouseEvent) {
    this.uniforms.u_mouse.value.set(
      event.clientX / window.innerWidth,
      1 - event.clientY / window.innerHeight,
    );
  }

  private onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  }

  private onScroll() {
    this.uniforms.u_scroll.value = window.scrollY / window.innerHeight;
  }

  ngOnDestroy() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);

    this.geometry?.dispose();
    this.material?.dispose();
    this.renderer?.dispose();
  }

  private get geometry() {
    return this.mesh?.geometry as THREE.PlaneGeometry;
  }
}
