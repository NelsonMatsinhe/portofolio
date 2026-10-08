import { capabilities, technologyGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="approach" className="section-shell section-ink">
      <div className="section-heading section-heading-ink">
        <Reveal><p className="eyebrow">03 — Atuação</p></Reveal>
        <Reveal delayMs={60}><h2>O que faço</h2></Reveal>
      </div>
      <div className="capability-list">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.index} delayMs={index * 50}>
            <article className="capability-row">
              <span className="row-index">{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="technology-strip" delayMs={120}>
        <p className="eyebrow">Tecnologias que utilizo</p>
        <div className="technology-groups">
          {technologyGroups.map((group) => <div key={group.label} className="technology-group"><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></div>)}
        </div>
      </Reveal>
    </section>
  );
}
