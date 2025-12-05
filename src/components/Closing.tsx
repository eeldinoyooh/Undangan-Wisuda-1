import React from 'react';
import { graduationConfig } from '../config/graduation';
import foto1 from '../asset/foto/foto1.jpeg';

export const Closing: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-[#1a202c] relative overflow-hidden min-h-screen flex flex-col justify-center items-center">



            <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
                {/* Circular Photo */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#E6D5B8] p-2 mb-12 shadow-2xl relative" data-aos="zoom-in">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#E6D5B8]/50">
                        <img
                            src={foto1}
                            alt="Graduate"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Closing Message */}
                <div className="space-y-6 mb-12" data-aos="fade-up">
                    <p className="text-white text-sm md:text-base leading-relaxed font-light px-6">
                        Merupakan suatu kehormatan dan kebahagiaan bagi saya, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, saya mengucapkan terima kasih.
                    </p>
                    {/* Graduate Name */}
                    {/* <h2 className="font-script text-3xl md:text-4xl text-[#E6D5B8] mb-8" data-aos="fade-up" data-aos-delay="200">
                        {graduationConfig.graduateName}
                    </h2> */}
                    <h3 className="font-script text-sm md:text-base text-[#E6D5B8] mt-8">
                        Terima kasih
                    </h3>
                </div>


            </div>

        </section>
    );
};
