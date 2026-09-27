import React from 'react';
import { Github, ArrowUpRight, Maximize2 } from 'lucide-react';

const categoryLabels = {
  ai_ml: 'AI / ML',
  ecommerce: 'E-Commerce',
  data: 'Data & Analytics',
  fullstack: 'Web App',
};

/**
 * One project as an alternating row: a framed preview on one side,
 * copy + actions on the other. Pass `reversed` to flip the sides.
 */
const ProjectCard = ({ project, reversed = false, onOpen }) => {
  const hasCaseStudy = Boolean(project.detail);

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      {/* Preview */}
      <div className={reversed ? 'md:order-2' : 'md:order-1'}>
        <button
          type="button"
          onClick={hasCaseStudy ? () => onOpen(project) : undefined}
          className={`group relative block w-full overflow-hidden rounded-2xl border border-line bg-surface text-left ${
            hasCaseStudy ? 'cursor-pointer' : 'cursor-default'
          }`}
          aria-label={hasCaseStudy ? `Open ${project.title} case study` : undefined}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(76,141,255,0.10), transparent 70%)',
            }}
          />
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {hasCaseStudy && (
            <span className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-bg/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink">
                <Maximize2 className="h-4 w-4" />
                Open case study
              </span>
            </span>
          )}
        </button>
      </div>

      {/* Copy */}
      <div className={reversed ? 'md:order-1' : 'md:order-2'}>
        <span className="eyebrow text-xs">
          {categoryLabels[project.category] || 'Project'}
        </span>
        <h3 className="mt-3 text-2xl font-semibold leading-snug text-content">
          {project.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          {hasCaseStudy ? (
            <>
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="btn-primary"
              >
                <Maximize2 className="h-[18px] w-[18px]" />
                Open
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  <Github className="h-4 w-4" />
                  View Github
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </>
          ) : (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github className="h-[18px] w-[18px]" />
                  View Github
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
