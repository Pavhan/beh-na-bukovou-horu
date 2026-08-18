import React from 'react';
import { Trophy, Gift, Crown } from 'lucide-react';
import { COURSE_RECORDS, PRIZE_STRUCTURE } from '../data/eventData';

export const PrizesRecords: React.FC = () => {
  return (
    <section id="ceny" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Ceny
          </h2>
        </div>

        {/* Course Records Card */}
        <div className="mb-8 bg-[#0D1F18] text-white rounded-2xl p-6 sm:p-8 border border-emerald-950 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700/70 border border-emerald-500/40 flex items-center justify-center text-amber-300 shadow-sm">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Oficiální traťové rekordy
                </h3>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-emerald-900/90 text-emerald-300 border border-emerald-600/60 text-xs sm:text-sm font-bold font-mono">
              Prémie za nový rekord: 2 000 Kč
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {COURSE_RECORDS.map((rec, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#122820] border border-emerald-900/80 flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-xs sm:text-sm text-slate-300 block font-medium">
                    {rec.category} ({rec.year})
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                    {rec.holder}
                  </h4>
                  {rec.notes && (
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {rec.notes}
                    </p>
                  )}
                </div>

                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-amber-300 block">
                    {rec.time}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Čas na 7 km
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Blocks: Placements, Tombola */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Category Placements */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Trophy className="w-5 h-5 text-emerald-700" />
                <h4 className="font-bold text-slate-900 font-display text-lg sm:text-xl">
                  Prémie v kategoriích
                </h4>
              </div>

              <div className="space-y-2.5 mt-4">
                {PRIZE_STRUCTURE.categoryPlacements.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8FAF9] border border-slate-200 flex items-center justify-between text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                        idx === 0 ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                        idx === 1 ? 'bg-slate-200 text-slate-700 border border-slate-300' :
                        'bg-amber-900/10 text-amber-900 border border-amber-900/20'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-800">{p.rank}</span>
                    </div>

                    <span className="font-mono font-bold text-slate-900 text-base sm:text-lg">
                      {p.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 mt-5 pt-3 border-t border-slate-200">
              Vypláceno v hotovosti při slavnostním vyhlášení výsledků ve 13:30.
            </p>
          </div>

          {/* Tombola */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Gift className="w-5 h-5 text-teal-700" />
                <h4 className="font-bold text-slate-900 font-display text-lg sm:text-xl">
                  Tombola pro závodníky
                </h4>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Každé startovní číslo dospělých i dětí je automaticky zařazeno do slosování tomboly o věcné a sportovní ceny od partnerů.
              </p>

              <div className="mt-4 p-4 rounded-xl bg-teal-50/80 border border-teal-200 text-sm text-teal-950">
                <span className="font-bold block mb-1">Ceny od partnerů:</span>
                <span className="text-xs sm:text-sm text-teal-900 leading-relaxed">
                  Vybavení Salomon & Runsport, dárková balení pivovarů Faltus a Trautenberk a další.
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-600">
              <span>Dětská tombola: 11:00</span>
              <span className="font-bold text-slate-900">Hlavní tombola: 14:00</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
