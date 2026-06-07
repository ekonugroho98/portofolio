import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';

interface Project {
  title: string;
  category: string;
  tags: string[];
  description: string;
  tech: string[];
  linkText: string;
}

const projects: Project[] = [
  {
    title: 'GoldenBird System Integration',
    category: 'System Integration',
    tags: ['Transportation', 'Go'],
    description:
      'Merged GoldenBird system with Service Taxi Meter system to unify fleet operations, improving operational efficiency and system reliability.',
    tech: ['Go', 'SQL', 'REST API'],
    linkText: 'BlueBird Project',
  },
  {
    title: 'Extended Tipping System',
    category: 'Feature Enhancement',
    tags: ['Reliability', 'Go'],
    description:
      'Enhanced tipping functionality from a 30-minute limit to 24H availability, significantly improving user experience and operational flexibility.',
    tech: ['Go', 'MySQL', 'API Design'],
    linkText: 'Feature Launch',
  },
  {
    title: 'MYBB 6 API Platform',
    category: 'API Development',
    tags: ['High-Load', 'Performance'],
    description:
      'High-performance RESTful APIs supporting 10,000+ daily transactions with <100ms response time, ensuring reliable operations for critical services.',
    tech: ['Go', 'Golang', 'Performance'],
    linkText: 'Production System',
  },
  {
    title: 'Data Migration Scheduler',
    category: 'Data Engineering',
    tags: ['Finance', 'Java'],
    description:
      'High-volume data migration scheduler processing millions of records daily for Bank Mandiri Syariah with zero data loss and guaranteed consistency.',
    tech: ['Java', 'SQL Server', 'Scheduler'],
    linkText: 'Enterprise Solution',
  },
  {
    title: 'Google Hotel Ads Integration',
    category: 'API Integration',
    tags: ['Travel', 'PHP'],
    description:
      'Integrated Travellergram system with Google Hotel Ads API for automated room bookings, expanding market reach and improving booking efficiency.',
    tech: ['PHP', 'CodeIgniter', 'XML'],
    linkText: 'Live Integration',
  },
  {
    title: 'Microservices Re-architecture',
    category: 'Cloud Architecture',
    tags: ['Microservices', 'Modernization'],
    description:
      'Led a full architectural overhaul transforming monolithic systems into scalable microservices, improving maintainability and system resilience.',
    tech: ['Go', 'Docker', 'Microservices'],
    linkText: 'Architecture Shift',
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'System Integration', 'API Development', 'Data Engineering', 'Cloud Architecture'];
  const filtered = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="04"
        label="work"
        title="Featured Projects"
        subtitle="Key professional contributions across transportation, finance, and travel industries."
      />

      <div className="mt-10 mb-12 flex flex-wrap gap-2 items-center font-mono text-[13px]">
        <span className="text-slate-400 mr-1">filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`h-9 px-4 rounded-lg transition-colors ${
              filter === cat
                ? 'bg-primary text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10'
            }`}
          >
            {cat === 'all' ? '*' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 project-card-hover"
          >
            <div className="px-5 h-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary transition-colors" />
                <span>{project.category}</span>
              </div>
              <span className="text-slate-300 dark:text-slate-600">{`{ }`}</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-primary/5 text-primary border border-primary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400 group-hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                {project.linkText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
