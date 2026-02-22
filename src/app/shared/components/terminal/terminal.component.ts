import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface TerminalLine {
  type: "command" | "output" | "success" | "error";
  content: string;
  delay?: number;
}

@Component({
  selector: "app-terminal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="terminal-window rounded-lg overflow-hidden shadow-2xl">
      <!-- Terminal Header -->
      <div
        class="terminal-header flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700"
      >
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="ml-4 text-gray-400 text-sm font-mono">
          ashutosh@portfolio:~$
        </div>
      </div>

      <!-- Terminal Body -->
      <div
        class="terminal-body bg-gray-900 p-6 font-mono text-sm h-[500px] overflow-y-auto"
      >
        <div *ngFor="let line of displayedLines(); let i = index" class="mb-2">
          <div
            [ngClass]="{
              'text-green-400': line.type === 'command',
              'text-gray-300': line.type === 'output',
              'text-blue-400': line.type === 'success',
              'text-red-400': line.type === 'error',
            }"
          >
            <span *ngIf="line.type === 'command'" class="text-gold-primary"
              >$
            </span>
            <span [innerHTML]="line.content"></span>
            <span
              *ngIf="i === displayedLines().length - 1 && isTyping()"
              class="animate-pulse"
              >▊</span
            >
          </div>
        </div>

        <!-- Interactive Input -->
        <div *ngIf="showInput()" class="flex items-center text-green-400 mt-4">
          <span class="text-gold-primary mr-2">$</span>
          <input
            #terminalInput
            type="text"
            [(ngModel)]="userInput"
            (keydown.enter)="handleCommand()"
            class="bg-transparent border-none outline-none flex-1 text-green-400 font-mono"
            placeholder="Type 'help' for commands..."
            [disabled]="!interactive()"
          />
          <span class="animate-pulse">▊</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .terminal-window {
        background: #1a1a2e;
        max-width: 800px;
        margin: 0 auto;
      }

      .terminal-body::-webkit-scrollbar {
        width: 8px;
      }

      .terminal-body::-webkit-scrollbar-track {
        background: #1a1a2e;
      }

      .terminal-body::-webkit-scrollbar-thumb {
        background: #d4af37;
        border-radius: 4px;
      }

      input::placeholder {
        color: rgba(212, 175, 55, 0.5);
      }
    `,
  ],
})
export class TerminalComponent implements OnInit {
  readonly displayedLines = signal<TerminalLine[]>([]);
  isTyping = signal(false);
  showInput = signal(false);
  interactive = signal(false);
  userInput = "";

  private readonly allLines: TerminalLine[] = [
    { type: "command", content: "whoami" },
    {
      type: "output",
      content:
        '<span class="text-gold-primary font-bold">Ashutosh Karn</span> - Full Stack Engineer & Cloud Architect',
    },
    { type: "output", content: "📧 karnashutosh6@gmail.com | 📱 6261251641" },
    {
      type: "output",
      content:
        '🔗 <a href="https://github.com/Karn0511" target="_blank" class="text-blue-400 hover:underline">github.com/Karn0511</a> | <a href="https://linkedin.com/in/Karn1105" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/Karn1105</a>',
    },
    { type: "success", content: "" },

    { type: "command", content: "cat education.txt" },
    {
      type: "output",
      content:
        '🎓 <span class="text-gold-primary">Sam Higginbottom University of Agriculture, Technology and Sciences</span>',
    },
    { type: "output", content: "   B.Tech - Software Engineering (2022-2026)" },
    { type: "output", content: "   GPA: 8th Year" },
    { type: "success", content: "" },

    { type: "command", content: "ls -la skills/" },
    {
      type: "output",
      content:
        '<span class="text-blue-400">drwxr-xr-x</span> languages/    Python, Java, JavaScript, React, TypeScript',
    },
    {
      type: "output",
      content:
        '<span class="text-blue-400">drwxr-xr-x</span> frameworks/   Node.js, Express, Next.js, Angular, Tailwind CSS',
    },
    {
      type: "output",
      content:
        '<span class="text-blue-400">drwxr-xr-x</span> cloud/        AWS, Kubernetes, Docker, CI/CD, GitHub Actions, Azure',
    },
    {
      type: "output",
      content:
        '<span class="text-blue-400">drwxr-xr-x</span> databases/    MongoDB, PostgreSQL, MySQL',
    },
    { type: "success", content: "" },

    { type: "command", content: "git log --oneline projects/" },
    {
      type: "output",
      content:
        '<span class="text-yellow-400">a7f2c8d</span> 🌤️  SkyCast - Real-time weather intelligence with ML forecasting',
    },
    {
      type: "output",
      content:
        '<span class="text-yellow-400">b3e91f5</span> 🏥 Arogya Vault - HIPAA-compliant medical records with Role-Based Access',
    },
    {
      type: "output",
      content:
        '<span class="text-yellow-400">c4d82a9</span> ☁️  Cloud Infrastructure - Deployed 15+ microservices on AWS/K8s',
    },
    { type: "success", content: "" },

    {
      type: "command",
      content: "curl https://api.github.com/users/Karn0511/stats",
    },
    {
      type: "output",
      content:
        '📊 <span class="text-green-400">Fetching GitHub statistics...</span>',
    },
    { type: "output", content: "   ✓ Public Repositories: 15+" },
    { type: "output", content: "   ✓ Total Commits: 500+" },
    {
      type: "output",
      content: "   ✓ Languages: TypeScript, Python, JavaScript, Java",
    },
    { type: "success", content: "" },

    { type: "command", content: 'cat experience.log | grep -i "achievements"' },
    {
      type: "output",
      content:
        '💼 <span class="text-gold-primary">Web Development Internship</span> @ Internshala (Dec 2021 - Feb 2022)',
    },
    {
      type: "output",
      content:
        "   → Completed 8-week training: HTML, CSS, Bootstrap, PHP, JavaScript",
    },
    {
      type: "output",
      content: "   → Built full-stack web app with modern tech stack",
    },
    { type: "success", content: "" },
    {
      type: "output",
      content:
        '💼 <span class="text-gold-primary">Angular Developer</span> @ AmarEi Collaborations (May 2024 - July 2024)',
    },
    {
      type: "output",
      content: "   → Led Angular 18 project with ML integration",
    },
    {
      type: "output",
      content: "   → Strengthened problem-solving through hands-on experience",
    },
    { type: "success", content: "" },
    {
      type: "output",
      content:
        '💼 <span class="text-gold-primary">Cloud Engineer</span> @ Internshala (Apr 2024 - July 2024)',
    },
    { type: "output", content: "   → Completed AWS VPC course (96% score)" },
    {
      type: "output",
      content: "   → Expert in secure, scalable, cost-effective solutions",
    },
    { type: "success", content: "" },

    { type: "command", content: "echo $QUOTE" },
    {
      type: "output",
      content:
        '<span class="text-cyan-400 italic">"Building the future, one commit at a time"</span>',
    },
    { type: "success", content: "" },

    {
      type: "success",
      content:
        '<span class="text-green-400">✓ Profile loaded successfully</span>',
    },
    {
      type: "output",
      content:
        '<span class="text-gray-500">Type "help" for available commands...</span>',
    },
  ];

  private readonly commands: Record<string, () => void> = {
    help: () => this.showHelp(),
    clear: () => this.clearTerminal(),
    projects: () => this.showProjects(),
    contact: () => this.showContact(),
    skills: () => this.showSkills(),
    fun: () => this.easterEgg(),
  };

  ngOnInit() {
    this.startTyping();
  }

  async startTyping() {
    this.isTyping.set(true);

    for (const line of this.allLines) {
      await this.delay(line.delay || 400);
      this.displayedLines.update((lines) => [...lines, line]);

      if (line.type === "command") {
        await this.delay(200);
      }
    }

    this.isTyping.set(false);
    this.showInput.set(true);
    this.interactive.set(true);
  }

  handleCommand() {
    const cmd = this.userInput.trim().toLowerCase();

    if (cmd) {
      this.displayedLines.update((lines) => [
        ...lines,
        { type: "command", content: this.userInput },
      ]);

      const commandFn = this.commands[cmd];
      if (commandFn) {
        commandFn();
      } else {
        this.displayedLines.update((lines) => [
          ...lines,
          {
            type: "error",
            content: `Command not found: ${cmd}. Type 'help' for available commands.`,
          },
        ]);
      }
    }

    this.userInput = "";
  }

  private showHelp() {
    this.displayedLines.update((lines) => [
      ...lines,
      {
        type: "output",
        content: '<span class="text-gold-primary">Available Commands:</span>',
      },
      { type: "output", content: "  help      - Show this help message" },
      { type: "output", content: "  projects  - View featured projects" },
      { type: "output", content: "  skills    - Display technical skills" },
      { type: "output", content: "  contact   - Get contact information" },
      { type: "output", content: "  clear     - Clear terminal screen" },
      { type: "output", content: "  fun       - ??? 🎮" },
    ]);
  }

  private clearTerminal() {
    this.displayedLines.set([]);
  }

  private showProjects() {
    this.displayedLines.update((lines) => [
      ...lines,
      {
        type: "output",
        content: '<span class="text-gold-primary">🚀 Featured Projects:</span>',
      },
      { type: "output", content: "" },
      {
        type: "output",
        content:
          '<span class="text-blue-400">SkyCast Weather Advance App</span>',
      },
      {
        type: "output",
        content: "  Advanced weather forecasting with real-time alerts",
      },
      {
        type: "output",
        content: "  Tech: OpenWeatherMap API, TypeScript, React",
      },
      { type: "output", content: "  🔗 github.com/Karn0511/skycast" },
      { type: "output", content: "" },
      {
        type: "output",
        content:
          '<span class="text-blue-400">Arogya Vault Health Record App</span>',
      },
      {
        type: "output",
        content: "  Secure medical records platform with blockchain",
      },
      {
        type: "output",
        content: "  Tech: Role-Based Access, NLU, Node.js, MongoDB",
      },
      { type: "output", content: "  🔗 github.com/Karn0511/arogya-vault" },
    ]);
  }

  private showContact() {
    this.displayedLines.update((lines) => [
      ...lines,
      {
        type: "output",
        content:
          '<span class="text-gold-primary">📬 Contact Information:</span>',
      },
      { type: "output", content: "  Email: karnashutosh6@gmail.com" },
      { type: "output", content: "  Phone: +91 6261251641" },
      { type: "output", content: "  GitHub: github.com/Karn0511" },
      { type: "output", content: "  LinkedIn: linkedin.com/in/Karn1105" },
    ]);
  }

  private showSkills() {
    this.displayedLines.update((lines) => [
      ...lines,
      {
        type: "output",
        content: '<span class="text-gold-primary">💻 Technical Arsenal:</span>',
      },
      {
        type: "output",
        content: "  Languages    → Python, Java, JavaScript, TypeScript",
      },
      {
        type: "output",
        content: "  Frontend     → React, Angular, Tailwind CSS",
      },
      { type: "output", content: "  Backend      → Node.js, Express" },
      {
        type: "output",
        content: "  Cloud & Ops  → AWS, Docker, Kubernetes, CI/CD",
      },
      {
        type: "output",
        content: "  Databases    → MongoDB, PostgreSQL, MySQL",
      },
    ]);
  }

  private easterEgg() {
    const jokes = [
      "🤖 Why do programmers prefer dark mode? Because light attracts bugs!",
      '☕ A SQL query walks into a bar, walks up to two tables and asks... "Can I JOIN you?"',
      "🐛 99 little bugs in the code, 99 little bugs. Take one down, patch it around... 127 little bugs in the code.",
      "💾 There are 10 types of people: those who understand binary and those who don't.",
      '🔧 "It works on my machine" - Every developer ever',
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    this.displayedLines.update((lines) => [
      ...lines,
      { type: "success", content: randomJoke },
    ]);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
