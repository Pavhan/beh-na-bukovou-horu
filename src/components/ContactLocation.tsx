import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, MessageSquare, Copy, Check } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const ContactLocation: React.FC = () => {
  const [copiedGps, setCopiedGps] = useState(false);

  const handleCopyGps = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.gps.formatted);
    setCopiedGps(true);
    setTimeout(() => setCopiedGps(false), 3000);
  };

  return (
    <section id="kontakt" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Director Contact */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase text-emerald-700 block mb-1 tracking-wider">
                {EVENT_DETAILS.organizer.role}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-6">
                {EVENT_DETAILS.organizer.director}
              </h3>

              <div className="space-y-3.5">
                {/* Phone */}
                <a
                  href={`tel:${EVENT_DETAILS.organizer.phoneClean}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAF9] border border-slate-200 hover:border-emerald-500 transition-all group text-sm sm:text-base"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Telefon</span>
                    <span className="font-bold font-mono text-slate-900 group-hover:text-emerald-700 text-base">
                      {EVENT_DETAILS.organizer.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EVENT_DETAILS.organizer.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAF9] border border-slate-200 hover:border-emerald-500 transition-all group text-sm sm:text-base"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">E-mail</span>
                    <span className="font-bold text-slate-900 group-hover:text-emerald-700">
                      {EVENT_DETAILS.organizer.email}
                    </span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href={EVENT_DETAILS.organizer.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAF9] border border-slate-200 hover:border-emerald-500 transition-all group text-sm sm:text-base"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 block">Oficiální Facebook</span>
                    <span className="font-bold text-slate-900 group-hover:text-blue-700">
                      fb.com/behnabukovouhoru
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Location & Google Maps Card */}
          <div className="bg-[#0D1F18] text-white rounded-2xl p-6 sm:p-8 border border-emerald-950 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 block">
                Místo startu & zázemí
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {EVENT_DETAILS.locationName}
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {EVENT_DETAILS.address}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-emerald-900/60">
                <div>
                  <span className="text-xs text-slate-400 block">GPS souřadnice:</span>
                  <span className="font-mono text-slate-200 text-sm sm:text-base">
                    {EVENT_DETAILS.gps.formatted}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyGps}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#143226] border border-emerald-700/60 font-bold text-emerald-300 hover:text-white hover:bg-[#1a3f31] cursor-pointer text-xs sm:text-sm transition-colors"
                >
                  {copiedGps ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Zkopírováno</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Kopírovat</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-900/60">
              <a
                href={EVENT_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-colors shadow-md shadow-emerald-950/40 cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                <span>Otevřít v Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
