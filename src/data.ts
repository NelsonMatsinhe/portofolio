interface SocialLinks {
  github: string;
  linkedin: string;
  whatsapp: string;
}

export interface SkillSet {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export const siteInfo = {
  name: "Nelson Alexandre Matsinhe",
  role: "Desenvolvedor Full-Stack | Web & Mobile",
  email: "seu.email@exemplo.com",
  location: "Maputo, Moçambique",
  social: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://www.linkedin.com/in/seu-usuario",
    whatsapp: "https://wa.me/258xxxxxxxxx"
  } as SocialLinks
};

export const skills: SkillSet = {
  frontend: ["React", "React Native", "Vue.js", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
  backend: ["Node.js", "Laravel", "PHP", "MySQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "Postman", "Android Studio", "Xcode"]
};

export interface Project {
  id: number;
  title: string;
  short: string;
  description: string;
  tech: string[];
  image: string;
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    short: "Site pessoal com React + Tailwind",
    description: "Aplicação single-page com seções, animações suaves e layout responsivo.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    image: "/project-1.jpg",
    repo: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Dashboard Admin",
    short: "Painel administrativo com gráficos e filtros",
    description: "CRUD completo, autenticação e visualização de métricas.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/project-2.jpg",
    repo: "#",
    demo: "#"
  }
];