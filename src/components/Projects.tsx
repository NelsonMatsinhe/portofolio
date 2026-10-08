import { useState } from "react";
import { projects, type Project } from "../data";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="work" className="section-shell work-section">
      <div className="section-heading work-heading">
        <Reveal><p className="eyebrow">02 — Projetos selecionados</p></Reveal>
        <Reveal delayMs={60}><h2>Software construído para contextos reais, não para ecrãs vazios.</h2></Reveal>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.id} delayMs={index * 40}>
            <article className={"project-row " + (index % 2 === 1 ? "project-row-reverse" : "")}>
              <div className="project-meta"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
              <div className="project-content">
                <h3>{project.title}</h3><p>{project.short}</p>
                <div className="project-tags" aria-label="Tecnologias utilizadas">{project.tech.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <button className="text-link" type="button" onClick={() => setSelectedProject(project)}>Ver projeto <span aria-hidden="true">↗</span></button>
              </div>
              <ProjectVisual project={project} />
            </article>
          </Reveal>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
