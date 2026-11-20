/**
 * TEDxChoukseyGroupofColleges Centralized Configuration & Data Source
 * 
 * 📸 EASY PHOTO REPLACEMENT:
 * To use your own local photos:
 * 1. Drop your images into /public/images/ matching the filenames below
 *    (e.g., public/images/speakers/speaker-1.jpg).
 * 2. Or replace the `image` string directly with any local path or remote URL.
 * 3. The `fallbackImage` will automatically be used if the local file isn't found.
 */

export const eventData = {
  details: {
    name: "TEDxChoukseyGroupofCollegesGroupofcolleges",
    licenseTagline: "",
    theme: "RESONANCE",
    subtitle: "Breaking Frequencies",
    tagline: "Where disruptive ideas oscillate, collide, and amplify into unstoppable movements.",
    description: 
      "TEDxChoukseyGroupofCollegesGroupofColleges brings together trailblazing scientists, visionary artists, disruptive technologists, and cultural changemakers to explore the theme of 'Resonance'. Discover how a single whisper of innovation can echo across industries, break calcified patterns, and reshape the collective future.",
    eventDate: "2026-03-28T09:30:00+05:30", // Live Countdown target
    displayDate: "Will be updated soon",
    time: "Will be updated soon",
    venue: {
      name: "Swami Vivekanad Auditorium, Chouksey Engineering College",
      institution: "Chouksey Group of Colleges",
      address: "NH-49, Masturi Road, Bilaspur, Chhattisgarh 495004",
      city: "Bilaspur, Chhattisgarh",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.4237198758837!2d82.20392687595604!3d22.03337995254924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280c98e21a1f59%3A0xe1ca0ba51d7cbf5a!2sChouksey%20Engineering%20College!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
      directionsUrl: "https://maps.google.com/?q=Chouksey+Engineering+College+Bilaspur"
    },
    contact: {
      email: "DxChoukseyGroupofColleges@gmail.com",
      phone: "+91 98765 43210",
      pressEmail: "press@TEDxChoukseyGroupofColleges.org",
      instagram: "https://instagram.com/TEDxChoukseyGroupofColleges",
      linkedin: "https://linkedin.com/company/TEDxChoukseyGroupofColleges",
      twitter: "https://twitter.com/TEDxChoukseyGroupofColleges",
      youtube: "https://youtube.com/@tedx"
    }
  },

  stats: [
    { value: "0", label: "Visionary Speakers", sublabel: "Across  Global Disciplines" },
    { value: "0", label: "Curious Minds", sublabel: "Students, Thinkers & Leaders" },
    { value: "0", label: "Hours of Immersion", sublabel: "Talks, Performances & Demos" },
    { value: "0%", label: "Ideas Worth Spreading", sublabel: "Non-profit & Independently Organized" }
  ],

  about: {
    whatIsTed: {
      title: "What is TED?",
      description: 
        "TED is a nonpartisan, nonprofit organization devoted to Ideas Worth Spreading. Originating in 1984 as a conference where Technology, Entertainment, and Design converged, TED today covers almost all topics — from science to business to global issues — in more than 100 languages."
    },
    whatIsTedx: {
      title: "What is TEDx?",
      description: 
        "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized."
    },
    themeStory: {
      title: "The Theme: RESONANCE",
      highlight: "Breaking Frequencies",
      description: 
        "Every profound paradigm shift begins with an echo that refuses to fade. Resonance is the phenomenon where a vibration matches the natural frequency of a system, multiplying its energy by orders of magnitude.",
      secondParagraph: 
        "At TEDxChoukseyGroupofColleges 2026, we explore how human curiosity, cutting-edge science, indigenous wisdom, and radical empathy can reach that critical frequency — breaking through resistance, fracturing stale orthodoxies, and amplifying the voices shaping tomorrow."
    }
  },

  speakers: [
     
    
    {
      id: "speaker-1",
      name: "",
      designation: "",
      organization: "",
      talkTitle: "",
      category: "",
      image: "",
      fallbackImage: "",
      bio: "",
      quote: "",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    }
  ],

  schedule: {
    sessions: [
      {
        id: "session-1",
        sessionName: "Session 01: The Ignition",
        timeWindow: "09:30 AM – 12:00 PM",
        description: "Opening ceremonies, introductory keynote talks on emerging technologies and planetary boundaries.",
        slots: [
          {
            time: "08:30 AM - 09:30 AM",
            title: "Delegate Check-In & Morning Refreshments",
            speaker: "Registration Desk",
            type: "break",
            description: "Badge collection, interactive badge printing, and welcome beverage in the Innovation Courtyard."
          },
          {
            time: "09:30 AM - 09:50 AM",
            title: "Opening Ceremony & Theme Address: Resonance",
            speaker: "TEDxChoukseyGroupofColleges Organizing Committee",
            type: "keynote",
            description: "Curator's opening address, introducing the vision behind Breaking Frequencies."
          },
          {
            time: "09:50 AM - 10:15 AM",
            title: "The Acoustic Mind: Can Synthetic Intelligence Feel Silence?",
            speaker: "Dr. Arundhati Sen",
            type: "talk",
            category: "Artificial Intelligence",
            description: "Exploring cognitive boundaries and the need for silent pauses in autonomous machine models."
          },
          {
            time: "10:15 AM - 10:40 AM",
            title: "Beyond Gravity: Atmospheric Harvesters for Interplanetary Habitats",
            speaker: "Vikramaditya Roy",
            type: "talk",
            category: "Space Exploration",
            description: "Propulsion breakthroughs and how orbital mechanics will enable sustainable living beyond Earth."
          },
          {
            time: "10:40 AM - 11:05 AM",
            title: "Special Acoustic Showcase: Resonance in Overtones",
            speaker: "Tenzin Norbu & Ensemble",
            type: "performance",
            category: "Live Performance",
            description: "A live multi-tonal acoustic performance exploring natural standing waves in the auditorium."
          },
          {
            time: "11:05 AM - 11:30 AM",
            title: "Living Facades: Why Tomorrow's Cities Must Breathe Like Mangroves",
            speaker: "Meera Krishnan",
            type: "talk",
            category: "Architecture & Ecology",
            description: "Biomimetic design transforming high-density concrete cities into self-cooling living organisms."
          },
          {
            time: "11:30 AM - 12:00 PM",
            title: "Ideas Collider: Mid-Morning Coffee & Speaker Q&A",
            speaker: "All Delegates",
            type: "break",
            description: "Informal breakout conversations and interactive technology exhibits in the glass atrium."
          }
        ]
      },
      {
        id: "session-2",
        sessionName: "Session 02: Uncharted Frequencies",
        timeWindow: "01:00 PM – 03:30 PM",
        description: "Deep-dives into medicine, social equity, data sovereignty, and human resilience.",
        slots: [
          {
            time: "12:00 PM - 01:00 PM",
            title: "Networking Lunch & Interactive Tech Pavilions",
            speaker: "Campus Dining Lawn",
            type: "break",
            description: "Curated chef's buffet lunch with acoustic background soundscape and sponsor booths."
          },
          {
            time: "01:00 PM - 01:25 PM",
            title: "Editing the Future: The Epigenetic Clock in Our Bloodstreams",
            speaker: "Dr. Kanishka Verma",
            type: "talk",
            category: "Biotechnology",
            description: "How targeted molecular interventions can reverse biological aging and make oncology preventive."
          },
          {
            time: "01:25 PM - 01:50 PM",
            title: "Shadow Feeds: How Algorithmic Polarities Steal Our Attention Span",
            speaker: "Zoya Alvi",
            type: "talk",
            category: "Media & Society",
            description: "Unraveling the architecture of outrage and building digital sanctuaries for conscious thought."
          },
          {
            time: "01:50 PM - 02:15 PM",
            title: "Sonic Archaeology: Tuning the Body Through Ancient Waveforms",
            speaker: "Tenzin Norbu",
            type: "talk",
            category: "Acoustics & Arts",
            description: "Decoding how sacred architectural geometry and overtone frequencies modulate neurobiology."
          },
          {
            time: "02:15 PM - 02:40 PM",
            title: "Official TED Global Screening: Curated Feature",
            speaker: "TED Conference Archive",
            type: "screening",
            category: "Global TED Talk",
            description: "A specially licensed high-definition screening of an iconic global TED talk connected to our theme."
          },
          {
            time: "02:40 PM - 03:30 PM",
            title: "Afternoon High Tea & Interactive Workshops",
            speaker: "Atrium Lounge",
            type: "break",
            description: "Artisan tea, barista coffee, and hands-on workshops with student innovation teams."
          }
        ]
      },
      {
        id: "session-3",
        sessionName: "Session 03: The Harmonic Shift",
        timeWindow: "03:30 PM – 06:30 PM",
        description: "The grand finale: Clean energy independence, kinetic arts, closing remarks, and networking.",
        slots: [
          {
            time: "03:30 PM - 03:55 PM",
            title: "Decentralized Megawatts: Powering Bharat with Solar Commons",
            speaker: "Rohan Agrawal",
            type: "talk",
            category: "Clean Energy",
            description: "Grassroots rural micro-grids creating decentralized energy independence across central India."
          },
          {
            time: "03:55 PM - 04:20 PM",
            title: "The Physics of Grace: Kinetic Empathy in an Automated Age",
            speaker: "Sanya Mathur",
            type: "talk",
            category: "Human Kinetics & Dance",
            description: "A breathtaking blend of lecture and live kinetic dance exploring emotional robotics."
          },
          {
            time: "04:20 PM - 04:45 PM",
            title: "Panel Dialogue: The Cross-Pollination of Frequencies",
            speaker: "Selected Speakers & Student Curators",
            type: "panel",
            category: "Fireside Panel",
            description: "An unscripted collision of perspectives between AI ethics, architecture, and kinetic arts."
          },
          {
            time: "04:45 PM - 05:15 PM",
            title: "Closing Keynote & Standout Student Idea Presentation",
            speaker: "Student Innovator Showcase",
            type: "keynote",
            category: "Youth Voice",
            description: "Winner of the Chouksey College Intra-Campus Idea Pitch competition sharing their prototype."
          },
          {
            time: "05:15 PM - 05:40 PM",
            title: "Closing Felicitations & Curator's Gratitude",
            speaker: "Organizing Team & Advisors",
            type: "ceremony",
            description: "Felicitation of speakers, partners, volunteers, and the big reveal for TEDxChoukseyGroupofColleges 2027."
          },
          {
            time: "05:40 PM - 06:30 PM",
            title: "Grand Networking Gala & Red Carpet Photo Booth",
            speaker: "Open to All Attendees",
            type: "break",
            description: "Red carpet photo opportunities, speaker book-signing, and live ambient acoustic sets."
          }
        ]
      }
    ]
  },

  gallery: [
    
    {
      id: "gallery-",
      title: "",
      category: "Moments",
      image: "",
      fallbackImage: "",
      caption: "",
      aspectRatio: "aspect-[4/3]"
    }
  ],

  team: [
    {
      name: "Dr.Ashish Jaiswal",
      role: "Former of TEDxChoukseygroupofcollege",
      committee: "Managing Director ",
      image: "/images/team/team-1.jpg",
      fallbackImage: "",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Pranjal Agrawal",
      role: "President",
      committee: "Leadership",
      image: "/images/team/team-2.jpg",
      fallbackImage: "",
      linkedin: "https://in/pranjal-agrawal-70276238a",
      twitter: "https://twitter.com"
    },
    {
      name: "Girish Sahu ",
      role: "Core Team Head",
      committee: "CEC",
      image: "",
      fallbackImage: "",
      linkedin: "https://linkedin.com"
    },
    {
      name: "L.RITIKA RAO",
      role: "Core Team Head",
      committee: "CCSC",
      image: "",
      fallbackImage: "",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      name: "SHAMBHAVI SINGH",
      role: "CORE TEAM MEMBER ",
      committee: "CEC",
      image: "",
      fallbackImage: "",
      linkedin: "https://linkedin.com"
    },
    {
      name: "SAKSHI NIRALA ",
      role:" CORE TEAM MEMBER ",
      committee: "SOP",
      image: "",
      fallbackImage: "",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
    
  ],

  sponsors: {
    platinum: [
      {
        name: "Chouksey Group of Colleges",
        category: "Institutional Patron",
        logoText: "CHOUKSEY GROUP of COLLEGES",
        subtext: "Center of Excellence & Innovation",
        website: "https://"
      },
      
    ],
    gold: [
      {
        name: "",
        category: "",
        logoText: "",
        subtext: "",
        website: "https://example.com"
      },
      
    ],
    associate: [
     
      { name:"SAMPLE", category: "SAMPLE" }
    ]
  },

  ticketTiers: [
    {
      id: "student",
      name: "Student Pass",
      price: 499,
      currency: "₹",
      badge: "Valid ID Required",
      popular: false,
      description: "Specially subsidized tier for currently enrolled college & high-school students.",
      features: [
        "Full day access to all 12+ live speaker talks",
        "Official TEDxChoukseyGroupofColleges attendee welcome kit",
        "Networking lunch & refreshments included",
        "Access to digital certificates & speaker sessions replay",
        "Auditorium tier seating"
      ]
    },
    {
      id: "general",
      name: "General Delegate",
      price: 999,
      currency: "₹",
      badge: "Most Popular",
      popular: true,
      description: "Designed for professionals, academics, innovators, and lifelong learners.",
      features: [
        "Full day access to all live speaker talks & performances",
        "Premium TEDxChoukseyGroupofColleges Delegate Swag Box",
        "Buffet lunch with speakers & tea-break networking access",
        "Priority entry during auditorium seating",
        "Official verified Certificate of Participation",
        "Access to the Interactive Innovation Pavilions"
      ]
    },
    {
      id: "vip",
      name: "Patron / VIP Pass",
      price: 1999,
      currency: "₹",
      badge: "Limited Seats",
      popular: false,
      description: "Exclusive patron experience with reserved seating and speaker lounge access.",
      features: [
        "Reserved Front-Row seating inside the Grand Auditorium",
        "Exclusive access to the Private Speaker & VIP Green Room",
        "Invitation to the Post-Event Speaker Dinner Gala",
        "Collector's Edition TEDxChoukseyGroupofColleges Hardcover Notebook & Merch",
        "Dedicated VIP Fast-Track registration desk",
        "Lifetime digital alumni network pass"
      ]
    }
  ],

  faqs: [
    {
      question: "What is TEDx and how does TEDxChoukseyGroupofColleges work?",
      answer: "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDxChoukseyGroupofColleges is operated independently under a free license granted by TED, following the strict standards, curation guidelines, and format established by TED Conferences."
    },
    {
      question: "Where and when is TEDxChoukseyGroupofColleges being held?",
      answer: "TEDxChoukseyGroupofColleges takes place on Saturday, March 28, 2026, starting promptly at 09:30 AM at the Grand Auditorium, Chouksey Engineering College, Masturi Road, Bilaspur, Chhattisgarh."
    },
    {
      question: "What is included with my ticket?",
      answer: "Every ticket tier includes full-day access to all speaker talks, live artistic performances, lunch, tea refreshments, and an official attendee kit. VIP passes additionally include reserved seating and access to the evening Speaker Gala."
    },
    {
      question: "Are student tickets subject to verification?",
      answer: "Yes, attendees holding Student Passes must present a valid institution ID card (school or university) at the registration desk on the morning of the event."
    },
    {
      question: "Will the talks be published online?",
      answer: "Yes! All talks will be professionally recorded in high definition and submitted to the official TEDx YouTube channel (over 40M subscribers) following post-production and TED approval."
    },
    {
      question: "Can I swap my photo and details if I am on the team?",
      answer: "Absolutely! The entire website is built with a modular architecture. You can drop your portrait into `/public/images/team/` or update `src/data/eventData.js` to change names, bios, and links instantly."
    }
  ],

  disclaimer: "This independent TEDx event is operated under license from TED. Copyright © 2026 TEDxChoukseyGroupofColleges. All rights reserved. TEDx is an independently organized event under license from TED Conferences, LLC."
};
