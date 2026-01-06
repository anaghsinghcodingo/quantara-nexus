
export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export interface Branch {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  icon: string;
  services: string[];
  projects: Project[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum BranchType {
  GAMES = 'games',
  AI = 'ai',
  SOFTWARE = 'software',
  DESIGN = 'design',
  MEDIA = 'media',
  EDUCATION = 'education'
}
