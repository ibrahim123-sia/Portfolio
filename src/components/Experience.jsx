import React from 'react';
import { portfolioData } from '../data';
import Reveal from './Reveal';

/**
 * Experience timeline, newest first. A company with more than one role lists
 * them under one entry, newest role on top, so a promotion reads clearly.
 */
const Experience = () => (
  <ol className="relative border-l border-line">
    {portfolioData.experience.map((job) => {
      const [current, ...earlier] = job.roles;
      const meta = [job.location, job.type].filter(Boolean).join(' · ');

      return (
        <Reveal as="li" key={job.company} className="relative pb-12 pl-6 last:pb-0 sm:pl-10">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
          />

          <div className="grid gap-x-10 gap-y-4 md:grid-cols-[220px_1fr]">
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-content">{job.company}</h3>
              {job.companyNote && <p className="mt-1 text-sm text-muted">{job.companyNote}</p>}
              {meta && <p className="mt-1 text-sm text-faint">{meta}</p>}
            </div>

            {/* Roles and work */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-base font-bold text-content">{current.title}</p>
                <p className="text-sm text-faint">{current.period}</p>
              </div>
              {earlier.map((role) => (
                <div
                  key={role.title}
                  className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <p className="text-[15px] text-muted">{role.title}</p>
                  <p className="text-sm text-faint">{role.period}</p>
                </div>
              ))}
              {earlier.length > 0 && (
                <p className="mt-2 text-sm text-accent-on">
                  Promoted to {current.title} in {current.period.split(' – ')[0]}
                </p>
              )}

              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-line-strong">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {job.stack && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {job.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      );
    })}
  </ol>
);

export default Experience;
