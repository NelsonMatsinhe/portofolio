import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { siteInfo } from "../data";
import CustomCursor from "./CustomCursor";
import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";
import SystemMap from "./SystemMap";

const copyVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, reducedMotion ? 1 : 0.975]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reducedMotion ? 1 : 0.82]);

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.72, ease: "easeOut" as const };

  return (
    <LazyMotion features={domAnimation}>
    <m.section
      ref={heroRef}
      id="top"
      className="hero section-shell"
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
      <div className="hero-grid">
        <m.div
          className="hero-status"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <span className="status-dot" aria-hidden="true" />
          <span>Disponível para oportunidades</span>
        </m.div>

        <m.div
          className="hero-copy"
          variants={copyVariants}
          initial="hidden"
          animate="visible"
        >
          <m.p className="eyebrow" variants={itemVariants} transition={transition}>
            <span className="eyebrow-line" aria-hidden="true" />
            {siteInfo.role}
          </m.p>
          <m.h1 className="hero-name" variants={itemVariants} transition={{ ...transition, duration: reducedMotion ? 0 : 0.85 }}>
            <SplitText text="Nelson" />
            <span className="hero-name-indent"><SplitText text="Matsinhe" /></span>
          </m.h1>
          <m.p className="hero-lede" variants={itemVariants} transition={transition}>
            Construo aplicações, plataformas e sistemas digitais que resolvem problemas reais.
          </m.p>
          <m.p className="hero-summary" variants={itemVariants} transition={transition}>
            Trabalho entre Laravel, PHP, React e tecnologias web modernas — da interface que as pessoas usam à estrutura que mantém o produto fiável.
          </m.p>
          <m.p className="hero-stack" variants={itemVariants} transition={transition}>
            Laravel <span>·</span> React <span>·</span> PHP <span>·</span> TypeScript
          </m.p>
          <m.div className="hero-actions" variants={itemVariants} transition={transition}>
            <MagneticButton href="#work" primary>Ver projetos selecionados</MagneticButton>
            <MagneticButton href={"mailto:" + siteInfo.email}>Entrar em contacto</MagneticButton>
          </m.div>
        </m.div>

        <SystemMap reducedMotion={reducedMotion} />

        <m.div
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: reducedMotion ? 0 : 0.85 }}
        >
          <span>Maputo, Mozambique</span>
          <span>Scroll para explorar <span aria-hidden="true">↓</span></span>
          <span>01 / 06</span>
        </m.div>
        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee-track">Laravel <span>•</span> React <span>•</span> PHP <span>•</span> TypeScript <span>•</span> APIs <span>•</span> Digital products <span>•</span> Laravel <span>•</span> React <span>•</span> PHP <span>•</span> TypeScript <span>•</span> APIs <span>•</span> Digital products <span>•</span></div>
        </div>
      </div>
    </m.section>
    <CustomCursor />
    </LazyMotion>
  );
}
