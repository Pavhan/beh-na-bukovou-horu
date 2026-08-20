import React from 'react';
import { Sun, Coffee, Award } from 'lucide-react';

export const ChildrenSection: React.FC = () => {
  return (
    <section id="deti" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Děti
          </h2>
        </div>

        {/* Family & Event Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAF9] border border-slate-200 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 shadow-xs">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2">
              Skákací hrad & atrakce
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Velký nafukovací hrad na travnatém hřišti přístupný po celou dobu akce zdarma pro všechny malé návštěvníky.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAF9] border border-slate-200 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2">
              Dětská tombola v 11:00
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Každé startovní číslo dětského závodu je zároveň slosovatelným lístkem do bohaté dětské tomboly s věcnými cenami.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAF9] border border-slate-200 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4 shadow-xs">
              <Coffee className="w-6 h-6" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2">
              Občerstvení & Zázemí
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Teplé i studené nápoje, občerstvení v areálu školy, toalety a šatny pro pohodlí všech závodníků i doprovodu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
