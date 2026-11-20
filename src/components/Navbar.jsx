import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets, Ticket, ChevronRight } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function Navbar({ onOpenTicketModal, waterEffectEnabled, onToggleWaterEffect }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['about', 'speakers', 'schedule', 'gallery', 'sponsors', 'team', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ted-black/90 backdrop-blur-md border-b border-ted-border/60 shadow-lg shadow-black/40 py-3'
            : 'bg-gradient-to-b from-ted-black/80 to-transparent backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex flex-col group focus:outline-none"
            aria-label="TEDxChoukseyGroupofCollegesGroupofColleges Home"
          >
            <div className="flex items-baseline tracking-tight">
              <span className="text-2xl sm:text-3xl font-black text-ted-red font-display tracking-tighter transition-transform group-hover:scale-105">
                TED
              </span>
              <span className="text-xl sm:text-2xl font-black text-ted-red font-display align-super -ml-0.5">
                x
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight ml-1 font-display">
                Chouksey
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-ted-gray-400 font-medium -mt-1 uppercase">
              {eventData.details.licenseTagline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-ted-border/80 border border-ted-red/40'
                      : 'text-ted-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Area: Water Ripple Toggle & Book Passes CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Water Ripple Cursor Toggle */}
            <button
              onClick={onToggleWaterEffect}
              title={waterEffectEnabled ? "Disable fluid ripple cursor" : "Enable fluid ripple cursor"}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                waterEffectEnabled
                  ? 'border-ted-red/50 bg-ted-red/10 text-white shadow-sm shadow-ted-red/20'
                  : 'border-ted-border/60 bg-ted-card text-ted-gray-500 hover:text-ted-gray-300'
              }`}
            >
              <Droplets className={`w-3.5 h-3.5 ${waterEffectEnabled ? 'text-ted-red animate-pulse' : 'text-ted-gray-500'}`} />
              <span className="hidden xl:inline text-[11px]">
                {waterEffectEnabled ? 'Water Effect: ON' : 'Water: OFF'}
              </span>
            </button>

            {/* Book Passes CTA */}
            <button
              onClick={onOpenTicketModal}
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 bg-ted-red rounded-full group hover:bg-ted-redHover shadow-lg shadow-ted-red/30 hover:shadow-ted-red/60 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="flex items-center space-x-2">
                <Ticket className="w-3.5 h-3.5" />
                <span>Book Passes</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu & Water Toggle Trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onToggleWaterEffect}
              className={`p-2 rounded-lg border text-xs ${
                waterEffectEnabled ? 'border-ted-red/50 text-ted-red bg-ted-red/10' : 'border-ted-border text-ted-gray-500'
              }`}
              aria-label="Toggle water cursor ripple effect"
            >
              <Droplets className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-ted-card border border-ted-border text-white hover:bg-ted-surface focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Slide-Out Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-ted-dark border-l border-ted-border p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-ted-border">
              <div>
                <span className="text-xl font-black text-ted-red">TED</span>
                <span className="text-lg font-black text-ted-red align-super">x</span>
                <span className="text-xl font-bold text-white ml-1">Chouksey</span>
                <p className="text-[9px] uppercase tracking-wider text-ted-gray-400 mt-0.5">
                  {eventData.details.licenseTagline}
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-ted-card text-ted-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col space-y-1 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold tracking-wider uppercase text-ted-gray-300 hover:text-white hover:bg-ted-surface transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-ted-gray-600" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="pt-6 border-t border-ted-border space-y-3">
            <div className="flex items-center justify-between px-3 py-2 bg-ted-card rounded-lg border border-ted-border text-xs text-ted-gray-300">
              <span className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-ted-red" />
                <span>Water Ripple Effect</span>
              </span>
              <button
                onClick={onToggleWaterEffect}
                className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                  waterEffectEnabled ? 'bg-ted-red text-white' : 'bg-ted-border text-ted-gray-400'
                }`}
              >
                {waterEffectEnabled ? 'ON' : 'OFF'}
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTicketModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-ted-red hover:bg-ted-redHover text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-ted-red/30"
            >
              <Ticket className="w-4 h-4" />
              <span>Book Passes Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
