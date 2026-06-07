import React from 'react';
import { SectionHeading } from '../SectionHeading';

interface SkillItemProps {
  label: string;
  isCore?: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, isCore }) => (
  <div className="skill-card px-4 py-3 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 flex justify-between items-center">
    <span className="font-mono text-sm text-slate-700 dark:text-slate-200">{label}</span>
    {isCore && (
      <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">CORE</span>
    )}
  </div>
);

interface Group {
  icon: React.ReactNode;
  title: string;
  file: string;
  items: SkillItemProps[];
}

const codeIcon = (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const cogIcon = (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const dbIcon = (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
  </svg>
);

const groups: Group[] = [
  {
    icon: codeIcon,
    title: 'Languages & Frameworks',
    file: 'languages.go',
    items: [
      { label: 'Go (Golang)', isCore: true },
      { label: 'Java (Spring Boot)', isCore: true },
      { label: 'PHP (Laravel, CI)', isCore: true },
      { label: 'Node.js (Express)' },
      { label: 'JavaScript / Bootstrap' },
    ],
  },
  {
    icon: cogIcon,
    title: 'Architecture & DevOps',
    file: 'infra.yaml',
    items: [
      { label: 'Microservices', isCore: true },
      { label: 'REST API / gRPC', isCore: true },
      { label: 'Docker / Containers' },
      { label: 'Git (GitLab, GitHub)' },
      { label: 'CI/CD Pipelines' },
    ],
  },
  {
    icon: dbIcon,
    title: 'Databases & Tools',
    file: 'storage.sql',
    items: [
      { label: 'MySQL / PostgreSQL', isCore: true },
      { label: 'Oracle / SQL Server', isCore: true },
      { label: 'Redis / NoSQL' },
      { label: 'Postman / API Testing' },
      { label: 'Linux / Server Admin' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="02"
        label="skills"
        title="Technical Expertise"
        subtitle="Proven proficiency across languages, frameworks, and architectural patterns."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {groups.map((g) => (
          <div key={g.title} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                {g.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{g.title}</h3>
                <p className="font-mono text-xs text-slate-400">{g.file}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {g.items.map((s) => (
                <SkillItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
