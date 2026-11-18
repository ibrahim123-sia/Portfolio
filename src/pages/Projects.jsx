import React from 'react';
import Link from '../components/Link';
import { Win } from '../components/Win';
import { useRouter } from '../router';
import { portfolioData, problemList, problemBySlug, problemColor, projectsFor } from '../data';

const { projects } = portfolioData;

const Card = ({ project }) => (
  <Link className="card" to={`/projects/${project.key}`}>
    <Win project={project} />
    <div>
      <h3>{project.name}</h3>
      <p className="s">{project.summary}</p>
    </div>
    <div className="m">
      <span className="chip">{project.year}</span>
      {project.live && (
        <span className="chip" style={{ '--c': 'var(--green)' }}>
          <i />
          Live demo
        </span>
      )}
      {project.stack.slice(0, 2).map((tech) => (
        <span key={tech} className="chip">
          {tech}
        </span>
      ))}
    </div>
  </Link>
);

const Group = ({ problem, list }) => (
  <section className="grp" style={{ '--c': problemColor(problem.slug) }}>
    <h2>
      <i />
      {problem.title}
    </h2>
    <p>{problem.description}</p>
    <div className="cards">
      {list.map((project) => (
        <Card key={project.key} project={project} />
      ))}
    </div>
  </section>
);

// /projects lists every project grouped by its main problem;
// /projects?problem=<slug> shows every project that solves that problem.
const Projects = () => {
  const { location } = useRouter();
  const param = new URLSearchParams(location.search).get('problem');
  const slug = problemBySlug[param] ? param : null;

  return (
    <div className="wrap">
      <header className="ph">
        <h1 className="h">Work</h1>
        <p>
          My projects, grouped by the problem they solve. Open any one for the full story and screens.
        </p>
      </header>
      <div className="wg">
        <nav className="side" aria-label="Filter by problem">
          <Link to="/projects" aria-current={slug ? undefined : 'true'}>
            <i />
            All work
          </Link>
          {problemList.map((problem) => (
            <Link
              key={problem.slug}
              to={`/projects?problem=${problem.slug}`}
              aria-current={slug === problem.slug ? 'true' : undefined}
              style={{ '--c': problemColor(problem.slug) }}
            >
              <i />
              {problem.title}
            </Link>
          ))}
        </nav>
        <div>
          {slug ? (
            <Group problem={problemBySlug[slug]} list={projectsFor(slug)} />
          ) : (
            problemList.map((problem) => {
              const list = projects.filter((p) => p.problems[0] === problem.slug);
              return list.length ? <Group key={problem.slug} problem={problem} list={list} /> : null;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
