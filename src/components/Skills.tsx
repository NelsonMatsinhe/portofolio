import { primaryTechnologyGroups, secondaryTechnologyGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="stack" className="section-shell section-ink skills-section">
      <div className="skills-heading">
        <Reveal><p className="eyebrow">Ferramentas</p></Reveal>
        <Reveal delayMs={60}><h2>Competências técnicas</h2></Reveal>
      </div>
      <Reveal className="primary-stack" delayMs={100}>
        <div className="primary-stack-groups">
          {primaryTechnologyGroups.map((group) => (
            <div className="primary-stack-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>{group.items.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="secondary-stack" delayMs={140}>
        <details>
          <summary>Ver outras tecnologias</summary>
          <div className="secondary-stack-groups">
            {secondaryTechnologyGroups.map((group) => (
              <div key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </details>
      </Reveal>
    </section>
  );
}
