import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Youtube, ArrowUp, ExternalLink, Send } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ted-black text-white border-t border-ted-border/60 pt-16 pb-12 overflow-hidden">
      {/* Decorative top red accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Location Map + Contact & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-ted-border/60">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-ted-red font-display tracking-tighter">
                  TED
                </span>
                <span className="text-2xl font-black text-ted-red font-display align-super -ml-0.5">
                  x
                </span>
                <span className="text-3xl font-extrabold text-white tracking-tight ml-1 font-display">
                  Chouksey
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-ted-gray-400 font-medium mt-0.5">
                {eventData.details.licenseTagline}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-ted-gray-400 leading-relaxed max-w-sm">
                Empowering thinkers, visionaries, and changemakers across Chhattisgarh and beyond. Spreading disruptive ideas that foster sustainable and compassionate resonance.
              </p>
            </div>

            {/* Newsletter Subscribe */}
            <div className="mt-6 pt-6 border-t border-ted-border/50">
              <span className="text-xs font-bold uppercase tracking-wider text-ted-gray-300 block mb-2 font-display">
                Stay Updated
              </span>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to TEDxChoukseyGroupofColleges newsletter!'); }} className="flex items-center space-x-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-ted-dark border border-ted-border rounded-xl text-xs text-white placeholder-ted-gray-500 focus:outline-none focus:border-ted-red"
                />
                <button
                  type="submit"
                  className="p-2 bg-ted-red hover:bg-ted-redHover rounded-xl text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ted-red mb-3 font-display">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-ted-gray-400 font-medium">
                <li><a href="#about" className="hover:text-white transition-colors">About TED & Theme</a></li>
                <li><a href="#speakers" className="hover:text-white transition-colors">Speakers Lineup</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Interactive Schedule</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Past Highlights & Gallery</a></li>
                <li><a href="#sponsors" className="hover:text-white transition-colors">Patrons & Partners</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Organizing Committee</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ted-red mb-2 font-display">
                Direct Contact
              </h4>
              <div className="space-y-1.5 text-xs text-ted-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-ted-red" />
                  <a href={`mailto:${eventData.details.contact.email}`} className="hover:text-white transition-colors">
                    {eventData.details.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-ted-red" />
                  <span>{eventData.details.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Venue & Location Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-ted-red font-display">
                  Venue & Map
                </h4>
                <a
                  href={eventData.details.venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-ted-gray-400 hover:text-ted-red transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-3 bg-ted-card rounded-xl border border-ted-border mb-3 text-xs text-ted-gray-300 flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-ted-red shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{eventData.details.venue.name}</span>
                  <span className="text-ted-gray-400">{eventData.details.venue.address}</span>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="w-full h-44 rounded-xl overflow-hidden border border-ted-border bg-ted-card relative">
                <iframe
                  title="TEDxChoukseyGroupofCollegesGroupofColleges Venue Map"
                  src={eventData.details.venue.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Legal Disclaimer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ted-gray-400">
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={eventData.details.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-ted-gray-400 hover:text-white border border-ted-border transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={eventData.details.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-ted-gray-400 hover:text-white border border-ted-border transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={eventData.details.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-ted-gray-400 hover:text-white border border-ted-border transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={eventData.details.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-ted-card hover:bg-ted-red text-ted-gray-400 hover:text-white border border-ted-border transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* TEDx Disclaimer */}
          <div className="text-center md:text-right max-w-xl text-[11px] text-ted-gray-500 leading-relaxed">
            <p>{eventData.disclaimer}</p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-ted-card hover:bg-ted-surface border border-ted-border text-ted-gray-400 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
