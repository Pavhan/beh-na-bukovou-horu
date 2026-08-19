import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Compass } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  onOpenPropoziceModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPropoziceModal }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-08-29T11:00:00+02:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#07130F] text-white overflow-hidden"
    >
      {/* Mountain Trail Runner Atmosphere - Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000051-3d2d73d2d9/IMG_2995.JPG?ph=ace6121592"
          alt="Běh na Bukovou horu – závodníci v horském terénu"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-110 saturate-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft, protective gradient overlay to keep text ultra-readable while displaying the vivid runners & mountain scenery */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-[#07130F]/45 to-[#07130F]/65" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07130F]/30 to-[#07130F]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Natural Badge */}
        <div className="inline-flex w-full max-w-[calc(100vw-2rem)] sm:w-auto items-center justify-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-2 rounded-full bg-[#071711]/90 border border-emerald-500/50 text-emerald-300 text-xs sm:text-base font-bold tracking-wide shadow-lg mb-6 backdrop-blur-md">
          <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">{EVENT_DETAILS.edition} běhu do vrchu</span>
          <span className="text-emerald-500">•</span>
          <span className="text-slate-200 whitespace-nowrap">ISCAREX pohár</span>
        </div>

        {/* Clean, Strong Display Title without restricted max-width */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-display w-full leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Běh na <span className="text-emerald-400 block mt-1 sm:mt-2">Bukovou horu</span>
        </h1>

        {/* Natural, clear subtext with each sentence on a new line */}
        <div className="mt-5 text-lg sm:text-xl md:text-2xl text-slate-100 w-full font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] space-y-1">
          <p>Tradiční horský běh v Orlických horách.</p>
          <p>Výběh z Výprachtic (<span className="text-emerald-300 font-bold">585 m</span>) až na vrchol Bukové hory (<span className="text-emerald-300 font-bold">958 m</span>).</p>
        </div>

        {/* Date & Start Time Card */}
        <div className="mt-8 w-full max-w-3xl bg-[#091b14]/92 border border-emerald-600/50 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-[#0d261c]/80 border border-emerald-700/50 rounded-xl p-4 sm:p-5 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/25 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight block leading-tight">
                  29. 8. 2026
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wider">
                  Sobota
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0d261c]/80 border border-emerald-700/50 rounded-xl p-4 sm:p-5 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/25 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight block leading-tight font-mono">
                  11:00
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Start hlavního závodu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Standalone Big Countdown Card */}
        <div className="mt-4 sm:mt-5 w-full max-w-3xl bg-[#091b14]/92 border border-emerald-600/50 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-center sm:justify-start mb-4 px-1">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400 flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 px-3.5 py-1.5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              Odpočet do startu hlavního závodu
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
            {/* Days */}
            <div className="bg-gradient-to-b from-[#0e2c1e] to-[#04120C] border-2 border-amber-400/50 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg shadow-black/50">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-400 font-mono tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(251,191,36,0.35)]">
                {timeLeft.days}
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-200 mt-2">
                Dní
              </span>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-b from-[#0e2c1e] to-[#04120C] border-2 border-amber-400/50 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg shadow-black/50">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-400 font-mono tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(251,191,36,0.35)]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-200 mt-2">
                Hodin
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-gradient-to-b from-[#0e2c1e] to-[#04120C] border-2 border-amber-400/50 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg shadow-black/50">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-400 font-mono tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(251,191,36,0.35)]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-200 mt-2">
                Minut
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-gradient-to-b from-[#0e2c1e] to-[#04120C] border-2 border-amber-400/50 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center text-center shadow-lg shadow-black/50">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-300 font-mono tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(251,191,36,0.45)]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-200 mt-2">
                Sekund
              </span>
            </div>
          </div>
        </div>

        {/* Traťové parametry pod tím: Délka a převýšení */}
        <div className="mt-5 grid grid-cols-2 gap-4 w-full max-w-2xl">
          <div className="bg-[#091b14]/90 backdrop-blur-md border border-emerald-600/50 rounded-xl p-4 text-center">
            <span className="block text-3xl sm:text-4xl font-black text-emerald-400 font-display tracking-tight font-mono">
              7,0 km
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mt-1 block">
              Délka trati
            </span>
          </div>

          <div className="bg-[#091b14]/90 backdrop-blur-md border border-emerald-600/50 rounded-xl p-4 text-center">
            <span className="block text-3xl sm:text-4xl font-black text-emerald-300 font-display tracking-tight font-mono">
              +373 m
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mt-1 block">
              Převýšení
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
