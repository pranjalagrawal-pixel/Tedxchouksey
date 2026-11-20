# TEDxChoukseyGroupofCollegesGroupofColleges — Modern Event Single-Page Website

A modern, responsive, high-impact single-page event website for **TEDxChoukseyGroupofCollegesgroupofcollleges**, inspired by the dark-mode aesthetic and structure of `tedx.mgmu.ac.in`.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## ✨ Key Features & Highlights

1. **Visual Identity & Theme**
   - Obsidian dark palette (`#0A0A0A`), crisp typography (`#FFFFFF`), muted slate gray (`#A1A1AA`), and signature **TEDx Crimson Red (`#E62B1E`)**.
   - Typography powered by Google Fonts: *Plus Jakarta Sans* and *Inter*.

2. **Hero Centerpiece & Acoustic Wave Canvas**
   - Brand replacement: All instances and styling configured for **TEDxChoukseyGroupofCollegesgroupofcolleges**.
   - Interactive GPU-accelerated acoustic fluid wave canvas behind the main typography, representing the theme **"RESONANCE: Breaking Frequencies"**.
   - Live countdown timer calculating real-time days, hours, minutes, and seconds to the event date.
   - Prominent "Register Now / Passes" and "Explore Lineup" action buttons.

3. **Interactive Water Ripple Cursor**
   - Custom GPU fluid water ripple/trail cursor effect across the viewport.
   - Non-blocking (`pointer-events: none`) overlay with physics-based wave damping.
   - Click shockwaves and gentle movement trails.
   - Live toggle button in the navbar (**"Water Effect: ON/OFF"**) and automatic performance bypass on mobile touch devices.

4. **Modular & Easy-to-Edit Photo Architecture**
   - **Centralized Data:** Everything (speakers, bios, talks, schedule, gallery, team, sponsors, ticket tiers, venue, FAQ) is configured in [`src/data/eventData.js`](file:///c:/Users/ankit/Downloads/Tedx/src/data/eventData.js).
   - **Drop-In Photo Folders:** Dedicated directory structure under [`public/images/`](file:///c:/Users/ankit/Downloads/Tedx/public/images/):
     - `public/images/speakers/speaker-[1-8].jpg`
     - `public/images/gallery/gallery-[1-8].jpg`
     - `public/images/team/team-[1-6].jpg`
     - `public/images/sponsors/`
   - **Smart Fallback Component:** [`src/components/ImageWithFallback.jsx`](file:///c:/Users/ankit/Downloads/Tedx/src/components/ImageWithFallback.jsx) automatically falls back to curated high-resolution photography if local images are absent, ensuring the website looks stunning immediately without broken images.

5. **Page Sections (TEDx Event Flow)**
   - **Sticky Glassmorphism Navbar:** Animated branding, smooth-scroll links, water cursor toggle, and "Book Passes" CTA.
   - **About TED & :** Two-column split layout explaining TED, the independent TEDx license, the *Resonance* theme, and key event impact statistics.
   - **Speakers Lineup:** 4-column responsive grid with category filters, talk titles, designations, and interactive **Speaker Bio Modals** on click.
   - **Interactive Schedule / Timeline:** Tabbed session selector (*The Ignition*, *Uncharted Frequencies*, *The Harmonic Shift*) with vertical timeline nodes for keynotes, musical performances, and networking breaks.
   - **Past Highlights & Photo Gallery:** Bento masonry photo grid with category filters and fullscreen **Lightbox Image Viewer** with keyboard navigation (`Left`, `Right`, `ESC`).
   - **Sponsors & Patrons:** Tiered grids for Platinum Patrons, Gold Partners, and Media Alliances.
   - **Organizing Team:** Core committee member cards with designations and social links.
   - **FAQ Accordion:** Interactive collapsible questions and answers.
   - **Footer:** Interactive Google Maps embed for Chouksey Engineering College, venue address, contact info, social links, newsletter signup, and official TEDx legal disclaimer.

6. **Interactive Ticket / Registration Modal**
   - Multi-tier ticket selection (Student Pass ₹499, General Delegate ₹999, VIP Patron ₹1999).
   - Quantity selector with dynamic price calculation.
   - Attendee details form with validation and promo code support (Try promo `TEDX2026` for 15% discount).
   - Instant confirmation with an authentic **Printable / Downloadable Digital Delegate Badge** with unique Pass ID and QR code.

---

## 🚀 Getting Started

### Development Server
To start the live development server:
```bash
npm run dev
```
Open your browser to `http://localhost:3000` (or the port indicated in terminal).

### Production Build
To create a production-optimized build:
```bash
npm run build
```
The compiled assets will be in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
Tedx/
├── public/
│   └── images/
│       ├── speakers/       # Drop speaker portraits here (speaker-1.jpg, etc.)
│       ├── gallery/        # Drop gallery photos here (gallery-1.jpg, etc.)
│       ├── team/           # Drop team photos here (team-1.jpg, etc.)
│       ├── sponsors/       # Drop sponsor SVGs/PNGs here
│       └── README.md       # Asset swapping guidelines
├── src/
│   ├── components/
│   │   ├── About.jsx               # Two-column TED & Theme story + stats
│   │   ├── Faq.jsx                 # Collapsible FAQ accordion
│   │   ├── Footer.jsx              # Venue map, contact, disclaimer
│   │   ├── Gallery.jsx             # Bento photo grid & category filter
│   │   ├── Hero.jsx                # Brand typography, countdown, CTAs
│   │   ├── HeroWaveCanvas.jsx      # Acoustic fluid wave interactive canvas
│   │   ├── ImageWithFallback.jsx   # Smart aspect-ratio photo container
│   │   ├── LightboxModal.jsx       # Fullscreen lightbox photo viewer
│   │   ├── Navbar.jsx              # Sticky glassmorphism header & drawer
│   │   ├── Schedule.jsx            # Tabbed sessions & vertical timeline
│   │   ├── SpeakerModal.jsx        # Detailed speaker bio & talk popup
│   │   ├── Speakers.jsx            # 4-col speaker cards grid
│   │   ├── Sponsors.jsx            # Platinum/Gold sponsor tiers
│   │   ├── Team.jsx                # Organizing committee cards
│   │   ├── TicketModal.jsx         # Pass booking & badge generator
│   │   └── WaterRippleCursor.jsx   # GPU fluid water refraction trail
│   ├── data/
│   │   └── eventData.js            # Centralized event configuration
│   ├── styles/
│   │   └── index.css               # Tailwind & custom glassmorphism styles
│   ├── App.jsx                     # Root application layout
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML root & Google Fonts
├── package.json                    # Dependencies & scripts
├── tailwind.config.js              # TEDx palette & animations
└── vite.config.js                  # Vite configuration
```
