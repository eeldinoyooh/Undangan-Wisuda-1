import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-sage-dark">
      {/* Turut Mengundang Section */}


      {/* Copyright */}
      <div className="bg-[#1a202c] text-white py-6 text-center">
        <p className="text-sm flex items-center justify-center gap-1">
          Created with <Heart size={14} className="text-red-400 fill-current" /> by
          <span className="font-semibold">dnzdigital.com</span>
        </p>
      </div>
    </footer>
  );
};