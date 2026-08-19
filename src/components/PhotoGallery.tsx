import React, { useState } from 'react';
import { Images, ArrowRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import { PHOTO_GALLERIES, GalleryFolder } from '../data/galleries';

export const PhotoGallery: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<GalleryFolder | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const handleOpenGallery = (gallery: GalleryFolder, initialIndex = 0) => {
    setActiveGallery(gallery);
    setPhotoIndex(initialIndex);
  };

  const slides = activeGallery
    ? activeGallery.photos.map((photo) => ({
        src: photo.src,
        title: photo.title,
        description: `${photo.description || ''} • ${photo.author || ''}`.trim()
      }))
    : [];

  return (
    <section id="foto" className="py-14 sm:py-20 bg-[#F8FAF9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Foto
          </h2>
        </div>

        {/* 10 Galleries Grid (Folder Structure Representation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTO_GALLERIES.map((gallery) => {
            const photosCount = gallery.photos.length;
            return (
              <div
                key={gallery.id}
                onClick={() => handleOpenGallery(gallery, 0)}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-500/80 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Thumbnail Cover with Hover Effect & Badges */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={gallery.coverPhoto}
                    alt={gallery.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Top badge */}
                  <div className="absolute top-3.5 right-3.5 flex items-center justify-end pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600/90 text-white text-xs font-bold shadow-xs">
                      <Images className="w-3.5 h-3.5" />
                      <span>{photosCount} fotek</span>
                    </span>
                  </div>

                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-xs sm:text-sm shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                      <Images className="w-4 h-4 text-emerald-600" />
                      <span>Prohlédnout galerii</span>
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display group-hover:text-emerald-700 transition-colors leading-snug">
                      {gallery.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {gallery.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-700 group-hover:text-emerald-800">
                    <span>Otevřít celou galerii</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Component with Thumbnails, Captions, Zoom & Fullscreen */}
      {activeGallery && (
        <Lightbox
          open={!!activeGallery}
          close={() => setActiveGallery(null)}
          index={photoIndex}
          slides={slides}
          plugins={[Captions, Thumbnails, Zoom, Fullscreen]}
          captions={{
            showToggle: true,
            descriptionMaxLines: 3
          }}
          thumbnails={{
            position: 'bottom',
            width: 100,
            height: 60,
            gap: 12
          }}
          animation={{ fade: 250, swipe: 250 }}
        />
      )}
    </section>
  );
};
