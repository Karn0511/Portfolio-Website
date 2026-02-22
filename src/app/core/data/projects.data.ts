/**
 * PROJECT DATA
 * Professional portfolio projects with complete metadata
 */

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  impact: string;
  year: number;
  status: "deployed" | "active" | "maintained";
  link?: string;
  github?: string;
}

export class ProjectsData {
  static readonly PROJECTS: ProjectItem[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      description: "Enterprise analytics system with real-time ML insights",
      longDescription:
        "Built a scalable analytics platform that processes 100M+ events daily, with real-time ML-based anomaly detection and predictive dashboards. Integrated with AWS data pipeline and implemented custom WebGL visualizations for complex datasets.",
      technologies: [
        "Python",
        "FastAPI",
        "TensorFlow",
        "React",
        "PostgreSQL",
        "AWS",
      ],
      role: "Lead Backend Architect",
      impact: "50% reduction in incident detection time",
      year: 2024,
      status: "deployed",
      github: "https://github.com",
      link: "https://example.com",
    },
    {
      id: 2,
      title: "Cloud Infrastructure Migration",
      description: "Legacy monolith to Kubernetes microservices",
      longDescription:
        "Led comprehensive migration of enterprise system from monolithic architecture to cloud-native microservices. Designed Kubernetes infrastructure, implemented CI/CD pipelines, and achieved zero-downtime deployment.",
      technologies: [
        "Kubernetes",
        "Docker",
        "AWS",
        "GitHub Actions",
        "Java",
        "Node.js",
      ],
      role: "DevOps & Architecture Lead",
      impact: "99.99% uptime SLA, 60% cost reduction",
      year: 2023,
      status: "deployed",
      github: "https://github.com",
    },
    {
      id: 3,
      title: "Real-Time Collaboration Platform",
      description: "Multi-user document editor with live synchronization",
      longDescription:
        "Developed real-time multiplayer document collaboration tool with operational transform algorithms, live cursors, and conflict-free synchronization. Built custom synchronization engine ensuring sub-100ms latency.",
      technologies: [
        "TypeScript",
        "Angular",
        "Node.js",
        "Redis",
        "WebSocket",
        "MongoDB",
      ],
      role: "Full-Stack Engineer",
      impact: "10K+ concurrent users, <100ms sync latency",
      year: 2023,
      status: "deployed",
      link: "https://example.com",
    },
    {
      id: 4,
      title: "Computer Vision Pipeline",
      description: "Real-time image processing with GPU acceleration",
      longDescription:
        "Implemented high-performance computer vision pipeline for production systems, achieving 60 FPS processing on 4K video streams. Optimized CUDA kernels and implemented efficient caching mechanisms.",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CUDA",
        "Docker",
        "Kubernetes",
      ],
      role: "ML Infrastructure Engineer",
      impact: "4K video at 60fps, 40% faster inference",
      year: 2022,
      status: "maintained",
    },
  ];

  static getAll(): ProjectItem[] {
    return this.PROJECTS;
  }

  static getById(id: number): ProjectItem | undefined {
    return this.PROJECTS.find((p) => p.id === id);
  }

  static getByStatus(status: string): ProjectItem[] {
    return this.PROJECTS.filter((p) => p.status === status);
  }

  static getFeatured(): ProjectItem[] {
    return this.PROJECTS.slice(0, 3);
  }
}
