export interface Project {
  name: string;
  imgUrl: string;
  projectType: "web" | "mobile" | "desktop" | "api" | "other" ;
  status: "completed" | "in-progress" | "planned";
  liveUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  technologies: string[];
  description: string;
  features: string[];
  challenges: string[];
  dateCompleted?: string;
}
