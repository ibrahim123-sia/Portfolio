import React from 'react';

/**
 * Subtle fade-in when a page renders, done in CSS (see `.reveal` in index.css).
 * It does not wait for the element to scroll into view, so content can never
 * stay hidden: a full-page screenshot or a reader who never scrolls still sees
 * everything. Off under prefers-reduced-motion.
 */
const Reveal = ({ as = 'div', className = '', children, ...rest }) => {
  const Tag = as;
  return (
    <Tag className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
