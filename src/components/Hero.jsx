import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Ticket, Sparkles, Volume2 } from 'lucide-react';
import { eventData } from '../data/eventData';
import HeroWaveCanvas from './HeroWaveCanvas';

export default function Hero({ onOpenTicketModal }) {
  // Live Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(eventData.details.eventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-ted-black">
      {/* 3D / Fluid Acoustic Wave Canvas Centerpiece */}
      <div className="absolute inset-0 z-0">
        <HeroWaveCanvas />
      </div>

      {/* Subtle radial vignette & grid lines for depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Event Theme Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-ted-card/90 border border-ted-red/40 backdrop-blur-md shadow-lg shadow-ted-red/10 mb-6 animate-pulseGlow">
          <span className="w-2 h-2 rounded-full bg-ted-red animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-ted-gray-200 uppercase font-display">
            TEDxChoukseyGroupofCollegesGroupofColleges 2026 • Theme: <span className="text-ted-red font-bold">Resonance</span>
          </span>
        </div>

        {/* Hero Main Heading: Brand Typography (Replacing old "Ember") */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white leading-none uppercase select-none drop-shadow-2xl">
          <span className="text-ted-red drop-shadow-[0_0_35px_rgba(230,43,30,0.55)]">
            TED<span className="text-3xl sm:text-5xl md:text-6xl align-super -ml-1">x</span>
          </span>
          <span className="inline-block hover:scale-[1.02] transition-transform duration-300">
            Chouksey
          </span>
        </h1>

        {/* Theme Tagline & Subtitle */}
        <div className="mt-4 sm:mt-6 max-w-3xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-ted-gray-200 to-ted-red font-display">
            {eventData.details.subtitle}
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-ted-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
            {eventData.details.tagline}
          </p>
        </div>

        {/* Live Countdown Timer */}
        <div className="mt-8 sm:mt-10 grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-xl">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-ted-card/75 border border-ted-border/70 backdrop-blur-md shadow-lg shadow-black/50 group hover:border-ted-red/50 transition-colors"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tabular-nums tracking-tight group-hover:text-ted-red transition-colors">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-ted-gray-400 uppercase mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={onOpenTicketModal}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-3 px-8 py-4 bg-ted-red hover:bg-ted-redHover text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-full shadow-ted-glow hover:shadow-[0_0_45px_rgba(230,43,30,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <Ticket className="w-5 h-5" />
            <span>Register Now / Passes</span>
          </button>

          <a
            href="#speakers"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 bg-ted-card/90 hover:bg-ted-surface border border-ted-border hover:border-ted-gray-500 text-white font-semibold text-sm sm:text-base tracking-wider rounded-full backdrop-blur-md transition-all duration-300"
          >
            <span>Explore Lineup</span>
            <ArrowRight className="w-4 h-4 text-ted-red" />
          </a>
        </div>

        {/* Essential Event Metadata Strip */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-ted-border/40 text-xs sm:text-sm text-ted-gray-400 font-medium">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-ted-red" />
            <span>{eventData.details.displayDate}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-ted-red" />
            <span>{eventData.details.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-ted-red" />
            <span>{eventData.details.venue.name}, {eventData.details.venue.city}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
