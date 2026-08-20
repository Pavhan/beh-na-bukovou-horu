import React, { useState } from 'react';
import { Trophy, Baby, Search } from 'lucide-react';
import { ADULT_CATEGORIES, CHILDREN_CATEGORIES } from '../data/eventData';
import type { RaceCategory } from '../types';

export const Categories: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<'F' | 'M'>('F');
  const [birthYear, setBirthYear] = useState('');
  const [highlightedCategoryId, setHighlightedCategoryId] = useState<string | null>(null);

  const allCategories = [...CHILDREN_CATEGORIES, ...ADULT_CATEGORIES];

  const findCategory = (gender: 'F' | 'M', year: number): RaceCategory | undefined => {
    return allCategories.find((cat) => {
      const matchesGender = cat.gender === 'ALL' || cat.gender === gender;
      const matchesYear = cat.birthMin !== undefined && cat.birthMax !== undefined
        && year >= cat.birthMin
        && year <= cat.birthMax;

      return matchesGender && matchesYear;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const year = Number(birthYear);
    if (!Number.isInteger(year)) {
      setHighlightedCategoryId(null);
      return;
    }

    const matchedCategory = findCategory(selectedGender, year);
    if (!matchedCategory) {
      setHighlightedCategoryId(null);
      return;
    }

    setHighlightedCategoryId(matchedCategory.id);
    window.requestAnimationFrame(() => {
      document.getElementById(`category-row-${matchedCategory.id}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  };

  const getRowClassName = (categoryId: string) => {
    const isHighlighted = highlightedCategoryId === categoryId;

    return `py-2.5 sm:py-3 flex items-center justify-between gap-3 text-sm sm:text-base rounded-xl transition-all ${
      isHighlighted
        ? 'bg-amber-50 ring-2 ring-amber-300 px-3 shadow-sm'
        : ''
    }`;
  };

  return (
    <section id="kategorie" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Kategorie
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col lg:flex-row lg:items-end gap-4"
        >
          <div className="flex-1 min-w-0">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Pohlaví
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedGender('F')}
                className={`px-4 py-2.5 rounded-lg border text-sm font-bold transition-colors ${
                  selectedGender === 'F'
                    ? 'bg-rose-50 border-rose-300 text-rose-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                Žena
              </button>
              <button
                type="button"
                onClick={() => setSelectedGender('M')}
                className={`px-4 py-2.5 rounded-lg border text-sm font-bold transition-colors ${
                  selectedGender === 'M'
                    ? 'bg-sky-50 border-sky-300 text-sky-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                Muž
              </button>
            </div>
          </div>

          <label className="flex-1 min-w-0">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Rok narození
            </span>
            <input
              type="number"
              inputMode="numeric"
              min="1900"
              max="2030"
              value={birthYear}
              onChange={(event) => setBirthYear(event.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-mono font-bold text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              placeholder="např. 1994"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Najít kategorii</span>
          </button>

        </form>

        {/* 2 Side-by-Side Columns: Main Race & Children Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Hlavní závod (Dospělí, Dorost & Junioři 7 000 m) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-7 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm shrink-0">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 font-display text-sm sm:text-xl leading-tight whitespace-nowrap">
                      Hlavní závod (7 000 m)
                    </h3>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] sm:text-sm font-mono font-bold text-slate-900 bg-slate-100 px-2 sm:px-3 py-1.5 rounded-lg block whitespace-nowrap">
                    Start 11:00
                  </span>
                </div>
              </div>

              {/* Adults Categories List */}
              <div className="divide-y divide-slate-100">
                {ADULT_CATEGORIES.map((cat) => (
                  <div key={cat.id} id={`category-row-${cat.id}`} className={getRowClassName(cat.id)}>
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`font-bold px-2 py-0.5 rounded border ${
                            cat.gender === 'F'
                              ? 'text-rose-700 bg-rose-50 border-rose-200'
                              : cat.gender === 'M'
                                ? 'text-sky-700 bg-sky-50 border-sky-200'
                                : 'text-slate-900 border-transparent [background:linear-gradient(90deg,#ffe4e6_0%,#ffe4e6_50%,#e0f2fe_50%,#e0f2fe_100%)]'
                          }`}
                        >
                          <span
                            className={
                              cat.gender === 'ALL'
                                ? 'bg-clip-text text-transparent [background-image:linear-gradient(90deg,#be123c_0%,#be123c_50%,#0369a1_50%,#0369a1_100%)]'
                                : ''
                            }
                          >
                            {cat.name}
                          </span>
                        </span>
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
          </div>

          {/* Right Column: Kategorie dětských závodů (90 m – 1 600 m) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-7 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-sm shrink-0">
                    <Baby className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 font-display text-sm sm:text-xl leading-tight whitespace-nowrap">
                      Kategorie dětských závodů
                    </h3>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] sm:text-sm font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 sm:px-3 py-1.5 rounded-lg block whitespace-nowrap">
                    Starty od 09:30
                  </span>
                </div>
              </div>

              {/* Children Categories List */}
              <div className="divide-y divide-slate-100">
                {CHILDREN_CATEGORIES.map((cat) => (
                  <div key={cat.id} id={`category-row-${cat.id}`} className={getRowClassName(cat.id)}>
                    <div className="min-w-0 pr-2 flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-900 truncate">
                        {cat.name}
                      </span>
                      <span className="font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded text-xs sm:text-sm font-mono">
                        {cat.distance}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono font-bold text-xs sm:text-sm text-slate-800 bg-[#F8FAF9] border border-slate-200 px-2.5 py-1 rounded min-w-[85px] text-center">
                        {cat.yearRange}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
