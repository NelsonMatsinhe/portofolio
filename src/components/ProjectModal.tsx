
import type { Project } from "../data";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
          
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover mt-4 rounded"
          />
          
          <p className="mt-4 text-gray-600">{project.description}</p>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Ver Demo
              </a>
            )}
            {project.repo && (
              <a 
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
