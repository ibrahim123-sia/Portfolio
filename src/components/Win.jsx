import React from 'react';
import Link from './Link';
import { problemBySlug, problemColor } from '../data';

// The address shown in a browser frame: the live host, or a made-up
// "<name>.app" when there is no live demo
const host = (project) => {
  try {
    return project.live ? new URL(project.live).host : `${project.name.toLowerCase().replace(/\s+/g, '')}.app`;
  } catch {
    return project.name;
  }
};

/**
 * A screenshot in a browser frame. Projects without screenshots get a dark
 * "cat README" preview listing their features and stack instead.
 * `as` lets the frame itself be a link (hero), `eager` skips lazy loading.
 */
export const Win = ({ project, index = 0, label, eager = false, priority, as = 'div', className = '', ...rest }) => {
  const Tag = as;
  const shot = project.gallery[index];
  const address = label || (shot ? host(project) : (project.github || '').replace(/^https?:\/\//, ''));

  return (
    <Tag className={`win ${className}`.trim()} {...rest}>
      <div className="bar">
        <i />
        <i />
        <i />
        <span>{address}</span>
      </div>
      {shot ? (
        <img
          src={shot.src}
          alt={`${project.name}: ${shot.title}`}
          width="1600"
          height="1000"
          loading={eager ? undefined : 'lazy'}
          decoding={eager ? undefined : 'async'}
          fetchPriority={priority}
        />
      ) : (
        <div className="term" role="img" aria-label={`${project.name}: summary of features`}>
          <p className="pr">
            <b>~/</b>
            {project.key} $ cat README
          </p>
          <p className="nm">{project.name}</p>
          <ul>
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature}>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="st">{project.stack.slice(0, 4).join('  /  ')}</p>
        </div>
      )}
    </Tag>
  );
};

// Coloured problem chips, each linking to that group on the Work page
export const ProblemChips = ({ project }) =>
  project.problems.map((slug) => (
    <Link
      key={slug}
      className="chip"
      to={`/projects?problem=${slug}`}
      style={{ '--c': problemColor(slug) }}
    >
      <i />
      {problemBySlug[slug].title}
    </Link>
  ));
