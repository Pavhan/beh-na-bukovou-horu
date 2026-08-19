import React from 'react';
import { MapPin } from 'lucide-react';
import { SCHEDULE } from '../data/eventData';

export const Schedule: React.FC = () => {
  const renderTime = (time: string) => {
    const parts = time.split(' – ');

    if (parts.length !== 2) {
      return time;
    }

    return (
      <span className="inline-flex flex-col items-center leading-none sm:inline sm:leading-normal">
        <span>{parts[0]}</span>
        <span className="text-current/50 leading-none sm:inline sm:leading-normal"> – </span>
        <span>{parts[1]}</span>
      </span>
    );
  };

  return (
    <section id="program" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Harmonogram
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-4 sm:space-y-5">
          <div className="absolute left-[7.25rem] sm:left-[10rem] lg:left-[15rem] top-2 bottom-2 w-px bg-slate-200" />
          {SCHEDULE.map((item) => {
            const isMainStart = item.id === 'start-main';

            return (
              <div
                key={item.id}
                id={`schedule-item-${item.id}`}
                className="relative grid grid-cols-[6rem_1.5rem_minmax(0,1fr)] sm:grid-cols-[8.5rem_1.5rem_minmax(0,1fr)] lg:grid-cols-[13.5rem_1.5rem_minmax(0,1fr)] gap-2 sm:gap-3 items-start"
              >
                <span
                  className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-mono text-base sm:px-5 sm:text-lg font-bold leading-tight whitespace-nowrap ring-1 ${
                    isMainStart
                      ? 'bg-emerald-50/80 text-emerald-700 ring-emerald-300'
                      : 'bg-white text-slate-900 ring-slate-200'
                  }`}
                >
                  {renderTime(item.time)}
                </span>

                <span className="relative z-10 mt-3 flex h-5 w-5 items-center justify-center justify-self-center rounded-full bg-[#F8FAF9] before:absolute before:right-full before:top-1/2 before:h-px before:w-2 before:bg-slate-200 after:absolute after:left-full after:top-1/2 after:h-px after:w-2 after:bg-slate-200 sm:before:w-3 sm:after:w-3">
                  <span
                    className={`rounded-full ring-4 ${
                      isMainStart
                        ? 'h-3.5 w-3.5 bg-emerald-600 ring-emerald-200'
                        : 'h-2.5 w-2.5 bg-emerald-500 ring-emerald-100'
                    }`}
                  />
                </span>

                <div
                  className={`min-w-0 rounded-2xl p-4 sm:p-6 shadow-2xs transition-all hover:shadow-sm ${
                    isMainStart
                      ? 'bg-emerald-50/80 ring-2 ring-emerald-300'
                      : 'bg-white'
                  }`}
                >
                  <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start">
                    <div className="min-w-0">
                      <h3 className={`text-lg sm:text-xl font-bold font-display ${isMainStart ? 'text-emerald-950' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>

                      <p className={`mt-2 text-sm sm:text-base leading-relaxed ${isMainStart ? 'text-emerald-900/80' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>

                    <span className={`text-xs sm:text-sm font-medium flex items-center gap-1 lg:justify-end lg:text-right ${isMainStart ? 'text-emerald-800' : 'text-slate-500'}`}>
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${isMainStart ? 'text-emerald-600' : 'text-slate-400'}`} />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
