import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section section-light">
      <Reveal><p className="eyebrow">06 — Contacto</p></Reveal>
      <Reveal delayMs={60}><h2>Vamos conversar sobre a próxima oportunidade.</h2></Reveal>
      <Reveal className="contact-layout" delayMs={100}>
        <p>Estou disponível para conversar sobre oportunidades de trabalho, colaboração técnica e desenvolvimento ou evolução de plataformas digitais.</p>
        <div className="contact-links">
          <a className="contact-email" data-analytics-event="email-contact" href={"mailto:" + siteInfo.email}>{siteInfo.email}</a>
          <a className="contact-phone" data-analytics-event="phone-contact" href={"tel:" + siteInfo.phone.replace(/\s+/g, "")}>{siteInfo.phone}</a>
          <div className="contact-actions">
            <a className="hero-cta hero-cta-primary" href={"mailto:" + siteInfo.email}>Contactar por email <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#work">Ver projetos <span aria-hidden="true">↗</span></a>
          </div>
          <div className="social-links">
            <a data-analytics-event="github-contact" href={siteInfo.social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a data-analytics-event="linkedin-contact" href={siteInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a data-analytics-event="whatsapp-contact" href={siteInfo.social.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
