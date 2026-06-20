
import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { Navbar } from './components/sections/Navbar';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { ProjectEstimator } from './components/sections/ProjectEstimator';
import { CaseStudies } from './components/sections/CaseStudies';
import { UmkmProjects } from './components/sections/UmkmProjects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  // On first load with a URL hash (e.g. /#beliwebsite), scroll to that section
  // after React has rendered. Retried a few times so lazy-loaded previews
  // (iframes/images) settling don't throw off the final position.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const scrollToId = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    const timers = [0, 250, 700].map((t) => window.setTimeout(scrollToId, t));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="beliwebsite">
          <UmkmProjects />
        </section>
        <section id="estimasi">
          <ProjectEstimator />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="work">
          <Projects />
        </section>
        <section id="cases">
          <CaseStudies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
