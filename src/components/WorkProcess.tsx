import { workProcess } from "../data";
import Reveal from "./Reveal";

export default function WorkProcess() {
  return (
    <section id="process" className="section-shell process-section section-light">
      <div className="section-heading compact-heading">
        <Reveal><p className="eyebrow">07 — Como trabalho</p></Reveal>
        <Reveal delayMs={60}><h2>Clareza antes do código. Evolução depois da entrega.</h2></Reveal>
      </div>
      <div className="process-list">
        {workProcess.map((step, index) => (
          <Reveal key={step.index} delayMs={index * 45}>
            <article className="process-item">
              <span className="row-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
