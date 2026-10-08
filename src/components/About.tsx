import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-shell section-light">
      <div className="section-heading">
        <Reveal><p className="eyebrow">04 — Sobre</p></Reveal>
        <Reveal delayMs={60}><h2>Um developer prático para produtos que precisam de funcionar no mundo real.</h2></Reveal>
      </div>
      <div className="about-layout">
        <Reveal className="about-statement" delayMs={100}><p>Tenho passado os últimos três anos a construir e melhorar produtos web, plataformas e sistemas internos. O meu trabalho cruza a clareza do frontend com a estrutura do backend: as partes que as pessoas veem e as decisões que as tornam fiáveis.</p></Reveal>
        <Reveal className="about-detail" delayMs={140}>
          <p>Sinto-me confortável a entrar num produto existente, compreender as suas restrições e fazer melhorias consistentes sem perder de vista quem o utiliza. Preocupo-me com manutenção, performance, acessibilidade e os pequenos detalhes que tornam um sistema bem pensado.</p>
          <a className="text-link" href={"mailto:" + siteInfo.email}>Dizer olá <span aria-hidden="true">↗</span></a>
        </Reveal>
      </div>
    </section>
  );
}
