
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined fill-1">terminal</span>
          </div>
          <span className="text-lg font-bold tracking-tight">Eko Nugroho</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#work">Projects</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:ekonugroho98@gmail.com" className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};
