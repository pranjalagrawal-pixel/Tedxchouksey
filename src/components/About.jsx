import React from 'react';
import { Volume2, Radio, Sparkles, Globe, Compass, ArrowUpRight } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function About() {
  const { whatIsTed, whatIsTedx, themeStory } = eventData.about;

  return (
    <section id="about" className="relative py-24 bg-ted-black text-white overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-ted-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-ted-crimson/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-4">
            <Radio className="w-3.5 h-3.5 text-ted-red animate-pulse" />
            <span>Discover The Movement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
            Where Ideas <span className="text-ted-red">Resonate</span>
          </h2>
          <p className="mt-4 text-ted-gray-400 text-base sm:text-lg leading-relaxed">
            Uniting radical curiosity and transformative perspectives to spark meaningful dialogue in Central India.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: What is TED & TEDx (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* TED Card */}
            <div className="p-8 rounded-2xl bg-ted-card/80 border border-ted-border hover:border-ted-borderLight transition-all duration-300 shadow-ted-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-ted-red/15 border border-ted-red/30 flex items-center justify-center text-ted-red font-black">
                  TED
                </div>
                <h3 className="text-xl font-bold font-display">{whatIsTed.title}</h3>
              </div>
              <p className="text-ted-gray-400 text-sm leading-relaxed">
                {whatIsTed.description}
              </p>
            </div>

            {/* TEDx Card */}
            <div className="p-8 rounded-2xl bg-ted-card/80 border border-ted-border hover:border-ted-borderLight transition-all duration-300 shadow-ted-card flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-ted-card border border-ted-border flex items-center justify-center text-ted-red font-black">
                  <span className="text-white">TED</span>
                  <span className="text-ted-red text-sm align-super">x</span>
                </div>
                <h3 className="text-xl font-bold font-display">{whatIsTedx.title}</h3>
              </div>
              <p className="text-ted-gray-400 text-sm leading-relaxed">
                {whatIsTedx.description}
              </p>
              <div className="mt-5 pt-4 border-t border-ted-border/60 flex items-center justify-between text-xs text-ted-gray-500 font-medium">
                <span>Independently Organized Event</span>
                <span className="text-ted-red font-semibold">TEDx Licensee</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Theme Story: RESONANCE (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-ted-card via-ted-dark to-ted-black border border-ted-border/80 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Visual background acoustic waveform graphic */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border border-ted-red/40 animate-ping" style={{ animationDuration: '6s' }} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-ted-red/10 border border-ted-red/30 text-ted-red text-xs font-bold uppercase tracking-wider">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>The 2026 Theme</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-ted-gray-500 font-mono">
                  01 // CONVERGENCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white uppercase">
                {themeStory.title}: <span className="text-ted-red">{themeStory.highlight}</span>
              </h3>

              <div className="mt-6 space-y-4 text-ted-gray-300 text-sm sm:text-base leading-relaxed">
                <p>{themeStory.description}</p>
                <p className="text-ted-gray-400">{themeStory.secondParagraph}</p>
              </div>
            </div>

            {/* Quote Block */}
            <div className="mt-8 pt-6 border-t border-ted-border/70 relative">
              <p className="text-sm italic text-ted-gray-300">
                "When a whisper aligns with the frequency of truth, it shatters the loudest silence."
              </p>
              <div className="mt-2 flex items-center space-x-2 text-xs text-ted-red font-semibold uppercase tracking-wider">
                <span>— Curation Vision, TEDxChoukseyGroupofColleges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {eventData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-ted-card/60 border border-ted-border/60 backdrop-blur-sm text-center group hover:border-ted-red/50 hover:bg-ted-card transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display group-hover:text-ted-red transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ted-gray-200 mt-2 font-display">
                {stat.label}
              </div>
              <div className="text-[11px] text-ted-gray-500 mt-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
