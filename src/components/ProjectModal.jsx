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
 * Case-study modal for a project: client-perspective overview + outcome
 * highlights + an image slider where each shot has its own caption.
 * Expects `project.detail` (see data.js). `onClose` closes the modal.
 */
const ProjectModal = ({ project, onClose }) => {
  const reduce = useReducedMotion();
  const detail = project?.detail;
  const gallery = detail?.gallery ?? [];
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

  if (!detail) return null;

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
      aria-label={`${project.title} — case study`}
    >
      <Motion.div
        ref={panelRef}
        className="card relative my-auto w-full max-w-4xl rounded-2xl border border-line"
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
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
          <span className="eyebrow text-xs">Case study</span>
          <h3 className="mt-3 pr-10 text-2xl font-semibold leading-snug text-content">
            {project.title}
          </h3>
          {(detail.role || detail.stack) && (
            <div className="mt-3 space-y-1 text-sm text-faint">
              {detail.role && <p>{detail.role}</p>}
              {detail.stack && <p>{detail.stack}</p>}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          {/* Overview */}
          {detail.overview && (
            <p className="mt-6 text-[15.5px] leading-relaxed text-muted">
              {detail.overview}
            </p>
          )}

          {/* Highlights */}
          {detail.highlights?.length > 0 && (
            <ul className="mt-6 grid gap-3">
              {detail.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-muted">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Slider */}
          {gallery.length > 0 && (
            <div className="mt-8">
              <div className="relative h-[48vh] overflow-hidden rounded-xl border border-line bg-bg sm:h-[56vh]">
                <AnimatePresence initial={false}>
                  <Motion.img
                    key={index}
                    src={current.src}
                    alt={current.title}
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
                <h4 className="text-base font-semibold text-content">
                  {current.title}
                </h4>
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
          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-line pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="h-[18px] w-[18px]" />
                View Github
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                View project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default ProjectModal;
