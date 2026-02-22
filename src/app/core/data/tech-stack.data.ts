/**
 * TECH STACK DATA SERVICE
 * Provides official technology logos and metadata
 */

export interface TechStackItem {
  name: string;
  logoPath: string;
  category:
    | "Language"
    | "Frontend"
    | "Backend"
    | "DevOps"
    | "Cloud"
    | "Database"
    | "AI/ML"
    | "Tools";
  proficiency: number;
  description?: string;
}

export class TechStackData {
  static readonly TECHNOLOGIES: TechStackItem[] = [
    // Languages
    {
      name: "Python",
      category: "Language",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency: 95,
      description: "ML, backend, automation",
    },
    {
      name: "TypeScript",
      category: "Language",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      proficiency: 95,
      description: "Strong typing, frontend/backend",
    },
    {
      name: "Java",
      category: "Language",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      proficiency: 88,
      description: "Enterprise backends",
    },
    {
      name: "JavaScript",
      category: "Language",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency: 92,
      description: "Full-stack development",
    },

    // Frontend
    {
      name: "Angular",
      category: "Frontend",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      proficiency: 94,
      description: "Enterprise SPAs",
    },
    {
      name: "React",
      category: "Frontend",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency: 88,
      description: "Component architecture",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      proficiency: 92,
      description: "Utility-first CSS",
    },

    // Backend
    {
      name: "Node.js",
      category: "Backend",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      proficiency: 92,
      description: "JavaScript runtime",
    },
    {
      name: "FastAPI",
      category: "Backend",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      proficiency: 88,
      description: "Modern Python APIs",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      proficiency: 90,
      description: "Relational database",
    },

    // DevOps & Cloud
    {
      name: "Docker",
      category: "DevOps",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      proficiency: 92,
      description: "Containerization",
    },
    {
      name: "Kubernetes",
      category: "DevOps",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      proficiency: 88,
      description: "Orchestration",
    },
    {
      name: "AWS",
      category: "Cloud",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      proficiency: 90,
      description: "Cloud infrastructure",
    },
    {
      name: "Azure",
      category: "Cloud",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      proficiency: 85,
      description: "Microsoft cloud",
    },

    // Tools & Other
    {
      name: "Git",
      category: "Tools",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      proficiency: 95,
      description: "Version control",
    },
    {
      name: "GitHub Actions",
      category: "DevOps",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      proficiency: 88,
      description: "CI/CD pipeline",
    },
    {
      name: "TensorFlow",
      category: "AI/ML",
      logoPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      proficiency: 85,
      description: "Machine learning",
    },
  ];

  /**
   * Group technologies by category
   */
  static groupByCategory(): Record<string, TechStackItem[]> {
    const grouped: Record<string, TechStackItem[]> = {};

    this.TECHNOLOGIES.forEach((tech) => {
      if (!grouped[tech.category]) {
        grouped[tech.category] = [];
      }
      grouped[tech.category].push(tech);
    });

    return grouped;
  }

  /**
   * Get technologies by category
   */
  static getByCategory(category: string): TechStackItem[] {
    return this.TECHNOLOGIES.filter((tech) => tech.category === category);
  }

  /**
   * Get unique categories
   */
  static getCategories(): string[] {
    return [...new Set(this.TECHNOLOGIES.map((tech) => tech.category))];
  }
}
