
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="bg-[#0c1d1a] dark:bg-black rounded-3xl p-8 md:p-16 border border-slate-200/60 dark:border-slate-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tight text-white">Let's discuss system architecture.</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-lg">
              Based in Bogor, Indonesia. Reach out for backend engineering challenges or system optimization projects.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm transition-transform group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Email</p>
                  <p className="font-semibold text-white">ekonugroho98@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm transition-transform group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-primary">phone_iphone</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Phone</p>
                  <p className="font-semibold text-white">(+62) 815 1962 4321</p>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-12">
                 <a className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 font-semibold" href="#">
                  <span className="material-symbols-outlined">link</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                  <input className="w-full h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Eko Nugroho" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input className="w-full h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="ekonugroho98@gmail.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                <input className="w-full h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg px-4 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Project Discussion" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg p-4 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Hello, I'd like to talk about..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group" type="submit">
                <span>Send Message</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
