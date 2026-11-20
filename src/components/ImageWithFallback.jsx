import React, { useState, useEffect } from 'react';

/**
 * ImageWithFallback component
 * 
 * Ensures robust image rendering:
 * 1. Attempts to load local image `src` (e.g. /images/speakers/speaker-1.jpg)
 * 2. If missing or fails, seamlessly switches to `fallbackSrc`
 * 3. If both fail, shows an elegant TEDx dark obsidian placeholder card with glowing accent
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt = "TEDx Image",
  className = "",
  containerClassName = "",
  aspectRatio = "aspect-[4/5]",
  showPlaceholderOverlay = false,
  badge = null
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
    setHasError(false);
    setIsLoaded(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (currentSrc !== fallbackSrc && fallbackSrc) {
      // Gracefully switch to curated fallback image
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-ted-card border border-ted-border/40 group ${aspectRatio} ${containerClassName}`}>
      {/* Skeleton / Loading shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-ted-card animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-ted-red/30 border-t-ted-red animate-spin" />
        </div>
      )}

      {/* Main Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
        />
      ) : (
        /* Fallback Graphic Placeholder when no image exists at all */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-ted-card to-ted-black">
          <div className="w-16 h-16 rounded-full bg-ted-red/10 border border-ted-red/30 flex items-center justify-center mb-3 text-ted-red font-bold text-xl">
            TEDx
          </div>
          <span className="text-xs uppercase tracking-widest text-ted-gray-400 font-medium">
            {alt}
          </span>
          <span className="text-[10px] text-ted-gray-600 mt-1">
            Drop photo in /public/images
          </span>
        </div>
      )}

      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          {badge}
        </div>
      )}

      {/* Optional Gradient Vignette for text contrast */}
      {showPlaceholderOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ted-black via-ted-black/30 to-transparent opacity-80 pointer-events-none" />
      )}
    </div>
  );
}
