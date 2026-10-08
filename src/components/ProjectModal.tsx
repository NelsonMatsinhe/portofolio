import { useEffect, useRef } from "react";
import type { Project } from "../data";
import ProjectVisual from "./ProjectVisual";

interface ProjectModalProps { project: Project; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");
    return () => { document.removeEventListener("keydown", handleKeyDown); document.body.classList.remove("modal-open"); };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div className="modal-header"><p className="eyebrow">{project.number} — {project.type}</p><button ref={closeButtonRef} className="modal-close" type="button" onClick={onClose} aria-label="Fechar detalhes do projeto">Fechar <span aria-hidden="true">×</span></button></div>
        <h2 id="project-modal-title">{project.title}</h2>
        <ProjectVisual project={project} />
        <div className="case-study-grid">
          <div><span className="case-label">Contexto</span><p>{project.description}</p></div>
          <div><span className="case-label">O meu trabalho</span><p>{project.contribution}</p></div>
          <div><span className="case-label">Tecnologias</span><p>{project.tech.join(" · ")}</p></div>
        </div>
        <p className="asset-note">Links e screenshots podem ser adicionados quando os assets públicos estiverem disponíveis.</p>
      </section>
    </div>
  );
}
