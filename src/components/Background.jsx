import React from 'react';

/**
 * Deep-navy backdrop with a soft blue wash behind the hero (upper-right,
 * where the portrait sits) plus a faint top-center glow. Static, non-interactive.
 */
const Background = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ backgroundColor: '#0A0F1A' }}
    >
      {/* Warm-cool glow behind the portrait side of the hero */}
      <div
        className="absolute right-0 top-0 h-[70vh] w-[70vw]"
        style={{
          background:
            'radial-gradient(ellipse 50% 55% at 78% 22%, rgba(76,141,255,0.12), transparent 70%)',
        }}
      />
      {/* Gentle top wash */}
      <div
        className="absolute inset-x-0 top-0 h-[45vh]"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 30% 0%, rgba(76,141,255,0.05), transparent 70%)',
        }}
      />
    </div>
  );
};

export default Background;
