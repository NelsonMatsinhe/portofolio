import { authority } from "../data";
import Reveal from "./Reveal";

export default function Authority() {
  return (
    <section className="authority-section section-shell" aria-label="Resumo profissional">
      {authority.map((item, index) => (
        <Reveal key={item.label} delayMs={index * 60} className="authority-item">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </Reveal>
      ))}
    </section>
  );
}
