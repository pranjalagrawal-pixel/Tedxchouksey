import React from 'react';
import { Award, ExternalLink, Handshake, ArrowUpRight } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Sponsors() {
  const { platinum, gold, associate } = eventData.sponsors;

  return (
    <section id="sponsors" className="relative py-24 bg-ted-dark text-white border-t border-ted-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-3">
            <Award className="w-3.5 h-3.5 text-ted-red" />
            <span>Patrons & Partners</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
            Sponsors & <span className="text-ted-red">Supporters</span>
          </h2>
          <p className="mt-3 text-ted-gray-400 text-sm sm:text-base">
            Empowered by forward-looking institutions committed to youth leadership and knowledge dissemination.
          </p>
        </div>

        {/* Platinum / Title Tier */}
        <div className="mb-14">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="h-px w-12 bg-ted-border" />
            <span className="text-xs font-bold uppercase tracking-widest text-ted-red font-mono">
              Platinum & Title Patrons
            </span>
            <span className="h-px w-12 bg-ted-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platinum.map((item, idx) => (
              <a
                key={idx}
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-ted-card border border-ted-border/80 hover:border-ted-red transition-all duration-300 shadow-ted-card flex flex-col justify-between items-center text-center hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-[10px] uppercase font-bold tracking-widest text-ted-gray-500 mb-4">
                  {item.category}
                </span>

                <div className="py-4">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-ted-red transition-colors font-display">
                    {item.logoText}
                  </h3>
                  <p className="text-xs text-ted-gray-400 mt-2 font-medium">
                    {item.subtext}
                  </p>
                </div>

                <div className="mt-4 flex items-center space-x-1.5 text-xs text-ted-gray-400 group-hover:text-white transition-colors">
                  <span>Visit Institutional Parton</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ted-red" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Gold Partners */}
        <div className="mb-14">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="h-px w-12 bg-ted-border" />
            <span className="text-xs font-bold uppercase tracking-widest text-ted-gray-400 font-mono">
              Gold & Innovation Partners
            </span>
            <span className="h-px w-12 bg-ted-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {gold.map((item, idx) => (
              <a
                key={idx}
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-ted-card/60 border border-ted-border/60 hover:border-ted-borderLight hover:bg-ted-card transition-all duration-300 flex flex-col justify-between items-center text-center"
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-ted-gray-500 mb-2">
                  {item.category}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-ted-red transition-colors font-display">
                  {item.logoText}
                </h4>
                <p className="text-[11px] text-ted-gray-400 mt-1">
                  {item.subtext}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Associate / Media Partners */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="h-px w-12 bg-ted-border" />
            <span className="text-xs font-bold uppercase tracking-widest text-ted-gray-500 font-mono">
              Media & Ecosystem Alliances
            </span>
            <span className="h-px w-12 bg-ted-border" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {associate.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-ted-card border border-ted-border/50 text-xs font-semibold text-ted-gray-300 flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ted-red" />
                <span className="text-white">{item.name}</span>
                <span className="text-ted-gray-500 text-[10px]">({item.category})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Us CTA Box */}
        <div className="mt-16 text-center">
          <a
            href="mailto:TEDxChouksey@gmail.com?subject=Sponsorship%20Inquiry"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-ted-card hover:bg-ted-surface border border-ted-red/40 text-xs font-bold uppercase tracking-wider text-white hover:text-ted-red transition-colors"
          >
            <Handshake className="w-4 h-4 text-ted-red" />
            <span>Inquire About Partnership & CSR</span>
          </a>
        </div>
      </div>
    </section>
  );
}
