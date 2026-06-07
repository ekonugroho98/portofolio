import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-slate-400">
          <span className="text-primary">©</span> 2026 eko.nugroho — built with React + Tailwind
        </p>
        <div className="flex items-center gap-4 font-mono text-[11px] text-slate-400">
          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Golang</span>
          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Architecture</span>
          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">Reliability</span>
        </div>
      </div>
    </footer>
  );
};
