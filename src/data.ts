export const siteInfo = {
  name: "Nelson Matsinhe",
  fullName: "Nelson Alexandre Matsinhe",
  role: "Full-Stack Developer",
  location: "Maputo, Mozambique",
  email: "nelson.a.matsinhe@gmail.com",
  social: {
    github: "https://github.com/NelsonMatsinhe",
    linkedin: "https://linkedin.com/in/nelsonmatsinhe",
    whatsapp: "https://wa.me/258845013839",
  },
};

export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  short: string;
  description: string;
  contribution: string;
  tech: string[];
  visual: "public" | "marketplace" | "commerce" | "mobile" | "yard";
  assetDir: string;
  image?: string;
  images?: string[];
}

export const projects: Project[] = [
  { id: "informacao-publica-tempo", number: "01", title: "Informação Pública Tempo", type: "Plataforma digital", short: "Uma plataforma de acesso e organização de informação pública da Revista Tempo.", description: "Um produto editorial pensado para tornar informação pública mais fácil de encontrar e consultar.", contribution: "Participação no desenvolvimento e evolução da plataforma digital.", tech: ["Laravel", "React"], visual: "public", assetDir: "projects/informacao-publica-tempo", image: "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.png", images: ["/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.png", "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-04-00.png"] },
  { id: "lugarcerto", number: "02", title: "LugarCerto.co.mz", type: "Marketplace de serviços", short: "Uma plataforma que liga clientes a prestadores de serviços.", description: "Uma experiência digital para pesquisa, comparação e contratação de prestadores.", contribution: "Desenvolvimento de produto numa plataforma de serviços.", tech: ["Web", "APIs"], visual: "marketplace", assetDir: "projects/lugarcerto" },
  { id: "klc-marketplace", number: "03", title: "KLC Marketplace", type: "Marketplace", short: "Melhoria contínua de uma plataforma de marketplace em produção.", description: "Trabalho focado em tornar a plataforma mais clara, estável e útil para quem a utiliza.", contribution: "UI/UX, SEO, correção de bugs, testes de usabilidade e performance.", tech: ["UI/UX", "SEO", "Performance"], visual: "marketplace", assetDir: "projects/klc-marketplace", image: "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.png", images: ["/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-00.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-43.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-58-00.png"] },
  { id: "precos-baixos", number: "04", title: "PrecosBaixos.co.mz", type: "E-commerce", short: "Plataforma de comércio eletrónico para catálogo e gestão de encomendas.", description: "Uma operação de e-commerce suportada por catálogo de produtos e fluxo de encomendas.", contribution: "Trabalho em catálogo, gestão de encomendas e e-commerce.", tech: ["WordPress", "WooCommerce"], visual: "commerce", assetDir: "projects/precos-baixos", image: "/portfolio/projects/precos-baixos/PB.png", images: ["/portfolio/projects/precos-baixos/PB.png"] },
  { id: "versalmovie", number: "05", title: "VersalMovie", type: "Aplicação mobile", short: "Aplicação móvel para consulta de filmes e séries através da API do TMDB.", description: "Uma experiência mobile para pesquisar títulos, explorar detalhes e guardar favoritos.", contribution: "Desenvolvimento da aplicação e integração com a API do TMDB.", tech: ["React Native", "TMDB API"], visual: "mobile", assetDir: "projects/versalmovie", image: "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.png", images: ["/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-29.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-50.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-50-07.png"] },
  { id: "sistema-estaleiro", number: "06", title: "Sistema de Gestão de Estaleiro", type: "Sistema interno", short: "Sistema web para gestão de estaleiros de materiais de construção.", description: "Uma ferramenta para reunir operações de produção, stock, vendas, clientes, matérias-primas, colaboradores e relatórios.", contribution: "Desenvolvimento de um sistema para apoiar operações internas.", tech: ["Java", "Web application"], visual: "yard", assetDir: "projects/sistema-gestao-estaleiro" },
];

export const capabilities = [
  { index: "01", title: "Aplicações Web", description: "Aplicações web modernas utilizando Laravel, React e APIs." },
  { index: "02", title: "Backend & APIs", description: "Sistemas backend, autenticação, integrações e lógica de negócio." },
  { index: "03", title: "Plataformas Digitais", description: "Dashboards, backoffices, portais e plataformas empresariais." },
  { index: "04", title: "Mobile", description: "Aplicações móveis com React Native e integração de serviços." },
];

export const services = [
  { index: "01", title: "Plataformas Web", description: "Aplicações e plataformas digitais completas, desde a interface até à lógica de negócio.", tech: "Laravel · React · PHP" },
  { index: "02", title: "Dashboards & Backoffice", description: "Sistemas administrativos para organizar operações, workflows e dados.", tech: "React · APIs · MySQL" },
  { index: "03", title: "APIs & Integrações", description: "Serviços backend e integrações que ligam produtos, dados e sistemas.", tech: "PHP · Laravel · PostgreSQL" },
  { index: "04", title: "Evolução de Produtos", description: "Manutenção, novas funcionalidades, performance e modernização de sistemas existentes.", tech: "Performance · SEO · UX" },
];

export const authority = [
  { value: "3+", label: "anos de experiência" },
  { value: "06", label: "projetos apresentados" },
  { value: "MZ", label: "baseado em Maputo" },
];

export const workProcess = [
  { index: "01", title: "Entender", description: "Clarificar o problema, o contexto do produto e as pessoas que o utilizam." },
  { index: "02", title: "Planear", description: "Organizar prioridades, fluxos e uma base técnica adequada ao produto." },
  { index: "03", title: "Construir", description: "Desenvolver interfaces, lógica e integrações com atenção aos detalhes." },
  { index: "04", title: "Evoluir", description: "Medir o que é possível observar, corrigir e melhorar continuamente." },
];

export const reasonsToWorkTogether = [
  "Código sustentável e arquitetura organizada",
  "Atenção a performance, acessibilidade e segurança",
  "Experiência com plataformas e sistemas reais",
  "Comunicação direta e colaboração próxima",
];

export const technologyGroups = [
  { label: "Core", items: ["Laravel", "PHP", "React", "JavaScript", "TypeScript"] },
  { label: "Data", items: ["MySQL", "PostgreSQL"] },
  { label: "Mobile", items: ["React Native"] },
  { label: "Plataforma", items: ["Docker", "Git", "Linux", "Nginx"] },
  { label: "CMS / Comércio", items: ["WordPress", "WooCommerce"] },
];

export const experience = [
  { company: "Revista Tempo", role: "Desenvolvimento", period: "2025 — Presente" },
  { company: "KLC Tecnologia e Inovação", role: "Desenvolvimento", period: "2025" },
  { company: "Startup-Tecal", role: "Desenvolvimento Web", period: "2024 — 2025" },
  { company: "GrowIT", role: "Desenvolvimento Web", period: "2022 — 2024" },
];
