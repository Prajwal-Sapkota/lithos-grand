// src/components/culinary/GlobalWineCellar.jsx
import { useRef, useEffect, useState } from "react";
import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaWineBottle } from "react-icons/fa";
import culinaryData from "../../data/culinary.json";

const Wine = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Paris");
  const { globalWineCellar } = culinaryData;

  // All cities
  const allLocations = globalWineCellar.byLocation;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeCityData =
    allLocations.find((c) => c.city === selectedCity) ||
    allLocations[0];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-14 md:mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-[#B5A27A]/60" />
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[#B5A27A] uppercase whitespace-nowrap">
              THE CELLAR
            </span>
            <div className="w-8 sm:w-10 md:w-12 h-[1px] bg-[#B5A27A]/60" />
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6">
            The Global <span className="italic text-[#B5A27A]">Wine Vault</span>
          </h2>
        </div>

        {/* Main 2-Column Layout - Perfect Height Match */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* LEFT - City Grid (All cities in 2 columns, full height) */}
          <div className="flex flex-col h-full">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[#B5A27A] uppercase block mb-3 sm:mb-4">
              Select City
            </span>
            
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 sm:gap-3 flex-1">
              {allLocations.map((loc) => (
                <button
                  key={loc.city}
                  onClick={() => setSelectedCity(loc.city)}
                  className={`text-left px-2 sm:px-3 md:px-4 py-2 sm:py-3 transition-all duration-300 ${
                    selectedCity === loc.city
                      ? 'bg-white shadow-md border-l-2 sm:border-l-3 border-[#B5A27A]'
                      : 'hover:bg-white/50'
                  }`}
                >
                  <span className={`text-[10px] sm:text-xs md:text-sm font-medium block ${
                    selectedCity === loc.city ? 'text-[#2C2C2C]' : 'text-[#2C2C2C]/50'
                  }`}>
                    {loc.city}
                  </span>
                  <p className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs mt-0.5 ${
                    selectedCity === loc.city ? 'text-[#B5A27A]' : 'text-[#2C2C2C]/30'
                  }`}>
                    {loc.bottles} bottles
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - Image + Details (Full height) */}
          <div className="flex flex-col h-full space-y-3 sm:space-y-4 mt-6 lg:mt-0">
            {/* Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 flex-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden shadow-xl">
                <img
                  src={activeCityData.image || globalWineCellar.image}
                  alt={`${activeCityData.city} Wine Cellar`}
                  className="w-full h-full object-cover"
                />
                
                {/* Simple Bronze Border */}
                <div className="absolute inset-0 border border-[#B5A27A]/30 pointer-events-none" />

                {/* City Badge */}
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-2 shadow-md">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FiMapPin className="text-[#B5A27A] text-[10px] sm:text-xs md:text-sm" />
                    <span className="font-cormorant text-xs sm:text-sm md:text-base text-[#2C2C2C]">{activeCityData.city}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div
              className={`bg-white border border-[#B5A27A]/10 p-4 sm:p-5 md:p-6 shadow-md transition-all duration-1000 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Specialty */}
              <div className="mb-3 sm:mb-4">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#B5A27A] uppercase block mb-0.5 sm:mb-1">
                  Specialty
                </span>
                <p className="font-cormorant text-sm sm:text-base text-[#2C2C2C]">
                  {activeCityData.specialty}
                </p>
              </div>

              {/* Stats - Horizontal */}
              <div className="flex gap-4 sm:gap-5 md:gap-6 mb-3 sm:mb-4 pt-2 sm:pt-3 border-t border-[#B5A27A]/10">
                <div>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#2C2C2C]/40 block">Bottles</span>
                  <span className="font-cormorant text-base sm:text-lg md:text-xl text-[#B5A27A]">{activeCityData.bottles}</span>
                </div>
                <div>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#2C2C2C]/40 block">Oldest</span>
                  <span className="font-cormorant text-base sm:text-lg md:text-xl text-[#B5A27A]">{activeCityData.oldest}</span>
                </div>
              </div>

              {/* Highlights */}
              {activeCityData.highlights && (
                <div>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#B5A27A] uppercase block mb-1 sm:mb-2">
                    Highlights
                  </span>
                  <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
                    {activeCityData.highlights.slice(0, 3).map((wine, index) => (
                      <span key={index} className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#2C2C2C]/60 bg-[#F8F6F2] px-2 sm:px-3 py-0.5 sm:py-1">
                        {wine}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wine;