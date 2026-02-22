import { Injectable, NgZone } from "@angular/core";

/**
 * Liquid Background Canvas Service
 * Manages Three.js WebGL canvas with morphing liquid effect
 * Non-blocking, runs at 60fps with gentle parallax
 */

@Injectable({
  providedIn: "root",
})
export class LiquidBackgroundService {
  private canvas: HTMLCanvasElement | null = null;
  private renderer: any;
  private scene: any;
  private camera: any;
  private mesh: any;
  private animationId: number | null = null;
  private time = 0;
  private scrollY = 0;
  private mouseX = 0;
  private mouseY = 0;
  private isInitialized = false;

  // Shader uniforms
  private uniforms: any;

  constructor(private readonly ngZone: NgZone) {}

  /**
   * Initialize the liquid background canvas
   * Should be called once in app initialization
   */
  initialize(containerElement: HTMLElement): void {
    if (this.isInitialized) return;

    this.ngZone.runOutsideAngular(() => {
      this.setupScene(containerElement);
      this.setupMesh();
      this.setupEventListeners();
      this.animate();
      this.isInitialized = true;
    });
  }

  /**
   * Setup Three.js scene
   */
  private setupScene(container: HTMLElement): void {
    const width = globalThis.innerWidth;
    const height = globalThis.innerHeight;

    // Create canvas
    this.canvas = document.createElement("canvas");
    this.canvas.style.position = "fixed";
    this.canvas.style.inset = "0";
    this.canvas.style.zIndex = "0";
    this.canvas.style.pointerEvents = "none";
    container.prepend(this.canvas);

    // Three.js setup (using global THREE)
    const THREE = (globalThis as any).THREE;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f1419);

    // Camera (orthographic for better control)
    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000,
    );
    this.camera.position.z = 100;

    // WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    });

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(globalThis.devicePixelRatio || 1);
    this.renderer.setClearColor(0x0f1419, 1);

    // Handle resize
    globalThis.addEventListener("resize", () => this.onWindowResize());
  }

  /**
   * Create the morphing liquid mesh
   */
  private setupMesh(): void {
    const THREE = (globalThis as any).THREE;

    // Create geometry with subdivisions for smooth morphing
    const geometry = new THREE.PlaneGeometry(
      globalThis.innerWidth * 2,
      globalThis.innerHeight * 2,
      100, // width segments
      100, // height segments
    );

    // Vertex shader: creates smooth wave motion
    const vertexShader = `
      uniform float uTime;
      uniform float uScrollY;
      uniform float uMouseX;
      uniform float uMouseY;
      
      varying vec2 vUv;
      
      #define PI 3.14159265359
      
      void main() {
        vUv = uv;
        
        // Original position
        vec3 pos = position;
        
        // Wave 1: Slow, large oscillation
        pos.z += sin(uv.x * 3.0 + uTime * 0.3) * sin(uv.y * 2.0 + uTime * 0.2) * 15.0;
        
        // Wave 2: Medium, different frequency
        pos.z += sin(uv.y * 4.0 + uTime * 0.25) * cos(uv.x * 2.5 + uTime * 0.15) * 10.0;
        
        // Wave 3: Scroll response (gentle parallax)
        pos.z += (uScrollY * 0.01) * 5.0;
        
        // Mouse distortion (within bounds)
        float dist = distance(uv * 1000.0, vec2(uMouseX, uMouseY));
        float influence = exp(-dist * 0.005) * 20.0;
        pos.z += influence;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    // Fragment shader: deep gradient with gold hints
    const fragmentShader = `
      uniform float uTime;
      
      varying vec2 vUv;
      
      void main() {
        // Deep navy base
        vec3 baseColor = vec3(0.0588, 0.0784, 0.1137); // #0f1419
        
        // Create subtle depth gradient
        vec3 accentColor = vec3(0.1333, 0.1647, 0.2745); // #1a2a4a
        
        // Mix based on UV with subtle animation
        float mixFactor = 0.5 + 0.1 * sin(vUv.y * 2.0 + uTime * 0.2);
        vec3 finalColor = mix(baseColor, accentColor, mixFactor);
        
        // Add very subtle gold glow in the center
        float centerGlow = exp(-length(vUv - 0.5) * 1.5) * 0.05;
        finalColor += vec3(0.8314, 0.6862, 0.2157) * centerGlow; // #d4af37 very subtle
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uScrollY: { value: 0 },
        uMouseX: { value: window.innerWidth / 2 },
        uMouseY: { value: window.innerHeight / 2 },
      },
      side: THREE.FrontSide,
    });

    this.uniforms = material.uniforms;
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.z = -50;
    this.scene.add(this.mesh);
  }

  /**
   * Animation loop
   */
  private readonly animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    // Update uniforms
    this.time += 0.01;
    this.uniforms.uTime.value = this.time;
    this.uniforms.uScrollY.value = this.scrollY * 0.5; // Smooth scroll response
    this.uniforms.uMouseX.value = this.mouseX;
    this.uniforms.uMouseY.value = this.mouseY;

    // Render
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Event listeners for scroll and mouse
   */
  private setupEventListeners(): void {
    globalThis.addEventListener("scroll", () => {
      this.scrollY = globalThis.scrollY;
    });

    globalThis.addEventListener("mousemove", (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });
  }

  /**
   * Handle window resize
   */
  private readonly onWindowResize = (): void => {
    const width = globalThis.innerWidth;
    const height = globalThis.innerHeight;

    this.camera.left = width / -2;
    this.camera.right = width / 2;
    this.camera.top = height / 2;
    this.camera.bottom = height / -2;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  };

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    this.canvas?.remove();
    this.isInitialized = false;
  }
}
