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
  startMonth?: string;
  endMonth?: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "full-time" | "contract" | "freelance" | "internship";
}

export class ExperienceData {
  static readonly EXPERIENCES: ExperienceItem[] = [
    {
      id: 1,
      company: "Internshala Trainings",
      role: "Web Development Intern",
      startYear: 2024,
      endYear: 2025,
      startMonth: "Dec",
      endMonth: "Feb",
      isCurrent: false,
      description:
        "Comprehensive training and implementation of advanced web technologies.",
      achievements: [
        "Completed 8-week intensive training in HTML, CSS, Bootstrap, PHP, and JavaScript",
        "Mastered React.js and AI web integration modules",
        "Built responsive and user-friendly web applications with complex front-end and back-end integration",
      ],
      technologies: [
        "React",
        "JavaScript",
        "PHP",
        "Bootstrap",
        "AI Integration",
      ],
      type: "internship",
    },
    {
      id: 2,
      company: "SmartED (Collaborators: Microsoft, Roadpil)",
      role: "Artificial Intelligence Intern",
      startYear: 2024,
      endYear: 2024,
      startMonth: "May",
      endMonth: "July",
      isCurrent: false,
      description:
        "Working on real-world AI implementation and data analytics.",
      achievements: [
        "Collaborated on real-world AI projects involving machine learning and data analysis",
        "Managed model deployment pipelines and performance monitoring",
        "Strengthened problem-solving skills through hands-on neural network implementations",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Model Deployment",
      ],
      type: "internship",
    },
    {
      id: 3,
      company: "Internshala Trainings",
      role: "Cloud Computing Intern (AWS)",
      startYear: 2024,
      endYear: 2024,
      startMonth: "April",
      endMonth: "July",
      isCurrent: false,
      description: "Architecture and optimization of cloud-native solutions.",
      achievements: [
        "Completed AWS Cloud Computing course with 90% score; recognized as a top performer",
        "Gained expertise in designing secure, scalable, and cost-effective cloud solutions",
        "Implemented high-availability infrastructure patterns using AWS core services",
      ],
      technologies: ["AWS", "Cloud Architecture", "Security", "Scalability"],
      type: "internship",
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
    return 1; // Based on the internship durations in 2024-2025
  }
}
