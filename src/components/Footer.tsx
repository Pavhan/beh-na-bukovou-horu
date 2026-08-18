import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPropoziceModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Bottom-Right "Nahoru" Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          id="btn-scroll-to-top"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#071711]/95 hover:bg-[#0d261c] text-emerald-400 hover:text-emerald-300 border border-emerald-500/70 hover:border-emerald-400 shadow-xl shadow-black/40 transition-all cursor-pointer text-sm sm:text-base font-bold backdrop-blur-md"
          aria-label="Přejít nahoru"
        >
          <span>Nahoru</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <footer className="bg-[#091510] text-slate-400 border-t border-emerald-950/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Běh na Bukovou horu</p>
        </div>
      </footer>
    </>
  );
};
