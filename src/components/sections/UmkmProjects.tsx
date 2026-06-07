import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';

interface UmkmProject {
  title: string;
  category: string;
  description: string;
  tech: string[];
  url: string;

}

const umkmProjects: UmkmProject[] = [
  {
    title: 'KiloFresh Laundry',
    category: 'Landing Page',
    description: 'Landing page for a laundry pickup & delivery service with online ordering via WhatsApp, pricing packages, and customer testimonials.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://01-kilofresh-laundry.vercel.app',

  },
  {
    title: 'Kopi Senja',
    category: 'Landing Page',
    description: 'Artisan coffee shop website featuring menu showcase, membership plans, gallery, and WhatsApp-based ordering system.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://02-kopi-senja.vercel.app',
  },
  {
    title: "Gentleman's Cut",
    category: 'Landing Page',
    description: 'Premium barbershop landing page with service catalog, pricing tiers, booking via WhatsApp, and customer reviews.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://03-gentlemans-cut.vercel.app',
  },
  {
    title: 'Dapur Bunda Catering',
    category: 'Landing Page',
    description: 'Home-style catering service with menu packages for events, daily subscriptions, and halal-certified food offerings.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://04-dapur-bunda-catering.vercel.app',
  },
  {
    title: 'Lensa Cerita Studio',
    category: 'Landing Page',
    description: 'Photography studio website showcasing prewedding, family, and product photography with portfolio gallery and pricing.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://05-lensa-cerita-studio.vercel.app',
  },
  {
    title: 'Garasi Jaya Bengkel',
    category: 'Landing Page',
    description: 'Auto repair workshop website with service catalog, diagnostic scanner info, and maintenance package pricing.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://06-garasi-jaya-bengkel.vercel.app',
  },
  {
    title: 'Senyum Sehat Klinik',
    category: 'Landing Page',
    description: 'Family dental clinic website with treatment services, consultation booking, and patient testimonials.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://07-senyum-sehat-klinik.vercel.app',
  },
  {
    title: 'FitZone Gym',
    category: 'Landing Page',
    description: 'Gym & fitness studio website with class schedules, membership plans, trainer profiles, and facility gallery.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://08-fitzone-gym.vercel.app',
  },
  {
    title: 'Mekar Florist',
    category: 'Landing Page',
    description: 'Flower shop website with bouquet collections, custom arrangement ordering, pricing tiers, and delivery info.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://09-mekar-florist.vercel.app',
  },
  {
    title: 'CetakCepat Percetakan',
    category: 'Landing Page',
    description: 'Digital print shop website with product catalog, bulk pricing, and quick-order system via WhatsApp.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://10-cetakcepat-percetakan.vercel.app',
  },
  {
    title: 'Nusantara Travel',
    category: 'Landing Page',
    description: 'Travel agency website with destination packages for Bromo, Labuan Bajo, Bali, Raja Ampat, and custom trips.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://11-nusantara-travel.vercel.app',
  },
  {
    title: 'Glow Beauty Salon',
    category: 'Landing Page',
    description: 'Beauty salon & spa website with treatment menu, bridal packages, spa pricing, and appointment booking.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://12-glow-beauty-salon.vercel.app',
  },
  {
    title: 'FloriStock',
    category: 'Web App',
    description: 'Flower shop inventory management system with real-time stock tracking, recipe/BOM management, sales logging, and financial reporting.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://floristock.vercel.app',
  },
];

export const UmkmProjects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'Landing Page', 'Web App'];
  const filtered = umkmProjects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="05"
        label="umkm"
        title="UMKM Projects"
        subtitle="Landing pages and web apps built for small & medium businesses across various industries."
      />

      <div className="mt-10 mb-12 flex flex-wrap gap-2 items-center font-mono text-[13px]">
        <span className="text-slate-400 mr-1">filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`h-9 px-4 rounded-lg transition-colors ${
              filter === cat
                ? 'bg-primary text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10'
            }`}
          >
            {cat === 'all' ? '*' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 project-card-hover"
          >
            <div className="px-5 h-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary transition-colors" />
                <span>{project.category}</span>
              </div>
              <span className="text-slate-300 dark:text-slate-600">{`{ }`}</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-primary/5 text-primary border border-primary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-slate-400 group-hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                Live Demo
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
