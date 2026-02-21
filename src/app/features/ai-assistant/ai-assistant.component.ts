import {
  Component,
  EventEmitter,
  Output,
  inject,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AiService } from "../../core/services/ai.service";

@Component({
  selector: "app-ai-assistant",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="flex flex-col h-full bg-[#050505]/95 backdrop-blur-3xl font-sans relative overflow-hidden"
    >
      <!-- HUD Navigation Header -->
      <header
        class="p-6 md:p-10 border-b border-white/5 flex items-center justify-between relative z-10 glass-panel"
      >
        <div class="flex items-center gap-6">
          <div
            class="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl"
          >
            <span class="material-symbols-outlined text-2xl animate-pulse"
              >psychology</span
            >
          </div>
          <div>
            <div
              class="font-display text-base text-white tracking-[0.3em] uppercase font-black"
            >
              Jarvis_Core
            </div>
            <div
              class="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase font-black"
            >
              Status: Neural_Sync_Active
            </div>
          </div>
        </div>
        <button
          (click)="close.emit()"
          class="w-12 h-12 rounded-xl hover:bg-white/10 glass-panel flex items-center justify-center text-white/40 hover:text-white transition-all interactive"
        >
          <span class="material-symbols-outlined text-xl">close</span>
        </button>
      </header>

      <!-- Memory Matrix -->
      <div
        class="flex-1 overflow-y-auto p-6 md:p-12 space-y-10 md:space-y-16 scrollbar-hide relative z-10"
        #scrollContainer
      >
        <div
          *ngFor="let msg of aiService.messages()"
          [class]="
            'flex flex-col ' +
            (msg.role === 'user' ? 'items-end' : 'items-start')
          "
        >
          <div
            [class]="
              'max-w-[95%] md:max-w-[85%] p-6 md:p-8 rounded-[2rem] text-[15px] md:text-[16px] leading-relaxed transition-all shadow-2xl ' +
              (msg.role === 'user'
                ? 'bg-white text-black font-black rounded-tr-none px-8 py-6'
                : 'glass-panel text-slate-300 rounded-tl-none')
            "
          >
            {{ msg.content }}
          </div>

          <span
            class="text-[10px] font-mono text-white/20 mt-4 uppercase tracking-[0.3em] font-black"
          >
            {{ msg.role === "user" ? "Transmission" : "Neural_Response" }} //
            {{ timestamp }}
          </span>
        </div>

        <!-- Logic Processing Node -->
        <div
          *ngIf="aiService.isTyping()"
          class="flex items-center gap-5 glass-panel self-start px-8 py-5 rounded-2xl border border-white/5 animate-pulse"
        >
          <div class="flex gap-2">
            <div class="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div
              class="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"
            ></div>
            <div
              class="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"
            ></div>
          </div>
          <span
            class="text-[11px] font-display text-white tracking-[0.4em] uppercase font-black"
            >Synthesizing_Intelligence</span
          >
        </div>
      </div>

      <!-- Command Line Interface -->
      <footer
        class="p-6 md:p-10 border-t border-white/5 relative z-10 bg-[#050505]/80 glass-panel"
      >
        <div class="relative group interactive max-w-5xl mx-auto">
          <input
            type="text"
            [(ngModel)]="userInput"
            (keyup.enter)="sendMessage()"
            placeholder="ENTER_QUERY_FOR_JARVIS..."
            class="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-6 px-10 text-base font-sans focus:outline-none focus:border-white/30 transition-all placeholder:text-white/10 text-white shadow-2xl"
          />

          <button
            (click)="sendMessage()"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl"
          >
            <span class="material-symbols-outlined text-lg">send</span>
          </button>
        </div>
      </footer>

      <!-- Background HUD Aesthetics -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0"
      >
        <div
          class="w-full h-full text-[8px] font-mono break-all line-clamp-[100] leading-tight font-black"
        >
          {{ backgroundData }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class AiAssistantComponent implements AfterViewChecked {
  @Output() close = new EventEmitter<void>();
  @ViewChild("scrollContainer") private scrollContainer!: ElementRef;

  aiService = inject(AiService);
  userInput = "";
  timestamp = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  backgroundData = Array(3000).fill("10100110").join("");

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sendMessage() {
    if (!this.userInput.trim()) return;
    this.aiService.sendMessage(this.userInput);
    this.userInput = "";
  }
}
