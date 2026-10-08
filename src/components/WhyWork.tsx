import { reasonsToWorkTogether } from "../data";
import Reveal from "./Reveal";

export default function WhyWork() {
  return (
    <section className="section-shell trust-section section-ink">
      <div className="section-heading section-heading-ink">
        <Reveal><p className="eyebrow">08 — Porque trabalhar comigo</p></Reveal>
        <Reveal delayMs={60}><h2>Construir bem também é saber cuidar do que já existe.</h2></Reveal>
      </div>
      <div className="trust-list">
        {reasonsToWorkTogether.map((reason, index) => (
          <Reveal key={reason} delayMs={index * 45}>
            <div className="trust-row"><span className="row-index">0{index + 1}</span><p>{reason}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
