import { skills } from "../data";
import Reveal from "./Reveal";
import { FiMonitor, FiServer, FiTool } from "react-icons/fi";

export default function Skills() {
  const frontend = [...skills.frontend].sort((a, b) => a.localeCompare(b));
  const backend = [...skills.backend].sort((a, b) => a.localeCompare(b));
  const tools = [...skills.tools].sort((a, b) => a.localeCompare(b));

  return (
    <section
      id="skills"
      className="py-20 surface-gradient dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase text-indigo-600 font-medium tracking-wide">Stack</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 leading-tight gradient-text">
              Tecnologias
            </h2>
            <p className="mt-4 text-lg text-on-surface dark:text-on-dark max-w-2xl mx-auto leading-relaxed">
              Ferramentas e frameworks que utilizo no dia a dia para construir produtos de qualidade.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <Reveal>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-border dark:ring-gray-700 p-6 card-hover transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 ring-1 ring-indigo-100 dark:ring-indigo-900">
                  <FiMonitor className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface dark:text-on-dark">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontend.map(skill => (
                  <span key={skill} className="tag bg-brand-400 text-white">{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Backend */}
          <Reveal delayMs={80}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-border dark:ring-gray-700 p-6 card-hover transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 ring-1 ring-indigo-100 dark:ring-indigo-900">
                  <FiServer className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface dark:text-on-dark">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backend.map(skill => (
                  <span key={skill} className="tag bg-surface-2 text-on-surface dark:bg-gray-700 dark:text-on-dark">{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Ferramentas */}
          <Reveal delayMs={160}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-border dark:ring-gray-700 p-6 card-hover transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 ring-1 ring-indigo-100 dark:ring-indigo-900">
                  <FiTool className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-on-surface dark:text-on-dark">Ferramentas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map(skill => (
                  <span key={skill} className="tag bg-surface-2 text-on-surface dark:bg-gray-700 dark:text-on-dark">{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
