import React from 'react';
import { Trophy, Baby } from 'lucide-react';
import { ADULT_CATEGORIES, CHILDREN_CATEGORIES } from '../data/eventData';

export const Categories: React.FC = () => {
  return (
    <section id="kategorie" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Kategorie
          </h2>
        </div>

        {/* 2 Side-by-Side Columns: Main Race & Children Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Hlavní závod (Dospělí, Dorost & Junioři 7 000 m) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                    <Trophy className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-display text-lg sm:text-xl leading-tight">
                      Hlavní závod (7 000 m)
                    </h3>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-sm font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md block">
                    Start 11:00
                  </span>
                  <span className="text-xs text-emerald-700 font-bold block mt-1">
                    Startovné 200 Kč
                  </span>
                </div>
              </div>

              {/* Adults Categories List */}
              <div className="divide-y divide-slate-100 space-y-2.5">
                {ADULT_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="pt-2.5 flex items-center justify-between gap-3 text-sm sm:text-base">
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-slate-900">
                          {cat.name}
                        </span>
                        {cat.gender === 'F' && (
                          <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                            Ženy
                          </span>
                        )}
                        {cat.gender === 'M' && (
                          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                            Muži
                          </span>
                        )}
                        {cat.gender === 'ALL' && (
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            M + Ž
                          </span>
                        )}
                      </div>
                      {cat.description && (
                        <span className="text-xs sm:text-sm text-slate-500 block truncate mt-0.5">
                          {cat.description}
                        </span>
                      )}
                    </div>

                    <span className="font-mono font-bold text-xs sm:text-sm text-slate-800 bg-[#F8FAF9] border border-slate-200 px-3 py-1 rounded-md shrink-0">
                      {cat.yearRange}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-700 bg-slate-50 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-5 rounded-b-2xl">
              <span>Prémie v každé kategorii: <strong>300 / 200 / 100 Kč</strong></span>
              <span className="text-emerald-700 font-bold">Rekord: 2 000 Kč</span>
            </div>
          </div>

          {/* Right Column: Dětské kategorie (90 m – 1 600 m) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-sm">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-display text-lg sm:text-xl leading-tight">
                      Dětské kategorie
                    </h3>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-sm font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md block">
                    Starty od 09:30
                  </span>
                  <span className="text-xs text-slate-600 font-bold block mt-1">
                    Startovné 50 Kč
                  </span>
                </div>
              </div>

              {/* Children Categories List */}
              <div className="divide-y divide-slate-100 space-y-2.5">
                {CHILDREN_CATEGORIES.map((cat, idx) => (
                  <div key={cat.id} className="pt-2.5 flex items-center justify-between gap-3 text-sm sm:text-base">
                    <div className="min-w-0 pr-2 flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-mono shrink-0">
                        #{idx + 1}
                      </span>
                      <span className="font-bold text-slate-900 truncate">
                        {cat.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded text-xs sm:text-sm font-mono">
                        {cat.distance}
                      </span>
                      <span className="font-mono font-bold text-xs sm:text-sm text-slate-800 bg-[#F8FAF9] border border-slate-200 px-2.5 py-1 rounded min-w-[85px] text-center">
                        {cat.yearRange}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-700 bg-emerald-50/60 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-5 rounded-b-2xl">
              <span>Odměna: <strong>Medaile, diplom, sladkosti & tombola</strong></span>
              <span className="text-emerald-800 font-bold">Vyhlášení v 11:00</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
