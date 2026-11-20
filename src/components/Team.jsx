import React from 'react';
import { Users, Linkedin, Twitter, Github } from 'lucide-react';
import { eventData } from '../data/eventData';
import ImageWithFallback from './ImageWithFallback';

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-ted-black text-white border-t border-ted-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-3">
              <Users className="w-3.5 h-3.5 text-ted-red" />
              <span>Behind The Scenes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
              Organizing <span className="text-ted-red">Team</span>
            </h2>
            <p className="mt-3 text-ted-gray-400 text-sm sm:text-base max-w-xl">
              Meet the volunteers, faculty, and student innovators working tirelessly to bring TEDxChoukseyGroupofCollegesGroupofColleges to life.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-ted-gray-500 font-mono">
            <span>Modular /public/images/team</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData.team.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-ted-card border border-ted-border hover:border-ted-red/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-ted-card flex flex-col"
            >
              <div className="relative overflow-hidden bg-ted-dark">
                <ImageWithFallback
                  src={member.image}
                  fallbackSrc={member.fallbackImage}
                  alt={member.name}
                  aspectRatio="aspect-[4/5]"
                  className="group-hover:scale-105 transition-transform duration-500"
                  showPlaceholderOverlay={true}
                  badge={
                    <span className="px-2.5 py-1 rounded-full bg-ted-black/80 backdrop-blur-md border border-ted-border/60 text-[10px] font-bold uppercase tracking-wider text-ted-gray-300">
                      {member.committee}
                    </span>
                  }
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-ted-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-white border border-ted-border transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-white border border-ted-border transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-white border border-ted-border transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-ted-red transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-ted-gray-400 font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
