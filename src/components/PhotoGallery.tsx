import React, { useState } from 'react';
import { Image, ExternalLink, Camera, X } from 'lucide-react';
import { PHOTO_GALLERIES } from '../data/eventData';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const showcasePhotos = [
    {
      url: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000051-3d2d73d2d9/IMG_2995.JPG?ph=ace6121592',
      title: 'Horský výběh z Výprachtic',
      caption: 'Závodníci na lesní svážnici stoupající na Bukovou horu',
      author: 'Honza Šimůnek'
    },
    {
      url: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000044-5391c5391e/IMG_2986.JPG?ph=ace6121592',
      title: 'Hřebenová pasáž trati',
      caption: 'Běžci v plném nasazení na trati 7 km',
      author: 'J. Šimůnek / Iscarex'
    },
    {
      url: 'https://ace6121592.cbaul-cdnwnd.com/d840186d11449bd887cb2e81ec02d0b8/200000034-949c4949c8/IMG_20200808_170709.jpg?ph=ace6121592',
      title: 'Slavnostní vyhlášení výsledků',
      caption: 'Předávání cen a pohárů na školním hřišti',
      author: 'Pořadatelé závodu'
    }
  ];

  return (
    <section id="foto" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Foto
          </h2>
        </div>

        {/* Photo Gallery Showcase */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2.5">
              <Camera className="w-5 h-5 text-emerald-700" />
              <span>Momentky z trati</span>
            </h3>
            <span className="text-xs sm:text-sm text-slate-500">
              Foto: Honza Šimůnek & Iscarex.cz
            </span>
          </div>

          {/* 3 Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {showcasePhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer aspect-4/3 flex flex-col justify-end"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                <div className="relative z-10 p-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Foto: {photo.author}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-display leading-tight">
                    {photo.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PHOTO_GALLERIES.map((gal) => (
              <a
                key={gal.id}
                href={gal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 transition-all flex items-center justify-between group shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Image className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {gal.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Foto: {gal.author}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedPhoto}
            alt="Zvětšená fotografie ze závodu"
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
