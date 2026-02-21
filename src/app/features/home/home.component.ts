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

import { RouterOutlet, RouterModule } from "@angular/router";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex flex-col p-6 md:p-12 xl:p-20 relative bg-transparent">
      <!-- High-End Background Layer -->
      <div class="absolute inset-0 -z-20">
        <div #heroCanvas class="w-full h-full opacity-30 md:opacity-50"></div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]"
        ></div>
      </div>

      <!-- Hero Section -->
      <section
        class="min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center relative z-20 pt-10"
      >
        <div class="flex items-center gap-4 mb-8">
          <div class="h-[1px] w-12 bg-sky-500"></div>
          <span
            class="font-mono text-[10px] text-sky-400 tracking-[0.4em] uppercase font-bold"
            >Software Engineer</span
          >
        </div>

        <h1
          class="font-display font-black text-[clamp(3.5rem,12vw,8rem)] mb-6 md:mb-10 leading-[0.9] tracking-tighter"
        >
          ASHUTOSH<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400"
            >KARN</span
          >
        </h1>

        <div class="max-w-4xl space-y-8">
          <h2
            class="text-2xl md:text-4xl font-sans font-light text-slate-300 leading-tight tracking-tight"
          >
            B.Tech Computer Science Engineering
            <span class="text-white/20">&#64;</span>
            <span class="text-white font-bold italic">SHUATS 2026</span>.
          </h2>

          <p
            class="text-slate-400 text-lg md:text-xl font-sans leading-relaxed max-w-2xl opacity-90 border-l-2 border-sky-500/50 pl-8"
          >
            Passionate about building scalable cloud architectures and
            high-performance full-stack applications. Specializing in
            <span class="text-white">Distributed Systems</span> and
            <span class="text-white">Cloud Native Development</span>.
          </p>

          <div
            class="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-6"
          >
            <button
              [routerLink]="['/projects']"
              class="px-10 h-14 bg-white text-black text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-sky-400 transition-colors"
            >
              VIEW_PROJECTS
            </button>
            <a
              href="mailto:karnashutosh6@gmail.com"
              class="px-10 h-14 border border-white/20 text-white text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              CONTACT_ME
            </a>
          </div>
        </div>
      </section>

      <!-- Core Expertise -->
      <section
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 relative z-20 pb-20"
      >
        <div
          *ngFor="let card of cards"
          class="bg-white/[0.03] border border-white/5 p-10 group hover:border-sky-500/30 transition-all duration-500"
        >
          <span class="material-symbols-outlined text-3xl text-sky-400 mb-6">{{
            card.icon
          }}</span>
          <h3
            class="font-display text-xl text-white mb-4 uppercase tracking-tight font-bold"
          >
            {{ card.title }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            {{ card.desc }}
          </p>
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
    "AWS",
    "DOCKER",
    "KUBERNETES",
    "ANGULAR",
    "PYTHON",
    "JAVA",
    "MONGODB",
    "POSTGRESQL",
  ];

  cards = [
    {
      title: "Cloud Engineering",
      icon: "cloud",
      desc: "Specializing in AWS cloud architectures, container orchestration with Docker/K8s, and serverless infrastructure scaling.",
    },
    {
      title: "Full Stack Systems",
      icon: "developer_mode",
      desc: "Architecting high-performance web systems using Angular 19, Node.js, and distributed database clusters.",
    },
    {
      title: "AI Integration",
      icon: "neurology",
      desc: "Implementing NLP-driven insights and machine learning models to solve complex real-world automation challenges.",
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

    // Tech Wall Geometry
    const group = new THREE.Group();
    const count = 6;
    const spacing = 4;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.1 + Math.random() * 0.2,
          wireframe: Math.random() > 0.5,
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
          (x - count / 2) * spacing,
          (y - count / 2) * spacing,
          (Math.random() - 0.5) * 5,
        );
        group.add(cube);
      }
    }
    this.scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2);
    pointLight.position.set(5, 5, 10);
    this.scene.add(pointLight);

    this.camera.position.z = 18;

    // Mouse Tracking Logic
    const onMouseMove = (event: MouseEvent) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      this.frameId = requestAnimationFrame(animate);

      const targetRotationX = this.mouse.y * 0.1;
      const targetRotationY = this.mouse.x * 0.1;

      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;

      group.children.forEach((cube: any, i) => {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        cube.position.z += Math.sin(Date.now() * 0.001 + i) * 0.01;
      });

      particlesMesh.rotation.y += 0.0003;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
    window.addEventListener("resize", this.onResize);
  }
}
