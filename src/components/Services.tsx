import { services } from "../data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="section-shell services-section section-light">
      <div className="section-heading">
        <Reveal><p className="eyebrow">03 — Como posso ajudar</p></Reveal>
        <Reveal delayMs={60}><h2>Software pensado para o trabalho que precisa de ser feito.</h2></Reveal>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <Reveal key={service.index} delayMs={index * 45}>
            <article className="service-row">
              <span className="row-index">{service.index}</span>
              <h3>{service.title}</h3>
              <div><p>{service.description}</p><span className="service-tech">{service.tech}</span></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
