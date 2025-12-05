import React, { useState, useEffect } from 'react';
import { MailOpen } from 'lucide-react';
import { graduationConfig } from '../config/graduation';
import { MusicPlayerHandle } from './MusicPlayer';
import foto1 from '../asset/foto/foto2.jpeg';
import floralCorner from '../asset/decoration/floral_corner.png';
import floralBottom from '../asset/decoration/floral_bottom.png';

interface CoverProps {
  guestName: string;
  onOpen: () => void;
  musicPlayerRef: React.RefObject<MusicPlayerHandle>;
}

export const Cover: React.FC<CoverProps> = ({ guestName, onOpen, musicPlayerRef }) => {
  // Coba putar musik saat cover ditampilkan
  useEffect(() => {
    const timers = [
      setTimeout(() => musicPlayerRef.current?.playMusic(), 500),
      setTimeout(() => musicPlayerRef.current?.playMusic(), 1500),
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [musicPlayerRef]);

  // Coba putar musik saat user berinteraksi
  useEffect(() => {
    const handleUserInteraction = () => {
      musicPlayerRef.current?.playMusic();
    };
    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [musicPlayerRef]);

  return (
    <div className="h-full w-full relative flex flex-col items-center overflow-hidden bg-[#1a202c] text-white">

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full max-w-md mx-auto py-6 px-6 gap-2">

        {/* Top Section: Couple Photo */}
        <div className="w-full flex justify-center">
          <div className="relative w-64 h-80 rounded-t-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img
              src={foto1}
              alt="Graduate"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for better text visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a202c] via-transparent to-transparent opacity-80"></div>
          </div>
        </div>

        {/* Middle Section: Title & Names */}
        <div className="text-center relative z-30 mt-2">
          <p className="text-[10px] tracking-[0.1em] text-gray-300 font-serif mb-2">
            We Invited You To
          </p>
          <p className="font-serif text-[15px] tracking-[0.3em] text-gray-300 uppercase mb-1 drop-shadow-md">
            GRADUATION PARTY
          </p>

          <h1 className="font-script text-3xl text-white drop-shadow-lg leading-relaxed mb-2">
            {graduationConfig.graduateName}
          </h1>
        </div>

        {/* Bottom Section: Guest Info & Button */}
        <div className="text-center w-full relative z-30">
          <p className="text-[10px] text-gray-300 font-serif mb-2">
            Kepada
          </p>

          <h3 className="font-body text-lg font-bold text-white mb-4 capitalize tracking-wide">
            {guestName}
          </h3>

          <button
            onClick={onOpen}
            className="bg-white text-[#1a202c] font-medium text-xs py-2 px-6 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-gray-100 transition-all duration-300 shadow-lg active:scale-95"
          >
            <MailOpen size={14} />
            <span>Buka Undangan</span>
          </button>
        </div>

      </div>

    </div>
  );
};