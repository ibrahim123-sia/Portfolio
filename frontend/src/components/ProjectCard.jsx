import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const categoryLabels = {
  ai_ml: 'AI / ML',
  fullstack: 'Full Stack',
};

const ProjectCard = ({ project }) => {
  return (
    <div className="card card-hover group flex h-full flex-col gap-3 p-8">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-xs">
          {categoryLabels[project.category] || 'Project'}
        </span>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code"
              className="text-faint transition-colors hover:text-content"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-faint transition-colors hover:text-accent"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-[22px] font-semibold leading-snug text-content">
        {project.title}
      </h3>
      <p className="flex-1 text-[15.5px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
