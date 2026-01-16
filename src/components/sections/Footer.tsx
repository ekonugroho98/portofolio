
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800 text-center">
      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Eko Nugroho. Backend Engineer Portfolio.</p>
        <div className="flex justify-center gap-6">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Golang Expert</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Architecture</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Reliability Focused</span>
        </div>
      </div>
    </footer>
  );
};
