import React, { useEffect, useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';

const links = [
  { label: 'beliwebsite', href: '#beliwebsite' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'work', href: '#work' },
  { label: 'cases', href: '#cases' },
  { label: 'contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 dark:border-slate-800 bg-background-light/85 dark:bg-background-dark/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-lg bg-primary/10 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold group-hover:bg-primary group-hover:text-white transition-colors">
            EN
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight">
            eko<span className="text-primary">.nugroho</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary/60">/</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-primary text-white px-4 py-2 rounded-lg text-[13px] font-mono font-semibold hover:bg-primary-dark transition-colors"
          >
            ./contact
          </a>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1 font-mono text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <span className="text-primary/60">/</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
