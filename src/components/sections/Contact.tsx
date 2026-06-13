import React from 'react';
import { SectionHeading } from '../SectionHeading';

export const Contact: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="06"
        label="contact"
        title="Let's build something reliable"
        subtitle="Based in Bogor, Indonesia. Open to backend engineering challenges and system optimization projects."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: terminal contact card */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 dark:bg-black">
          <div className="px-4 h-10 flex items-center gap-2 border-b border-slate-700/60">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-yellow-400" />
            <span className="size-3 rounded-full bg-green-400" />
            <span className="ml-2 font-mono text-xs text-slate-400">contact.sh</span>
          </div>
          <div className="p-6 md:p-8 font-mono text-sm space-y-5">
            <div>
              <p className="text-slate-500">$ cat ./contact.json</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:ekonugroho98@gmail.com" className="flex items-center justify-between group">
                <span className="text-accent">"email"</span>
                <span className="text-slate-300 group-hover:text-primary transition-colors">ekonugroho98@gmail.com</span>
              </a>
              <div className="h-px bg-slate-700/50" />
              <a href="tel:+6281519624321" className="flex items-center justify-between group">
                <span className="text-accent">"phone"</span>
                <span className="text-slate-300 group-hover:text-primary transition-colors">(+62) 815 1962 4321</span>
              </a>
              <div className="h-px bg-slate-700/50" />
              <a
                href="https://linkedin.com/in/ekonugroho98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <span className="text-accent">"linkedin"</span>
                <span className="text-slate-300 group-hover:text-primary transition-colors">/in/ekonugroho98</span>
              </a>
              <div className="h-px bg-slate-700/50" />
              <div className="flex items-center justify-between">
                <span className="text-accent">"location"</span>
                <span className="text-slate-300">Bogor, Indonesia</span>
              </div>
            </div>
            <p className="text-slate-500 pt-2">
              $ <span className="text-primary">_</span>
              <span className="cursor-blink text-primary">|</span>
            </p>
          </div>
        </div>

        {/* Right: WhatsApp CTA */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-6 md:p-8 flex flex-col justify-center text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-9 text-primary" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-slate-100">Chat via WhatsApp</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Punya proyek atau ingin berdiskusi? Kirim pesan langsung, biasanya saya balas dengan cepat.
          </p>
          <a
            href="https://wa.me/6281519624321?text=Halo%20Eko%2C%20saya%20ingin%20berdiskusi%20tentang%20sebuah%20proyek."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full bg-primary text-white font-mono text-sm font-semibold py-3.5 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
          >
            <span>chat_on_whatsapp()</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="mt-4 font-mono text-xs text-slate-500">(+62) 815 1962 4321</p>
        </div>
      </div>
    </section>
  );
};
