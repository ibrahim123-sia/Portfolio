import React, { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';

// The modal is only needed on click, so it loads on demand.
const ProjectModal = lazy(() => import('./ProjectModal'));

/** Renders the case-study modal for `project` (or nothing when it is null). */
const CaseStudy = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <Suspense fallback={null}>
        <ProjectModal key={project.key} project={project} onClose={onClose} />
      </Suspense>
    )}
  </AnimatePresence>
);

export default CaseStudy;
