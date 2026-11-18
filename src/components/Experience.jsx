import React from 'react';
import { portfolioData } from '../data';
import Reveal from './Reveal';

/**
 * Experience, newest first, one row per company. A company with more than one
 * role lists them together, newest on top, so a promotion reads clearly.
 */
const Experience = () => (
  <ol>
    {portfolioData.experience.map((job) => {
      const [current, ...earlier] = job.roles;
      const meta = [job.location, job.type].filter(Boolean).join(' · ');

      return (
        <Reveal
          as="li"
          key={job.company}
          className="grid gap-4 border-t border-rule py-8 md:grid-cols-12 md:gap-8"
        >
          <div className="md:col-span-3">
            <h3 className="display text-3xl">{job.company}</h3>
            {job.companyNote && <p className="mt-2 text-sm text-muted">{job.companyNote}</p>}
            {meta && <p className="label mt-2">{meta}</p>}
          </div>

          <div className="md:col-span-9">
            <dl className="space-y-1">
              {[current, ...earlier].map((role, i) => (
                <div key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <dt className={i === 0 ? 'text-lg font-medium' : 'text-[15px] text-muted'}>
                    {role.title}
                  </dt>
                  <dd className="label">{role.period}</dd>
                </div>
              ))}
            </dl>
            {earlier.length > 0 && (
              <p className="mt-2 text-sm text-accent">
                Promoted to {current.title} in {current.period.split(' – ')[0]}
              </p>
            )}

            <div className="mt-5 max-w-3xl space-y-2 text-[15px] leading-relaxed text-muted">
              {job.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>

            {job.stack && <p className="label mt-5">{job.stack.join(' · ')}</p>}
          </div>
        </Reveal>
      );
    })}
  </ol>
);

export default Experience;
