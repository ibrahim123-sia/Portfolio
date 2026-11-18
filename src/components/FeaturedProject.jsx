import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { categoryLabel } from '../data';
import Link from './Link';

/**
 * One featured project as a large row: cover on one side, number, serif name,
 * one-sentence summary, categories, year and links on the other. `reversed`
 * puts the cover on the right.
 */
const FeaturedProject = ({ project, index, reversed = false }) => {
  const href = `/projects/${project.key}`;

  return (
    <article className="grid gap-6 border-t border-rule py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className={`block md:col-span-7 ${reversed ? 'md:order-2' : ''}`}
      >
        <img
          src={project.image}
          alt={`${project.name}: ${project.title}`}
          fetchPriority={index === 0 ? 'high' : 'low'}
          width="1600"
          height="1200"
          className="aspect-[4/3] w-full border border-rule object-cover"
        />
      </Link>

      <div className={`flex flex-col md:col-span-5 ${reversed ? 'md:order-1' : ''}`}>
        <p className="label flex justify-between">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{project.year}</span>
        </p>
        <h3 className="display mt-6 text-5xl lg:text-6xl">
          <Link to={href} className="link-quiet">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] text-muted">{project.title}</p>
        <p className="mt-6 text-lg leading-relaxed">{project.summary}</p>

        <p className="label mt-6">
          {project.categories.map((c) => categoryLabel[c]).join(' · ')}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-5 text-[15px] md:mt-auto">
          <Link to={href} className="link font-medium">
            Read the case study
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="link inline-flex items-center gap-1"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} code on GitHub`}
            className="link inline-flex items-center gap-1"
          >
            Code
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
