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
    <div class="flex flex-col p-6 md:p-12 xl:p-20 relative min-h-screen">
      <!-- Hero Section -->
      <section class="mb-20 pt-10">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-[1px] w-12 bg-white/20"></div>
          <span
            class="font-mono text-[10px] text-[#00A3FF] tracking-[0.4em] uppercase font-bold"
            style="font-family: 'JetBrains Mono', monospace;"
            >ASHUTOSH_KARN // KERNEL_ENG</span
          >
        </div>

        <h1
          class="font-display font-black text-[clamp(3.5rem,10vw,7rem)] mb-6 leading-[0.85] tracking-tighter"
          style="font-family: 'Outfit', sans-serif;"
        >
          SYSTEM ARCHITECT<br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-white to-[#00A3FF]"
            >FULL STACK DEPLOY</span
          >
        </h1>

        <div class="max-w-3xl border-l-[1px] border-white/10 pl-8 mt-12">
          <p
            class="text-white/60 text-lg md:text-xl font-light leading-relaxed"
          >
            Scalable cloud architectures • High-frequency reactive frontends •
            <span class="text-white font-bold">AWS Academy Certified</span>
          </p>
        </div>
      </section>

      <!-- Bento Dashboard -->
      <section class="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-20">
        <!-- Hero Metrics -->
        <div
          class="md:col-span-4 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[32px] p-10 flex flex-col justify-between min-h-[300px] group transition-all hover:bg-white/[0.05]"
        >
          <div
            class="font-mono text-[10px] text-[#FFD700] tracking-widest uppercase"
          >
            SYST_KINETIC_INDEX
          </div>
          <div>
            <div class="text-6xl font-display font-black mb-2">98.4%</div>
            <div class="text-xs text-white/40 font-mono">
              CODE_EFFICIENCY_STABLE
            </div>
          </div>
        </div>

        <!-- Core Pillars -->
        <div
          class="md:col-span-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[32px] p-10 flex flex-col group transition-all hover:bg-white/[0.05]"
        >
          <div
            class="font-mono text-[10px] text-[#00A3FF] tracking-widest uppercase mb-10"
          >
            CORE_ENGINEERING_PILLARS
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div *ngFor="let pillar of pillars" class="space-y-4">
              <div class="text-[#FFD700] font-black text-xs font-mono">
                {{ pillar.id }}
              </div>
              <div class="text-white font-bold text-lg">{{ pillar.title }}</div>
              <div class="text-white/40 text-xs leading-relaxed">
                {{ pillar.desc }}
              </div>
            </div>
          </div>
        </div>

        <!-- Project Quick Access -->
        <div
          class="md:col-span-12 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[32px] p-10 group transition-all hover:bg-white/[0.05]"
        >
          <div class="flex justify-between items-center mb-10">
            <div
              class="font-mono text-[10px] text-[#00A3FF] tracking-widest uppercase"
            >
              ACTIVE_REGISTRY
            </div>
            <button
              [routerLink]="['/projects']"
              class="text-[10px] font-bold text-white/40 hover:text-white transition-colors underline underline-offset-8"
            >
              VIEW_ALL_NODES
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div class="flex gap-6 items-start">
              <div
                class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#FFD700]"
              >
                01
              </div>
              <div>
                <div class="text-white font-bold text-xl mb-2 italic">
                  AROGYA_VAULT
                </div>
                <div class="text-white/40 text-sm leading-relaxed">
                  Secure multi-node health data orchestration.
                </div>
              </div>
            </div>
            <div class="flex gap-6 items-start">
              <div
                class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-[#00A3FF]"
              >
                02
              </div>
              <div>
                <div class="text-white font-bold text-xl mb-2 italic">
                  SKYCAST_RADAR
                </div>
                <div class="text-white/40 text-sm leading-relaxed">
                  Atmospheric predictive engine with real-time telemetry.
                </div>
              </div>
            </div>
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
  pillars = [
    {
      id: "0x01",
      title: "Cloud Infrastructure",
      desc: "AWS architecture optimized for multi-zone fault tolerance.",
    },
    {
      id: "0x02",
      title: "Reactive Systems",
      desc: "Angular 19 Signal-based state for atomic-grade performance.",
    },
    {
      id: "0x03",
      title: "Scalable Logic",
      desc: "Distributed backends for massive throughput handling.",
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

  ngAfterViewInit() {}

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
