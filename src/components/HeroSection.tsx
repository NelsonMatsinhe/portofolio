import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useState, type PointerEvent } from "react";
import { siteInfo } from "../data";

const navigation = [
  { href: "#work", label: "Projetos" },
  { href: "#services", label: "Serviços" },
  { href: "#experience", label: "Experiência" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contacto" },
];

const technologies = ["Laravel", "React", "PHP", "TypeScript"];

const entrance = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function PortraitFeature({ reducedMotion }: { reducedMotion: boolean | null }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 120, damping: 20, mass: 0.5 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3.5, 3.5]), { stiffness: 120, damping: 20, mass: 0.5 });
  const imageX = useSpring(useTransform(pointerX, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 22 });
  const imageY = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), { stiffness: 100, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <m.article
      className="hero-portrait-feature"
      initial={{ opacity: 0, y: 26, rotate: 1.2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: reducedMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.35 }}
      style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-portrait-label">
        <span>Nelson Alexandre Matsinhe</span>
        <span>Maputo · MZ</span>
      </div>
      <div className="hero-portrait-frame">
        <m.div className="hero-portrait-image" style={reducedMotion ? undefined : { x: imageX, y: imageY }}>
          <img
            src="/portofolio/Nelson%20Matsinhe%20Programador.webp"
            alt="Nelson Matsinhe, desenvolvedor Full-Stack"
            width="4162"
            height="3264"
            fetchPriority="high"
          />
        </m.div>
        <span className="hero-portrait-corner" aria-hidden="true">NM<span> / 01</span></span>
      </div>
      <div className="hero-portrait-caption">
        <span>FULL-STACK DEVELOPER</span>
        <span>Laravel · React · PHP · TypeScript</span>
      </div>
    </m.article>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <section id="top" className="hero-modern relative overflow-hidden bg-[#fcfbf9] text-slate-900">
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

      <div className="hero-main-grid mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <m.div
          className="hero-copy-modern lg:col-span-7"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.1 } } }}
          initial="hidden"
          animate="visible"
        >
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.65 }} className="hero-kicker mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-800">
            <span className="hero-kicker-line inline-block h-px w-10 bg-[#963a28]" aria-hidden="true" />
            Full-Stack Developer <span className="hero-kicker-status">Maputo, Moçambique</span>
          </m.p>
          <h1 className="hero-title font-serif font-normal text-slate-950">
            <span className="hero-name-clip block">
              <m.span
                className="hero-name-text inline-block"
                initial={reducedMotion ? false : { opacity: 0, y: "110%", filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: reducedMotion ? 0 : 0.78, delay: reducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
              >Nelson</m.span>
            </span>
            <span className="hero-name-clip hero-name-indent block">
              <m.span
                className="hero-name-text inline-block"
                initial={reducedMotion ? false : { opacity: 0, y: "110%", filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: reducedMotion ? 0 : 0.82, delay: reducedMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
              >Matsinhe</m.span>
            </span>
          </h1>
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-lede-modern mt-10 max-w-2xl font-serif text-[clamp(1.45rem,2.7vw,2.3rem)] leading-[1.13] tracking-[-0.035em]">
            Construo <span className="hero-lede-emphasis">plataformas digitais</span> que transformam operações complexas em produtos simples, rápidos e úteis.
          </m.p>
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-summary-modern mt-5 max-w-xl text-base leading-7 text-slate-700">
            Trabalho no frontend e no backend, criando plataformas web, dashboards e sistemas internos para empresas e equipas.
          </m.p>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-tech-list mt-7 flex flex-wrap gap-2">
            <span className="hero-tech-label">Stack principal</span>
            <span className="hero-tech-values">{technologies.map((technology, index) => <span key={technology}>{index > 0 && <i aria-hidden="true">·</i>}{technology}</span>)}</span>
          </m.div>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-actions-modern mt-9 flex flex-wrap gap-5">
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

        <div className="hero-visual-column lg:col-span-5 lg:pt-16">
          <PortraitFeature reducedMotion={reducedMotion} />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 border-t border-stone-400 px-5 py-5 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 sm:px-8">
        <span>Maputo, Moçambique</span>
        <a href="#work" className="transition-colors hover:text-[#963a28]">Scroll para explorar ↓</a>
        <span>01 / 06</span>
      </div>
    </section>
    </LazyMotion>
  );
}
