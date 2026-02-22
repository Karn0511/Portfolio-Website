import { Injectable, NgZone } from "@angular/core";

/**
 * Liquid Background Canvas Service
 * Implements global animated background with THREE.js
 *
 * Features:
 * - Slow, organic liquid undulation (15s cycle)
 * - Subtle scroll parallax (depth on scroll)
 * - Ambient cursor distortion (background-only, non-intrusive)
 * - Never blocks interactions (pointer-events: none)
 * - Runs at 60fps without blocking main thread
 *
 * Philosophy: "Energy under glass" - felt but not seen
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
  private mouseX = window.innerWidth / 2;
  private mouseY = window.innerHeight / 2;
  private isInitialized = false;

  // Shader uniforms
  private uniforms: any;

  constructor(private readonly ngZone: NgZone) {}

  /**
   * Initialize the liquid background
   * Call once during app initialization
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
   * Setup Three.js scene with proper sizing and positioning
   */
  private setupScene(container: HTMLElement): void {
    const width = globalThis.innerWidth;
    const height = globalThis.innerHeight;

    // Create canvas element
    this.canvas = document.createElement("canvas");
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.zIndex = "0";
    this.canvas.style.pointerEvents = "none";
    container.prepend(this.canvas);

    // Import Three.js from global
    const THREE = (globalThis as any).THREE;
    if (!THREE) {
      console.error("Three.js not loaded");
      return;
    }

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f1419); // Deep navy

    // Orthographic camera for full viewport coverage
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
      powerPreference: "high-performance",
    });

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2)); // Cap at 2x
    this.renderer.setClearColor(0x0f1419, 1);

    // Handle resize
    globalThis.addEventListener("resize", () => this.onWindowResize());
  }

  /**
   * Create the morphing liquid mesh with advanced shaders
   */
  private setupMesh(): void {
    const THREE = (globalThis as any).THREE;

    // High-quality geometry with smooth subdivisions
    const geometry = new THREE.PlaneGeometry(
      globalThis.innerWidth * 2,
      globalThis.innerHeight * 2,
      120, // width segments
      120, // height segments
    );

    // Vertex shader: Creates smooth, organic wave motion
    const vertexShader = `
      uniform float uTime;
      uniform float uScrollY;
      uniform float uMouseX;
      uniform float uMouseY;
      
      varying vec2 vUv;
      varying vec3 vPos;
      
      #define PI 3.14159265359
      
      // Smooth undulating wave function
      float wave(float x, float y, float timeOffset, float speed, float frequency) {
        return sin((x * frequency + uTime * speed + timeOffset)) * 
               sin((y * frequency + uTime * speed * 0.7 + timeOffset));
      }
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        // WAVE 1: Very slow large undulation (primary motion)
        pos.z += sin(uv.x * 1.5 + uTime * 0.15) * 
                 sin(uv.y * 1.2 + uTime * 0.12) * 20.0;
        
        // WAVE 2: Medium frequency undulation
        pos.z += sin(uv.y * 3.0 + uTime * 0.1) * 
                 cos(uv.x * 2.2 + uTime * 0.08) * 12.0;
        
        // WAVE 3: Faster subtle waves
        pos.z += sin(uv.x * 6.0 + uTime * 0.3) * 
                 sin(uv.y * 5.0 + uTime * 0.25) * 4.0;
        
        // SCROLL PARALLAX: Gentle depth shift on scroll
        float scrollInfluence = uScrollY * 0.005;
        pos.z += scrollInfluence * 8.0;
        
        // AMBIENT CURSOR DISTORTION: Very subtle, background-only
        // Only affects geometry, never blocks interactions
        float cursorDist = distance(
          uv * vec2(${globalThis.innerWidth}, ${globalThis.innerHeight}),
          vec2(uMouseX, uMouseY)
        );
        float cursorInfluence = exp(-cursorDist * cursorDist * 0.000001) * 3.0;
        pos.z += cursorInfluence;
        
        vPos = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    // Fragment shader: Deep, calm gradient with minimal gold accent
    const fragmentShader = `
      uniform float uTime;
      
      varying vec2 vUv;
      varying vec3 vPos;
      
      void main() {
        // Deep navy base color
        vec3 baseColor = vec3(0.0588, 0.0784, 0.1137); // #0f1419
        
        // Accent color (midnight blue)
        vec3 accentColor = vec3(0.1333, 0.1647, 0.2745); // #1a2a4a
        
        // Create subtle animated depth gradient
        float mixFactor = 0.5 + 0.05 * sin(vUv.y * 1.5 + uTime * 0.1);
        vec3 finalColor = mix(baseColor, accentColor, mixFactor);
        
        // Add extremely subtle gold glow (only 2-3% visibility)
        float centerDist = distance(vUv, vec2(0.5, 0.5));
        float goldGlow = exp(-centerDist * 2.0) * 0.02; // Very subtle
        finalColor += vec3(0.8314, 0.6862, 0.2157) * goldGlow; // #d4af37
        
        // Add slight vertical gradient for depth
        finalColor += vec3(0.05) * vUv.y * 0.1;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uScrollY: { value: 0 },
        uMouseX: { value: globalThis.innerWidth / 2 },
        uMouseY: { value: globalThis.innerHeight / 2 },
      },
      side: THREE.FrontSide,
    });

    this.uniforms = material.uniforms;
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.z = -50;
    this.scene.add(this.mesh);
  }

  /**
   * Main animation loop - runs outside Angular zone
   */
  private readonly animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    // Update shader uniforms with smooth values
    this.time += 0.008; // Slow time advance
    this.uniforms.uTime.value = this.time;
    this.uniforms.uScrollY.value = this.scrollY * 0.3; // Smooth scroll response
    this.uniforms.uMouseX.value = this.mouseX;
    this.uniforms.uMouseY.value = this.mouseY;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * Setup event listeners for scroll and mouse
   * All processed outside Angular zone to avoid change detection
   */
  private setupEventListeners(): void {
    // Scroll listener - smooth parallax update
    globalThis.addEventListener("scroll", () => {
      this.scrollY = globalThis.scrollY;
    });

    // Mouse move listener - ambient cursor effect
    globalThis.addEventListener("mousemove", (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });

    // Prevent mouse leave from freezing effect
    globalThis.addEventListener("mouseleave", () => {
      this.mouseX = globalThis.innerWidth / 2;
      this.mouseY = globalThis.innerHeight / 2;
    });
  }

  /**
   * Handle window resize - maintain responsive background
   */
  private readonly onWindowResize = (): void => {
    const width = globalThis.innerWidth;
    const height = globalThis.innerHeight;

    // Update camera
    this.camera.left = width / -2;
    this.camera.right = width / 2;
    this.camera.top = height / 2;
    this.camera.bottom = height / -2;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(width, height);
  };

  /**
   * Cleanup - called on component destroy
   */
  destroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.mesh?.geometry) {
      this.mesh.geometry.dispose();
    }
    this.canvas?.remove();
    this.canvas = null;
    this.isInitialized = false;
  }
}
