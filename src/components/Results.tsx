import React from 'react';
import { ExternalLink } from 'lucide-react';
import { RESULTS_ARCHIVE } from '../data/eventData';

export const Results: React.FC = () => {
  return (
    <section id="vysledky" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Výsledky
          </h2>
        </div>

        {/* Results Archive Grid */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              Archiv výsledků (2020 – 2024)
            </h3>
            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              Zpracování: ISCAREX Pohár
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {RESULTS_ARCHIVE.map((res) => (
              <a
                key={res.year}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 p-3 sm:p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between gap-2 text-sm sm:text-base font-bold text-emerald-700 whitespace-nowrap">
                  <span>Výsledky {res.year}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
