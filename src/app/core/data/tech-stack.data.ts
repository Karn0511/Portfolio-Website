/**
 * TECH STACK DATA
 * Professional arsenal of languages, frameworks, and tools
 */

export interface TechStackItem {
  id: string;
  name: string;
  logo: string;
  color: string;
  category: "language" | "frontend" | "backend" | "cloud" | "tool";
  description: string;
}

export class TechStackData {
  static readonly TECHNOLOGIES: TechStackItem[] = [
    // Languages
    {
      id: "ts",
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      category: "language",
      description: "Static typing and advanced object-oriented patterns.",
    },
    {
      id: "js",
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      category: "language",
      description: "Modern ES6+ development and asynchronous programming.",
    },
    {
      id: "py",
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      category: "language",
      description: "AI, machine learning, and automation scripting.",
    },
    {
      id: "java",
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#007396",
      category: "language",
      description: "Enterprise backend logic and robust systems.",
    },

    // Frontend
    {
      id: "ang",
      name: "Angular 18",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      color: "#DD0031",
      category: "frontend",
      description: "Enterprise-scale reactive architecture and signals.",
    },
    {
      id: "react",
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      category: "frontend",
      description: "Component-based UI and high-performance states.",
    },
    {
      id: "tw",
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      color: "#06B6D4",
      category: "frontend",
      description: "Utility-first CSS and modern responsive design.",
    },

    // Backend
    {
      id: "node",
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      category: "backend",
      description: "Scalable server-side runtimes and microservices.",
    },
    {
      id: "ex",
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#000000",
      category: "backend",
      description: "Minimalist web framework for Node.js APIs.",
    },

    // Cloud & DevOps
    {
      id: "aws",
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      color: "#FF9900",
      category: "cloud",
      description: "Cloud-native infrastructure and architectural solutions.",
    },
    {
      id: "k8s",
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      color: "#326CE5",
      category: "cloud",
      description: "Orchestration and management of containerized apps.",
    },
    {
      id: "docker",
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      category: "cloud",
      description: "Containerization and immutable environment layers.",
    },
    {
      id: "azure",
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      color: "#0078D4",
      category: "cloud",
      description: "Alternative cloud ecosystem and enterprise scale.",
    },

    // Tools
    {
      id: "cicd",
      name: "CI/CD",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#6e5494",
      category: "tool",
      description: "Automated pipelines via GitHub Actions and workflows.",
    },
    {
      id: "figma",
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
      category: "tool",
      description: "Systems-UI design and collaborative prototyping.",
    },
  ];

  static getByCategory(category: string): TechStackItem[] {
    return this.TECHNOLOGIES.filter((t) => t.category === category);
  }
}
