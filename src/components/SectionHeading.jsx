import React from 'react';
import Reveal from './Reveal';

/**
 * Section header on the page grid: a thin rule, a small mono label on the
 * left, the serif title (and optional lead and action) on the right.
 */
const SectionHeading = ({ id, eyebrow, title, subtitle, action, as = 'h2' }) => {
  const Heading = as;
  const isPageTitle = as === 'h1';
  return (
    <Reveal className="grid gap-4 border-t border-ink pt-5 md:grid-cols-12 md:gap-8">
      <p className="label md:col-span-3">{eyebrow}</p>
      <div className="md:col-span-9">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <Heading
            id={id}
            className={`display ${isPageTitle ? 'text-6xl sm:text-7xl lg:text-8xl' : 'text-5xl sm:text-6xl'}`}
          >
            {title}
          </Heading>
          {action}
        </div>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
