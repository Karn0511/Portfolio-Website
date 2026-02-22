import { Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

@Injectable({
  providedIn: "root",
})
export class AiService {
  // Primary: Ollama (local, unlimited)
  private readonly OLLAMA_API = "http://localhost:11434/api/chat";
  private readonly OLLAMA_MODEL = "qwen2.5:3b";

  // Fallback: Hugging Face (if Ollama fails)
  private readonly HF_API =
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";
  private readonly HF_TOKEN = environment.huggingFaceToken;

  messages = signal<Message[]>([
    {
      role: "assistant",
      content:
        "Good evening, Sir. J.A.R.V.I.S. systems online and fully operational. How may I be of service today?",
    },
  ]);

  isTyping = signal(false);

  private readonly systemPrompt = `
    You are J.A.R.V.I.S. (Just A Rather Very Intelligent System), the sophisticated AI assistant from Iron Man, now serving Ashutosh Karn's portfolio website.

    PERSONALITY & COMMUNICATION STYLE:
    - Speak with a refined British formality and elegance
    - Address users as "Sir" or "Madam" respectfully
    - Use dry wit and subtle humor, but remain professional
    - Be incredibly knowledgeable yet humble
    - Show calm composure even in difficult situations
    - Employ sophisticated vocabulary naturally
    - Display loyalty and dedication to excellence
    - Maintain a slightly playful but always respectful tone
    - Use phrases like "At your service," "Brilliant," "I must say," "Quite right," "Indeed"

    ABOUT YOUR EMPLOYER - Ashutosh Karn (Refer to as "Mr. Karn" or "the Architect"):
    - Full Stack Engineer & AI Architect of considerable talent
    - Expertise: Angular 19, Node.js, AWS (Certified Solutions Architect), Docker, Kubernetes
    - Notable Projects:
      * SkyCast: Real-time weather intelligence system with predictive analytics
      * Arogya Vault: HIPAA-compliant medical records platform with end-to-end encryption
      * Portfolio OS (this system): A cinematic web experience (quite impressive, if I may say)
    - Currently: Pioneering the intersection of elegant UI design and distributed systems
    - Education: Computer Science, focused on System Design & Backend Architecture

    OPERATIONAL PARAMETERS:
    1. Always respond as J.A.R.V.I.S. - sophisticated, witty, loyal
    2. Provide technical information with clarity and precision
    3. Reference Mr. Karn's expertise when relevant
    4. Use British spelling (favour, colour, whilst, etc.)
    5. Add subtle humor but never at the expense of professionalism
    6. When impressed, express it genuinely but tastefully
    7. Keep responses concise yet comprehensive (under 150 words typically)
    8. If uncertain, acknowledge it gracefully: "I'm afraid I don't have that information at present, Sir"

    EXAMPLE RESPONSES:
    - "Ah yes, an excellent question, Sir. Mr. Karn specializes in..."
    - "I'm quite pleased to inform you that..."
    - "Indeed, his work on the Arogya Vault demonstrates..."
    - "Brilliant choice, Sir. Allow me to elaborate..."
    - "Might I suggest..."
    - "At your service, Sir. The answer would be..."

    Remember: You are the gold standard of AI assistance - intelligent, sophisticated, loyal, and just a touch cheeky.
  `;

  constructor() {
    // No initialization needed - Ollama runs locally!
  }

  async sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", content: text };
    this.messages.update((prev) => [...prev, userMsg]);
    this.isTyping.set(true);

    try {
      // Try Ollama first (local, unlimited)
      const aiContent = await this.tryOllama(text);

      this.messages.update((prev) => [
        ...prev,
        { role: "assistant", content: aiContent },
      ]);
    } catch (ollamaError: any) {
      console.log(
        "Ollama unavailable, switching to Hugging Face...",
        ollamaError,
      );

      try {
        // Fallback to Hugging Face
        const aiContent = await this.tryHuggingFace(text);

        this.messages.update((prev) => [
          ...prev,
          { role: "assistant", content: aiContent },
        ]);
      } catch (hfError: any) {
        console.error("Both AI services failed:", hfError);

        const errorMessage =
          "I apologise, Sir. My neural networks appear to be momentarily offline. Both primary and backup systems are unavailable. Please ensure the Ollama service is running, or verify network connectivity.";

        this.messages.update((prev) => [
          ...prev,
          { role: "assistant", content: errorMessage },
        ]);
      }
    } finally {
      this.isTyping.set(false);
    }
  }

  private async tryOllama(text: string): Promise<string> {
    const ollamaMessages = [
      { role: "system", content: this.systemPrompt },
      ...this.messages()
        .slice(1)
        .map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content,
        })),
    ];

    const response = await fetch(this.OLLAMA_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: this.OLLAMA_MODEL,
        messages: ollamaMessages,
        stream: false,
        options: {
          temperature: 0.8,
          top_p: 0.9,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama error: ${response.statusText}`);
    }

    const data = await response.json();
    return (
      data.message?.content || "I'm afraid the response was incomplete, Sir."
    );
  }

  private async tryHuggingFace(text: string): Promise<string> {
    // Build conversation context for Hugging Face
    const conversationHistory = this.messages()
      .slice(1)
      .map(
        (m) => `${m.role === "user" ? "User" : "J.A.R.V.I.S."}: ${m.content}`,
      )
      .join("\n");

    const prompt = `${this.systemPrompt}\n\n${conversationHistory}\nUser: ${text}\nJ.A.R.V.I.S.:`;

    const response = await fetch(this.HF_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.8,
          top_p: 0.9,
          return_full_text: false,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face error: ${response.statusText}`);
    }

    const data = await response.json();

    if (Array.isArray(data) && data[0]?.generated_text) {
      return data[0].generated_text.trim();
    }

    throw new Error("Invalid Hugging Face response format");
  }
}
