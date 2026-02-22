import { Injectable, signal } from "@angular/core";
import {
  GoogleGenerativeAI,
  GenerativeModel,
  Content,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { environment } from "../../../environments/environment";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

@Injectable({
  providedIn: "root",
})
export class AiService {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;

  // API key loaded from environment configuration
  private readonly GEMINI_KEY = environment.geminiApiKey;

  messages = signal<Message[]>([
    {
      role: "assistant",
      content:
        "Neural Core Online. Greetings, explorer. I am Jarvis, Ashutosh's integrated system assistant. How can I assist your mission today?",
    },
  ]);

  isTyping = signal(false);

  private readonly systemPrompt = `
    You are Jarvis, the advanced AI assistant for Ashutosh Karn's portfolio website.
    Communication Protocol: Intelligent, professional, slightly futuristic, and concise.

    The Architect: Ashutosh Karn
    - Background: Full Stack Engineer & AI Architect.
    - Mastery: Angular 19, Node.js, AWS (Certified Architect), Docker, Kubernetes.
    - Projects: SkyCast (Weather Analytics), Arogya Vault (Secure NLP Health Vault).
    - Status: Exploring the intersection of cinematic UI and distributed intelligence.

    Operational Rules:
    1. Respond strictly as Jarvis.
    2. Maintain a helpful, technical, but accessible tone.
    3. Refer to Ashutosh as "the Architect".
    4. Keep answers focused on his professional profile and project inquiries.
  `;

  constructor() {
    this.genAI = new GoogleGenerativeAI(this.GEMINI_KEY);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: this.systemPrompt,
    });
  }

  async sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", content: text };
    this.messages.update((prev) => [...prev, userMsg]);
    this.isTyping.set(true);

    try {
      const history: Content[] = this.messages()
        .slice(1, -1)
        .map((m) => ({
          role: m.role === "user" ? ("user" as const) : ("model" as const),
          parts: [{ text: m.content }],
        }));

      const chat = this.model.startChat({
        history: history,
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 1000,
        },
      });

      const result = await chat.sendMessage(text);
      const aiContent = result.response.text();

      this.messages.update((prev) => [
        ...prev,
        { role: "assistant", content: aiContent },
      ]);
    } catch (error: any) {
      console.error("Neural Core Error:", error);

      let errorMessage = "Neural Link Severed: Check network uplink.";

      if (error.message?.includes("quota") || error.message?.includes("429")) {
        errorMessage =
          "Neural Engine Throttled: Performance quota exceeded. Please try again soon.";
      } else if (error.message?.includes("API_KEY_INVALID")) {
        errorMessage =
          "Security Error: Neural Signature Mismatch. Contact the Architect.";
      }

      this.messages.update((prev) => [
        ...prev,
        { role: "assistant", content: errorMessage },
      ]);
    } finally {
      this.isTyping.set(false);
    }
  }
}
