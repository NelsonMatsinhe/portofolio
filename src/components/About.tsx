import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-shell section-light">
      <div className="section-heading">
        <Reveal><p className="eyebrow">05 — Sobre</p></Reveal>
        <Reveal delayMs={60}><h2>Gosto de perceber o problema antes de escrever a solução.</h2></Reveal>
      </div>
      <div className="about-layout">
        <Reveal className="about-statement" delayMs={100}><p>Prefiro software legível, simples de manter e ajustado às pessoas que o vão usar.</p></Reveal>
        <Reveal className="about-detail" delayMs={140}><p>Gosto de entrar em produtos existentes, entender o contexto e melhorar o que faz diferença — com cuidado pela experiência e pela qualidade do código.</p></Reveal>
      </div>
    </section>
  );
}
