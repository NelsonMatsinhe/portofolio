import type { Project } from "../data";

interface ProjectVisualProps { project: Project; }

const visualLabels: Record<Project["visual"], string> = {
  public: "Informação pública",
  marketplace: "Interface de marketplace",
  commerce: "Sistema de e-commerce",
  mobile: "Aplicação mobile",
  yard: "Sistema operacional",
};

export default function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div className={"project-visual project-visual-" + project.visual} aria-label={project.title + " project placeholder"}>
      <div className="visual-topline"><span>{visualLabels[project.visual]}</span><span>Asset pendente</span></div>
      <div className="visual-frame">
        <div className="visual-window-bar"><span /><span /><span /></div>
        <div className="visual-lines"><i /><i /><i /><i /></div>
        <strong>{project.title}</strong>
      </div>
      <p>Screenshot real do projeto pode ser colocado aqui.</p>
    </div>
  );
}
