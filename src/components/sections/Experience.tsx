import React from 'react';
import { SectionHeading } from '../SectionHeading';

const ExperienceItem: React.FC<{
  title: string;
  company: string;
  period: string;
  description: string[];
  last?: boolean;
}> = ({ title, company, period, description, last }) => (
  <div className="relative pl-10 pb-12 group">
    {/* Timeline line */}
    {!last && <span className="absolute left-[14px] top-8 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />}
    {/* Node */}
    <span className="absolute left-2 top-1.5 size-[14px] rounded-full border-2 border-primary bg-background-light dark:bg-background-dark group-hover:bg-primary transition-colors" />

    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
        {period}
      </span>
    </div>
    <p className="font-mono text-sm text-primary mb-4">@ {company}</p>
    <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      {description.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="text-primary font-mono mt-0.5 shrink-0">▹</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="03"
              label="experience"
              title="Career Path"
              subtitle="Reliable systems across transportation, travel, and financial sectors."
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <ExperienceItem
            title="Backend Engineer"
            company="BlueBird"
            period="Oct 2022 — Present"
            description={[
              'Designed and implemented the Reliability System (MRG) for consistent performance in critical operations.',
              'Optimized system performance by 15% by migrating from GORM to native SQL queries in Golang.',
              'Developed RESTful APIs for MYBB 6 supporting 10,000 daily transactions with <100ms response time.',
              'Merged GoldenBird system with Service Taxi Meter system to unify fleet operations.',
              'Extended tipping system functionality to 24H availability from previous 30-minute limit.',
              'Reduced technical debt and service restarts to ensure operational efficiency.',
            ]}
          />
          <ExperienceItem
            title="Software Engineer"
            company="Travellergram"
            period="Jan 2019 — Sep 2022"
            description={[
              'Developed comprehensive APIs for Web and Android front-end applications.',
              'Conducted end-to-end program modifications by analyzing and implementing business requirements.',
              'Re-engineered monolithic systems into microservices architecture.',
              'Integrated Google Hotel Ads API for automated room bookings.',
              'Performed User Acceptance Tests (UAT) to ensure zero-defect software delivery.',
            ]}
          />
          <ExperienceItem
            title="Mobile Developer"
            company="Amanah Corporation"
            period="May 2018 — Dec 2018"
            description={[
              'Developed PPOB Mobile Applications for Bank Mandiri Syariah.',
              'Built high-volume data migration scheduler processing millions of records daily.',
              'Monitored and controlled application performance to ensure stability.',
              'Collaborated with clients and partners to gather and implement technical specifications.',
            ]}
          />
          <ExperienceItem
            title="IT Programmer"
            company="Trengginas Daya Insani"
            period="Mar 2017 — Apr 2018"
            last
            description={[
              'Developed Core System Applications (Web-based) for Mandiri Utama Finance.',
              'Participated in Full-stack Developer Bootcamp certification program.',
            ]}
          />
        </div>
      </div>
    </section>
  );
};
