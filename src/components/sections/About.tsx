
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight">Education & Foundation</h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-bold text-primary">Bachelor of Information System</p>
              <p className="text-sm font-medium">Gunadarma University</p>
              <p className="text-xs text-gray-400">Dec 2016 • GPA 3.49 / 4.00</p>
            </div>
            <div>
              <p className="font-bold text-primary">Full-stack Developer Bootcamp</p>
              <p className="text-sm font-medium">Trengginas Daya Insani</p>
              <p className="text-xs text-gray-400">Jan 2017 — Feb 2017</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Results-driven Backend Engineer with 7+ years of experience specializing in high-performance systems, microservices architecture, and API development. Proven track record of optimizing legacy systems and architecting reliable backend infrastructures.
          </p>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            My journey evolved from mobile development to specializing in high-load backend systems. Expert at migrating complex monolithic applications to efficient, native SQL-driven architectures in Golang and Java. Passionate about system reliability, performance optimization, and scalable design patterns.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Specialization</span>
              <span className="text-base font-medium">Backend Systems & Architecture</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Core Languages</span>
              <span className="text-base font-medium">Go, Java, PHP</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">Email</span>
              <a href="mailto:ekonugroho98@gmail.com" className="text-base font-medium hover:text-primary transition-colors">ekonugroho98@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
