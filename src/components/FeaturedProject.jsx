import React from 'react';
import { ArrowUpRight, Check, Github } from 'lucide-react';

/**
 * One featured project, shown large: 4:3 cover on the left, the problem it
 * solves, key features, stack and links on the right.
 */
const FeaturedProject = ({ project, index, onOpen }) => {
  return (
    <article className="card grid gap-6 p-4 sm:p-6 md:grid-cols-2 md:gap-10 lg:p-8">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open the ${project.name} case study`}
        className="block self-start overflow-hidden rounded-[10px] border border-line bg-bg"
      >
        <img
          src={project.image}
          alt={`${project.name}: ${project.title}`}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          className="aspect-[4/3] w-full object-cover object-top"
        />
      </button>

      <div className="flex flex-col">
        <p className="text-sm font-medium text-faint">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-content">{project.name}</h3>
        <p className="mt-1 text-base font-medium text-accent-on">{project.title}</p>

        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 space-y-2.5">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-3 text-[15px] leading-relaxed text-muted">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.slice(0, 7).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
          <button type="button" onClick={() => onOpen(project)} className="btn-primary">
            Case study
          </button>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">
              Live site
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
