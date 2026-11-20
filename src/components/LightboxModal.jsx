import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function LightboxModal({ images, activeIndex, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeIndex, images.length, onClose, onNavigate]);

  if (activeIndex === null || !images[activeIndex]) return null;

  const currentImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 text-white">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full bg-ted-red text-white text-xs font-bold uppercase tracking-wider">
            {currentImage.category}
          </span>
          <span className="text-xs text-ted-gray-400 font-mono">
            {activeIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red border border-ted-border text-ted-gray-300 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1);
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-ted-card/80 hover:bg-ted-red border border-ted-border text-white transition-all transform hover:scale-110"
        aria-label="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % images.length);
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-ted-card/80 hover:bg-ted-red border border-ted-border text-white transition-all transform hover:scale-110"
        aria-label="Next Photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[75vh] sm:max-h-[80vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-ted-border/60 bg-ted-dark">
          <img
            src={currentImage.image}
            onError={(e) => {
              e.currentTarget.src = currentImage.fallbackImage;
            }}
            alt={currentImage.title}
            className="w-full h-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption Card below */}
        <div className="mt-4 text-center max-w-xl">
          <h4 className="text-lg font-bold text-white font-display">
            {currentImage.title}
          </h4>
          <p className="text-xs sm:text-sm text-ted-gray-400 mt-1">
            {currentImage.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
