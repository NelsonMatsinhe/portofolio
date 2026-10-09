import type { Project } from "../data";

interface ProjectVisualProps { project: Project; }

export default function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div className={"project-visual project-visual-" + project.visual} data-asset-dir={project.assetDir}>
      <div className="visual-topline"><span>{project.type}</span><span>{project.number} / 06</span></div>
      {project.image ? <img className="project-screenshot" src={project.image} alt={"Captura de ecrã do projecto " + project.title} width={project.id === "precos-baixos" ? 1284 : 1356} height={project.id === "precos-baixos" ? 523 : 603} loading="lazy" decoding="async" /> : (
        <div className="visual-unavailable">
          <span>{project.number} / projecto</span>
          <strong>{project.title}</strong>
          <p>Sem captura pública disponível</p>
        </div>
      )}
    </div>
  );
}
