/**
 * PROJECTS DATA
 * Professional project portfolio showcase
 */

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  role: string;
  impact: string;
  technologies: string[];
  status: "deployed" | "active" | "maintained";
  github?: string;
  link?: string;
}

export class ProjectsData {
  static readonly PROJECTS: ProjectItem[] = [
    {
      id: "01",
      title: "Arogya Vault Health Record App",
      year: "2024",
      description:
        "Secure platform for managing digital medical records with Role-Based Access Control.",
      longDescription:
        "Developed a comprehensive health management system utilizing Angular 18 and Node.js. Implemented NLP-driven summarization using advanced libraries to extract key insights from complex medical documents. Architected secure storage on AWS S3 and containerized the entire ecosystem with Docker.",
      role: "Lead Engineer",
      impact:
        "Secured health data for users and automated document summarization via AI.",
      technologies: [
        "Angular 18",
        "Node.js",
        "AWS S3",
        "Docker",
        "MongoDB",
        "NLP",
      ],
      status: "deployed",
      github: "https://github.com/Karn0511/Arogya-Vault-Health-Record-App",
    },
    {
      id: "02",
      title: "SkyCast Weather Advance App",
      year: "2024",
      description:
        "Real-time weather application with 5-day forecast and optimized user interface.",
      longDescription:
        "Built a high-performance weather monitoring system with real-time updates and predictive 5-day forecasting. Integrated OpenWeatherMap API with custom interface logic and used TypeScript/React for predictable state management and elite UI responsiveness.",
      role: "Full-Stack Developer",
      impact:
        "Provided accurate environmental data with zero-latency interface updates.",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeatherMap API",
        "Tailwind CSS",
      ],
      status: "deployed",
      github: "https://github.com/Karn0511/skycast",
      link: "https://skycast-advance.web.app", // Placeholder assuming common firebase structure
    },
  ];

  static getAll(): ProjectItem[] {
    return this.PROJECTS;
  }
}
