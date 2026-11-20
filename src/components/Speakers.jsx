import React, { useState } from 'react';
import { ArrowUpRight, Mic, Sparkles, Filter } from 'lucide-react';
import { eventData } from '../data/eventData';
import ImageWithFallback from './ImageWithFallback';
import SpeakerModal from './SpeakerModal';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Space Exploration', 'Architecture & Ecology', 'Acoustics & Arts', 'Biotechnology', 'Media & Society'];

  const filteredSpeakers = activeFilter === 'All'
    ? eventData.speakers
    : eventData.speakers.filter(s => s.category.toLowerCase().includes(activeFilter.toLowerCase()) || s.category === activeFilter);

  return (
    <section id="speakers" className="relative py-24 bg-ted-dark text-white border-t border-ted-border/40">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-ted-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-3">
              <Mic className="w-3.5 h-3.5 text-ted-red" />
              <span>Distinguished Voices</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
              Speakers <span className="text-ted-red">Lineup</span>
            </h2>
            <p className="mt-3 text-ted-gray-400 text-sm sm:text-base max-w-xl">
              Meet the thinkers, doers, and cultural pioneers who will take the TEDx red dot to challenge existing paradigms.
            </p>
          </div>

          {/* Quick Notice about local photo dropping */}
          <div className="mt-4 md:mt-0 text-xs text-ted-gray-500 font-mono flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Modular /public/images/speakers ready</span>
          </div>
        </div>

        {/* Category Filters */}
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

        {/* 4-Column Responsive Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group cursor-pointer rounded-2xl bg-ted-card border border-ted-border/70 hover:border-ted-red/60 overflow-hidden shadow-ted-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Speaker Portrait Aspect Container */}
              <div className="relative overflow-hidden bg-ted-dark">
                <ImageWithFallback
                  src={speaker.image}
                  fallbackSrc={speaker.fallbackImage}
                  alt={speaker.name}
                  aspectRatio="aspect-[4/5]"
                  className="group-hover:scale-105 transition-transform duration-500"
                  showPlaceholderOverlay={true}
                  badge={
                    <span className="px-2.5 py-1 rounded-full bg-ted-black/80 backdrop-blur-md border border-ted-border/60 text-[10px] font-bold uppercase tracking-wider text-ted-gray-300">
                      {speaker.category}
                    </span>
                  }
                />

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-ted-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="px-4 py-2 rounded-full bg-ted-red text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-lg shadow-ted-red/40 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Bio & Talk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Speaker Metadata Card Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-ted-card">
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-ted-red transition-colors line-clamp-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-ted-gray-400 font-medium line-clamp-1 mt-0.5">
                    {speaker.designation}
                  </p>
                  <p className="text-[11px] text-ted-gray-500 line-clamp-1 mt-0.5">
                    {speaker.organization}
                  </p>
                </div>

                {/* Talk Topic Preview */}
                <div className="mt-4 pt-3 border-t border-ted-border/50">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-ted-gray-500 block mb-1">
                    Talk Topic:
                  </span>
                  <p className="text-xs text-ted-gray-300 font-medium italic line-clamp-2">
                    "{speaker.talkTitle}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lineup Footnote CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-ted-card/60 border border-dashed border-ted-border flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Have a revolutionary idea worth spreading?
            </h4>
            <p className="text-xs text-ted-gray-400 mt-0.5">
              Speaker nominations for TEDxChoukseyGroupofColleges 2026 youth and wildcard showcase are still being reviewed.
            </p>
          </div>
          <a
            href="mailto:TEDxChouksey@gmail.com?subject=Speaker%20Nomination"
            className="px-5 py-2.5 rounded-full bg-ted-surface hover:bg-ted-card border border-ted-border hover:border-ted-red/40 text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            Nominate a Speaker
          </a>
        </div>
      </div>

      {/* Selected Speaker Bio Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </section>
  );
}
