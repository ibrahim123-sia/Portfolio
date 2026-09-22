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

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <div className="card card-hover group h-full p-7">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-accent-soft text-accent-on">
        <Icon className="h-5 w-5" />
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
