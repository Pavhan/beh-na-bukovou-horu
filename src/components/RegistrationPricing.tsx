import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const RegistrationPricing: React.FC = () => {
  const adultIncludes = [
    'Oficiální měření času a startovní číslo',
    'Občerstvení na trati i v cíli na vrcholu Bukové hory',
    'Převoz svršků ze startu do cíle',
    'Vstupenka do velké tomboly o hodnotné ceny',
    'Zázemí v budově ZŠ Výprachtice (šatny, toalety, sprchy)',
    'Zdravotní a pořadatelské zajištění'
  ];

  const childIncludes = [
    'Pamětní medaile v cíli pro každého závodníka',
    'Sladké odměny a dobroty',
    'Věcné ceny pro medailisty v kategoriích',
    'Lístek do dětské tomboly',
    'Vstup na skákací hrad zdarma'
  ];

  return (
    <section id="registrace" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Registrace
          </h2>
        </div>

        {/* 2 Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          
          {/* Main Race Card */}
          <div className="bg-[#F8FAF9] border-2 border-emerald-600 rounded-2xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/90 px-3 py-1 rounded-md">
                  Hlavní závod (7 km)
                </span>
                <span className="text-sm font-medium text-slate-600 font-mono">Dospělí & Dorost</span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display font-mono tracking-tight">
                  200 Kč
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  / platba v hotovosti při prezenci
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-5">
                Kompletní závodní servis, převoz věcí na vrchol, měření času a občerstvení.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200 text-sm sm:text-base text-slate-700">
                {adultIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-sm sm:text-base text-slate-700">
              <span className="font-bold text-slate-900">Prezence: 08:30 – 10:45 v ZŠ</span>
              <span className="font-semibold text-emerald-700">Start: 11:00</span>
            </div>
          </div>

          {/* Children Race Card */}
          <div className="bg-[#F8FAF9] border border-slate-300 rounded-2xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-md">
                  Dětské běhy (90 – 1 600 m)
                </span>
                <span className="text-sm font-medium text-slate-600 font-mono">Všechny kategorie</span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-display font-mono tracking-tight">
                  50 Kč
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  / symbolický poplatek
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-5">
                Zahrnuje medaili pro každého, sladkosti, ceny a skákací hrad na hřišti.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200 text-sm sm:text-base text-slate-700">
                {childIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-sm sm:text-base text-slate-700">
              <span className="font-bold text-slate-900">Prezence dětí: do 09:15 v ZŠ</span>
              <span className="font-semibold text-emerald-700">První start: 09:30</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
