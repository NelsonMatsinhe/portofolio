import type { Project } from "../data";

interface ProjectVisualProps { project: Project; }

export default function ProjectVisual({ project }: ProjectVisualProps) {
  if (!project.image) return null;

  return (
    <figure className="project-visual">
      <img className="project-screenshot" src={project.image} alt={`Captura de ecrã do projeto ${project.title}`} width={project.id === "precos-baixos" ? 1284 : 1356} height={project.id === "precos-baixos" ? 523 : 603} loading="lazy" decoding="async" />
    </figure>
  );
}
