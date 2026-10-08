import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { useState } from "react";
import { siteInfo } from "../data";

const navigation = [
  { href: "#work", label: "Projetos" },
  { href: "#services", label: "Serviços" },
  { href: "#experience", label: "Experiência" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contacto" },
];

const technologies = ["Laravel", "React", "PHP", "TypeScript"];

const diagramNodes = [
  { label: "React", x: "12%", y: "22%", side: "left" },
  { label: "PHP", x: "14%", y: "76%", side: "left" },
  { label: "Laravel", x: "76%", y: "20%", side: "right" },
  { label: "API", x: "80%", y: "76%", side: "right" },
];

const entrance = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SystemMapCard({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <m.div
      className="relative min-h-[430px] overflow-hidden border border-stone-400 bg-white p-5 shadow-[0_10px_30px_rgba(24,24,23,0.06)] sm:min-h-[510px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut", delay: reducedMotion ? 0 : 0.35 }}
      role="img"
      aria-label="Mapa do sistema com React, PHP, Laravel, API e sistemas"
    >
      <div className="flex items-center justify-between border-b border-stone-400 pb-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-slate-800">
        <span>Mapa do sistema</span>
        <span>NM / 01</span>
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <m.line x1="50" y1="50" x2="12" y2="22" stroke="currentColor" className="text-[#963a28]/50" strokeWidth="0.18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.6 }} />
        <m.line x1="50" y1="50" x2="14" y2="76" stroke="currentColor" className="text-[#963a28]/50" strokeWidth="0.18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.7 }} />
        <m.line x1="50" y1="50" x2="76" y2="20" stroke="currentColor" className="text-[#963a28]/50" strokeWidth="0.18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.8 }} />
        <m.line x1="50" y1="50" x2="80" y2="76" stroke="currentColor" className="text-[#963a28]/50" strokeWidth="0.18" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.9 }} />
      </svg>

      <m.div
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#963a28] bg-[#fbfaf7] text-[0.68rem] font-bold tracking-[0.16em] text-[#963a28]"
        animate={reducedMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute -inset-3 rounded-full border border-[#963a28]/30" />
        <span className="absolute -inset-7 rounded-full border border-[#963a28]/15" />
        SISTEMAS
      </m.div>

      {diagramNodes.map((node, index) => (
        <m.div
          key={node.label}
          className={"system-map-node absolute z-10 flex items-center gap-2 text-xs font-bold text-slate-900 " + (node.side === "left" ? "node-left -translate-x-1/2" : "translate-x-0")}
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1, 1.025, 1] }}
          transition={{ duration: reducedMotion ? 0 : 3.6 + index * 0.35, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut", delay: reducedMotion ? 0 : 0.9 + index * 0.1 }}
        >
          <span className="h-2 w-2 rounded-full border-2 border-[#963a28] bg-[#fbfaf7]" />
          {node.label}
        </m.div>
      ))}

      <m.div
        className="absolute bottom-8 left-1/2 h-28 w-24 -translate-x-1/2 rotate-3 overflow-hidden border-[7px] border-[#fbfaf7] border-b-[22px] bg-stone-200 shadow-md"
        initial={{ opacity: 0, y: -24, rotate: -7 }}
        animate={{ opacity: 0.92, y: 0, rotate: 3 }}
        whileHover={reducedMotion ? undefined : { rotateX: -4, rotateY: 5, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 150, damping: 14, delay: reducedMotion ? 0 : 0.85 }}
        style={{ transformPerspective: 500 }}
      >
        <img
          src="/portofolio/Nelson%20Matsinhe%20Programador.webp"
          alt=""
          width="4162"
          height="3264"
          className="h-full w-full object-cover"
        />
      </m.div>

        <span className="absolute bottom-4 left-5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-slate-700">
        Interfaces / lógica / entrega
      </span>
    </m.div>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <section id="top" className="relative overflow-hidden bg-[#fcfbf9] text-slate-900">
      <header className="relative z-20 border-b border-stone-300/80">
        <nav className="mx-auto flex min-h-[72px] max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8" aria-label="Navegação principal">
          <a href="#top" className="shrink-0 text-sm font-bold tracking-[-0.02em] text-slate-900" onClick={() => setMenuOpen(false)}>
            Nelson Matsinhe
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-700 transition-colors hover:text-[#7d2f20]">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="border border-[#963a28] px-3 py-2 text-sm font-bold text-[#963a28] transition-colors hover:bg-[#963a28] hover:text-[#fcfbf9]">
              Falar comigo <span aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            type="button"
          className="min-h-11 min-w-11 border border-slate-700 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-900 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="hero-mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? "Fechar" : "Menu"}
          </button>
        </nav>

        <div id="hero-mobile-navigation" className={"border-t border-stone-300 bg-[#fcfbf9] px-5 py-4 lg:hidden " + (menuOpen ? "block" : "hidden")}>
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm text-stone-700" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="w-fit border border-[#963a28] px-3 py-2 text-sm font-bold text-[#963a28]" onClick={() => setMenuOpen(false)}>
              Falar comigo ↗
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <m.div
          className="lg:col-span-7"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.1 } } }}
          initial="hidden"
          animate="visible"
        >
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.65 }} className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-800">
            <span className="inline-block h-px w-10 bg-[#963a28]" aria-hidden="true" />
            Full-Stack Developer
          </m.p>
          <m.h1 variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.8 }} className="font-serif text-[clamp(4rem,10vw,8.5rem)] font-normal leading-[0.82] tracking-[-0.07em] text-slate-950">
            <span className="block">Nelson</span>
            <span className="ml-[clamp(2rem,8vw,7rem)] block">Matsinhe</span>
          </m.h1>
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="mt-10 max-w-2xl font-serif text-[clamp(1.45rem,2.7vw,2.3rem)] leading-[1.13] tracking-[-0.035em]">
            Construo plataformas digitais que transformam operações complexas em produtos simples, rápidos e úteis.
          </m.p>
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="mt-5 max-w-xl text-base leading-7 text-slate-700">
            Especializado em Laravel, React, PHP e TypeScript, criando plataformas web, dashboards e sistemas internos para empresas e equipas.
          </m.p>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span key={technology} className="border border-stone-400 bg-white px-3 py-1.5 text-xs font-bold text-slate-800">
                {technology}
              </span>
            ))}
          </m.div>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="mt-9 flex flex-wrap gap-5">
            <a href="#work" className="group inline-flex items-center gap-3 bg-slate-950 px-5 py-3 text-sm font-bold text-[#fcfbf9] transition hover:scale-[1.02] hover:bg-[#963a28] active:scale-[0.98]">
              Ver projetos <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="group inline-flex items-center gap-3 border border-stone-500 px-5 py-3 text-sm font-bold text-slate-900 transition hover:scale-[1.02] hover:border-[#963a28] hover:text-[#963a28] active:scale-[0.98]">
              Falar sobre um projeto <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          </m.div>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="mt-12 flex flex-wrap gap-5 text-sm text-slate-700">
            <a href={siteInfo.social.github} target="_blank" rel="noreferrer" className="border-b border-transparent transition hover:border-current hover:text-[#7d2f20]">GitHub ↗</a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" className="border-b border-transparent transition hover:border-current hover:text-[#7d2f20]">LinkedIn ↗</a>
            <a href={siteInfo.social.whatsapp} target="_blank" rel="noreferrer" className="border-b border-transparent transition hover:border-current hover:text-[#7d2f20]">WhatsApp ↗</a>
          </m.div>
        </m.div>

        <div className="lg:col-span-5 lg:pt-16">
          <SystemMapCard reducedMotion={reducedMotion} />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 border-t border-stone-400 px-5 py-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 sm:px-8">
        <span>Maputo, Mozambique</span>
        <a href="#work" className="transition-colors hover:text-[#963a28]">Scroll para explorar ↓</a>
        <span>01 / 06</span>
      </div>
    </section>
    </LazyMotion>
  );
}
