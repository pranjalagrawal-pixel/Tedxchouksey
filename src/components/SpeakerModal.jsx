import React, { useEffect } from 'react';
import { X, Linkedin, Twitter, Globe, Quote, Mic, ExternalLink } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function SpeakerModal({ speaker, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!speaker) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-ted-card border border-ted-border rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-ted-black/70 hover:bg-ted-red border border-ted-border text-ted-gray-300 hover:text-white transition-colors duration-200"
          aria-label="Close speaker bio"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Speaker Portrait Column (5 cols) */}
          <div className="md:col-span-5 relative bg-ted-dark">
            <ImageWithFallback
              src={speaker.image}
              fallbackSrc={speaker.fallbackImage}
              alt={speaker.name}
              aspectRatio="aspect-[4/5] md:aspect-auto md:h-full"
              className="object-cover h-full"
            />
            {/* Category Pill Over Image */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-ted-red/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                {speaker.category}
              </span>
            </div>
          </div>

          {/* Speaker Details Column (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              {/* Talk Information */}
              <div className="flex items-center space-x-2 text-xs font-semibold text-ted-red uppercase tracking-wider mb-2">
                <Mic className="w-3.5 h-3.5" />
                <span>TEDx Talk Presentation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                "{speaker.talkTitle}"
              </h3>

              {/* Speaker Identity */}
              <div className="mt-4 pb-4 border-b border-ted-border">
                <h4 className="text-lg font-bold text-ted-gray-100 font-display">
                  {speaker.name}
                </h4>
                <p className="text-xs sm:text-sm text-ted-gray-400 font-medium">
                  {speaker.designation} • <span className="text-ted-gray-300">{speaker.organization}</span>
                </p>
              </div>

              {/* Speaker Biography */}
              <div className="mt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-ted-gray-500 mb-2">
                  Biography
                </h5>
                <p className="text-xs sm:text-sm text-ted-gray-300 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              {/* Notable Quote */}
              {speaker.quote && (
                <div className="mt-5 p-4 rounded-xl bg-ted-surface border-l-2 border-ted-red text-xs sm:text-sm text-ted-gray-300 italic flex items-start space-x-3">
                  <Quote className="w-5 h-5 text-ted-red shrink-0 mt-0.5" />
                  <span>"{speaker.quote}"</span>
                </div>
              )}
            </div>

            {/* Social Media Links & Footer */}
            <div className="mt-6 pt-4 border-t border-ted-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {speaker.socials?.linkedin && (
                  <a
                    href={speaker.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-ted-dark hover:bg-ted-red text-ted-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {speaker.socials?.twitter && (
                  <a
                    href={speaker.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-ted-dark hover:bg-ted-red text-ted-gray-400 hover:text-white transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {speaker.socials?.website && (
                  <a
                    href={speaker.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-ted-dark hover:bg-ted-red text-ted-gray-400 hover:text-white transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>

              <span className="text-[11px] text-ted-gray-500 uppercase tracking-widest font-mono">
                TEDxChoukseyGroupofCollegesGroupofColleges 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
