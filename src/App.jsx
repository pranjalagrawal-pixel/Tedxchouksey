import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';
import TicketModal from './components/TicketModal';
import WaterRippleCursor from './components/WaterRippleCursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [waterEffectEnabled, setWaterEffectEnabled] = useState(true);

  useEffect(() => {
    // Brief branded intro while the React experience mounts.
    const timer = window.setTimeout(() => setIsLoading(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  const toggleWaterEffect = () => {
    setWaterEffectEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-ted-black text-white relative selection:bg-ted-red selection:text-white">
      {/* Interactive GPU Water Ripple Cursor Layer */}
      <WaterRippleCursor enabled={waterEffectEnabled} />

      {/* Sticky Glassmorphism Header */}
      <Navbar
        onOpenTicketModal={() => setTicketModalOpen(true)}
        waterEffectEnabled={waterEffectEnabled}
        onToggleWaterEffect={toggleWaterEffect}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with Acoustic Wave Canvas & Countdown */}
        <Hero onOpenTicketModal={() => setTicketModalOpen(true)} />

        {/* 2. About TED, TEDx & The Resonance Theme */}
        <About />

        {/* 3. Speakers Lineup with Bio Modals */}
        <Speakers />

        {/* 4. Interactive Schedule & Vertical Timeline */}
        <Schedule />

        {/* 5. Past Highlights & Lightbox Photo Gallery */}
        <Gallery />

        {/* 6. Sponsors & Patrons */}
        <Sponsors />

        {/* 7. Organizing Committee Team */}
        <Team />

        {/* 8. Frequently Asked Questions */}
        <Faq />
      </main>

      {/* 9. Footer with Venue Map & Legal Disclaimer */}
      <Footer />

      {/* Interactive Pass Booking Modal */}
      <TicketModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
      />
    </div>
  );
}
