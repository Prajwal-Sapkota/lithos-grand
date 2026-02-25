import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiMinus } from "react-icons/fi";

const Collection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cities = [
    { name: "PARIS", year: "1928", arch: "Perret", img: "/images/paris.jpg", coord: "48.8566° N" },
    { name: "LONDON", year: "2015", arch: "Chipperfield", img: "/images/london.webp", coord: "51.5074° N" },
    { name: "TOKYO", year: "2019", arch: "Ando", img: "/images/tokyo.jpg", coord: "35.6762° N" },
    { name: "DUBAI", year: "2022", arch: "Hadid", img: "/images/dubai.webp", coord: "25.2048° N" },
    { name: "NEW YORK", year: "2023", arch: "Viñoly", img: "/images/newyork.jpg", coord: "40.7128° N" },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col justify-center py-12 md:py-18 bg-[#EBE9E4] z-30"

    >
      {/* SOLID BACKGROUND LAYERS */}
      <div className="absolute inset-0" style={{ backgroundColor: '#EBE9E4', zIndex: 31 }} />
      <div className="absolute inset-0" style={{ backgroundColor: '#EBE9E4', zIndex: 32 }} />

      {/* MAIN CONTENT */}
      <div className="relative max-w-[1800px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-20" style={{ zIndex: 40 }}>

        {/* HEADER - 5-Star Corporate Luxury */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-24 border-b border-[#B5A27A]/20 pb-8 md:pb-12">
          <div className="w-full md:w-auto">
            {/* Elegant label with bronze accent */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#B5A27A]/40" />
              <span className="font-public-sans text-[9px] font-light tracking-[0.4em] text-[#B5A27A]/70 uppercase">
                Global Portfolio
              </span>
            </div>

            {/* Main title with refined hierarchy */}
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2C2C2C] leading-[0.95] tracking-tight">
              The <span className="text-[#B5A27A] italic font-light">World's</span> Finest
            </h2>

            {/* Subtle descriptor - visible on all screens */}
            <p className="font-public-sans text-[11px] text-[#2C2C2C]/30 tracking-[0.2em] uppercase mt-3 md:hidden">
              Twelve destinations
            </p>
          </div>

          
        </div>

        {/* MAIN GRID */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT: VERTICAL SELECTOR - Grid on mobile, vertical on desktop */}
          <div className="w-full lg:w-1/3">
            {/* Mobile: 2-column grid */}
            <div className="grid grid-cols-2 gap-3 lg:hidden mb-6">
              {cities.map((city, idx) => (
                <button
                  key={city.name}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group flex items-center justify-between py-3 px-3 border-b border-charcoal/5 text-left transition-all ${selectedIndex === idx ? 'bg-charcoal/5' : ''
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`font-public-sans text-[8px] ${selectedIndex === idx ? 'text-bronze' : 'text-charcoal/30'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-cormorant text-base sm:text-lg transition-all duration-500 ${selectedIndex === idx ? 'text-charcoal font-medium' : 'text-charcoal/30'
                      }`}>
                      {city.name}
                    </span>
                  </div>
                  {selectedIndex === idx && (
                    <FiMinus className="text-bronze text-sm" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden lg:block">
              {cities.map((city, idx) => (
                <button
                  key={city.name}
                  onClick={() => setSelectedIndex(idx)}
                  className="group flex items-center justify-between py-6 border-b border-charcoal/5 text-left w-full"
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-public-sans text-[10px] ${selectedIndex === idx ? 'text-bronze' : 'text-charcoal/30'
                      }`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-cormorant text-4xl md:text-5xl transition-all duration-500 ${selectedIndex === idx ? 'translate-x-4 text-charcoal' : 'text-charcoal/20'
                      }`}>
                      {city.name}
                    </span>
                  </div>
                  {selectedIndex === idx && (
                    <motion.div layoutId="arrow" className="text-bronze text-2xl">
                      <FiMinus />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: CINEMATIC DISPLAY */}
          <div className="relative w-full lg:w-2/3 h-[50vh] sm:h-[60vh] md:h-[70vh] group" style={{ zIndex: 45 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={cities[selectedIndex].name}
                initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
                exit={{ clipPath: "inset(0% 0% 100% 0%)", scale: 1.1 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={cities[selectedIndex].img}
                  alt={`Lithos Grand ${cities[selectedIndex].name}`}
                  className="w-full h-full object-cover grayscale-[0.2]"
                />

                {/* INFO PANEL */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex flex-col md:flex-row justify-between items-start md:items-end bg-limestone/90 backdrop-blur-md p-4 sm:p-6 md:p-8 border-l-4 border-bronze"
                  style={{ backgroundColor: '#EBE9E4' }}
                >
                  <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0">
                    <span className="font-public-sans text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.4em] text-bronze uppercase mb-1 md:mb-2">
                      Architectural Profile
                    </span>
                    <h4 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-charcoal mb-1">
                      {cities[selectedIndex].arch} · {cities[selectedIndex].year}
                    </h4>
                    <p className="font-public-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-charcoal/60 uppercase">
                      {cities[selectedIndex].coord}
                    </p>
                  </div>

                  <button className="w-full md:w-auto flex items-center justify-center gap-2 md:gap-4 bg-charcoal text-limestone px-4 sm:px-6 md:px-8 py-2 md:py-4 group/btn overflow-hidden relative text-xs md:text-sm">
                    <span className="relative z-10 font-public-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
                      Private Tour
                    </span>
                    <FiArrowUpRight className="relative z-10 w-3 h-3 md:w-4 md:h-4 group-hover/btn:rotate-45 transition-transform" />
                    <div className="absolute inset-0 bg-bronze translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Footer Note */}
        <div className="block md:hidden text-center mt-8">
          <p className="font-public-sans text-[8px] tracking-[0.3em] text-charcoal/30 uppercase">
            Curated by Lithos Grand International © 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collection;