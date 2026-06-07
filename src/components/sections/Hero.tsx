import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Grid + glow background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-24 -left-24 size-[420px] glow-primary pointer-events-none" />
      <div className="absolute top-40 right-0 size-[360px] glow-primary opacity-60 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            available for backend roles
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
              <span className="text-primary">const</span> engineer <span className="text-slate-400">=</span> <span className="text-accent">{'{'}</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white">
              Backend Engineer
              <br />
              <span className="text-primary">&amp; System Architect</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              7+ years building high-performance backend systems. Specializing in{' '}
              <span className="font-mono text-primary">Go</span>,{' '}
              <span className="font-mono text-primary">Java</span>, and scalable microservices.
              Currently optimizing critical operations at BlueBird.
            </p>
            <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
              <span className="text-accent">{'}'}</span><span className="cursor-blink text-primary">_</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg font-mono text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              <span className="text-white/70">$</span> view_projects
            </a>
            <a
              href="mailto:ekonugroho98@gmail.com"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-7 py-3.5 rounded-lg font-mono text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-primary/50 hover:text-primary transition-colors"
            >
              get_in_touch()
            </a>
          </div>
        </div>

        {/* Terminal window card */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-surface-light dark:bg-surface-dark shadow-2xl shadow-slate-900/10 dark:shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 h-10 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-slate-400">eko@bluebird:~</span>
            </div>
            {/* Photo */}
            <div className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img
                src="/eko-nugroho.jpg"
                alt="Eko Nugroho — Backend Engineer & System Architect"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Footer stat strip */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-700/80 border-t border-slate-200 dark:border-slate-700/80 font-mono">
              <div className="px-3 py-3 text-center">
                <div className="text-lg font-bold text-primary">7+</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-400">years</div>
              </div>
              <div className="px-3 py-3 text-center">
                <div className="text-lg font-bold text-slate-900 dark:text-white">10K+</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-400">daily tx</div>
              </div>
              <div className="px-3 py-3 text-center">
                <div className="text-lg font-bold text-accent">&lt;100ms</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-400">latency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
