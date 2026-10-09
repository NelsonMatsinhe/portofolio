export const siteInfo = {
  name: "Nelson Matsinhe",
  fullName: "Nelson Alexandre Matsinhe",
  role: "Desenvolvedor Full-Stack",
  location: "Maputo, Moçambique",
  email: "nelson.a.matsinhe@gmail.com",
  phone: "+258 845 013 839",
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
  focus?: string[];
  features: string[];
  url?: string;
  visual: "public" | "marketplace" | "commerce" | "mobile" | "yard";
  assetDir: string;
  image?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "informacao-publica-tempo", number: "01", title: "Informação Pública Tempo", type: "Plataforma digital",
    short: "Acesso organizado à informação pública da Revista Tempo.",
    description: "Portal que reúne conteúdos de interesse público e facilita a sua consulta e navegação.",
    contribution: "Participação no desenvolvimento da plataforma e na modernização tecnológica do produto editorial.",
    tech: ["Laravel", "React"], focus: ["Organização de conteúdos", "Acesso à informação"],
    features: ["Organização e consulta de informação pública", "Navegação pelos conteúdos do portal"],
    url: "https://infopublica.tempo.co.mz/", visual: "public", assetDir: "projects/informacao-publica-tempo",
    image: "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.png",
    images: ["/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.png", "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-04-00.png"],
  },
  {
    id: "lugarcerto", number: "05", title: "LugarCerto.co.mz", type: "Marketplace de serviços",
    short: "Plataforma para encontrar e contratar prestadores de serviços.",
    description: "Liga clientes a prestadores e ajuda a pesquisar, comparar e contratar serviços.",
    contribution: "Participação no desenvolvimento da plataforma. A stack específica não está confirmada.",
    tech: [], focus: [],
    features: ["Pesquisa de prestadores", "Comparação de serviços", "Contacto e contratação de prestadores"],
    url: "https://lugarcerto.co.mz/", visual: "marketplace", assetDir: "projects/lugarcerto",
  },
  {
    id: "klc-marketplace", number: "03", title: "KLC Marketplace", type: "Marketplace",
    short: "Contribuições para a evolução funcional e visual de um marketplace em produção.",
    description: "Marketplace cuja experiência, apresentação e estabilidade receberam melhorias contínuas.",
    contribution: "Participação na melhoria do layout e da experiência de utilização, na resolução de problemas e na optimização de SEO, desempenho e acessibilidade.",
    tech: [], focus: ["Experiência de utilização", "SEO", "Desempenho", "Acessibilidade"],
    features: ["Melhorias funcionais e visuais", "Correcção de problemas", "Optimização de SEO e desempenho"],
    url: "https://klcmarket.shop/", visual: "marketplace", assetDir: "projects/klc-marketplace",
    image: "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.png",
    images: ["/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-00.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-43.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-58-00.png"],
  },
  {
    id: "precos-baixos", number: "04", title: "PrecosBaixos.co.mz", type: "Comércio electrónico",
    short: "Loja online com catálogo de produtos e gestão de encomendas.",
    description: "Plataforma de comércio electrónico baseada em WordPress e WooCommerce.",
    contribution: "Participação no desenvolvimento e manutenção do catálogo, dos fluxos de encomenda e das funcionalidades WooCommerce.",
    tech: ["WordPress", "WooCommerce"], focus: ["Catálogo", "Encomendas"],
    features: ["Catálogo de produtos", "Gestão de encomendas", "Funcionalidades de comércio electrónico"],
    url: "https://precosbaixos.co.mz/", visual: "commerce", assetDir: "projects/precos-baixos",
    image: "/portfolio/projects/precos-baixos/PB.png", images: ["/portfolio/projects/precos-baixos/PB.png"],
  },
  {
    id: "versalmovie", number: "02", title: "VersalMovie", type: "Aplicação móvel",
    short: "Aplicação móvel para explorar filmes e séries através da API do TMDB.",
    description: "Aplicação React Native para pesquisar títulos e consultar informação sobre filmes e séries.",
    contribution: "Desenvolvimento da aplicação e integração com a API do TMDB.",
    tech: ["React Native", "TMDB API"], focus: [],
    features: ["Pesquisa de filmes e séries", "Detalhes e elenco", "Consulta de trailers", "Gestão de favoritos"],
    visual: "mobile", assetDir: "projects/versalmovie",
    image: "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.png",
    images: ["/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-29.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-50.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-50-07.png"],
  },
  {
    id: "sistema-estaleiro", number: "06", title: "Sistema de Gestão de Estaleiro", type: "Sistema de gestão",
    short: "Sistema web para gerir operações de estaleiros de materiais de construção.",
    description: "Sistema de apoio à gestão operacional de estaleiros de materiais de construção.",
    contribution: "Desenvolvimento do sistema para reunir informação e apoiar a gestão das operações.",
    tech: ["Java"], focus: [],
    features: ["Produção e matérias-primas", "Stock e vendas", "Clientes e colaboradores", "Relatórios"],
    visual: "yard", assetDir: "projects/sistema-gestao-estaleiro",
  },
];

export const primaryTechnologies = ["Laravel", "React", "PHP", "JavaScript", "TypeScript", "MySQL", "PostgreSQL", "Docker", "Git"];

export const secondaryTechnologyGroups = [
  { label: "Frontend e mobile", items: ["HTML5", "CSS3", "Bootstrap", "Axios", "React Native", "Vue.js"] },
  { label: "Backend e dados", items: ["Java", "SQL", "Oracle", "Hibernate"] },
  { label: "CMS e plataformas", items: ["WordPress", "WooCommerce", "Microsoft SharePoint"] },
  { label: "Ferramentas", items: ["GitHub", "Visual Studio Code", "PhpStorm", "Postman", "Insomnia", "Figma", "Windsurf"] },
  { label: "Sistemas e operação web", items: ["Gestão de domínios e alojamento", "Nginx", "Backups", "Linux", "Windows"] },
  { label: "Outros", items: ["Python básico", "Google Analytics", "Android Studio", "Photoshop"] },
];

export const experience = [
  {
    company: "Revista Tempo, Lda", role: "Desenvolvedor Web", period: "Dezembro de 2025 — Presente",
    summary: "Modernização do portal principal e desenvolvimento de plataformas de informação com Laravel e React.",
  },
  {
    company: "KLC Tecnologia e Inovação, Lda", role: "Colaborador de Desenvolvimento", period: "Junho de 2025 — Dezembro de 2025",
    summary: "Melhoria contínua do KLC Marketplace e criação de soluções web para clientes.",
  },
  {
    company: "Startup-Tecal Consultoria", role: "Desenvolvedor Web e Gestor de Website", period: "2024 — 2025",
    summary: "Desenvolvimento do website institucional e gestão da infraestrutura web.",
  },
  {
    company: "GrowIT", role: "Gestor de Conteúdo e Desenvolvimento Web", period: "2022 — 2024",
    summary: "Websites institucionais, comércio electrónico e intranets empresariais.",
  },
];
