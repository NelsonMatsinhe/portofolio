import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-shell contact-section section-light">
      <Reveal delayMs={60}><h2>Entre em contacto</h2></Reveal>
      <Reveal className="contact-layout" delayMs={100}>
        <p>Para oportunidades de trabalho, colaboração técnica ou desenvolvimento de aplicações web, contacte-me.</p>
        <div className="contact-links">
          <a className="contact-email" href={"mailto:" + siteInfo.email}>{siteInfo.email}</a>
          <a className="contact-phone" href={"tel:" + siteInfo.phone.replace(/\s+/g, "")}>{siteInfo.phone}</a>
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
