import React, { useState } from 'react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { graduationConfig } from '../config/graduation';

interface BankAccount {
  bank: string;
  number: string;
  name: string;
  logoText: string;
}

export const Gift: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const accounts: BankAccount[] = graduationConfig.bankAccounts;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section className="py-20 pt-0 px-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -left-10 top-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-10 bottom-20 w-64 h-64 bg-earth/5 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div data-aos="fade-up">
          <GiftIcon className="w-12 h-12 text-[#1a202c] mx-auto mb-4" />
          <h2 className="font-script text-3xl text-[#1a202c] mb-6">Graduation Gift</h2>
          <p className="text-gray-600 mb-10 leading-relaxed font-light">
            Doa restu Anda merupakan karunia yang sangat berarti bagi saya.
            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>
        </div>

        <div className="grid gap-8">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className="bg-[#1a202c] p-8 rounded-[3rem] shadow-2xl border-4 border-white ring-1 ring-gray-200 flex flex-col items-center transform transition-transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 w-full flex justify-center">
                <span className="font-bold text-2xl text-[#D4C3A3] italic border-b border-[#D4C3A3]/30 pb-1 tracking-wider w-1/2 text-center">
                  {acc.logoText}
                </span>
              </div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">No. Rekening</p>
              <p className="text-xl font-semibold text-white mb-1 select-all tracking-wider">{acc.number}</p>
              <p className="text-sm text-gray-300 mb-8">a.n {acc.name}</p>

              <button
                onClick={() => handleCopy(acc.number, idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 w-full justify-center ${copiedIndex === idx
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-[#1a202c] hover:bg-gray-200'
                  }`}
              >
                {copiedIndex === idx ? (
                  <>
                    <Check size={16} />
                    Berhasil
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Salin Nomor
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[-1px] left-0 w-full leading-none z-20 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#1a202c" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#1a202c" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fill="#1a202c" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>        {/* <div className="mt-12 bg-[#1a202c] p-10 rounded-[3rem] border-4 border-white ring-1 ring-gray-200 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-display italic text-2xl text-[#D4C3A3] mb-4">Alamat Pengiriman Kado</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {graduationConfig.giftAddress}
          </p>
        </div> */}
      </div>


    </section>
  );
};