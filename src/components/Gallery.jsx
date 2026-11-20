import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { eventData } from '../data/eventData';
import ImageWithFallback from './ImageWithFallback';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Stage', 'Audience', 'Performances', 'Moments', 'Behind The Scenes'];

  const filteredImages = activeFilter === 'All'
    ? eventData.gallery
    : eventData.gallery.filter((img) => img.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="gallery" className="relative py-24 bg-ted-dark text-white border-t border-ted-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-3">
              <Camera className="w-3.5 h-3.5 text-ted-red" />
              <span>Event Archive</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
              Past <span className="text-ted-red">Highlights</span>
            </h2>
            <p className="mt-3 text-ted-gray-400 text-sm sm:text-base max-w-xl">
              Capturing the electric energy, transformative talks, and standing ovations that define our community.
            </p>
          </div>

          {/* Asset Swapping Pill */}
          <div className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-ted-card border border-ted-border text-xs text-ted-gray-400 font-mono">
            <ImageIcon className="w-3.5 h-3.5 text-ted-red" />
            <span>Folder: /public/images/gallery</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-ted-red text-white shadow-md shadow-ted-red/25'
                  : 'bg-ted-card text-ted-gray-400 hover:text-white hover:bg-ted-surface border border-ted-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {filteredImages.map((item, idx) => {
            // Give specific cards dynamic spans to create an authentic bento layout
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-ted-card border border-ted-border/80 hover:border-ted-red/70 transition-all duration-300 ${
                  isWide ? 'sm:col-span-2' : 'col-span-1'
                }`}
              >
                <ImageWithFallback
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.title}
                  aspectRatio="h-full w-full"
                  containerClassName="h-full w-full"
                  className="group-hover:scale-105 transition-transform duration-500 h-full w-full object-cover"
                />

                {/* Gradient Shadow & Metadata Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ted-black via-ted-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Corner Expand Button */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-ted-black/60 backdrop-blur-sm border border-ted-border text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-ted-red" />
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-ted-red/80 text-white inline-block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ted-gray-400 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filteredImages}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
