import React from 'react';
import { Instagram } from 'lucide-react';
import { graduationConfig } from '../config/graduation';
import graduatePhoto from '../asset/foto/foto4.jpg'; // Using existing asset as placeholder

const ProfileCard: React.FC<{
    name: string;
    degree: string;
    university: string;
    faculty: string;
    father: string;
    mother: string;
    image: string;
    delay: number;
    instagram: string;
    batch: string;
}> = ({ name, degree, university, faculty, father, mother, image, delay, instagram, batch }) => (
    <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="relative flex flex-col items-center text-center text-[#1a202c] space-y-6"
    >
        {/* Circular Image with Gold Border */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-[#D4C3A3] to-[#E6D5B8] shadow-xl mb-2">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Name & Details */}
        <div>
            <h3 className="font-playfair text-3xl md:text-3xl mb-2 text-[#1a202c] drop-shadow-sm" data-aos="fade-up">{name}</h3>
            <p className="text-lg md:text-xl text-[#1a202c] font-bold mb-1" data-aos="fade-up" data-aos-delay="100">{degree}</p>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-2" data-aos="fade-up" data-aos-delay="200">{faculty}<br />{university}</p>
            <p className="text-sm md:text-base text-gray-600 font-bold tracking-widest uppercase mb-4" data-aos="fade-up" data-aos-delay="300">{batch}</p>

            <div className="flex justify-center gap-4 mb-6" data-aos="fade-up" data-aos-delay="400">
                <a
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#D4C3A3] transition-colors duration-300"
                >
                    <Instagram size={20} />
                    <span className="text-sm font-medium">@{instagram}</span>
                </a>
            </div>

            <div className="w-24 h-1 bg-[#D4C3A3] mx-auto mb-4 rounded-full" data-aos="zoom-in" data-aos-delay="500"></div>
        </div>
    </div>
);

export const GraduateProfile: React.FC = () => {
    return (
        <section className="pb-4 pt-0 px-2 bg-white relative overflow-hidden text-[#1a202c]">

            <div className="max-w-4xl mx-auto relative z-10 text-center">

                {/* Header Text */}
                <div className="mb-12" data-aos="fade-down">
                    {/* <h2 className="font-script text-3xl md:text-4xl text-[#1a202c] mb-6">Assalamu'alaikum Wr. Wb.</h2> */}
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                        Dengan penuh rasa syukur, saya mengundang Anda untuk hadir di acara wisuda saya yang istimewa.
                    </p>
                </div>

                {/* Profile */}
                <div className="flex flex-col justify-center items-center gap-12">

                    <ProfileCard
                        name={graduationConfig.graduateFullName}
                        degree={graduationConfig.degree}
                        university={graduationConfig.university}
                        faculty={graduationConfig.faculty}
                        father={graduationConfig.parents.father}
                        mother={graduationConfig.parents.mother}
                        image={graduatePhoto}
                        delay={0}
                        instagram={graduationConfig.instagram}
                        batch={graduationConfig.batch}
                    />

                </div>

            </div>

            {/* Multi-layer Wave Transition (Dark Navy) */}
            {/* <div className="absolute bottom-0 left-0 w-full leading-none z-20">
                <svg className="relative block w-full h-[100px] md:h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#1a202c" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#1a202c" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#1a202c" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div> */}
        </section>
    );
};
