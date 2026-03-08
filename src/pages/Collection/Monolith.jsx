// src/components/collection/Monolith.jsx
import { useState } from "react";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";
import collectionData from "../../data/collection.json";

const Monolith = ({ setActiveCity }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const { cities } = collectionData;

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.architect.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.style.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCities = filteredCities.slice(0, visibleCount);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#EBE9E4] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #2C2C2C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-12 sm:space-y-14 md:space-y-16">
        {/* Header */}
        <div className="text-center px-2 sm:px-4">
          <span className="font-public-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] text-[#B5A27A] uppercase block mb-3 sm:mb-4">
            Global Portfolio
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-3 sm:mb-4 px-2">
            Twelve Cities, <span className="italic text-[#B5A27A]">One Standard</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#B5A27A]/40 mx-auto" />
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto w-full px-2 sm:px-4">
          <div className="relative">
            <FiSearch className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#B5A27A]/40 text-sm sm:text-base" />
            <input
              type="text"
              placeholder="Search by city, architect or style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-4 sm:py-5 bg-white border border-[#B5A27A]/20 focus:border-[#B5A27A] outline-none text-sm sm:text-base text-[#2C2C2C] placeholder:text-[#2C2C2C]/30"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 px-2 sm:px-0">
          {displayedCities.map((city, index) => (
            <div
              key={city.id}
              onClick={() => setActiveCity(city.id)}
              className="group cursor-pointer"
            >
              <div className="relative h-[300px] sm:h-[340px] md:h-[360px] lg:h-[380px] overflow-hidden mb-4 sm:mb-5">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 sm:top-4 md:top-5 left-3 sm:left-4 md:left-5 bg-white/95 px-3 sm:px-4 py-1.5 sm:py-2">
                  <span className="text-[#B5A27A] text-xs sm:text-sm font-medium">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* City Info */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-3 sm:left-4 md:left-5 text-white right-3 sm:right-4 md:right-5">
                  <h3 className="font-cormorant text-2xl sm:text-3xl mb-1 sm:mb-2">{city.name}</h3>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/70 flex-wrap">
                    <span>{city.architect}</span>
                    <span className="w-1 h-1 bg-[#B5A27A] rounded-full flex-shrink-0" />
                    <span>{city.year}</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-4 md:right-5 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#B5A27A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FiArrowUpRight className="text-white text-base sm:text-lg md:text-xl" />
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-[#2C2C2C]/50 leading-relaxed line-clamp-2 px-1">
                {city.description}
              </p>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredCities.length && (
          <div className="text-center pt-6 sm:pt-7 md:pt-8 px-4">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 border border-[#B5A27A]/30 text-[#2C2C2C] text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-[#B5A27A] hover:text-white transition-all duration-500"
            >
              View More
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredCities.length === 0 && (
          <div className="text-center py-16 sm:py-20 mx-4 sm:mx-6 border border-[#B5A27A]/10 bg-white/30">
            <p className="text-[#2C2C2C]/40 text-base sm:text-lg">No monoliths found.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 sm:mt-4 text-[#B5A27A] text-xs sm:text-sm tracking-wider border-b border-[#B5A27A]/30 pb-1"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Monolith;