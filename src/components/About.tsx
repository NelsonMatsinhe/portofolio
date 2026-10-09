import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-shell section-light">
      <div className="section-heading">
        <Reveal><p className="eyebrow">Perfil</p></Reveal>
        <Reveal delayMs={60}><h2>Como trabalho</h2></Reveal>
      </div>
      <div className="about-layout">
        <Reveal className="about-statement" delayMs={100}><p>Trabalho em aplicações novas e em plataformas que já estão em uso.</p></Reveal>
        <Reveal className="about-detail" delayMs={140}><p>Procuro compreender os fluxos e as limitações antes de alterar um produto. Nas implementações, considero a manutenção futura e a experiência de quem usa o sistema.</p></Reveal>
      </div>
    </section>
  );
}
