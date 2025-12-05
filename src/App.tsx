import React, { useState, useEffect, useRef } from 'react';
import { Cover } from './components/Cover';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { GraduateProfile } from './components/GraduateProfile';

import { EventDetails } from './components/EventDetails';
import { Gallery } from './components/Gallery';
import { Gift } from './components/Gift';
import { RSVP } from './components/RSVP';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { MusicPlayer, MusicPlayerHandle } from './components/MusicPlayer';
import { GuestManager } from './components/GuestManager';

const App: React.FC = () => {
  const [isInvitationOpened, setIsInvitationOpened] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('Tamu Undangan');
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  const musicPlayerRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    // Initialize AOS (Standard Native Implementation)
    // Since we are using native window scrolling, AOS works out of the box!
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: false,
        mirror: false,
        offset: 50,
      });
    }

    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    const admin = params.get('admin');

    if (to) {
      setGuestName(to);
    }

    if (admin === 'true') {
      setShowAdmin(true);
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Attempt to play music on user interaction
    if (musicPlayerRef.current) {
      musicPlayerRef.current.playMusic();
    }
  };

  // Tampilkan halaman admin jika parameter admin=true
  if (showAdmin) {
    return <GuestManager />;
  }

  return (
    // Outer container: Handles the dark background on desktop
    <div className="min-h-screen w-full bg-gray-900 flex justify-center">

      {/* Inner container: The "Phone" view */}
      {/* We allow the WINDOW to scroll, so no overflow-y-auto here. */}
      {/* min-h-screen ensures it fills the height. max-w-[430px] restricts width. */}
      <div className="relative w-full max-w-[430px] min-h-screen bg-cream font-body text-gray-700 selection:bg-sage selection:text-cream shadow-2xl">

        {/* Music Player - Fixed relative to viewport, but centered */}
        {/* We use a wrapper to position it correctly inside the "phone" area */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[100] pointer-events-none">
          <div className="absolute bottom-4 left-4 pointer-events-auto">
            <MusicPlayer ref={musicPlayerRef} isVisible={isInvitationOpened} />
          </div>
        </div>

        {/* Lock Screen / Cover - Fixed relative to viewport */}
        <div
          className={`fixed inset-0 z-50 transition-transform duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isInvitationOpened ? '-translate-y-full' : 'translate-y-0'
            } flex justify-center pointer-events-none`}
        >
          {/* Inner Cover Container - Centered and constrained width */}
          <div className="relative w-full max-w-[430px] h-full pointer-events-auto">
            <Cover guestName={guestName} onOpen={handleOpenInvitation} musicPlayerRef={musicPlayerRef} />
          </div>
        </div>

        {/* Main Content - Flows naturally with the document */}
        <main className={`transition-opacity duration-700 delay-200 ${isInvitationOpened ? 'opacity-100' : 'opacity-0'}`}>
          <div className="overflow-hidden bg-cream">
            <Hero />
            <Quote />
            <GraduateProfile />
            {/* <MyJourney /> */}
            <EventDetails />
            {/* <Gallery /> */}
            <Gift />
            <RSVP />
            <Closing />
            <Footer />
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;