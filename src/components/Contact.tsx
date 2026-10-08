import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section section-light">
      <Reveal><p className="eyebrow">06 — Contacto</p></Reveal>
      <Reveal delayMs={60}><h2>Tem um problema útil para resolver?</h2></Reveal>
      <Reveal className="contact-layout" delayMs={100}>
        <p>Se está a construir um produto, a melhorar uma plataforma existente ou precisa de um developer que trabalhe em toda a stack, escreva-me. Estou em Maputo e disponível para colaborações com propósito.</p>
        <div className="contact-links">
          <a className="contact-email" href={"mailto:" + siteInfo.email}>{siteInfo.email}</a>
          <div className="social-links">
            <a href={siteInfo.social.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={siteInfo.social.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
