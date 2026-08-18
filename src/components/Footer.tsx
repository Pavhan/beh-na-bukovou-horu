import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPropoziceModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091510] text-white border-t border-emerald-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122820] hover:bg-[#1a382d] text-emerald-300 hover:text-white border border-emerald-700/60 transition-all cursor-pointer text-sm sm:text-base font-bold shadow-sm"
        >
          <span>Nahoru</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
