
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: {
    type: 'Play store' | 'App Store' | 'Project Link';
    url: string;
  }[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    achievements: string[];
  };
  certifications: string[];
  interests: string[];
}
