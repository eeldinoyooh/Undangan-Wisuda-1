import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { graduationConfig } from '../config/graduation';
import foto1 from '../asset/foto/foto4.jpg';
import foto2 from '../asset/foto/foto4.jpeg';
import foto3 from '../asset/foto/foto1.jpeg';
import foto4 from '../asset/foto/foto5.jpeg';
import foto5 from '../asset/foto/foto6.jpeg';


const slides = [
  foto1, foto2, foto3, foto4, foto5
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Countdown Logic
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(graduationConfig.graduationDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveDate = () => {
    const target = document.getElementById('event-details');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayDate = new Date(graduationConfig.graduationDate).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">

      {/* Top Section: Image Slideshow (60% height) */}
      <div className="relative h-[60vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Wave Divider at Bottom of Image */}
        <div className="absolute bottom-0 left-0 w-full z-10 translate-y-1">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Bottom Section: Content */}
      <div className="relative flex-1 flex flex-col items-center justify-start pt-4 pb-32 px-6 text-center z-20">



        <p className="font-display text-[#1a202c] tracking-[0.2em] text-sm font-bold uppercase mb-2">
          THE GRADUATION OF
        </p>

        <h1 className="font-script text-3xl md:text-4xl text-[#1a202c] mb-8 leading-relaxed">
          {graduationConfig.graduateName}
        </h1>

        {/* Countdown Boxes */}
        <div className="flex justify-center gap-3 mb-6 relative z-10">
          {[
            { value: timeLeft.days, label: 'Hari' },
            { value: timeLeft.hours, label: 'Jam' },
            { value: timeLeft.minutes, label: 'Menit' },
            { value: timeLeft.seconds, label: 'Detik' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center bg-[#E6D5B8] text-[#4A3B2A] w-16 h-16 rounded-xl shadow-sm">
              <span className="text-xl font-bold leading-none">{item.value}</span>
              <span className="text-[10px] uppercase mt-1">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-[#1a202c] font-medium text-lg mb-8 relative z-10">
          {displayDate}
        </p>

        <button
          onClick={handleSaveDate}
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4C3A3] text-[#4A3B2A] rounded-full font-display italic text-lg shadow-md hover:bg-[#c4b393] transition-all active:scale-95 relative z-10"
        >
          <Calendar size={18} />
          <span>Save The Date</span>
        </button>

      </div>

      {/* Wave Transition to Quote Section */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#1a202c" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};