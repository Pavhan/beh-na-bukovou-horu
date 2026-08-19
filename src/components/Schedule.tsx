import React from 'react';
import { Clock, MapPin, Flag, Trophy, Gift, UserCheck } from 'lucide-react';
import { SCHEDULE } from '../data/eventData';

export const Schedule: React.FC = () => {
  const getItemIcon = (id: string) => {
    if (id.includes('reg')) return UserCheck;
    if (id.includes('start')) return Flag;
    if (id.includes('awards')) return Trophy;
    if (id.includes('tombola')) return Gift;
    return Clock;
  };

  return (
    <section id="program" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Harmonogram
          </h2>
        </div>

        {/* Clean Timeline */}
        <div className="relative">
          <div className="absolute left-5 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-slate-200 block sm:hidden" />

          <div className="space-y-5 sm:space-y-6">
            {SCHEDULE.map((item, index) => {
              const Icon = getItemIcon(item.id);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  id={`schedule-item-${item.id}`}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-slate-300 group-hover:border-emerald-600 flex items-center justify-center text-slate-700 shadow-sm z-10 transition-all">
                    <Icon className={`w-4 h-4 ${item.isHighlight ? 'text-emerald-700' : 'text-slate-600'}`} />
                  </div>

                  <div
                    className={`absolute left-10 top-5 h-0.5 w-4 sm:hidden ${
                      item.isHighlight ? 'bg-emerald-300' : 'bg-slate-200'
                    }`}
                  />

                  {/* Spacer for 2-column layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div className="ml-14 w-[calc(100%-3.5rem)] sm:ml-0 sm:w-1/2 sm:px-6">
                    <div
                      className={`p-5 sm:p-6 rounded-2xl bg-white border transition-all ${
                        item.isHighlight
                          ? 'border-emerald-400 bg-emerald-50/40 shadow-sm ring-1 ring-emerald-300'
                          : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1 rounded-md bg-slate-900 text-white">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          {item.time}
                        </span>

                        <span className="text-xs sm:text-sm font-medium text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.isHighlight && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                            Hlavní bod
                          </span>
                        )}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
