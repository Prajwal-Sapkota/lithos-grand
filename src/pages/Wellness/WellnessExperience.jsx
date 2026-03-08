import { useRef, useEffect, useState } from "react";
import {
  FiClock,
  FiArrowUpRight,
  FiDroplet,
  FiThermometer,
  FiWind,
  FiHeart,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import wellnessData from "../../data/wellness.json";

const WellnessExperience = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { treatments, facilities } = wellnessData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getFacilityIcon = (name) => {
    if (name.includes("Steam")) return <FiDroplet />;
    if (name.includes("Cryo")) return <FiThermometer />;
    if (name.includes("Float")) return <FiWind />;
    return <FiHeart />;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-300px] left-[-200px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-[#B5A27A]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] lg:blur-[200px]" />
        <div className="absolute bottom-[-300px] right-[-200px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-[#2C2C2C]/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] lg:blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">

        {/* Treatments Header */}
        <div className="relative py-8 sm:py-10 md:py-12">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A]">
              Signature Collection
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 sm:pt-5 md:pt-6 lg:pt-8 text-[#2C2C2C] leading-tight">
              Transformative
              <span className="italic text-[#B5A27A] pl-2">
                Treatments
              </span>
            </h2>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32">

          {treatments.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 items-center group cursor-pointer"
              onClick={() => navigate(`/wellness/${item.id}`)}
            >
              {/* IMAGE */}
              <div
                className={`w-full ${
                  index % 2 === 0
                    ? "lg:col-span-7"
                    : "lg:col-span-5 lg:order-2"
                }`}
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden shadow-[0_60px_140px_rgba(0,0,0,0.12)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-10 border border-[#B5A27A]/40" />
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`w-full ${
                  index % 2 === 0
                    ? "lg:col-span-5"
                    : "lg:col-span-7 lg:order-1"
                }`}
              >
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#B5A27A]">
                  {item.category}
                </span>

                <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-[#2C2C2C] group-hover:text-[#B5A27A] transition-colors">
                  {item.name}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-[#2C2C2C]/60 mt-4 sm:mt-5 md:mt-6 lg:mt-8 leading-relaxed max-w-xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/40">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FiClock className="text-sm sm:text-base" />
                    {item.duration}
                  </div>
                  <div>{item.price}</div>
                </div>

                <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 flex items-center gap-2 sm:gap-3 text-[#B5A27A]">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase">
                    Explore Experience
                  </span>
                  <FiArrowUpRight className="text-sm sm:text-base" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#B5A27A]/40 to-transparent my-16 sm:my-20 md:my-24 lg:my-28 xl:my-32" />

        {/* Facilities Header */}
        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A]">
              Private Spaces
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-[#2C2C2C] leading-[1.1]">
              Wellness
              <span className="italic text-[#B5A27A] pl-2 sm:pl-3">
                Facilities
              </span>
            </h2>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="pb-12 sm:pb-14 md:pb-16 lg:pb-18 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">

          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] group overflow-hidden"
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 xl:bottom-12 left-4 sm:left-5 md:left-6 lg:left-8 xl:left-12 text-white max-w-sm right-4 sm:right-auto">
                <div className="text-[#B5A27A] text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {getFacilityIcon(facility.name)}
                </div>

                <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4">
                  {facility.name}
                </h3>

                <p className="text-white/70 text-xs sm:text-sm">
                  {facility.description}
                </p>
              </div>

              <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 xl:inset-8 border border-white/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessExperience;