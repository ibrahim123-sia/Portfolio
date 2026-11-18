import React from 'react';
import Reveal from './Reveal';

/**
 * Section header: small accent label, heading, optional lead, and an optional
 * action (e.g. "All projects") aligned to the right on wider screens.
 */
const SectionHeading = ({ id, eyebrow, title, subtitle, action, as = 'h2' }) => {
  const Heading = as;
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading id={id} className="mt-2 text-2xl font-bold tracking-[-0.01em] text-content sm:text-3xl">
          {title}
        </Heading>
        {subtitle && (
          <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
};

export default SectionHeading;
