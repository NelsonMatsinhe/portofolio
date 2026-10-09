import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { useState } from "react";

const navigation = [
  { href: "#work", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#stack", label: "Competências" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contacto" },
];

const entrance = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function PortraitFeature({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <m.figure
      className="hero-portrait-feature"
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1], delay: reducedMotion ? 0 : 0.2 }}
    >
      <div className="hero-portrait-frame">
        <div className="hero-portrait-image">
          <img
            src="/portfolio/Nelson%20Matsinhe%20Programador.webp"
            alt="Nelson Matsinhe, desenvolvedor Full-Stack"
            width="4162"
            height="3264"
            fetchPriority="high"
          />
        </div>
      </div>
    </m.figure>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <section id="top" className="hero-modern relative bg-[#fbfaf7] text-slate-900">
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

        <nav id="hero-mobile-navigation" aria-label="Navegação móvel" className={"border-t border-stone-300 bg-[#fbfaf7] px-5 py-4 lg:hidden " + (menuOpen ? "block" : "hidden")}>
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm text-stone-700" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="hero-main-grid mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <m.div
          className="lg:col-span-7"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.1 } } }}
          initial="hidden"
          animate="visible"
        >
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.65 }} className="hero-kicker mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-800">
            <span className="hero-kicker-line inline-block h-px w-10 bg-[#7d2f20]" aria-hidden="true" />
            Desenvolvedor Full-Stack <span className="hero-kicker-status">Maputo, Moçambique</span>
          </m.p>
          <h1 className="hero-title font-serif font-normal text-slate-950">
            <span className="hero-name-clip block">
              <m.span
                className="inline-block"
                initial={reducedMotion ? false : { opacity: 0, y: "30%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
              >Nelson Alexandre</m.span>
            </span>
            <span className="hero-name-clip hero-name-indent block">
              <m.span
                className="inline-block"
                initial={reducedMotion ? false : { opacity: 0, y: "30%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              >Matsinhe</m.span>
            </span>
          </h1>
          <m.p variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-lede-modern mt-8 max-w-2xl font-serif text-[clamp(1.45rem,2.7vw,2.3rem)] leading-[1.13] tracking-[-0.035em]">
            Desenvolvo aplicações web e modernizo plataformas existentes.
          </m.p>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-tech-list mt-7 flex flex-wrap gap-2">
            <span className="hero-tech-label">Tecnologias principais</span>
            <span className="hero-tech-values">Laravel <i aria-hidden="true">·</i> React <i aria-hidden="true">·</i> PHP <i aria-hidden="true">·</i> JavaScript</span>
          </m.div>
          <m.div variants={entrance} transition={{ duration: reducedMotion ? 0 : 0.7 }} className="hero-actions-modern mt-9 flex flex-wrap gap-5">
            <a href="#work" className="group inline-flex items-center gap-3 bg-slate-950 px-5 py-3 text-sm font-bold text-[#fbfaf7] transition hover:bg-[#7d2f20]">
              Ver projetos <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="group inline-flex items-center gap-3 border border-stone-500 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-[#7d2f20] hover:text-[#7d2f20]">
              Contactar <span aria-hidden="true">→</span>
            </a>
          </m.div>
        </m.div>

        <div className="hero-visual-column lg:col-span-5 lg:pt-16">
          <PortraitFeature reducedMotion={reducedMotion} />
        </div>
      </div>

    </section>
    </LazyMotion>
  );
}
