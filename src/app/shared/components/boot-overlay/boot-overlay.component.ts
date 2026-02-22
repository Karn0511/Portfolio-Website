import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

@Component({
  selector: "app-boot-overlay",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      id="boot-screen"
      class="fixed inset-0 z-[2000] flex items-center justify-center bg-[#000511] overflow-hidden"
    >
      <!-- Metadata Drifters -->
      <div
        class="absolute top-12 left-12 font-mono text-[8px] text-slate-700 tracking-[0.4em] opacity-40 uppercase drifter"
      >
        LOC: 25.4358° N, 81.8463° E <br />
        NODE: AS-702-W <input type="hidden" />
      </div>

      <div
        class="absolute bottom-12 right-12 font-mono text-[8px] text-slate-700 tracking-[0.4em] opacity-40 uppercase drifter text-right"
      >
        AUTH: PRV_RSA_SHA256 <br />
        SIG: VALID_ARCH_ROOT
      </div>

      <!-- Center Logo (Subtle Background) -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none scale-150"
      >
        <h1 class="text-[30vw] font-display font-bold tracking-tighter">AK</h1>
      </div>

      <!-- Core Content -->
      <div class="relative z-10 w-full max-w-lg px-8">
        <div class="space-y-6 font-mono text-[10px] tracking-[0.2em] uppercase">
          <div
            class="flex items-center gap-6 opacity-0 boot-line"
            *ngFor="let msg of bootMessages; let i = index"
          >
            <span class="text-gold-500/30">0{{ i + 1 }}</span>
            <span class="text-slate-300" [id]="'msg-' + i">{{ msg }}</span>
          </div>
        </div>

        <!-- Progress Rail -->
        <div class="mt-16 h-[2px] w-full bg-white/5 relative overflow-hidden">
          <div
            id="boot-progress"
            class="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-gold-500 w-0 shadow-glow-gold"
          ></div>
        </div>

        <div class="mt-4 flex justify-between items-center opacity-40">
          <span
            class="text-[8px] font-mono text-slate-500 uppercase tracking-widest"
            >Initialization...</span
          >
          <span id="percent-count" class="text-[8px] font-mono text-gold-500"
            >0%</span
          >
        </div>
      </div>

      <!-- Exit Flash -->
      <div
        id="boot-flash"
        class="absolute inset-0 bg-white opacity-0 pointer-events-none"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .shadow-glow-gold {
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
      }
    `,
  ],
})
export class BootOverlayComponent implements OnInit {
  bootMessages = [
    "Establishing architecture root...",
    "Syncing neural modules...",
    "Optimizing cinematic layers...",
    "Environment stable. Ready.",
  ];

  ngOnInit() {
    this.runBootSequence();
  }

  private runBootSequence() {
    const expoCustom = "cubic-bezier(0.19, 1, 0.22, 1)";
    const tl = gsap.timeline({
      onComplete: () => this.exitSequence(),
    });

    // 1. Reveal lines with stutter
    tl.to(".boot-line", {
      opacity: 1,
      y: -8,
      stagger: 0.6,
      duration: 1.2,
      ease: expoCustom,
    });

    // 2. Metadata Drift
    gsap.to(".drifter", {
      y: -20,
      opacity: 0.8,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 3. Progress + Percent count
    tl.to(
      "#boot-progress",
      {
        width: "100%",
        duration: 3,
        ease: "power2.inOut",
      },
      0.5,
    );

    const counter = { val: 0 };
    tl.to(
      counter,
      {
        val: 100,
        duration: 3,
        ease: "power2.inOut",
        onUpdate: () => {
          const el = document.getElementById("percent-count");
          if (el) el.innerText = `${Math.floor(counter.val)}%`;
        },
      },
      0.5,
    );
  }

  private exitSequence() {
    const tl = gsap.timeline();

    // Sudden flash
    tl.to("#boot-flash", {
      opacity: 0.2,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    // Clean wipe
    tl.to("#boot-screen", {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "circ.inOut",
      onComplete: () => {
        const screen = document.getElementById("boot-screen");
        if (screen) screen.style.display = "none";
      },
    });

    tl.to(
      "#boot-screen",
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      },
      "-=0.8",
    );
  }
}
