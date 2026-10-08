import type { Project } from "../data";

interface ProjectVisualProps { project: Project; }

export default function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div className={"project-visual project-visual-" + project.visual} data-asset-dir={project.assetDir} aria-label={"Representação visual de " + project.title}>
      <div className="visual-topline"><span>{project.type}</span><span>{project.number} / 06</span></div>
      {project.image ? <img className="project-screenshot" src={project.image} alt={"Ecrã de " + project.title} loading="lazy" /> : (
        <div className="visual-frame" aria-hidden="true">
          <div className="visual-window-bar"><span /><span /><span /></div>
          <div className="visual-lines"><i /><i /><i /><i /></div>
          <strong>{project.title}</strong>
        </div>
      )}
    </div>
  );
}
