import React from 'react';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 pt-0 px-6 relative overflow-hidden bg-[#1a202c] text-white">
      {/* Background Texture */}




      <div className="max-w-2xl mx-auto text-center relative z-10" data-aos="zoom-in">
        {/* <h3 className="font-script text-4xl text-white mb-8 drop-shadow-sm tracking-wider">Al-Mujadilah: 11</h3> */}

        <div className="">
          <p className="text-gray-300 font-body text-m leading-loose italic font-light">
            "Langit tak selalu cerah, jalanku pun tak selalu mudah.
            Namun hari ini, aku tiba di fase ini, bukan karena aku kuat—tapi karena aku tak berhenti melangkah.
            Hari ini, aku tak hanya lulus melainkan semakin bertumbuh.
            Singkat saja, akhirnya aku sampai juga 🎓🤍"
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4 opacity-60">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="w-2 h-2 bg-white rotate-45"></div>
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      {/* Multi-layer Wave Transition to BrideGroom (White) */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg className="relative block w-full h-[100px] md:h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#ffffff" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};