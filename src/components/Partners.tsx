import React from 'react';
import { Handshake } from 'lucide-react';
import { SPONSORS_DATA } from '../data/eventData';

export const Partners: React.FC = () => {
  const patronSponsors = SPONSORS_DATA.filter((s) => s.tier === 'patron');
  const goldSponsors = SPONSORS_DATA.filter((s) => s.tier === 'gold');
  const regularSponsors = SPONSORS_DATA.filter((s) => s.tier === 'partner' || s.tier === 'supporter');

  return (
    <section id="partneri" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Partneři & Sponzoři
          </h2>
        </div>

        {/* Patrons & Main Institutions */}
        <div className="mb-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 max-w-7xl mx-auto">
            {patronSponsors.map((s, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200 flex items-center gap-5 shadow-2xs"
              >
                {s.logoUrl && (
                  <div
                    className={`h-24 rounded-xl bg-white border border-slate-200 p-3 flex items-center justify-center shrink-0 ${
                      s.name === 'Pardubický kraj' ? 'w-40 sm:w-48' : 'w-24'
                    }`}
                  >
                    <img
                      src={s.logoUrl}
                      alt={s.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-slate-900 font-display text-xl sm:text-2xl xl:whitespace-nowrap">
                    {s.name}
                  </h4>
                  <p className="text-base sm:text-lg text-slate-500 mt-1">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold & Sport Partners */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {goldSponsors.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 transition-all flex flex-col items-center text-center justify-between group shadow-2xs"
              >
                <div className="w-full h-14 flex items-center justify-center mb-2">
                  {s.logoUrl ? (
                    <img
                      src={s.logoUrl}
                      alt={s.name}
                      className="max-h-12 max-w-[85%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="font-bold text-slate-700 text-sm">{s.name}</span>
                  )}
                </div>
                <span className="text-sm font-bold text-slate-900 font-display">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional & Supporter Logos Grid */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center mb-4">
            Další partneři & pivovary
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {regularSponsors.map((s, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#F8FAF9] border border-slate-200 flex flex-col items-center text-center justify-center h-24 group hover:border-slate-300 transition-all"
              >
                {s.logoUrl ? (
                  <img
                    src={s.logoUrl}
                    alt={s.name}
                    className="max-h-12 max-w-[90%] object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-xs font-bold text-slate-800">{s.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
