
import React from 'react';

const ExperienceItem: React.FC<{
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: string;
}> = ({ title, company, period, description, icon }) => (
  <div className="flex gap-8 group">
    <div className="relative">
      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
    </div>
    <div className="flex-1 pb-4">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-500">{period}</span>
      </div>
      <p className="text-primary font-semibold mb-4">{company}</p>
      <ul className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
        {description.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-primary text-sm mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-4">Professional History</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-[#0c1d1a] dark:text-white">Career Path</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Built reliable systems across transportation, travel, and financial sectors.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-16">
          <ExperienceItem
            title="Backend Engineer"
            company="BlueBird"
            period="Oct 2022 — Present"
            icon="🚗"
            description={[
              "Designed and implemented the Reliability System (MRG) for consistent performance in critical operations.",
              "Optimized system performance by 15% by migrating from GORM to native SQL queries in Golang.",
              "Developed RESTful APIs for MYBB 6 supporting 10,000 daily transactions with <100ms response time.",
              "Merged GoldenBird system with Service Taxi Meter system to unify fleet operations.",
              "Extended tipping system functionality to 24H availability from previous 30-minute limit.",
              "Reduced technical debt and service restarts to ensure operational efficiency."
            ]}
          />
          <ExperienceItem
            title="Software Engineer"
            company="Travellergram"
            period="Jan 2019 — Sep 2022"
            icon="✈️"
            description={[
              "Developed comprehensive APIs for Web and Android front-end applications.",
              "Conducted end-to-end program modifications by analyzing and implementing business requirements.",
              "Maintained application performance through proactive monitoring and regular maintenance.",
              "Re-engineered monolithic systems into microservices architecture.",
              "Integrated Google Hotel Ads API for automated room bookings.",
              "Performed User Acceptance Tests (UAT) to ensure zero-defect software delivery."
            ]}
          />
          <ExperienceItem
            title="Mobile Developer"
            company="Amanah Corporation"
            period="May 2018 — Dec 2018"
            icon="📱"
            description={[
              "Developed PPOB Mobile Applications for Bank Mandiri Syariah.",
              "Built high-volume data migration scheduler processing millions of records daily.",
              "Monitored and controlled application performance to ensure stability.",
              "Collaborated with clients and partners to gather and implement technical specifications."
            ]}
          />
          <ExperienceItem
            title="IT Programmer"
            company="Trengginas Daya Insani"
            period="Mar 2017 — Apr 2018"
            icon="💼"
            description={[
              "Developed Core System Applications (Web-based) for Mandiri Utama Finance.",
              "Participated in Full-stack Developer Bootcamp certification program."
            ]}
          />
        </div>
      </div>
    </section>
  );
};
