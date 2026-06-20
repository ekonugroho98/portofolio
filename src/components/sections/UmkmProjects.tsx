import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '../SectionHeading';

interface UmkmProject {
  title: string;
  category: string;
  description: string;
  tech: string[];
  url: string;

}

const WHATSAPP = '6281519624321';

const waLinkFor = (title: string, url: string) =>
  `https://wa.me/${WHATSAPP}?text=` +
  encodeURIComponent(`Halo Eko, saya tertarik dibuatkan website seperti *${title}*.\nContoh: ${url}\nBisa diskusi?`);

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
        index="01"
        label="beliwebsite"
        title="beliwebsite"
        subtitle="Landing pages & web apps for small businesses — start from Rp 200K, already online with free hosting. Click an example to order via WhatsApp."
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
        {filtered.map((project, idx) => {
          const wa = waLinkFor(project.title, project.url);
          const startFromLabel = project.category === 'Web App' ? 'start from Rp 1M' : 'start from Rp 200K';
          return (
          <div
            key={idx}
            className="group relative flex flex-col rounded-xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 project-card-hover"
          >
            {/* Website Preview */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <iframe
                src={project.url}
                title={project.title}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                className="w-[1280px] h-[800px] origin-top-left pointer-events-none"
                style={{ transform: 'scale(0.28125)', transformOrigin: 'top left' }}
                tabIndex={-1}
              />
              {/* Hover overlay: two actions */}
              <div className="absolute inset-0 flex items-center justify-center gap-2.5 bg-slate-900/55 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white text-slate-900 px-3.5 py-2 text-xs font-mono font-semibold hover:bg-slate-100 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3h7v7M21 3l-9 9M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                  </svg>
                  Lihat Demo
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-white px-3.5 py-2 text-xs font-mono font-semibold hover:bg-primary-dark transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 2.9 1.2 2.9.8 3.4.8.5 0 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3 0-.1-.2-.2-.5-.3M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20" />
                  </svg>
                  Pesan via WA
                </a>
              </div>
            </div>

            <div className="px-5 h-10 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary transition-colors" />
                <span>{project.category}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono text-[10px]">
                {startFromLabel}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-1 rounded bg-primary/5 text-primary border border-primary/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 font-mono text-xs shrink-0">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                    Demo
                  </a>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                    WA
                  </a>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};
