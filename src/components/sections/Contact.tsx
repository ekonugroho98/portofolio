import React from 'react';
import { SectionHeading } from '../SectionHeading';

export const Contact: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="06"
        label="contact"
        title="Let's build something reliable"
        subtitle="Based in Bogor, Indonesia. Open to backend engineering challenges and system optimization projects."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: terminal contact card */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-black">
          <div className="px-4 h-10 flex items-center gap-2 border-b border-slate-700/60">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-green-400" />
            <span className="ml-2 font-mono text-xs text-slate-400">contact.sh</span>
          </div>
          <div className="p-6 md:p-8 font-mono text-sm space-y-5">
            <div>
              <p className="text-slate-500">$ cat ./contact.json</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:ekonugroho98@gmail.com" className="flex items-center justify-between group">
                <span className="text-accent">"email"</span>
                <span className="text-slate-300 group-hover:text-primary transition-colors">ekonugroho98@gmail.com</span>
              </a>
              <div className="h-px bg-slate-700/50" />
              <a href="tel:+6281519624321" className="flex items-center justify-between group">
                <span className="text-accent">"phone"</span>
                <span className="text-slate-300 group-hover:text-primary transition-colors">(+62) 815 1962 4321</span>
              </a>
              <div className="h-px bg-slate-700/50" />
              <a
                href="https://linkedin.com/in/ekonugroho98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <span className="text-accent">"linkedin"</span>
                <span className="text-slate-300 group-hover:text-primary transition-colors">/in/ekonugroho98</span>
              </a>
              <div className="h-px bg-slate-700/50" />
              <div className="flex items-center justify-between">
                <span className="text-accent">"location"</span>
                <span className="text-slate-300">Bogor, Indonesia</span>
              </div>
            </div>
            <p className="text-slate-500 pt-2">
              $ <span className="text-primary">_</span>
              <span className="cursor-blink text-primary">|</span>
            </p>
          </div>
        </div>

        {/* Right: message form */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-6 md:p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-primary">name</label>
                <input
                  className="w-full h-11 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-primary">email</label>
                <input
                  className="w-full h-11 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-xs text-primary">subject</label>
              <input
                className="w-full h-11 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="Project discussion"
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-xs text-primary">message</label>
              <textarea
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                placeholder="Hello, I'd like to talk about..."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-mono text-sm font-semibold py-3.5 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
            >
              <span>send_message()</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
