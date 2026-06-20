import React from 'react';
import { SectionHeading } from '../SectionHeading';

export const About: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading index="02" label="about" title="Profile & Foundation" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
            Results-driven Backend Engineer with 7+ years specializing in high-performance systems,
            microservices architecture, and API development. Proven track record of optimizing legacy
            systems and architecting reliable backend infrastructures.
          </p>
          <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
            My journey evolved from mobile development to high-load backend systems. Expert at migrating
            complex monolithic applications to efficient, native SQL-driven architectures in Golang and
            Java. Passionate about system reliability, performance optimization, and scalable design patterns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 mt-2">
            {[
              { k: 'specialization', v: 'Backend Systems & Architecture' },
              { k: 'core_languages', v: 'Go · Java · PHP' },
              { k: 'location', v: 'Bogor, Indonesia' },
            ].map((item) => (
              <div key={item.k} className="bg-surface-light dark:bg-surface-dark p-5 flex flex-col gap-1.5">
                <span className="font-mono text-xs text-primary">{item.k}</span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{item.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education card */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark overflow-hidden">
            <div className="px-5 h-11 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
              <span className="text-primary">~/</span>education.log
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="relative pl-5 border-l-2 border-primary/40">
                <div className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-primary" />
                <p className="font-semibold text-slate-900 dark:text-white">Bachelor of Information Systems</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Gunadarma University</p>
                <p className="font-mono text-xs text-slate-400 mt-1">Dec 2016 · GPA 3.49 / 4.00</p>
              </div>
              <div className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                <p className="font-semibold text-slate-900 dark:text-white">Full-stack Developer Bootcamp</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Trengginas Daya Insani</p>
                <p className="font-mono text-xs text-slate-400 mt-1">Jan 2017 — Feb 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
