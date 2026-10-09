import { primaryTechnologies, secondaryTechnologyGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="stack" className="section-shell section-ink skills-section">
      <div className="skills-heading">
        <Reveal><p className="eyebrow">04 — Stack</p></Reveal>
        <Reveal delayMs={60}><h2>As ferramentas por trás do trabalho.</h2></Reveal>
      </div>
      <Reveal className="primary-stack" delayMs={100}>
        <p className="stack-caption">Tecnologias principais</p>
        <ul aria-label="Tecnologias principais">
          {primaryTechnologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </Reveal>
      <Reveal className="secondary-stack" delayMs={140}>
        <details>
          <summary>Ver outras ferramentas e conhecimentos</summary>
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
