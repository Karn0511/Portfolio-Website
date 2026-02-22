import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Stat {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

@Component({
  selector: "app-animated-stats",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        *ngFor="let stat of stats; let i = index"
        class="stat-card relative group"
        [class.animate-in]="animatedIndexes().includes(i)"
        [style.animation-delay.ms]="i * 150"
      >
        <!-- Glowing Border Effect -->
        <div
          class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          [style.background]="
            'linear-gradient(135deg, ' + stat.color + '40, transparent)'
          "
          [style.box-shadow]="'0 0 30px ' + stat.color + '40'"
        ></div>

        <!-- Content -->
        <div
          class="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 group-hover:border-opacity-50 transition-all duration-300"
          [style.border-color]="stat.color + '40'"
        >
          <!-- Icon -->
          <div
            class="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300"
            [style.color]="stat.color"
          >
            {{ stat.icon }}
          </div>

          <!-- Animated Number -->
          <div
            class="text-3xl md:text-4xl font-bold mb-2 font-mono"
            [style.color]="stat.color"
          >
            {{ displayValues()[i] }}{{ stat.suffix || "" }}
          </div>

          <!-- Label -->
          <div class="text-gray-400 text-sm uppercase tracking-wider">
            {{ stat.label }}
          </div>

          <!-- Progress Bar -->
          <div class="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-1000 ease-out"
              [style.background]="
                'linear-gradient(90deg, ' +
                stat.color +
                ', ' +
                stat.color +
                '80)'
              "
              [style.width.%]="animatedIndexes().includes(i) ? 100 : 0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .stat-card {
        opacity: 0;
        transform: translateY(20px);
      }

      .stat-card.animate-in {
        animation: slideUp 0.6s ease-out forwards;
      }

      @keyframes slideUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .stat-card:hover {
        transform: translateY(-5px);
      }
    `,
  ],
})
export class AnimatedStatsComponent implements OnInit {
  displayValues = signal<number[]>([0, 0, 0, 0]);
  animatedIndexes = signal<number[]>([]);

  stats: Stat[] = [
    {
      icon: "🚀",
      value: 15,
      label: "Projects Built",
      suffix: "+",
      color: "#d4af37",
    },
    {
      icon: "💼",
      value: 3,
      label: "Work Experience",
      suffix: "",
      color: "#60a5fa",
    },
    {
      icon: "🏆",
      value: 96,
      label: "AWS VPC Score",
      suffix: "%",
      color: "#10b981",
    },
    {
      icon: "⚡",
      value: 500,
      label: "GitHub Commits",
      suffix: "+",
      color: "#f59e0b",
    },
  ];

  ngOnInit() {
    this.animateStats();
  }

  private async animateStats() {
    // Wait a bit before starting
    await this.delay(300);

    for (let i = 0; i < this.stats.length; i++) {
      // Trigger slide-in animation
      this.animatedIndexes.update((indexes) => [...indexes, i]);

      // Animate number counting
      this.animateValue(i, 0, this.stats[i].value, 1000);

      // Delay before next stat
      await this.delay(200);
    }
  }

  private animateValue(
    index: number,
    start: number,
    end: number,
    duration: number,
  ) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      this.displayValues.update((values) => {
        const newValues = [...values];
        newValues[index] = Math.floor(current);
        return newValues;
      });
    }, 16);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
