import { useState } from "react";
import { siteInfo } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-50/80 via-cyan-50/60 to-blue-50/80 dark:from-gray-900/70 dark:via-gray-900/60 dark:to-gray-900/70 backdrop-blur-md z-50 shadow-sm border-b border-white/40 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Identidade visual: logo com gradiente da marca */}
        <a 
          href="#hero" 
          className="font-extrabold text-xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          {siteInfo.name.split(" ")[0]}
        </a>

        {/* Navegação principal (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="group relative text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {l.label}
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          {/* CTA Baixar CV */}
          <a
            href="/cv/curriculo.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow hover:opacity-90 transition"
          >
            Baixar CV
          </a>
        </div>

        {/* Ação: abrir/fechar menu mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>

      {/* Navegação (mobile) */}
      <div 
        className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${open ? "max-h-60" : "max-h-0"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              onClick={() => setOpen(false)} 
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv/curriculo.pdf"
            download
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow hover:opacity-90 transition"
          >
            Baixar CV
          </a>
        </div>
      </div>
    </nav>
  );
}
