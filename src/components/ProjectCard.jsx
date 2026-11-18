import React from 'react';
import { Github } from 'lucide-react';

/**
 * Compact project card for the "More work" grid.
 */
const ProjectCard = ({ project, onOpen }) => {
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open the ${project.name} details`}
        className="block border-b border-line bg-bg"
      >
        <img
          src={project.image}
          alt={`${project.name}: ${project.title}`}
          loading="lazy"
          decoding="async"
          width="640"
          height="400"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-content">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent-on">{project.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-5 pt-5">
          <button type="button" onClick={() => onOpen(project)} className="text-link text-sm">
            Details
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
