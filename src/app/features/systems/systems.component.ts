import {
  Component,
  OnInit,
  signal,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MOTION } from "../../core/constants/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LogEntry {
  timestamp: string;
  source: string;
  level: "INFO" | "WARN" | "ERROR";
  message: string;
}

@Component({
  selector: "app-systems",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-col p-6 md:p-12 xl:p-20 relative bg-transparent h-auto"
    >
      <header
        class="mb-12 md:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end relative z-20 reveal-stagger gap-8"
      >
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-white/20"></span>
            <span
              class="font-mono text-[9px] text-white/30 tracking-[0.4em] uppercase"
              >Archive // Kernel_Audit</span
            >
          </div>
          <h2
            class="text-[clamp(3.5rem,10vw,8rem)] font-display font-black tracking-tighter text-white leading-[0.85] uppercase"
          >
            System<br /><span class="text-white/20">Vitals</span>
          </h2>
        </div>

        <div
          class="flex flex-wrap gap-6 md:gap-16 pb-4 lg:pb-8 border-b border-white/5"
        >
          <div class="flex flex-col items-center sm:items-end">
            <span
              class="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] mb-3"
              >Uptime</span
            >
            <span
              class="text-xl md:text-3xl font-mono text-white leading-none tracking-tighter font-black"
              >14D : 22H : 01S</span
            >
          </div>
          <div class="flex flex-col items-end">
            <span
              class="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] mb-3"
              >Kernel_Status</span
            >
            <span
              class="text-xl md:text-3xl font-mono text-emerald-400 leading-none tracking-tighter font-black drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]"
              >OPERATIONAL</span
            >
          </div>
        </div>
      </header>

      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-20 pb-32"
      >
        <!-- CI/CD Stream -->
        <div class="lg:col-span-8 space-y-12 md:space-y-16">
          <div class="glass-card p-8 md:p-12">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-20 gap-6"
            >
              <h3
                class="font-display text-base md:text-lg text-white uppercase tracking-[0.4em] flex items-center gap-4 font-black"
              >
                <span class="w-1.5 h-8 bg-white animate-pulse"></span>
                Neural_Pipeline
              </h3>
              <span
                class="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] font-black"
                >0x8F2A1E // STABLE</span
              >
            </div>

            <div
              class="flex flex-col sm:flex-row items-center justify-between relative px-6 md:px-12 py-10 md:py-16 gap-12 sm:gap-0"
            >
              <div
                class="hidden sm:block absolute h-[1px] bg-white/10 left-12 right-12 top-1/2 -translate-y-1/2 z-0"
              ></div>

              <div
                *ngFor="let step of pipelineSteps"
                class="relative z-10 flex sm:flex-col items-center gap-6 group interactive w-full sm:w-auto"
              >
                <div
                  [class]="
                    'w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] border flex items-center justify-center transition-all duration-700 ' +
                    (step.status === 'SUCCESS'
                      ? 'bg-white text-black border-white shadow-2xl'
                      : 'bg-black/40 border-white/5 text-white/20')
                  "
                >
                  <span
                    class="material-symbols-outlined text-2xl md:text-3xl group-hover:scale-110 transition-transform"
                    >{{ step.icon }}</span
                  >
                </div>
                <div class="flex flex-col items-start sm:items-center">
                  <div
                    class="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors"
                  >
                    {{ step.name }}
                  </div>
                  <div
                    class="text-[9px] font-mono text-white/20 mt-1 font-black"
                  >
                    {{ step.time }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Terminal CLI -->
          <div
            class="glass-panel rounded-[3rem] p-8 md:p-12 font-mono h-[400px] md:h-[500px] flex flex-col shadow-2xl relative overflow-hidden"
          >
            <div
              class="flex items-center justify-between mb-8 md:mb-12 pb-6 md:pb-8 border-b border-white/5"
            >
              <div class="flex gap-3">
                <div
                  class="w-3.5 h-3.5 rounded-full bg-white/5 border border-white/10"
                ></div>
                <div
                  class="w-3.5 h-3.5 rounded-full bg-white/5 border border-white/10"
                ></div>
                <div
                  class="w-3.5 h-3.5 rounded-full bg-white/5 border border-white/10"
                ></div>
              </div>
              <div
                class="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black"
              >
                Kernel_Console
              </div>
            </div>

            <div
              class="flex-1 overflow-y-auto space-y-4 md:space-y-6 scrollbar-hide text-[11px] md:text-sm"
              #logContainer
            >
              <div
                *ngFor="let log of logs()"
                class="flex gap-6 md:gap-10 opacity-40 hover:opacity-100 transition-opacity"
              >
                <span class="text-white/20 whitespace-nowrap font-black"
                  >[{{ log.timestamp }}]</span
                >
                <span
                  [class]="
                    'font-black tracking-tighter ' +
                    (log.level === 'WARN'
                      ? 'text-amber-500'
                      : log.level === 'ERROR'
                        ? 'text-red-500'
                        : 'text-white')
                  "
                  >[{{ log.level }}]</span
                >
                <span class="text-white/60 font-light"
                  >:: {{ log.message }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Metrics Column -->
        <div class="lg:col-span-4 space-y-12 md:space-y-16">
          <div class="glass-card p-10 md:p-12 space-y-12 md:space-y-16">
            <h3
              class="font-display text-sm md:text-base text-white uppercase tracking-[0.4em] mb-12 font-black"
            >
              Telemetry
            </h3>
            <div
              *ngFor="let metric of metrics"
              class="space-y-5 md:space-y-8 group"
            >
              <div class="flex justify-between items-end">
                <span
                  class="text-[10px] font-mono text-white/30 uppercase tracking-widest group-hover:text-white transition-colors font-black"
                  >{{ metric.name }}</span
                >
                <span
                  class="text-xl md:text-2xl font-mono text-white font-black"
                  >{{ metric.value
                  }}<span class="text-xs text-white/40 ml-1">{{
                    metric.unit
                  }}</span></span
                >
              </div>
              <div class="h-[3px] bg-white/5 overflow-hidden flex rounded-full">
                <div
                  class="h-full bg-white group-hover:bg-sky-400 shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-1000"
                  [style.width.%]="metric.percent"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="glass-panel p-10 md:p-12 bg-white text-black rounded-[3rem]"
          >
            <h3
              class="font-display text-sm md:text-base text-black uppercase tracking-[0.4em] mb-16 font-black"
            >
              Neural_Health
            </h3>
            <div class="space-y-5 md:space-y-6">
              <div
                *ngFor="let i of [1, 2, 3, 4, 5]"
                class="p-5 md:p-6 bg-black/[0.03] border border-black/5 rounded-[1.5rem] md:rounded-[2rem] flex items-center gap-6 hover:bg-black/5 transition-all group interactive"
              >
                <div
                  class="w-3 h-3 rounded-full bg-black shadow-[0_0_15px_rgba(0,0,0,0.3)] animate-pulse"
                ></div>
                <div class="flex-1">
                  <div
                    class="text-[11px] font-mono text-black uppercase font-black tracking-widest"
                  >
                    NODE_CORE_{{ i + 104 }}
                  </div>
                  <div
                    class="h-[2px] bg-black/10 mt-4 overflow-hidden rounded-full"
                  >
                    <div
                      class="h-full bg-black/40"
                      [style.width.%]="i * 12 + 20"
                    ></div>
                  </div>
                </div>
                <span
                  class="text-[10px] font-mono text-black/40 font-black uppercase tracking-widest"
                  >READY</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class SystemsComponent
  implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy
{
  @ViewChild("logContainer") private logContainer!: ElementRef;

  logs = signal<LogEntry[]>([]);
  private intervals: any[] = [];

  pipelineSteps = [
    {
      name: "Architecture",
      icon: "settings",
      status: "SUCCESS",
      time: "14.2s",
    },
    { name: "Validation", icon: "fact_check", status: "SUCCESS", time: "8.4s" },
    {
      name: "Cluster_Build",
      icon: "inventory_2",
      status: "SUCCESS",
      time: "5.1s",
    },
    { name: "Sec_Trace", icon: "security", status: "SUCCESS", time: "9.3s" },
    {
      name: "Propagation",
      icon: "rocket_launch",
      status: "SUCCESS",
      time: "3.7s",
    },
  ];

  metrics = [
    { name: "CPU Cluster Load", value: "42.8", unit: "%", percent: 42.8 },
    { name: "Neural Memory", value: "4.2", unit: "GB", percent: 14 },
    { name: "Spectral Bandwidth", value: "1.2", unit: "Gbps", percent: 35 },
    { name: "I/O Protocols", value: "842", unit: " IOPs", percent: 62 },
  ];

  ngOnInit() {
    this.generateInitialLogs();
    this.intervals.push(setInterval(() => this.addRandomLog(), 3000));
    this.intervals.push(setInterval(() => this.updateMetrics(), 4000));
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  ngOnDestroy() {
    this.intervals.forEach((id) => clearInterval(id));
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  private initAnimations() {
    gsap.from(".reveal-stagger > *", {
      y: 30,
      opacity: 0,
      duration: MOTION.DURATION_DEFAULT,
      stagger: 0.1,
      ease: MOTION.EASE_MAIN,
    });

    gsap.from(".sh-card", {
      scrollTrigger: {
        trigger: ".sh-card",
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: MOTION.DURATION_DEFAULT,
      stagger: 0.1,
      ease: MOTION.EASE_MAIN,
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
      this.logContainer.nativeElement.scrollTop =
        this.logContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  private generateInitialLogs() {
    const initialLogs: LogEntry[] = [
      {
        timestamp: "19:02:11",
        source: "KERNEL",
        level: "INFO",
        message: "Core system initialization sequence started.",
      },
      {
        timestamp: "19:02:12",
        source: "NETWORK",
        level: "INFO",
        message: "Node cluster handshake established at 1.2ms.",
      },
      {
        timestamp: "19:02:13",
        source: "NEURAL",
        level: "INFO",
        message: "Contextual synthesis layer active (Gemini 1.5).",
      },
    ];
    this.logs.set(initialLogs);
  }

  private addRandomLog() {
    const messages = [
      "Heartbeat signal verified.",
      "Optimization loop cycle complete.",
      "Metadata archive synchronized.",
      "Inbound query processed by neural core.",
      "Spectral link status: STABLE.",
    ];

    const newLog: LogEntry = {
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
      source: "SYSTEM",
      level: Math.random() > 0.9 ? "WARN" : "INFO",
      message: messages[Math.floor(Math.random() * messages.length)],
    };

    const currentLogs = this.logs();
    if (currentLogs.length > 30) currentLogs.shift();
    this.logs.set([...currentLogs, newLog]);
  }

  private updateMetrics() {
    this.metrics = this.metrics.map((m) => {
      const change = (Math.random() - 0.5) * 4;
      let newValue = parseFloat(m.value) + change;
      newValue = Math.max(0, Math.min(100, newValue));
      return {
        ...m,
        value: newValue.toFixed(1),
        percent:
          m.unit === "%"
            ? newValue
            : Math.max(10, Math.min(95, m.percent + change / 2)),
      };
    });
  }
}
