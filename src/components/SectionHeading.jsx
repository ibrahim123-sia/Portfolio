import React from 'react';
import Reveal from './Reveal';

/**
 * Left-aligned section header: small uppercase label + heading + optional lead.
 * (`icon` is accepted for backwards-compat but intentionally not rendered.)
 */
const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <Reveal className="mb-12 max-w-2xl">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.01em] text-content md:text-[2.5rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
