import React from 'react';

interface SectionHeadingProps {
  index: string; // e.g. "01"
  label: string; // e.g. "about"
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ index, label, title, subtitle }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3 font-mono text-sm text-primary">
      <span className="text-slate-400 dark:text-slate-600">{index}.</span>
      <span>{label}()</span>
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">{title}</h2>
    {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);
