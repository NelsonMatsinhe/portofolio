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
}

export const projects: Project[] = [
  { id: "informacao-publica-tempo", number: "01", title: "Informação Pública Tempo", type: "Plataforma digital", short: "Uma plataforma de acesso e organização de informação pública da Revista Tempo.", description: "Um produto editorial pensado para tornar informação pública mais fácil de encontrar e consultar.", contribution: "Participação no desenvolvimento e evolução da plataforma digital.", tech: ["Laravel", "React"], visual: "public" },
  { id: "lugarcerto", number: "02", title: "LugarCerto.co.mz", type: "Marketplace de serviços", short: "Uma plataforma que liga clientes a prestadores de serviços.", description: "Uma experiência digital para pesquisa, comparação e contratação de prestadores.", contribution: "Desenvolvimento de produto numa plataforma de serviços.", tech: ["Web", "APIs"], visual: "marketplace" },
  { id: "klc-marketplace", number: "03", title: "KLC Marketplace", type: "Marketplace", short: "Melhoria contínua de uma plataforma de marketplace em produção.", description: "Trabalho focado em tornar a plataforma mais clara, estável e útil para quem a utiliza.", contribution: "UI/UX, SEO, correção de bugs, testes de usabilidade e performance.", tech: ["UI/UX", "SEO", "Performance"], visual: "marketplace" },
  { id: "precos-baixos", number: "04", title: "PrecosBaixos.co.mz", type: "E-commerce", short: "Plataforma de comércio eletrónico para catálogo e gestão de encomendas.", description: "Uma operação de e-commerce suportada por catálogo de produtos e fluxo de encomendas.", contribution: "Trabalho em catálogo, gestão de encomendas e e-commerce.", tech: ["WordPress", "WooCommerce"], visual: "commerce" },
  { id: "versalmovie", number: "05", title: "VersalMovie", type: "Aplicação mobile", short: "Aplicação móvel para consulta de filmes e séries através da API do TMDB.", description: "Uma experiência mobile para pesquisar títulos, explorar detalhes e guardar favoritos.", contribution: "Desenvolvimento da aplicação e integração com a API do TMDB.", tech: ["React Native", "TMDB API"], visual: "mobile" },
  { id: "sistema-estaleiro", number: "06", title: "Sistema de Gestão de Estaleiro", type: "Sistema interno", short: "Sistema web para gestão de estaleiros de materiais de construção.", description: "Uma ferramenta para reunir operações de produção, stock, vendas, clientes, matérias-primas, colaboradores e relatórios.", contribution: "Desenvolvimento de um sistema para apoiar operações internas.", tech: ["Java", "Web application"], visual: "yard" },
];

export const capabilities = [
  { index: "01", title: "Aplicações Web", description: "Aplicações web modernas utilizando Laravel, React e APIs." },
  { index: "02", title: "Backend & APIs", description: "Sistemas backend, autenticação, integrações e lógica de negócio." },
  { index: "03", title: "Plataformas Digitais", description: "Dashboards, backoffices, portais e plataformas empresariais." },
  { index: "04", title: "Mobile", description: "Aplicações móveis com React Native e integração de serviços." },
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
