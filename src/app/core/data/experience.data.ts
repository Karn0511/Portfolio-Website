/**
 * EXPERIENCE DATA
 * Professional work history with detailed metadata
 */

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  startYear: number;
  endYear?: number;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "contract" | "freelance";
}

export class ExperienceData {
  static readonly EXPERIENCES: ExperienceItem[] = [
    {
      id: 1,
      company: "Tech Corporation",
      role: "Senior Software Engineer",
      startYear: 2023,
      isCurrent: true,
      description:
        "Leading full-stack development and cloud architecture initiatives for enterprise systems.",
      achievements: [
        "Designed and deployed microservices architecture serving 10M+ users",
        "Led team of 5 engineers, mentored junior developers",
        "Reduced system latency by 65% through optimization",
        "Implemented CI/CD pipeline reducing deployment time from 4h to 15m",
      ],
      technologies: [
        "TypeScript",
        "Kubernetes",
        "AWS",
        "React",
        "Node.js",
        "PostgreSQL",
      ],
      type: "full-time",
    },
    {
      id: 2,
      company: "AI Venture Studio",
      role: "ML Infrastructure Engineer",
      startYear: 2021,
      endYear: 2023,
      isCurrent: false,
      description:
        "Built machine learning infrastructure and data pipelines for multiple AI products.",
      achievements: [
        "Created ML training pipeline supporting 50+ concurrent experiments",
        "Optimized model serving reducing inference latency by 55%",
        "Built monitoring and alerting system for 99.95% uptime",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Docker",
        "GCP",
        "Apache Airflow",
        "GPU Computing",
      ],
      type: "full-time",
    },
    {
      id: 3,
      company: "Cloud Startup",
      role: "Full-Stack Engineer",
      startYear: 2019,
      endYear: 2021,
      isCurrent: false,
      description:
        "Developed full-stack features from concept through production deployment.",
      achievements: [
        "Built real-time collaboration features serving 50K+ users",
        "Improved frontend performance, FCP reduced by 70%",
        "Mentored 2 junior engineers",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "React",
        "AWS",
        "GraphQL",
      ],
      type: "full-time",
    },
  ];

  static getAll(): ExperienceItem[] {
    return this.EXPERIENCES;
  }

  static getCurrent(): ExperienceItem | undefined {
    return this.EXPERIENCES.find((e) => e.isCurrent);
  }

  static getByType(type: string): ExperienceItem[] {
    return this.EXPERIENCES.filter((e) => e.type === type);
  }

  static getYearsOfExperience(): number {
    const current = new Date().getFullYear();
    const oldest = Math.min(...this.EXPERIENCES.map((e) => e.startYear));
    return current - oldest;
  }
}
