import { useRef, useEffect, useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const Locations = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const locations = [
    {
      city: "New York",
      address: "425 Park Avenue, New York, NY 10022",
      phone: "+1 (212) 555-0123",
      email: "nyc@lithosgrand.com",
      hours: "24 hours",
    },
    {
      city: "London",
      address: "45 Berkeley Square, Mayfair, London W1J 5ER",
      phone: "+44 (0)20 7946 0123",
      email: "london@lithosgrand.com",
      hours: "24 hours",
    },
    {
      city: "Zurich",
      address: "Bahnhofstrasse 72, 8001 Zurich",
      phone: "+41 (0)44 123 45 67",
      email: "zurich@lithosgrand.com",
      hours: "24 hours",
    },
    {
      city: "Dubai",
      address: "Burj Khalifa, Level 122, Dubai",
      phone: "+971 4 123 4567",
      email: "dubai@lithosgrand.com",
      hours: "24 hours",
    },
    {
      city: "Singapore",
      address: "2 Marina Boulevard, #48-01, Singapore 018987",
      phone: "+65 1234 5678",
      email: "singapore@lithosgrand.com",
      hours: "24 hours",
    },
    {
      city: "Tokyo",
      address: "1-1-1 Otemachi, Chiyoda City, Tokyo 100-0004",
      phone: "+81 3 1234 5678",
      email: "tokyo@lithosgrand.com",
      hours: "24 hours",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-18 sm:py-20 md:py-22 lg:py-24  px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Glow - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="relative mb-16 sm:mb-18 md:mb-20 lg:mb-24 xl:mb-28 text-center px-4">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A]">
            International Presence
          </span>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8">
            Our Locations
          </h2>

          <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] mx-auto mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8" />
        </div>

        {/* Locations Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative group p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 bg-white/60 backdrop-blur-sm shadow-[0_40px_120px_rgba(0,0,0,0.06)] hover:shadow-[0_60px_160px_rgba(0,0,0,0.12)] transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Architectural Frame - Responsive positioning */}
              <div className="absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 w-full h-full border border-[#B5A27A]/30 pointer-events-none group-hover:-top-1 sm:group-hover:-top-2 group-hover:-left-1 sm:group-hover:-left-2 transition-all duration-700" />

              <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 group-hover:text-[#B5A27A] transition-colors duration-500">
                {location.city}
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-5 text-[#2C2C2C]/60 text-xs sm:text-sm leading-relaxed">

                <div className="flex items-start gap-2 sm:gap-3">
                  <FiMapPin className="text-[#B5A27A] mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>{location.address}</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FiPhone className="text-[#B5A27A] flex-shrink-0 text-sm sm:text-base" />
                  <span>{location.phone}</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FiMail className="text-[#B5A27A] flex-shrink-0 text-sm sm:text-base" />
                  <span className="break-all">{location.email}</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FiClock className="text-[#B5A27A] flex-shrink-0 text-sm sm:text-base" />
                  <span>{location.hours}</span>
                </div>

              </div>

              {/* Gold Divider */}
              <div className="w-10 sm:w-12 md:w-14 lg:w-16 h-[2px] bg-[#B5A27A]/40 mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 lg:group-hover:w-28 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;