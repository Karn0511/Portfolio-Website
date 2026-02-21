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
        class="mb-12 md:mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end relative z-20 gap-8"
      >
        <div>
          <div class="flex items-center gap-4 mb-6">
            <span class="w-12 h-[1px] bg-sky-500"></span>
            <span
              class="font-mono text-[10px] text-sky-400 tracking-[0.4em] uppercase font-bold"
              >Stack & Infrastructure</span
            >
          </div>
          <h2
            class="text-[clamp(3.5rem,10vw,7rem)] font-display font-black tracking-tighter text-white leading-[0.9] uppercase"
          >
            Technical<br /><span class="text-white/20">Ecosystem</span>
          </h2>
        </div>

        <div
          class="flex flex-wrap gap-6 md:gap-16 pb-4 lg:pb-8 border-b border-white/5"
        >
          <div class="flex flex-col items-center sm:items-end">
            <span
              class="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3 font-bold"
              >System Uptime</span
            >
            <span
              class="text-xl md:text-3xl font-mono text-white leading-none tracking-tighter font-black"
              >99.9% SLI</span
            >
          </div>
          <div class="flex flex-col items-end">
            <span
              class="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3 font-bold"
              >Global Status</span
            >
            <span
              class="text-xl md:text-3xl font-mono text-emerald-400 leading-none tracking-tighter font-black"
              >STABLE</span
            >
          </div>
        </div>
      </header>

      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-20 pb-32"
      >
        <!-- CI/CD Stream -->
        <div class="lg:col-span-8 space-y-12">
          <div class="bg-white/[0.02] border border-white/5 p-8 md:p-12">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
            >
              <h3
                class="font-display text-sm text-white uppercase tracking-[0.4em] flex items-center gap-4 font-black"
              >
                <span class="w-1.5 h-6 bg-sky-500 animate-pulse"></span>
                Deployment Pipeline
              </h3>
            </div>

            <div
              class="flex flex-col sm:flex-row items-center justify-between relative px-6 py-10 gap-12 sm:gap-0"
            >
              <div
                class="hidden sm:block absolute h-[1px] bg-white/10 left-12 right-12 top-1/2 -translate-y-1/2 z-0"
              ></div>

              <div
                *ngFor="let step of pipelineSteps"
                class="relative z-10 flex sm:flex-col items-center gap-6 group w-full sm:w-auto"
              >
                <div
                  [class]="
                    'w-16 h-16 md:w-20 md:h-20 border flex items-center justify-center transition-all duration-700 ' +
                    (step.status === 'SUCCESS'
                      ? 'bg-white text-black border-white'
                      : 'bg-black/40 border-white/5 text-white/20')
                  "
                >
                  <span
                    class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform"
                    >{{ step.icon }}</span
                  >
                </div>
                <div class="flex flex-col items-start sm:items-center">
                  <div
                    class="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors"
                  >
                    {{ step.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Logs -->
          <div
            class="bg-black/40 border border-white/5 p-8 md:p-10 font-mono h-[350px] flex flex-col relative overflow-hidden"
          >
            <div
              class="flex items-center justify-between mb-8 pb-4 border-b border-white/5"
            >
              <div
                class="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold"
              >
                Environment_Logs
              </div>
            </div>

            <div
              class="flex-1 overflow-y-auto space-y-3 scrollbar-hide text-[11px]"
              #logContainer
            >
              <div
                *ngFor="let log of logs()"
                class="flex gap-6 opacity-60 hover:opacity-100 transition-opacity"
              >
                <span class="text-sky-500/50 whitespace-nowrap font-bold"
                  >[{{ log.timestamp }}]</span
                >
                <span class="text-white/60 font-light"
                  >:: {{ log.message }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Metrics Column -->
        <div class="lg:col-span-4 space-y-12">
          <div class="bg-white/[0.02] border border-white/5 p-10 space-y-12">
            <h3
              class="font-display text-sm text-white uppercase tracking-[0.4em] mb-12 font-black"
            >
              Cloud Performance
            </h3>
            <div *ngFor="let metric of metrics" class="space-y-6 group">
              <div class="flex justify-between items-end">
                <span
                  class="text-[10px] font-mono text-white/30 uppercase tracking-widest font-bold"
                  >{{ metric.name }}</span
                >
                <span class="text-xl font-mono text-white font-bold"
                  >{{ metric.value
                  }}<span class="text-xs text-white/40 ml-1">{{
                    metric.unit
                  }}</span></span
                >
              </div>
              <div class="h-[2px] bg-white/5 overflow-hidden flex">
                <div
                  class="h-full bg-sky-500 transition-all duration-1000"
                  [style.width.%]="metric.percent"
                ></div>
              </div>
            </div>
          </div>

          <div class="p-10 bg-white text-black">
            <h3
              class="font-display text-sm text-black uppercase tracking-[0.4em] mb-12 font-black"
            >
              Infrastructure
            </h3>
            <div class="space-y-4">
              <div
                *ngFor="
                  let node of [
                    'AWS_US_EAST',
                    'DOCKER_HUB',
                    'KUBE_CLUSTER',
                    'MONGODB_ATLAS',
                  ]
                "
                class="p-4 bg-black/5 border border-black/5 flex items-center gap-4 hover:bg-black/10 transition-all"
              >
                <div class="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                <div
                  class="text-[11px] font-mono text-black uppercase font-bold tracking-widest flex-1"
                >
                  {{ node }}
                </div>
                <span
                  class="text-[10px] font-mono text-black/50 font-bold uppercase"
                  >ACTIVE</span
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
    { name: "Source", icon: "source", status: "SUCCESS" },
    { name: "Build", icon: "build", status: "SUCCESS" },
    { name: "Test", icon: "biotech", status: "SUCCESS" },
    { name: "Deploy", icon: "rocket_launch", status: "SUCCESS" },
  ];

  metrics = [
    { name: "AWS Instance Load", value: "24.5", unit: "%", percent: 24.5 },
    { name: "Database Response", value: "12", unit: "ms", percent: 12 },
    { name: "Memory Usage", value: "1.8", unit: "GB", percent: 30 },
  ];

  ngOnInit() {
    this.generateInitialLogs();
    this.intervals.push(setInterval(() => this.addRandomLog(), 5000));
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
        timestamp: "20:10:01",
        source: "AWS",
        level: "INFO",
        message: "Cloud cluster connected. All nodes healthy.",
      },
      {
        timestamp: "20:10:05",
        source: "DOCKER",
        level: "INFO",
        message: "Container orchestration service active.",
      },
    ];
    this.logs.set(initialLogs);
  }

  private addRandomLog() {
    const messages = [
      "Auto-scaling group check complete.",
      "Database connection pool verified.",
      "SSL certificate validation transition successful.",
      "Load balancer health check passed.",
    ];

    const newLog: LogEntry = {
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
      source: "SYSTEM",
      level: "INFO",
      message: messages[Math.floor(Math.random() * messages.length)],
    };

    const currentLogs = this.logs();
    if (currentLogs.length > 20) currentLogs.shift();
    this.logs.set([...currentLogs, newLog]);
  }
}
