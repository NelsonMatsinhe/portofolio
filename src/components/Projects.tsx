import React, { useState } from "react";
import { projects, type Project } from "../data";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 surface-gradient dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-on-surface dark:text-on-dark">
              <span className="gradient-text">Projetos</span>
            </h3>
            <p className="mt-4 text-lg text-on-surface dark:text-on-dark leading-relaxed max-w-2xl mx-auto">
              Alguns dos trabalhos que desenvolvi com foco em performance, acessibilidade e experiência do usuário.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <Reveal key={p.id} delayMs={idx * 80}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-border dark:ring-gray-700 overflow-hidden card-hover transition-all flex flex-col">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-semibold text-xl text-on-surface dark:text-on-dark">{p.title}</h4>
                  <p className="text-sm text-muted dark:text-on-dark mt-2 flex-grow">{p.short}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map(t => (
                      <span key={t} className="tag bg-surface-2 text-on-surface dark:bg-gray-700 dark:text-on-dark">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => setOpen(p)}
                      className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Detalhes
                    </button>

                    {p.repo && p.repo !== "#" && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-4 py-2 border border-border dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Código
                      </a>
                    )}

                    {p.demo && p.demo !== "#" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm px-4 py-2 border border-border dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
