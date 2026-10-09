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
  title: string;
  type: string;
  short: string;
  description: string;
  contribution?: string;
  tech: string[];
  features: string[];
  url?: string;
  image?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "informacao-publica-tempo", title: "Informação Pública Tempo", type: "Portal de informação",
    short: "Portal de consulta de informação pública da Revista Tempo.",
    description: "O portal organiza conteúdos de interesse público para consulta online.",
    contribution: "Participo no desenvolvimento e na migração do portal editorial.",
    tech: ["Laravel", "React"],
    features: ["Organização e consulta de informação pública", "Navegação pelos conteúdos do portal"],
    url: "https://infopublica.tempo.co.mz/",
    image: "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.png",
    images: ["/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-03-18.png", "/portfolio/projects/informacao-publica-tempo/Screenshot%20From%202026-10-08%2013-04-00.png"],
  },
  {
    id: "lugarcerto", title: "LugarCerto.co.mz", type: "Marketplace de serviços",
    short: "Liga clientes a prestadores de serviços para pesquisa, comparação e contratação.",
    description: "A plataforma aproxima clientes e prestadores de serviços.",
    contribution: "Participei no desenvolvimento da plataforma.",
    tech: [],
    features: ["Pesquisa de prestadores", "Comparação de serviços", "Contacto e contratação de prestadores"],
    url: "https://lugarcerto.co.mz/",
  },
  {
    id: "klc-marketplace", title: "KLC Marketplace", type: "Marketplace",
    short: "Marketplace de comércio eletrónico.",
    description: "A minha intervenção incluiu melhorias de layout, SEO, desempenho e acessibilidade.",
    contribution: "Corrigi problemas e melhorei a usabilidade da plataforma.",
    tech: [],
    features: ["Revisão do layout", "Correção de problemas", "Melhorias de SEO, desempenho e acessibilidade"],
    url: "https://klcmarket.shop/",
    image: "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.png",
    images: ["/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-56-40.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-00.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-57-43.png", "/portfolio/projects/klc-marketplace/Screenshot%20From%202026-10-08%2012-58-00.png"],
  },
  {
    id: "precos-baixos", title: "PrecosBaixos.co.mz", type: "Comércio eletrónico",
    short: "Loja online com catálogo de produtos e gestão de encomendas.",
    description: "Plataforma de comércio eletrónico baseada em WordPress e WooCommerce.",
    contribution: "Participei no desenvolvimento e na manutenção do catálogo e do fluxo de encomendas.",
    tech: ["WordPress", "WooCommerce"],
    features: ["Catálogo de produtos", "Gestão de encomendas", "Funcionalidades de comércio eletrónico"],
    url: "https://precosbaixos.co.mz/",
    image: "/portfolio/projects/precos-baixos/PB.png", images: ["/portfolio/projects/precos-baixos/PB.png"],
  },
  {
    id: "versalmovie", title: "VersalMovie", type: "Aplicação móvel",
    short: "Aplicação para pesquisar filmes e séries, consultar trailers e guardar favoritos.",
    description: "O VersalMovie consulta o catálogo do TMDB e apresenta informação sobre filmes e séries.",
    contribution: "Desenvolvimento da aplicação e integração com a API do TMDB.",
    tech: ["React Native"],
    features: ["Pesquisa de filmes e séries", "Detalhes e elenco", "Consulta de trailers", "Gestão de favoritos"],
    image: "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.png",
    images: ["/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-11.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-29.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-49-50.png", "/portfolio/projects/versalmovie/Screenshot%20From%202026-10-08%2012-50-07.png"],
  },
  {
    id: "sistema-estaleiro", title: "Sistema de Gestão de Estaleiro", type: "Sistema de gestão",
    short: "Sistema Java para gerir produção, stock, vendas, clientes e relatórios de estaleiros.",
    description: "O sistema reúne áreas de gestão de estaleiros de materiais de construção.",
    tech: ["Java"],
    features: ["Produção e matérias-primas", "Stock e vendas", "Clientes e colaboradores", "Relatórios"],
  },
];

export const primaryTechnologyGroups = [
  { label: "Desenvolvimento web", items: ["Laravel", "React", "PHP", "JavaScript", "TypeScript"] },
  { label: "Dados e ferramentas", items: ["MySQL", "PostgreSQL", "Docker", "Git"] },
];

export const secondaryTechnologyGroups = [
  { label: "Frontend e mobile", items: ["HTML5", "CSS3", "Bootstrap", "Axios", "React Native", "Vue.js"] },
  { label: "Backend e dados", items: ["Java", "SQL", "Oracle", "Hibernate"] },
  { label: "CMS e plataformas", items: ["WordPress", "WooCommerce", "Microsoft SharePoint"] },
  { label: "Ferramentas e sistemas", items: ["Postman", "Nginx", "Linux"] },
];

export const experience = [
  {
    company: "Revista Tempo, Lda", role: "Desenvolvedor Web", period: "Dezembro de 2025 — Presente",
    summary: "Evolução do portal da Revista Tempo e desenvolvimento de plataformas de informação.",
  },
  {
    company: "KLC Tecnologia e Inovação, Lda", role: "Colaborador de Desenvolvimento", period: "Junho de 2025 — Dezembro de 2025",
    summary: "Prototipagem e desenvolvimento de soluções web para clientes.",
  },
  {
    company: "Startup-Tecal Consultoria", role: "Desenvolvedor Web e Gestor de Website", period: "2024 — 2025",
    summary: "Desenvolvimento do website institucional e gestão de domínio, alojamento e backups.",
  },
  {
    company: "GrowIT", role: "Gestor de Conteúdo e Desenvolvimento Web", period: "2022 — 2024",
    summary: "Desenvolvimento web para sites institucionais, lojas WooCommerce e intranets SharePoint.",
  },
];
