import React from 'react';
import { ArrowRight } from 'lucide-react';
import { graduationConfig } from '../config/graduation';

export const EventDetails: React.FC = () => {
  return (
    <section id="event-details" className="py-10 pt-0 px-2 bg-white relative overflow-hidden">

      <div className="max-w-4xl mx-auto relative z-10">
        {/* <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#D4C3A3] tracking-[0.3em] uppercase text-sm font-semibold">Graduation Event</span>
          <h2 className="font-script text-4xl text-[#1a202c] mt-3">Graduation Event</h2>
        </div> */}

        <div className="flex flex-col ">
          {graduationConfig.eventDetails.slice(0, 1).map((event, idx) => {
            return (
              <div
                key={idx}
                className="w-full bg-[#1a202c] p-10 rounded-[3rem] shadow-2xl relative text-center border-4 border-white ring-1 ring-gray-200"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="font-display italic text-3xl text-[#D4C3A3] mb-6">{event.title}</h3>

                <div className="space-y-6 flex flex-col items-center">

                  {/* Date */}
                  <div>
                    <h4 className="font-bold text-white text-[14px] mb-1">{event.date}</h4>
                  </div>

                  {/* Time */}
                  <div>
                    <h4 className="font-medium text-white text-[14px]">{event.time}</h4>
                    {event.timeNote && <p className="text-[14px] text-gray-400 mt-1">{event.timeNote}</p>}
                  </div>

                  {/* Location */}
                  <div className="max-w-md mx-auto">
                    <h4 className="font-medium text-white text-[14px] leading-relaxed">
                      {event.location} <br />
                      <span className="text-[12px] text-gray-300">{event.address}</span>
                    </h4>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Map Button */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href={graduationConfig.eventDetails[0]?.mapsUrl || "https://maps.google.com"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a202c] text-white text-sm rounded-full hover:bg-[#2d3748] transition-all duration-300 font-medium tracking-wide group shadow-lg"
          >
            Lihat Lokasi via Google Maps
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};