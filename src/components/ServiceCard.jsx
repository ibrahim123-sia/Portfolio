import React from 'react';
import { Check, Bot, Search, Workflow, Layers, Server, Cloud, Sparkles } from 'lucide-react';

const iconMap = {
  agent: Bot,
  rag: Search,
  automation: Workflow,
  fullstack: Layers,
  backend: Server,
  cloud: Cloud,
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <div className="card card-hover group relative h-full overflow-hidden p-7">
      {/* Accent rail that reveals on hover */}
      <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-accent-soft text-accent-on">
          <Icon className="h-5 w-5" />
        </div>
        {typeof index === 'number' && (
          <span className="font-display text-sm font-semibold text-faint">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-content">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
