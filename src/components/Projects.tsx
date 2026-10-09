import { useState } from "react";
import { projects, type Project } from "../data";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredIds = ["informacao-publica-tempo", "versalmovie", "klc-marketplace", "precos-baixos"];
  const featuredProjects = featuredIds.map((id) => projects.find((project) => project.id === id)).filter((project): project is Project => Boolean(project));
  const otherProjects = projects.filter((project) => !featuredIds.includes(project.id));

  return (
    <section id="work" className="section-shell work-section">
      <div className="section-heading work-heading">
        <Reveal><p className="eyebrow">02 — Projetos selecionados</p></Reveal>
        <Reveal delayMs={60}><h2>Ideias e necessidades transformadas em produtos digitais.</h2></Reveal>
      </div>
      <div className="project-list featured-project-list">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delayMs={index * 40}>
            <article className={"project-row featured-project-row project-row-" + project.id + (index % 2 === 1 ? " project-row-reverse" : "")}>
              <div className="project-meta"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
              <div className="project-content">
                <h3>{project.title}</h3><p>{project.short}</p>
                <p className="project-contribution">{project.contribution}</p>
                {project.tech.length > 0 && <div className="project-tags" aria-label="Tecnologias principais">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>}
                <div className="project-actions">
                  <button className="text-link" type="button" aria-haspopup="dialog" data-analytics-event={"open-project-" + project.id} onClick={() => setSelectedProject(project)}>Ver projeto <span aria-hidden="true">↗</span></button>
                  {project.url && <a className="project-live-link" href={project.url} target="_blank" rel="noreferrer">Explorar plataforma <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
              <ProjectVisual project={project} />
            </article>
          </Reveal>
        ))}
      </div>
      {otherProjects.length > 0 && <div className="other-projects">
        <div className="other-projects-heading"><p className="eyebrow">Também no portfólio</p><p>Outros produtos e sistemas em que participei.</p></div>
        <div className="other-projects-list">
          {otherProjects.map((project) => (
            <article className="other-project" key={project.id}>
              <div><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.short}</p></div>
              <div className="other-project-actions">
                <button className="text-link" type="button" aria-haspopup="dialog" onClick={() => setSelectedProject(project)}>Ver detalhes <span aria-hidden="true">↗</span></button>
                {project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Explorar ${project.title}`}>Visitar <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </div>}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
