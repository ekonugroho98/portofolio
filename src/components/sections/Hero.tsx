
import React from 'react';
import profilePhoto from '@/assets/images/eko-nugroho.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold tracking-widest text-xs uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">location_on</span>
            Bogor, Indonesia
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#0c1d1a] dark:text-white">
            Backend Engineer & <span className="text-primary">System Architect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            7+ years of experience building high-performance backend systems. Specializing in Go, Java, and scalable microservices architecture. Currently optimizing critical operations at BlueBird.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#work" className="bg-primary text-white px-8 py-4 rounded-lg text-base font-bold hover:shadow-lg transition-all">
            View My Projects
          </a>
          <a href="mailto:ekonugroho98@gmail.com" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
            Contact Me
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 relative">
        <div className="aspect-square bg-neutral-surface dark:bg-gray-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gray-100 dark:border-gray-700 shadow-xl">
           <img
             src={profilePhoto}
             alt="Eko Nugroho - Backend Engineer & System Architect"
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg hidden md:block">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">7+</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Years Exp.</span>
            </div>
            <div className="w-px h-10 bg-gray-200 dark:bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#0c1d1a] dark:text-white">10K+</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Daily Tx</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
