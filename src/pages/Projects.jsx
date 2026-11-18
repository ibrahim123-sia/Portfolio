import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData, categories, categoryLabel, categoryShort } from '../data';
import Link from '../components/Link';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { useRouter } from '../router';

const { projects } = portfolioData;
const number = (project) => String(projects.indexOf(project) + 1).padStart(2, '0');

// Hover previews only make sense with a mouse
const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const CategoryFilter = ({ active, onSelect }) => {
  const options = [
    { slug: 'all', label: 'All', count: projects.length },
    ...categories.map((c) => ({
      ...c,
      count: projects.filter((p) => p.categories.includes(c.slug)).length,
    })),
  ];

  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = active === option.slug;
        return (
          <button
            key={option.slug}
            type="button"
            aria-pressed={selected}
            onClick={() => onSelect(option.slug)}
            className={`inline-flex items-baseline gap-2 border px-3.5 py-2 text-sm transition-colors ${
              selected
                ? 'border-ink bg-ink text-paper'
                : 'border-rule-strong text-ink hover:border-ink'
            }`}
          >
            {option.label}
            <span className={`font-mono text-[11px] ${selected ? 'text-paper/70' : 'text-faint'}`}>
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

const Projects = () => {
  const { location, navigate } = useRouter();
  const requested = new URLSearchParams(location.search).get('category');
  const active = categories.some((c) => c.slug === requested) ? requested : 'all';
  const visible = active === 'all' ? projects : projects.filter((p) => p.categories.includes(active));

  const select = (slug) =>
    navigate(slug === 'all' ? '/projects' : `/projects?category=${slug}`, {
      replace: true,
      scroll: false,
    });

  // Floating preview that follows the pointer over a row (desktop only)
  const [hoverEnabled] = useState(canHover);
  const [preview, setPreview] = useState(null);
  const previewEl = useRef(null);
  const pointer = useRef('translate(-9999px, 0)');

  const placePreview = (el) => {
    previewEl.current = el;
    if (el) el.style.transform = pointer.current;
  };
  const movePreview = (e) => {
    pointer.current = `translate(${e.clientX + 24}px, ${e.clientY - 90}px)`;
    if (previewEl.current) previewEl.current.style.transform = pointer.current;
  };

  return (
    <section aria-labelledby="projects-title" className="page pb-20 pt-10 sm:pb-28 sm:pt-16">
      <SectionHeading
        as="h1"
        id="projects-title"
        eyebrow="Index"
        title="Projects"
        subtitle={`${projects.length} things I've designed and built, from AI agents and SaaS platforms to client stores. The five featured projects come first.`}
      />

      <Reveal className="mt-10 md:grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-9 md:col-start-4">
          <CategoryFilter active={active} onSelect={select} />
          <p className="label mt-4" aria-live="polite">
            Showing {visible.length} of {projects.length}
          </p>
        </div>
      </Reveal>

      {/* Column headings (desktop) */}
      <div
        aria-hidden="true"
        className="label mt-12 hidden grid-cols-12 gap-8 border-b border-ink pb-3 md:grid"
      >
        <span className="col-span-1">No.</span>
        <span className="col-span-3">Project</span>
        <span className="col-span-5">Description</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-1 text-right">Year</span>
      </div>

      <ol
        className="mt-8 border-t border-ink md:mt-0 md:border-t-0"
        onMouseMove={hoverEnabled ? movePreview : undefined}
        onMouseLeave={() => setPreview(null)}
      >
        {visible.map((project) => (
          <li key={project.key} className="border-b border-rule">
            <Link
              to={`/projects/${project.key}`}
              onMouseEnter={hoverEnabled ? () => setPreview(project.image ? project : null) : undefined}
              className="group grid grid-cols-12 gap-x-4 gap-y-2 py-6 md:items-baseline md:gap-x-8 md:py-5"
            >
              <span className="label col-span-12 flex gap-3 md:col-span-1 md:block">
                <span>{number(project)}</span>
                <span className="md:hidden">{project.year}</span>
                {project.featured && <span className="text-accent md:hidden">Featured</span>}
              </span>
              <span className="col-span-12 md:col-span-3">
                <span className="display link-quiet text-3xl group-hover:[text-decoration-color:currentColor] md:text-[2rem]">{project.name}</span>
                {project.featured && (
                  <span className="label ml-2 hidden align-middle text-accent md:inline">Featured</span>
                )}
              </span>
              <span className="col-span-12 text-[15px] leading-relaxed text-muted md:col-span-5">
                {project.summary}
              </span>
              <span className="label col-span-12 md:hidden">
                {project.categories.map((c) => categoryLabel[c]).join(', ')}
              </span>
              <span className="label hidden md:col-span-2 md:block">
                {project.categories.map((c) => categoryShort[c]).join(' · ')}
              </span>
              <span className="label col-span-1 hidden text-right md:block">{project.year}</span>
            </Link>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-[15px] text-muted">
        More on{' '}
        <a
          href={portfolioData.personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link inline-flex items-center gap-1 text-ink"
        >
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </p>

      {/* Hover preview */}
      {hoverEnabled && preview && (
        <div
          ref={placePreview}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-40 w-72 border border-ink bg-paper p-1.5"
        >
          <img src={preview.image} alt="" className="aspect-[4/3] w-full object-cover object-top" />
        </div>
      )}
    </section>
  );
};

export default Projects;
