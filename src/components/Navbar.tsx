import { useState } from "react";
import { siteInfo } from "../data";

const links = [
  { href: "#work", label: "Projetos" },
  { href: "#approach", label: "Atuação" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>{siteInfo.name}</a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
          <span>{open ? "Fechar" : "Menu"}</span><span className="menu-line" aria-hidden="true" />
        </button>
        <div className="desktop-navigation">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
      </nav>
      <div id="mobile-navigation" className={"mobile-navigation " + (open ? "is-open" : "")}>
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </div>
    </header>
  );
}
