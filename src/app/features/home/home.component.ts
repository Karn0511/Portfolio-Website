import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MOTION } from "../../core/constants/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col p-6 md:p-12 xl:p-20 relative bg-transparent">
      <!-- High-End Background Layer -->
      <div class="absolute inset-0 -z-20">
        <div #heroCanvas class="w-full h-full opacity-30 md:opacity-50"></div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]"
        ></div>
      </div>

      <!-- Hero Narrative -->
      <section
        class="min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center relative z-20 reveal-stagger pt-10"
      >
        <div class="flex items-center gap-4 mb-8">
          <div class="h-[1px] w-12 bg-white/20"></div>
          <span
            class="font-mono text-[9px] text-white/40 tracking-[0.4em] uppercase"
            >Architect // Ashutosh Karn</span
          >
        </div>

        <h1
          class="font-display font-black text-[clamp(4rem,15vw,10rem)] mb-6 md:mb-10 leading-[0.85] uppercase tracking-tighter"
        >
          Neural<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20"
            >Works</span
          >
        </h1>

        <div class="max-w-4xl space-y-8">
          <h2
            class="text-2xl md:text-5xl font-sans font-light text-slate-400 leading-tight tracking-tight"
          >
            B.Tech Computer Science <span class="text-white/20">&#64;</span>
            <span class="text-white font-bold italic">SHUATS 2026</span>.
          </h2>

          <p
            class="text-slate-500 text-lg md:text-2xl font-sans leading-relaxed max-w-3xl opacity-80 border-l-2 border-white/5 pl-8"
          >
            Synthesizing high-performance web architectures with AI integration.
            Specializing in
            <span class="text-white">Cloud Orchestration</span> and
            <span class="text-white">Neural Frontends</span>.
          </p>

          <div
            class="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-10"
          >
            <button
              class="sh-button-primary px-10 h-14 text-[10px] font-black tracking-[0.2em] uppercase interactive"
            >
              INITIALIZE_PROJECTS
            </button>
            <a
              href="mailto:karnashutosh6@gmail.com"
              class="sh-button-outline px-10 h-14 text-[10px] font-black tracking-[0.2em] uppercase interactive"
            >
              CONTACT_NODE
            </a>
          </div>
        </div>

        <!-- Tech Stack Marquee -->
        <div
          class="mt-24 md:mt-32 overflow-hidden py-10 border-y border-white/5 relative bg-white/[0.01]"
        >
          <div class="marquee-content flex items-center gap-16 md:gap-32 px-10">
            <div
              *ngFor="let tech of techStack"
              class="flex items-center gap-4 group opacity-30 hover:opacity-100 transition-opacity"
            >
              <span
                class="font-display text-2xl md:text-3xl font-black text-white hover:text-sky-400 cursor-default transition-colors"
                >{{ tech }}</span
              >
              <div class="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div
              *ngFor="let tech of techStack"
              class="flex items-center gap-4 group opacity-30 hover:opacity-100 transition-opacity"
            >
              <span
                class="font-display text-2xl md:text-3xl font-black text-white hover:text-sky-400 cursor-default transition-colors"
                >{{ tech }}</span
              >
              <div class="w-1.5 h-1.5 rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Capabilities -->
      <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-20 md:mt-32 relative z-20 pb-32"
      >
        <div
          *ngFor="let card of cards"
          class="glass-card p-10 md:p-12 group interactive flex flex-col items-start gap-10 hover:-translate-y-2 transition-transform duration-500"
        >
          <div
            class="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
          >
            <span
              class="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform"
              >{{ card.icon }}</span
            >
          </div>
          <div>
            <h3
              class="font-display text-2xl md:text-3xl text-white mb-6 uppercase tracking-tighter font-black leading-none"
            >
              {{ card.title }}
            </h3>
            <p
              class="text-slate-400 text-base md:text-lg font-sans leading-relaxed group-hover:text-slate-200 transition-colors opacity-80"
            >
              {{ card.desc }}
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
      .ease-expo {
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      }
    `,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("heroCanvas") canvasContainer!: ElementRef;

  techStack = [
    "PYTHON",
    "JAVA",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "ANGULAR 18",
    "NODE.JS",
    "EXPRESS.JS",
    "DOCKER",
    "KUBERNETES",
    "AWS",
    "FIGMA",
    "AZURE",
  ];

  cards = [
    {
      title: "Neural Architect",
      icon: "architecture",
      desc: "Building scalable, distributed systems using Angular, React, and Node.js with high-concurrency throughput.",
    },
    {
      title: "Cloud Integrity",
      icon: "cloud_done",
      desc: "Architecting secure, cloud-native deployments on AWS and Azure with Docker/Kubernetes orchestration.",
    },
    {
      title: "AI Synthesis",
      icon: "auto_awesome",
      desc: "Merging NLP-driven summarization and generative intelligence into intuitive, high-fidelity user experiences.",
    },
  ];

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private torus!: THREE.Mesh;
  private frameId!: number;
  private mouse = { x: 0, y: 0 };

  ngOnInit() {
    gsap.from(".reveal-stagger > *", {
      y: 30,
      opacity: 0,
      duration: MOTION.DURATION_DEFAULT,
      stagger: 0.1,
      ease: MOTION.EASE_MAIN,
    });
  }

  ngAfterViewInit() {
    this.initThree();
    this.initScrollAnimations();
  }

  ngOnDestroy() {
    if (this.frameId) cancelAnimationFrame(this.frameId);
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }
    window.removeEventListener("resize", this.onResize);
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  private initScrollAnimations() {
    const cards = document.querySelectorAll(".sh-card-hover");

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: MOTION.DURATION_DEFAULT,
        delay: index % 2 === 0 ? 0 : 0.1,
        ease: MOTION.EASE_MAIN,
      });
    });
  }

  private onResize = () => {
    if (!this.canvasContainer) return;
    const container = this.canvasContainer.nativeElement;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  };

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const container = this.canvasContainer.nativeElement;
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Neural Starfield
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    this.scene.add(particlesMesh);

    // Kinetic Torus
    const geometry = new THREE.TorusKnotGeometry(4, 0.5, 300, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
    });
    this.torus = new THREE.Mesh(geometry, material);
    this.scene.add(this.torus);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2);
    pointLight.position.set(2, 3, 4);
    this.scene.add(pointLight);

    this.camera.position.z = 15;

    // Mouse Tracking Logic
    const onMouseMove = (event: MouseEvent) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      this.frameId = requestAnimationFrame(animate);

      const targetRotationX = this.mouse.y * 0.2;
      const targetRotationY = this.mouse.x * 0.2;

      this.torus.rotation.y += 0.002;
      this.torus.rotation.x += (targetRotationX - this.torus.rotation.x) * 0.05;

      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x +=
        (targetRotationX * 0.5 - particlesMesh.rotation.x) * 0.02;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
    window.addEventListener("resize", this.onResize);
  }
}
