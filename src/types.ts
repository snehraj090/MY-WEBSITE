export type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  summary: string;
  careerGoals: string;
  interests: string[];
  softSkills: string[];
  photoUrl?: string;
  stats: Array<{ label: string; value: string; icon: string }>;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    tools: string[];
    coreSubjects: string[];
    advancedJava?: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    stack: string[];
    github: string;
    demo: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    details: string;
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    year: string;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
    social: SocialLinks;
  };
  resumeUrl: string;
};
