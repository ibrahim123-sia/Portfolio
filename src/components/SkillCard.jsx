import React from 'react';

/**
 * Renders one skill domain as a titled group of chips.
 */
const SkillCard = ({ group }) => {
  return (
    <div className="card card-hover p-6">
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-faint">
        {group.title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-content"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
