import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mountain, Clock, Trophy, Users } from 'lucide-react';
import { EVENT_DETAILS, SCHEDULE, ADULT_CATEGORIES } from '../data/eventData';

interface PropoziceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PropoziceModal: React.FC<PropoziceModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `PROPOZICE ZÁVODU: ${EVENT_DETAILS.edition} ${EVENT_DETAILS.name}
Datum: ${EVENT_DETAILS.dateFormatted} (Start hlavního závodu: ${EVENT_DETAILS.mainStart}, Děti: ${EVENT_DETAILS.childrenStart})
Místo: ${EVENT_DETAILS.locationName} (${EVENT_DETAILS.gps.formatted})
Trať: 7,0 km, převýšení +373 m, lesní a horské cesty (Start 585 m n. m., Cíl 958 m n. m.)
Startovné: 200 Kč hlavní závod / 50 Kč dětské závody (platba na místě při prezenci)
Prezence: Děti do 09:15, dospělí do 10:45 v budově ZŠ Výprachtice.
Ceny: 300 - 200 - 100 Kč pro první 3 v každé kategorii, rekord trati 2 000 Kč.
Rekordy: Robert Krupička 27:05 (2007) / Adéla Vetchá 32:23 (2025).
Kontakt: ${EVENT_DETAILS.organizer.director} (${EVENT_DETAILS.organizer.phone}, ${EVENT_DETAILS.organizer.email})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-900 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 py-3.5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-slate-900 leading-tight">
                Oficiální propozice závodu
              </h3>
              <p className="text-[11px] text-slate-500">
                {EVENT_DETAILS.edition} {EVENT_DETAILS.name} ({EVENT_DETAILS.dateFormatted})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-xs font-semibold flex items-center gap-1 border border-slate-200 cursor-pointer"
              title="Kopírovat souhrn do schránky"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Zkopírováno' : 'Kopírovat'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-xs font-semibold flex items-center gap-1 border border-slate-200 cursor-pointer"
              title="Vytisknout propozice"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tisk</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-7 space-y-6 print:p-0">
          
          {/* Main Info Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F8FAF9] border border-slate-200 text-xs">
            <div>
              <span className="font-bold uppercase text-emerald-700 block mb-1">
                Základní údaje
              </span>
              <p className="font-semibold text-slate-900">
                <strong>Název:</strong> {EVENT_DETAILS.edition} {EVENT_DETAILS.name}
              </p>
              <p className="text-slate-700 mt-0.5">
                <strong>Termín:</strong> {EVENT_DETAILS.dateFormatted} ({EVENT_DETAILS.dayOfWeek})
              </p>
              <p className="text-slate-700 mt-0.5">
                <strong>Místo:</strong> {EVENT_DETAILS.locationName}
              </p>
              <p className="text-slate-500 mt-0.5 font-mono">
                GPS: {EVENT_DETAILS.gps.formatted}
              </p>
            </div>

            <div>
              <span className="font-bold uppercase text-emerald-700 block mb-1">
                Parametry & Startovné
              </span>
              <p className="text-slate-700">
                <strong>Trať:</strong> 7,0 km s převýšením +373 m (lesní a horské cesty)
              </p>
              <p className="text-slate-700 mt-0.5">
                <strong>Startovné dospělí:</strong> 200 Kč (v hotovosti při prezenci)
              </p>
              <p className="text-slate-700 mt-0.5">
                <strong>Startovné děti:</strong> 50 Kč
              </p>
              <p className="text-slate-700 mt-0.5">
                <strong>Prezence v ZŠ:</strong> Děti do 09:15 | Hlavní závod do 10:45
              </p>
            </div>
          </div>

          {/* Schedule Summary */}
          <div>
            <h4 className="text-sm font-bold font-display text-slate-900 mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>Časový program dne</span>
            </h4>
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
              {SCHEDULE.map((item) => (
                <div key={item.id} className="p-2.5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.time}
                    </span>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                  <span className="text-slate-500">{item.location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div>
            <h4 className="text-sm font-bold font-display text-slate-900 mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-700" />
              <span>Kategorie hlavního závodu (7 km, start 11:00)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
              {ADULT_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2 rounded-lg bg-[#F8FAF9] border border-slate-200/80 flex items-center justify-between">
                  <span className="font-medium text-slate-800">{cat.name}</span>
                  <span className="font-mono font-bold text-slate-600">{cat.yearRange}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prizes & Records */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-800 space-y-1.5">
            <h4 className="font-bold text-emerald-950 font-display text-sm flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-emerald-700" />
              <span>Finanční prémie & traťové rekordy</span>
            </h4>
            <p>• <strong>Umístění v každé kategorii:</strong> 1. místo 300 Kč | 2. místo 200 Kč | 3. místo 100 Kč</p>
            <p>• <strong>Prémie za rekord trati:</strong> 2 000 Kč (Krupička 27:05 / Vetchá 32:23)</p>
            <p>• <strong>Tombola:</strong> Věcné ceny pro dospělé i dětské závodníky</p>
            <p>• <strong>Děti:</strong> Medaile, diplomy, věcné ceny a sladkosti pro každého</p>
          </div>

          {/* Organizer footer */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              <p><strong>Ředitel závodu:</strong> {EVENT_DETAILS.organizer.director}</p>
              <p>Mobil: {EVENT_DETAILS.organizer.phone} • Email: {EVENT_DETAILS.organizer.email}</p>
            </div>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Zavřít
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
