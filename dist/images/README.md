# TEDxChouksey Image Architecture & Asset Guide

This directory is organized for fast and painless image swapping. Any photo dropped into these folders will automatically scale and fit perfectly into its container (`object-cover`) without breaking the layout or aspect ratio.

## Folder Structure

```
public/images/
├── hero-bg.jpg              # Optional background texture/photo for hero
├── speakers/                # Speaker portraits (Recommended 600x750 or 1:1 square / 4:5 aspect)
│   ├── speaker-1.jpg        # Speaker 1
│   ├── speaker-2.jpg        # Speaker 2
│   ├── speaker-3.jpg        # Speaker 3
│   ├── speaker-4.jpg        # Speaker 4
│   ├── speaker-5.jpg        # Speaker 5
│   ├── speaker-6.jpg        # Speaker 6
│   ├── speaker-7.jpg        # Speaker 7
│   └── speaker-8.jpg        # Speaker 8
├── gallery/                 # Event highlights & photo gallery
│   ├── gallery-1.jpg        # Stage / Keynote
│   ├── gallery-2.jpg        # Audience / Crowd
│   ├── gallery-3.jpg        # Innovation lab
│   ├── gallery-4.jpg        # Cultural performance
│   ├── gallery-5.jpg        # Networking lounge
│   ├── gallery-6.jpg        # Speaker interactions
│   ├── gallery-7.jpg        # Evening lighting
│   └── gallery-8.jpg        # Group photo / Finale
├── team/                    # Organizing committee portraits
│   ├── team-1.jpg           # Lead Organizer
│   ├── team-2.jpg           # Co-Organizer
│   ├── team-3.jpg           # Curation Lead
│   ├── team-4.jpg           # Tech & Web Lead
│   ├── team-5.jpg           # Experience & Design Lead
│   └── team-6.jpg           # Media & PR Lead
└── sponsors/                # Sponsor logos (PNG / SVG with transparent background)
    ├── sponsor-1.svg
    ├── sponsor-2.svg
    ├── sponsor-3.svg
    ├── sponsor-4.svg
    ├── sponsor-5.svg
    └── sponsor-6.svg
```

## How to Swap Photos:
1. Simply place your image in the appropriate folder matching the filename above (e.g., `public/images/speakers/speaker-1.jpg`).
2. Alternatively, open `src/data/eventData.js` and point the `image` field to any custom filename or external URL.
3. If an image file does not exist yet or fails to load, the site gracefully falls back to high-resolution curated conference photography so the website always looks stunning and professional.
