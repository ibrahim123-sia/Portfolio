import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { m as Motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * Case-study modal for a project: the problem it solves, key features, stack
 * and an image slider where each shot has its own caption. `onClose` closes it.
 */
const ProjectModal = ({ project, onClose }) => {
  const reduce = useReducedMotion();
  const gallery = project.gallery ?? [];
  const [index, setIndex] = useState(0);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + gallery.length) % gallery.length);
    },
    [gallery.length]
  );

  // Keyboard: Esc closes, arrows navigate the slider, Tab is trapped inside.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        go(1);
      } else if (e.key === 'ArrowLeft') {
        go(-1);
      } else if (e.key === 'Tab') {
        // Focus trap — keep Tab focus within the modal panel.
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = panel.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, go]);

  // Lock body scroll while open; focus the close button, and restore focus
  // to whatever was focused before the modal opened when it closes.
  useEffect(() => {
    const prevFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      if (prevFocused && typeof prevFocused.focus === 'function') {
        prevFocused.focus();
      }
    };
  }, []);

  const current = gallery[index];

  return (
    <Motion.div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-6 md:items-center"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <Motion.div
        ref={panelRef}
        className="card relative my-auto w-full max-w-4xl"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: 12 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="icon-btn absolute right-4 top-4 z-10 h-9 w-9"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <p className="eyebrow">Case study</p>
          <h2 className="mt-2 pr-10 text-2xl font-bold text-content">{project.name}</h2>
          <p className="mt-1 pr-10 text-base font-medium text-accent-on">{project.title}</p>

          <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

          {/* Key features */}
          {project.features?.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          {/* Slider */}
          {gallery.length > 0 && (
            <div className="mt-8">
              <div className="relative h-[48vh] overflow-hidden rounded-xl border border-line bg-bg sm:h-[56vh]">
                <AnimatePresence initial={false}>
                  <Motion.img
                    key={index}
                    src={current.src}
                    alt={`${project.name}: ${current.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => go(-1)}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-content backdrop-blur transition-colors hover:border-line-strong hover:text-accent-on"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-content backdrop-blur transition-colors hover:border-line-strong hover:text-accent-on"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                      {index + 1} / {gallery.length}
                    </span>
                  </>
                )}
              </div>

              {/* Caption */}
              <div className="mt-4">
                <h3 className="text-base font-bold text-content">
                  {current.title}
                </h3>
                {current.caption && (
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {current.caption}
                  </p>
                )}
              </div>

              {/* Dots */}
              {gallery.length > 1 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to ${g.title}`}
                      aria-current={i === index}
                      className={`h-2 rounded-full transition-all ${
                        i === index
                          ? 'w-6 bg-accent'
                          : 'w-2 bg-line-strong hover:bg-faint'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Footer actions */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
                <Github className="h-4 w-4" aria-hidden="true" />
                Code on GitHub
              </a>
            )}
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default ProjectModal;
