import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData, categoryLabel } from '../data';
import Link from '../components/Link';
import Reveal from '../components/Reveal';

// One labelled block on the page grid: mono label left, content right
const Block = ({ label, children }) => (
  <Reveal className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
    <h2 className="label md:col-span-3">{label}</h2>
    <div className="md:col-span-9">{children}</div>
  </Reveal>
);

const CaseStudy = ({ project }) => {
  const { projects } = portfolioData;
  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];
  const showCover = project.featured && project.image;

  return (
    <article className="page pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Link to="/projects" className="link text-[15px]">
        All projects
      </Link>

      {/* Title */}
      <Reveal className="mt-10 grid gap-4 border-t border-ink pt-5 md:grid-cols-12 md:gap-8">
        <p className="label md:col-span-3">
          Case study {String(position + 1).padStart(2, '0')}
        </p>
        <div className="md:col-span-9">
          <h1 className="display text-6xl sm:text-7xl lg:text-8xl">{project.name}</h1>
          <p className="mt-4 text-xl text-muted">{project.title}</p>
          <p className="mt-8 max-w-3xl text-2xl leading-snug">{project.summary}</p>
        </div>
      </Reveal>

      {/* Facts */}
      <Reveal className="mt-12 md:grid md:grid-cols-12 md:gap-8">
        <dl className="grid grid-cols-2 gap-6 border-t border-rule pt-6 sm:grid-cols-4 md:col-span-9 md:col-start-4">
          <div>
            <dt className="label">Year</dt>
            <dd className="mt-2 text-[15px]">{project.year}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="label">Category</dt>
            <dd className="mt-2 text-[15px]">
              {project.categories.map((c) => categoryLabel[c]).join(', ')}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="label">Links</dt>
            <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
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
                className="link inline-flex items-center gap-1"
              >
                Code on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>

      {showCover && (
        <Reveal className="mt-12 md:grid md:grid-cols-12 md:gap-8">
          <img
            src={project.image}
            alt={`${project.name}: ${project.title}`}
            width="1600"
            height="1200"
            className="aspect-[4/3] w-full border border-rule object-cover md:col-span-9 md:col-start-4"
          />
        </Reveal>
      )}

      <div className="mt-12">
        <Block label="The problem">
          <p className="max-w-3xl text-xl leading-relaxed">{project.problem}</p>
        </Block>

        <Block label="What I built">
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{project.built}</p>
        </Block>

        <Block label="Key features">
          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <li key={feature} className="border-t border-rule pt-4 text-[15px] leading-relaxed">
                <span className="label mb-2 block">{String(i + 1).padStart(2, '0')}</span>
                {feature}
              </li>
            ))}
          </ol>
        </Block>

        <Block label="Tech">
          <p className="max-w-3xl text-[15px] leading-relaxed">{project.stack.join(', ')}</p>
        </Block>

        {project.gallery.length > 0 && (
          <Block label="Screenshots">
            <div className="space-y-12">
              {project.gallery.map((shot) => (
                <figure key={shot.title}>
                  <img
                    src={shot.src}
                    alt={`${project.name}: ${shot.title}`}
                    className="w-full border border-rule bg-paper-2"
                  />
                  <figcaption className="mt-3 flex flex-wrap gap-x-3 text-[15px]">
                    <span className="font-medium">{shot.title}.</span>
                    <span className="text-muted">{shot.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Block>
        )}
      </div>

      {/* Next project */}
      <nav aria-label="Next project" className="mt-6 border-t border-ink pt-6">
        <Link to={`/projects/${next.key}`} className="group block">
          <span className="label">Next project</span>
          <span className="display link-quiet mt-3 block text-5xl group-hover:[text-decoration-color:currentColor] sm:text-6xl">
            {next.name}
          </span>
        </Link>
      </nav>
    </article>
  );
};

export default CaseStudy;
