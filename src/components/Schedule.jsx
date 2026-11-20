import React, { useState } from 'react';
import { Calendar, Clock, Coffee, Mic, Music, Users, Sparkles, Video } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Schedule() {
  const { sessions } = eventData.schedule;
  const [activeSessionId, setActiveSessionId] = useState(sessions[0].id);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];

  const getSlotIcon = (type) => {
    switch (type) {
      case 'talk':
        return <Mic className="w-4 h-4 text-ted-red" />;
      case 'performance':
        return <Music className="w-4 h-4 text-purple-400" />;
      case 'break':
        return <Coffee className="w-4 h-4 text-amber-400" />;
      case 'panel':
        return <Users className="w-4 h-4 text-blue-400" />;
      case 'screening':
        return <Video className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-ted-red" />;
    }
  };

  const getSlotBadgeColor = (type) => {
    switch (type) {
      case 'talk':
        return 'bg-ted-red/10 border-ted-red/30 text-ted-red';
      case 'performance':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-300';
      case 'break':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-300';
      case 'panel':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-300';
      case 'screening':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
      default:
        return 'bg-ted-border text-ted-gray-300 border-ted-borderLight';
    }
  };

  return (
    <section id="schedule" className="relative py-24 bg-ted-black text-white border-t border-ted-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-ted-card border border-ted-border text-xs uppercase tracking-widest text-ted-gray-400 mb-3">
            <Clock className="w-3.5 h-3.5 text-ted-red" />
            <span>Event Flow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
            Interactive <span className="text-ted-red">Timeline</span>
          </h2>
          <p className="mt-3 text-ted-gray-400 text-sm sm:text-base">
            8+ hours of curated intellectual stimulation, musical resonance, and high-impact networking.
          </p>
        </div>

        {/* Tabbed Session Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-ted-card border border-ted-border mb-12">
          {sessions.map((session, index) => {
            const isSelected = activeSessionId === session.id;
            return (
              <button
                key={session.id}
                onClick={() => setActiveSessionId(session.id)}
                className={`w-full sm:w-auto flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex flex-col items-center sm:items-start text-center sm:text-left ${
                  isSelected
                    ? 'bg-ted-red text-white shadow-lg shadow-ted-red/25 border border-ted-redHover'
                    : 'text-ted-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-[10px] font-mono opacity-80">
                  SESSION 0{index + 1}
                </span>
                <span className="font-display font-bold mt-0.5">{session.sessionName.split(':')[1] || session.sessionName}</span>
                <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-ted-gray-500'} font-normal mt-0.5`}>
                  {session.timeWindow}
                </span>
              </button>
            );
          })}
        </div>

        {/* Session Meta Description */}
        <div className="mb-10 p-5 rounded-xl bg-ted-dark border border-ted-border/60 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white font-display">
              {activeSession.sessionName}
            </h3>
            <p className="text-xs text-ted-gray-400 mt-0.5">
              {activeSession.description}
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-ted-card text-ted-gray-300 text-xs font-mono font-medium border border-ted-border">
            {activeSession.timeWindow}
          </span>
        </div>

        {/* Vertical Timeline Slots */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-ted-border space-y-8">
          {activeSession.slots.map((slot, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Connector Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-ted-card border-2 border-ted-border group-hover:border-ted-red flex items-center justify-center transition-colors">
                <span className="w-2 h-2 rounded-full bg-ted-red" />
              </div>

              {/* Slot Card */}
              <div className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                slot.type === 'break'
                  ? 'bg-ted-card/40 border-ted-border/40 hover:border-ted-border'
                  : 'bg-ted-card border-ted-border hover:border-ted-red/50 shadow-ted-card'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-ted-red font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{slot.time}</span>
                  </div>

                  <div className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider ${getSlotBadgeColor(slot.type)}`}>
                    {getSlotIcon(slot.type)}
                    <span>{slot.category || slot.type}</span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-ted-red transition-colors">
                  {slot.title}
                </h4>

                <div className="mt-1 flex items-center space-x-2 text-xs text-ted-gray-400 font-medium">
                  <span className="text-white font-semibold">{slot.speaker}</span>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-ted-gray-400 leading-relaxed">
                  {slot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
