import React, { useState } from 'react';
import { Mountain, Map, TrendingUp, Navigation, ExternalLink, Compass, CheckCircle, Info } from 'lucide-react';
import { EVENT_DETAILS, COURSE_PROFILE_POINTS } from '../data/eventData';

export const CourseProfile: React.FC = () => {
  const [activeKmPoint, setActiveKmPoint] = useState<number | null>(null);

  // SVG Altitude profile coordinates with generous top headroom for tooltips
  const minAlt = 540;
  const maxAlt = 1020;
  const width = 760;
  const height = 280;
  const paddingX = 55;
  const paddingY = 44;

  const getX = (km: number) => paddingX + (km / 7.0) * (width - 2 * paddingX);
  const getY = (alt: number) => height - paddingY - ((alt - minAlt) / (maxAlt - minAlt)) * (height - 2 * paddingY);

  const pointsSvg = COURSE_PROFILE_POINTS.map((p) => `${getX(p.km)},${getY(p.alt)}`).join(' ');
  const areaSvg = `${pointsSvg} ${getX(7.0)},${height - paddingY} ${getX(0)},${height - paddingY}`;

  return (
    <section id="trat" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Trať
          </h2>
        </div>

        {/* 4 Stats Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-2.5 sm:p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200 flex items-center gap-2 sm:gap-3.5 shadow-2xs">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 block uppercase tracking-wider whitespace-nowrap">Délka</span>
              <span className="text-base sm:text-2xl font-black text-slate-900 font-display whitespace-nowrap">7,0 km</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200 flex items-center gap-2 sm:gap-3.5 shadow-2xs">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 block uppercase tracking-wider whitespace-nowrap">Převýšení</span>
              <span className="text-base sm:text-2xl font-black text-slate-900 font-display whitespace-nowrap">+373 metrů</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200 flex items-center gap-2 sm:gap-3.5 shadow-2xs">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 block uppercase tracking-wider whitespace-nowrap">Start & Cíl</span>
              <span className="text-[13px] sm:text-base font-bold text-slate-900 font-display whitespace-nowrap">585 m &rarr; 958 m</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200 flex items-center gap-2 sm:gap-3.5 shadow-2xs">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 block uppercase tracking-wider whitespace-nowrap">Povrch</span>
              <span className="text-xs sm:text-base font-bold text-slate-900 font-display whitespace-nowrap">Les & horský trail</span>
            </div>
          </div>
        </div>

        {/* Interactive Elevation Profile Chart */}
        <div className="bg-[#0D1F18] text-white rounded-2xl p-5 sm:p-7 border border-emerald-950 shadow-md overflow-hidden mb-8">
          <div className="mb-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
              Výškový profil tratě
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Stoupání: Výprachtice (585 m) &rarr; Buková hora (958 m)
            </h3>
          </div>

          {/* SVG Profile Chart */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[580px] max-w-full">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none">
                <defs>
                  <linearGradient id="naturalProfileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                    <stop offset="70%" stopColor="#059669" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0d1f18" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Altitude Grid lines & clearly legible labels */}
                {[600, 700, 800, 900].map((alt) => {
                  const y = getY(alt);
                  return (
                    <g key={alt}>
                      <line x1={paddingX} y1={y} x2={width - paddingX} y2={y} stroke="#334155" strokeDasharray="3 3" opacity="0.45" />
                      <text x={paddingX - 12} y={y + 4} fill="#E2E8F0" fontSize="11" fontWeight="600" textAnchor="end" fontFamily="ui-sans-serif, system-ui, sans-serif">
                        {alt} m
                      </text>
                    </g>
                  );
                })}

                {/* Kilometer Grid lines & clearly legible labels */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((km) => {
                  const x = getX(km);
                  return (
                    <g key={km}>
                      <line x1={x} y1={paddingY} x2={x} y2={height - paddingY} stroke="#334155" strokeDasharray="2 2" opacity="0.35" />
                      <text x={x} y={height - paddingY + 20} fill="#E2E8F0" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">
                        {km} km
                      </text>
                    </g>
                  );
                })}

                {/* Fill Area */}
                <polygon points={areaSvg} fill="url(#naturalProfileGradient)" />

                {/* Elevation Line */}
                <polyline
                  points={pointsSvg}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Static Start/Finish Labels when not hovered on that point */}
                {activeKmPoint !== 0 && (
                  <text
                    x={getX(0)}
                    y={getY(585) - 14}
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                    textAnchor="start"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Start (585 m)
                  </text>
                )}

                {activeKmPoint !== COURSE_PROFILE_POINTS.length - 1 && (
                  <text
                    x={getX(7.0)}
                    y={getY(958) - 14}
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                    textAnchor="end"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    Cíl (958 m)
                  </text>
                )}

                {/* Interactive Points with large hitboxes */}
                {COURSE_PROFILE_POINTS.map((pt, idx) => {
                  const cx = getX(pt.km);
                  const cy = getY(pt.alt);
                  const isHovered = activeKmPoint === idx;

                  return (
                    <g
                      key={idx}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveKmPoint(idx)}
                      onMouseLeave={() => setActiveKmPoint(null)}
                      onClick={() => setActiveKmPoint(activeKmPoint === idx ? null : idx)}
                    >
                      {/* Invisible larger hit circle for comfortable hover */}
                      <circle cx={cx} cy={cy} r={22} fill="transparent" />

                      {/* Visible Point Circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHovered ? 7 : 4}
                        className={`${
                          isHovered ? 'fill-emerald-300 stroke-white stroke-2' : 'fill-slate-950 stroke-emerald-400 stroke-2'
                        } transition-all duration-150`}
                      />
                    </g>
                  );
                })}

                {/* Floating Tooltip at Hovered Point - Altitude Only, Positioned Higher Above Point */}
                {activeKmPoint !== null && (() => {
                  const pt = COURSE_PROFILE_POINTS[activeKmPoint];
                  const cx = getX(pt.km);
                  const cy = getY(pt.alt);
                  const tooltipW = 112;
                  const tooltipH = 32;
                  const ttX = Math.max(paddingX - 10, Math.min(width - paddingX - tooltipW + 10, cx - tooltipW / 2));
                  const gap = 18;
                  const ttY = cy - tooltipH - gap;

                  return (
                    <g pointerEvents="none" className="transition-all duration-150">
                      {/* Vertical Dashed Guideline */}
                      <line
                        x1={cx}
                        y1={paddingY}
                        x2={cx}
                        y2={height - paddingY}
                        stroke="#34d399"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        opacity="0.8"
                      />

                      {/* Tooltip Card */}
                      <rect
                        x={ttX}
                        y={ttY}
                        width={tooltipW}
                        height={tooltipH}
                        rx="8"
                        fill="#042F2E"
                        stroke="#10B981"
                        strokeWidth="1.5"
                      />

                      {/* Pointer Triangle pointing down at the point */}
                      <polygon
                        points={`${cx - 5},${cy - gap + 1} ${cx + 5},${cy - gap + 1} ${cx},${cy - 9}`}
                        fill="#10B981"
                      />

                      {/* Tooltip Altitude Only */}
                      <text
                        x={ttX + tooltipW / 2}
                        y={ttY + 21}
                        textAnchor="middle"
                        fill="#34D399"
                        fontSize="13"
                        fontWeight="800"
                        fontFamily="ui-sans-serif, system-ui, sans-serif"
                      >
                        {pt.alt} m n. m.
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>
          </div>
        </div>

        {/* Course Description & Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-[#F8FAF9] border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4 text-base text-slate-700">
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Charakteristika a průběh trasy
            </h3>
            <p className="leading-relaxed">
              Start hlavního závodu je umístěn na <strong>školním hřišti u ZŠ Výprachtice</strong>. Trasa po úvodním rovinatém úseku v obci přechází na zpevněné lesní cesty a horské svážnice.
            </p>
            <p className="leading-relaxed">
              Klíčové stoupání je mezi 2. a 5. kilometrem, kde závodníci naberou většinu z <strong>373 výškových metrů</strong>. Závěrečný kilometr vede po hřebeni s výhledy až do cíle u rozcestníku na vrcholu Bukové hory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-sm">
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Přehledně značená trasa (fáborky + šipky)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Občerstvení v cíli na vrcholu</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Převoz svršků ze startu do cíle</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zdravotnické zajištění na trati</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {/* Scan of Original Profile */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-2xl p-5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Originální záznam stoupání
              </span>
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 p-2">
                <img
                  src="https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000006-5860f58612/1%20%282%29.png?ph=ace6121592"
                  alt="Výškový profil závodu Běh na Bukovou horu"
                  className="w-full h-auto object-contain max-h-48 rounded"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* ISCAREX Map Link */}
            <a
              href={EVENT_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 transition-all group text-sm sm:text-base"
            >
              <div className="flex items-center gap-3">
                <Map className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Zobrazit trasu na ISCAREX.cz
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
