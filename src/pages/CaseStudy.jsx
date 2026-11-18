import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from '../components/Link';
import { Win, ProblemChips } from '../components/Win';
import Cta from '../components/Cta';
import { portfolioData } from '../data';

const AI_TECH = /LLM|Gemini|Groq|AssemblyAI|MCP|RAG|LangGraph|OpenAI/;

// "My part" in the facts: every project is my own design and build; AI is
// only mentioned where the project uses it.
const myPart = (project) =>
  project.stack.some((tech) => AI_TECH.test(tech)) ? 'Design, full stack and AI' : 'Design and full stack';

const ExternalButton = ({ href, className, children }) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

/* Full-screen view of one screenshot. Esc, the Close button or a click on
   the backdrop closes it and focus returns to the screenshot. */
const Lightbox = ({ shot, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" onClick={onClose}>
        Close
      </button>
      <figure>
        <img src={shot.src} alt={shot.title} />
        <p>
          {shot.title}. {shot.caption}
        </p>
      </figure>
    </div>
  );
};

const CaseStudy = ({ project }) => {
  const { projects } = portfolioData;
  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  const heroRef = useRef(null);
  const [flat, setFlat] = useState(false);
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  // The hero screenshot starts tilted back and lies flat once scrolled to
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => setFlat(heroRef.current.getBoundingClientRect().top < window.innerHeight * 0.55);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const zoom = (index) => (
    <button
      type="button"
      className="zoom"
      onClick={() => setOpen(index)}
      aria-label={`Enlarge ${index === 0 ? 'screenshot' : project.gallery[index].title}`}
    >
      <Win
        project={project}
        index={index}
        eager={index === 0}
        priority={index === 0 ? 'high' : undefined}
        sizes={index === 0 ? '(max-width: 1240px) 100vw, 1160px' : '(max-width: 820px) 100vw, 560px'}
      />
    </button>
  );

  return (
    <>
      <div className="wrap">
        <header className="phd">
          <div>
            <p className="crumbs">
              <Link to="/projects">Work</Link>
              <ProblemChips project={project} />
            </p>
            <h1 className="h">{project.name}</h1>
            <p className="t">{project.title}</p>
          </div>
          <div>
            <dl className="facts">
              <dt>Year</dt>
              <dd>{project.year}</dd>
              {project.commits && (
                <>
                  <dt>Commits</dt>
                  <dd>{project.commits}</dd>
                </>
              )}
              <dt>My part</dt>
              <dd>{myPart(project)}</dd>
            </dl>
            <div className="pb">
              {project.live && (
                <ExternalButton className="btn go" href={project.live}>
                  Open live demo
                </ExternalButton>
              )}
              <ExternalButton className="btn line" href={project.github}>
                View the code
              </ExternalButton>
            </div>
          </div>
        </header>

        <div ref={heroRef} className={`heroshot${flat ? ' flat' : ''}`}>
          {project.gallery[0] ? zoom(0) : <Win project={project} />}
        </div>

        <section className="story">
          <div>
            <h2 className="lab">The problem</h2>
            <p>{project.problem}</p>
          </div>
          <div>
            <h2 className="lab">What I built</h2>
            <p>{project.built}</p>
          </div>
        </section>

        <section className="blk">
          <h2 className="lab">What it does</h2>
          <ul className="feats">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="blk">
          <h2 className="lab">Built with</h2>
          <div className="stackrow">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {project.gallery.length > 1 && (
          <section className="blk">
            <h2 className="lab">Screens</h2>
            <div className="gal">
              {project.gallery.slice(1).map((shot, j) => (
                <figure key={shot.title}>
                  {zoom(j + 1)}
                  <figcaption>
                    <b>{shot.title}.</b>
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav className="pn" aria-label="More projects">
          <Link to={`/projects/${prev.key}`}>
            <small>Previous project</small>
            <b>{prev.name}</b>
          </Link>
          <Link to={`/projects/${next.key}`}>
            <small>Next project</small>
            <b>{next.name}</b>
          </Link>
        </nav>
      </div>
      <div style={{ height: 64 }} />
      <Cta />

      {open !== null && <Lightbox shot={project.gallery[open]} onClose={close} />}
    </>
  );
};

export default CaseStudy;
