import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import foto1 from '../asset/foto/foto1.jpg';
import foto2 from '../asset/foto/foto2.jpg';
import foto3 from '../asset/foto/foto3.jpg';
import foto4 from '../asset/foto/foto4.jpg';
import foto5 from '../asset/foto/foto5.jpg';
import foto6 from '../asset/foto/foto6.jpg';
import foto7 from '../asset/foto/foto7.jpg';
import foto8 from '../asset/foto/foto8.jpg';
import foto9 from '../asset/foto/foto9.jpg';
import foto10 from '../asset/foto/foto10.jpg';

// Daftar 10 foto dari folder lokal
const photos = [
  foto1, foto2, foto3, foto4, foto5,
  foto6, foto7, foto8, foto9, foto10
];

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? photos.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev === photos.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, handlePrev, handleNext]);

  return (
    <section className="py-24 px-4 bg-[#1a202c] relative border-t border-white/5">

      {/* Wave Transition from EventDetails (White) to Gallery (Dark) */}
      <div className="absolute top-0 left-0 w-full leading-none z-20 transform -translate-y-full">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1a202c" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#1a202c" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#1a202c" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <h2 className="font-script text-4xl md:text-5xl text-[#E6D5B8] mb-4">My Gallery</h2>
        <div className="h-[2px] w-20 bg-[#E6D5B8]/50 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 italic max-w-xl mx-auto font-light">
          Setiap foto menceritakan perjalanan yang tak terlupakan. Inilah momen-momen terbaik saya.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Grid Layout for Tidy Bottom */}
        <div className="grid grid-cols-2 gap-4">
          {photos.map((src, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-[#2d3748] border border-white/10 aspect-[3/4] cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => setSelectedIndex(idx)}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#1a202c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 backdrop-blur-sm">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#E6D5B8] border border-[#E6D5B8] px-4 py-1 rounded-full text-xs tracking-widest uppercase font-bold bg-[#1a202c]">
                    View
                  </span>
                </div>
              </div>

              <img
                src={src}
                alt={`Wedding Moment ${idx + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out block filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 text-white/70 text-sm md:text-base z-50">
            {selectedIndex + 1} / {photos.length}
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full hover:bg-black/40"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/20 rounded-full hover:bg-black/40"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Wave Transition to Gift Section (White) */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[1px]">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#ffffff" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};