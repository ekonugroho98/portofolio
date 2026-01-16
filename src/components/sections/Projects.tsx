
import React, { useState } from 'react';

interface Project {
  title: string;
  category: string;
  tags: string[];
  description: string;
  tech: string[];
  imageUrl: string;
  linkText: string;
  linkIcon: string;
}

const projects: Project[] = [
  {
    title: "GoldenBird System Integration",
    category: "System Integration",
    tags: ["Transportation", "Go"],
    description: "Successfully merged GoldenBird system with Service Taxi Meter system to unify fleet operations, improving operational efficiency and system reliability.",
    tech: ["Go", "SQL", "REST API"],
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    linkText: "BlueBird Project",
    linkIcon: "🚗"
  },
  {
    title: "Extended Tipping System",
    category: "Feature Enhancement",
    tags: ["Reliability", "Go"],
    description: "Enhanced tipping functionality from 30-minute limit to 24H availability, significantly improving user experience and operational flexibility.",
    tech: ["Go", "MySQL", "API Design"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-bcb063994a5c?q=80&w=800&auto=format&fit=crop",
    linkText: "Feature Launch",
    linkIcon: "⚡"
  },
  {
    title: "MYBB 6 API Platform",
    category: "API Development",
    tags: ["High-Load", "Performance"],
    description: "Developed high-performance RESTful APIs supporting 10,000+ daily transactions with <100ms response time, ensuring reliable operations for critical services.",
    tech: ["Go", "Golang", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
    linkText: "Production System",
    linkIcon: "🔌"
  },
  {
    title: "Data Migration Scheduler",
    category: "Data Engineering",
    tags: ["Finance", "Java"],
    description: "Built high-volume data migration scheduler processing millions of records daily for Bank Mandiri Syariah with zero data loss and guaranteed consistency.",
    tech: ["Java", "SQL Server", "Scheduler"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    linkText: "Enterprise Solution",
    linkIcon: "💾"
  },
  {
    title: "Google Hotel Ads Integration",
    category: "API Integration",
    tags: ["Travel", "PHP"],
    description: "Seamlessly integrated Travellergram system with Google Hotel Ads API for automated room bookings, expanding market reach and improving booking efficiency.",
    tech: ["PHP", "CodeIgniter", "XML"],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    linkText: "Live Integration",
    linkIcon: "🔗"
  },
  {
    title: "Microservices Re-architecture",
    category: "Cloud Architecture",
    tags: ["Microservices", "Modernization"],
    description: "Led full architectural overhaul transforming monolithic systems into scalable microservices architecture, improving maintainability and system resilience.",
    tech: ["Go", "Docker", "Microservices"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    linkText: "Architecture Shift",
    linkIcon: "☁️"
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All Projects');
  const categories = ['All Projects', 'System Integration', 'API Development', 'Data Engineering', 'Cloud Architecture'];

  const filteredProjects = projects.filter(p => filter === 'All Projects' || p.category === filter);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="mb-12">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0c1d1a] dark:text-white">Featured Projects</h1>
          <p className="text-[#45a191] dark:text-[#5bc3b1] text-lg font-normal leading-relaxed">
            Key professional contributions across transportation, finance, and travel industries.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-16 items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">Filter by</span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`flex h-9 items-center justify-center rounded-lg px-5 cursor-pointer transition-colors text-sm font-medium ${filter === cat ? 'bg-primary text-white' : 'bg-[#e6f4f2] dark:bg-gray-800 text-[#0c1d1a] dark:text-gray-300 hover:bg-primary/10'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="flex flex-col bg-white dark:bg-[#242424] rounded-xl overflow-hidden project-card-hover border border-gray-100 dark:border-gray-800">
            <div className="w-full aspect-[16/9] bg-center bg-no-repeat bg-cover relative group" style={{ backgroundImage: `url("${project.imageUrl}")` }}>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded tracking-wider">{project.category}</span>
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-bold uppercase rounded tracking-wider">{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#0c1d1a] dark:text-white mb-2">{project.title}</h3>
              <p className="text-[#45a191] dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex items-center gap-3 mb-6">
                {project.tech.map((t, i) => (
                  <React.Fragment key={t}>
                    <span className="text-xs font-mono text-gray-500">{t}</span>
                    {i < project.tech.length - 1 && <span className="w-1 h-1 bg-gray-300 rounded-full"></span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-primary text-white text-xs font-bold h-9 rounded-lg hover:bg-[#008c75] transition-colors flex items-center justify-center gap-2">
                  <span className="text-sm">{project.linkIcon}</span>
                  {project.linkText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
