import { siteInfo } from "../data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center surface-gradient dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden"
    >
      <div className="hero-blob" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <p className="text-lg font-bold uppercase gradient-text">Bem-vindo!</p>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="text-4xl sm:text-6xl font-extrabold mt-2 leading-tight gradient-text">
              Nelson Alexandre Matsinhe
            </h1>
          </Reveal>

          <Reveal delayMs={120}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mt-2">
              Desenvolvedor Web | Full-Stack | React & Laravel
            </h2>
          </Reveal>

          <Reveal delayMs={160}>
            <p className="mt-4 text-lg leading-relaxed text-on-surface dark:text-on-dark max-w-xl">
              Profissional de TI com mais de 3 anos de experiência em{" "}
              <span className="font-semibold text-brand-500">desenvolvimento web</span> e{" "}
              conhecimento em aplicações Mobile com React Native.  
              Focado em criar soluções escaláveis, seguras e de alto desempenho, 
              sempre priorizando a experiência do usuário e os resultados do cliente.
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 text-base font-medium">
                <a href={siteInfo.social.github} target="_blank" rel="noreferrer"
                  className="text-on-surface dark:text-on-dark hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  GitHub
                </a>
                <span className="text-muted">|</span>
                <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer"
                  className="text-on-surface dark:text-on-dark hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  LinkedIn
                </a>
              </div>

              <a href="/cv/curriculo.pdf" download
                className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-colors">
                Baixar CV
              </a>
            </div>

            <div className="mt-6 text-sm text-muted font-medium">
              📍 {siteInfo.location} • Disponibilidade imediata
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={120} className="flex justify-center">
          <div className="relative transition-transform duration-500 hover:scale-105 w-full max-w-sm aspect-square">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 blur-md" />
            <div className="relative rounded-full overflow-hidden shadow-xl ring-4 ring-gray-100 dark:ring-gray-800 w-full h-full">
              <img
                src="/profile.jpg"
                alt="Foto de perfil de Nelson Matsinhe"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
