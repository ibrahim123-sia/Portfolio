import React from 'react';

/**
 * Flat Ink-Blue backdrop with one very soft accent wash near the top.
 * Static and non-interactive.
 */
const Background = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ backgroundColor: '#08090B' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[55vh]"
        style={{
          background:
            'radial-gradient(ellipse 55% 100% at 50% 0%, rgba(76,141,255,0.07), transparent 70%)',
        }}
      />
    </div>
  );
};

export default Background;
