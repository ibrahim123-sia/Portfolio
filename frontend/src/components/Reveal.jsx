import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Subtle scroll reveal: fades content up by 16px, once, when it enters view.
 * Uses Framer Motion. Honors prefers-reduced-motion (renders static).
 *
 * Props: `delay` (seconds) to stagger a group, `as` to swap the element,
 * plus any standard props (className, etc.) forwarded to the element.
 */
const Reveal = ({ children, delay = 0, as = 'div', ...rest }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag {...rest}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
