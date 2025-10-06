import Reveal from "./Reveal";
import { FaCode, FaMobileAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 surface-gradient dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Blob decorativo */}
      <div className="hero-blob" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem do desenvolvedor */}
        <Reveal delayMs={120} className="flex justify-center">
          <div className="relative transition-transform duration-500 ease-out hover:scale-105 w-full max-w-sm aspect-square">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 blur-md" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-indigo-100 dark:ring-indigo-900 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&format=webp" 
                alt="Foto de perfil do desenvolvedor"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Conteúdo textual */}
        <div>
          <Reveal>
            <p className="text-sm uppercase text-indigo-600 font-medium">Sobre mim</p>
          </Reveal>

          <Reveal delayMs={80}>
            <h2 className="text-4xl sm:text-6xl font-extrabold mt-2 leading-tight gradient-text">
              Bem-vindo!
            </h2>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="space-y-6">
              <p className="mt-4 text-lg text-on-surface dark:text-on-dark leading-relaxed flex items-start max-w-xl">
                <FaCode className="mr-2 text-indigo-600 flex-shrink-0 mt-1" />
                Sou <span className="font-semibold text-indigo-600">desenvolvedor Full-Stack</span> com mais de 3 anos de experiência. Atuo em todo o ciclo de produto: descoberta, arquitetura, desenvolvimento, testes, observabilidade e deploy.
              </p>

              <p className="text-lg text-on-surface dark:text-on-dark leading-relaxed flex items-start max-w-xl">
                <FaMobileAlt className="mr-2 text-cyan-600 flex-shrink-0 mt-1" />
                Construo aplicações <span className="font-semibold text-indigo-600">rápidas, acessíveis e fáceis de usar</span>, com foco na melhor experiência do usuário.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
