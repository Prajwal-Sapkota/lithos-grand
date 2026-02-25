import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Boardroom = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const boardrooms = [
    {
      id: "01",
      title: "The Silent Boardroom",
      capacity: "14 guests",
      size: "85 m²",
      image: "/images/silent.jpg",
    },
    {
      id: "02",
      title: "The Monolith Chamber",
      capacity: "24 guests",
      size: "120 m²",
      image: "/images/monolithchamber.jpg",
    },
    {
      id: "03",
      title: "The Presidential Hall",
      capacity: "50 guests",
      size: "200 m²",
      image: "/images/presidenthall.webp",
    }
  ];

  const specs = [
    { label: "ACOUSTICS", value: "35dB ISO", desc: "Military-grade sound isolation" },
    { label: "SECURITY", value: "AES-256", desc: "Hardwired encrypted uplinks" },
    { label: "ACCESS", value: "STEALTH", desc: "Private elevator & secure entry" },
  ];

  // Auto slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % boardrooms.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, boardrooms.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % boardrooms.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + boardrooms.length) % boardrooms.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section ref={ref} className="relative  bg-[#EBE9E4] py-12 md:py-18 overflow-hidden z-50">
      {/* SOLID BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-[#EBE9E4] z-0" />
      <div className="absolute inset-0 bg-[#EBE9E4] z-1" />

      {/* BACKGROUND TEXT WATERMARK */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none z-0">
        <h2 className="text-[25vw] font-cormorant text-[#2C2C2C] leading-none">SECURE</h2>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 grid lg:grid-cols-12 gap-8 lg:gap-16 items-start z-10">
        
        {/* LEFT: CONTENT (4 Cols) */}
        <div className="lg:col-span-4 space-y-6 lg:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-public-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.6em] text-[#B5A27A] uppercase block mb-4 md:mb-6">
              Executive Presence
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] leading-[1.1]">
              The <span className="italic text-[#B5A27A]">Chamber</span> <br /> of Influence.
            </h2>
          </motion.div>

          {/* SPEC GRID */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 border-t border-[#2C2C2C]/10 pt-8 md:pt-12">
            {specs.map((spec, i) => (
              <motion.div 
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="group cursor-default"
              >
                <div className="flex justify-between items-end mb-1 md:mb-2">
                  <span className="font-public-sans text-[8px] md:text-[9px] tracking-[0.3em] text-[#B5A27A] uppercase">{spec.label}</span>
                  <span className="font-cormorant text-xl md:text-2xl text-[#2C2C2C]">{spec.value}</span>
                </div>
                <p className="text-[8px] md:text-[10px] text-[#2C2C2C]/30 uppercase tracking-widest group-hover:text-[#2C2C2C]/60 transition-colors">
                  {spec.desc}
                </p>
                <div className="mt-2 md:mt-4 h-[1px] w-full bg-[#2C2C2C]/5 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={isInView ? { x: "0%" } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full w-full bg-[#B5A27A]/40"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: IMAGE SLIDER (8 Cols) */}
        <div 
          className="lg:col-span-8 relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons - Repositioned for mobile */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 flex gap-2 md:gap-3">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 border border-[#B5A27A] bg-[#EBE9E4]/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#B5A27A] transition-all duration-300 group/btn"
            >
              <FiArrowLeft className="text-[#B5A27A] group-hover/btn:text-[#EBE9E4] transition-colors w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 border border-[#B5A27A] bg-[#EBE9E4]/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#B5A27A] transition-all duration-300 group/btn"
            >
              <FiArrowRight className="text-[#B5A27A] group-hover/btn:text-[#EBE9E4] transition-colors w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>

          {/* Progress Bar - Moved top for mobile */}
          <div className="absolute top-0 left-0 right-0 z-30">
            <div className="w-full h-[2px] bg-[#2C2C2C]/10">
              <motion.div 
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-[#B5A27A]"
              />
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-full w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ clipPath: "inset(0 0% 0 100%)" }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={boardrooms[currentIndex].image} 
                  alt={boardrooms[currentIndex].title} 
                  className="h-full w-full object-cover brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-1000"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#EBE9E4]/20 via-transparent to-transparent" />
                
                {/* TITLE ON IMAGE - Responsive positioning */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-4 sm:left-6 md:left-8 lg:left-12 z-20 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] text-white/60 mb-1 md:mb-2">
                    {boardrooms[currentIndex].id} · BOARDROOM
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant text-white mb-2 md:mb-3 leading-tight">
                    {boardrooms[currentIndex].title}
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <span className="text-[10px] sm:text-xs text-white/70">{boardrooms[currentIndex].capacity}</span>
                    <span className="text-white/30 hidden sm:inline">|</span>
                    <span className="text-[10px] sm:text-xs text-white/70">{boardrooms[currentIndex].size}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* EXTERNAL CORNER ACCENT - Hidden on mobile */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#B5A27A]/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Boardroom;