import React from 'react';
import { Book, Briefcase, PenTool, GraduationCap } from 'lucide-react';
import { graduationConfig } from '../config/graduation';
import foto6 from '../asset/foto/foto6.jpg';
import foto7 from '../asset/foto/foto7.jpg';
import foto8 from '../asset/foto/foto8.jpg';
import foto9 from '../asset/foto/foto9.jpg';

// Icon mapping for journey items
const iconMap: Record<string, React.ReactElement> = {
    book: <Book className="w-5 h-5" />,
    briefcase: <Briefcase className="w-5 h-5" />,
    pen: <PenTool className="w-5 h-5" />,
    "graduation-cap": <GraduationCap className="w-5 h-5" />
};

// Image mapping for stories
const storyImages = [foto6, foto7, foto8, foto9];

// Create stories array from config with images
const stories = graduationConfig.myJourney.map((story, idx) => ({
    ...story,
    image: storyImages[idx] || foto6
}));

export const MyJourney: React.FC = () => {
    return (
        <section className="py-12 px-4 bg-[#1a202c] overflow-hidden relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title Section */}
                <div className="text-center mb-12 relative" data-aos="fade-up">
                    <h2 className="font-script text-4xl text-[#E6D5B8] mb-4">My Journey</h2>

                    {/* Icon with horizontal lines */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="h-[1px] w-12 bg-[#E6D5B8]/40"></div>
                        <div className="bg-[#1a202c] p-1.5">
                            <GraduationCap className="w-4 h-4 text-[#E6D5B8] fill-[#E6D5B8]" />
                        </div>
                        <div className="h-[1px] w-12 bg-[#E6D5B8]/40"></div>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 h-full w-[2px] bg-white/10"></div>

                    {stories.map((story, idx) => (
                        <div
                            key={idx}
                            className="relative mb-12 flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute left-4 transform -translate-x-1/2 z-20 bg-[#1a202c] p-2">
                                <div className="w-4 h-4 rounded-full bg-[#E6D5B8] ring-4 ring-[#1a202c]"></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full pl-12">
                                {/* Image */}
                                <div className="mb-4 rounded-xl overflow-hidden shadow-md border border-white/10">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-56 object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Text Card */}
                                <div className="bg-[#2d3748] p-6 rounded-2xl border border-gray-700 shadow-xl relative group hover:-translate-y-1 transition-transform duration-300">
                                    {/* Arrow */}
                                    <div className="absolute top-6 -left-2 w-4 h-4 bg-[#2d3748] transform rotate-45 border-l border-b border-gray-700"></div>

                                    <span className="inline-block px-3 py-1 bg-[#E6D5B8] text-[#1a202c] text-sm font-bold rounded-full mb-3">
                                        {story.year}
                                    </span>

                                    {/* Title with optional dot */}
                                    <h4 className="font-display text-xl font-bold text-[#E6D5B8] mb-3 mt-1 pr-20">
                                        {idx === 1 && <span className="inline-block w-2 h-2 bg-[#E6D5B8] rounded-full mr-2 align-middle"></span>}
                                        {story.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed font-body">
                                        {story.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wave Transition to EventDetails (White) */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-20">
                <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#ffffff" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#ffffff" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};
