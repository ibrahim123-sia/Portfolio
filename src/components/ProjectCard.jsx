import React from 'react';
import { Github } from 'lucide-react';

/**
 * Compact, text-only project card for the "More work" grid.
 */
const ProjectCard = ({ project }) => {
  return (
    <article className="card flex h-full flex-col p-5">
      <h3 className="text-lg font-bold text-content">{project.name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} on GitHub`}
        className="text-link mt-auto self-start pt-5 text-sm"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        GitHub
      </a>
    </article>
  );
};

export default ProjectCard;
