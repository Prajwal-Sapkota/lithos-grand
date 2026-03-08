import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import sanctuaryData from "../../data/sanctuaries.json";

const Journey = ({ onViewDetails }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  const { sanctuaries } = sanctuaryData;
  const activeSanctuary = sanctuaries[activeIndex];

  // Get 5 thumbnails centered around active index
  const getVisibleThumbnails = () => {
    const total = sanctuaries.length;
    const thumbnails = [];
    
    // Show 2 before and 2 after active index (total 5)
    for (let i = -2; i <= 2; i++) {
      let index = (activeIndex + i + total) % total;
      thumbnails.push({
        ...sanctuaries[index],
        originalIndex: index
      });
    }
    return thumbnails;
  };

  const visibleThumbnails = getVisibleThumbnails();

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

  // Autoslide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      timeoutRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % sanctuaries.length);
      }, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isAutoPlaying, sanctuaries.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % sanctuaries.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + sanctuaries.length) % sanctuaries.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#EBE9E4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        {/* HEADER */}
        <div
          className={`text-center mb-12 sm:mb-14 md:mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C]">
            A Journey Through
            <span className="block italic text-[#B5A27A] mt-1 sm:mt-2">
              Silence
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#B5A27A]/40 mx-auto mt-6 sm:mt-7 md:mt-8" />
        </div>

        {/* CINEMATIC IMAGE STAGE */}
        <div
          className={`relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Main Image */}
          <img
            src={activeSanctuary.image}
            alt={activeSanctuary.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out brightness-[0.85]"
          />

          {/* Darker Gradient for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Architectural Border - Responsive padding */}
          <div className="absolute inset-3 sm:inset-5 md:inset-8 lg:inset-10 border border-white/20 pointer-events-none" />

          {/* CONTENT OVERLAY - Responsive positioning */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-4 sm:left-8 md:left-12 lg:left-20 right-4 sm:right-8 md:right-auto max-w-xl z-10">
            <span className="text-[#B5A27A] text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 inline-block">
              {activeSanctuary.category}
            </span>

            <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mt-4 sm:mt-5 md:mt-6 drop-shadow-lg">
              {activeSanctuary.name}
            </h3>

            <p className="text-white/90 mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg drop-shadow-md line-clamp-3 sm:line-clamp-none">
              {activeSanctuary.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-7 md:mt-8">
              <button
                onClick={() => onViewDetails(activeSanctuary.id)}
                className="group inline-flex items-center gap-3 sm:gap-4 border-b border-[#B5A27A] pb-1 sm:pb-2"
              >
                <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-white group-hover:text-[#B5A27A] transition-colors">
                  VIEW DETAILS
                </span>
                <FiArrowUpRight className="text-white group-hover:text-[#B5A27A] transition-all text-sm sm:text-base" />
              </button>

              <span className="text-white/40 text-[10px] sm:text-xs tracking-wider">
                {activeSanctuary.size}{activeSanctuary.sizeUnit} · {activeSanctuary.view}
              </span>
            </div>
          </div>

          {/* Navigation Controls - Responsive positioning */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-4 sm:right-8 md:right-12 lg:right-20 flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
            <button
              onClick={prevSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-[#B5A27A] hover:border-[#B5A27A] transition-all duration-300"
            >
              <FiArrowLeft className="text-white text-sm sm:text-base" />
            </button>

            <button
              onClick={nextSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-[#B5A27A] hover:border-[#B5A27A] transition-all duration-300"
            >
              <FiArrowRight className="text-white text-sm sm:text-base" />
            </button>
          </div>

          {/* Slide Indicator - Responsive positioning */}
          <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 right-4 sm:right-8 md:right-12 lg:right-20 text-white font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl z-10 bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 border border-white/20">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(sanctuaries.length).padStart(2, "0")}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20">
            <div
              className="h-full bg-[#B5A27A] transition-all duration-[5000ms] ease-linear"
              style={{ width: isAutoPlaying ? '100%' : '0%' }}
            />
          </div>
        </div>

        {/* CENTERED THUMBNAIL STRIP - Hide on smallest screens, show from sm up */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
          <div className="flex gap-2 sm:gap-3 md:gap-4 items-center overflow-x-auto pb-2 sm:pb-0 max-w-full hide-scrollbar">
            {visibleThumbnails.map((item, idx) => {
              const isActive = item.originalIndex === activeIndex;
              const position = idx - 2; // -2, -1, 0, 1, 2
              
              // Calculate responsive widths
              const getWidth = () => {
                if (isActive) {
                  return 'w-[80px] sm:w-[100px] md:w-[120px]';
                }
                return 'w-[60px] sm:w-[70px] md:w-[80px]';
              };
              
              const getHeight = () => {
                if (isActive) {
                  return 'h-[50px] sm:h-[60px] md:h-[70px]';
                }
                return 'h-[40px] sm:h-[45px] md:h-[50px]';
              };
              
              return (
                <button
                  key={item.id}
                  onClick={() => goToSlide(item.originalIndex)}
                  className={`relative flex-shrink-0 transition-all duration-500 overflow-hidden group ${
                    isActive
                      ? "scale-105 sm:scale-110 ring-1 sm:ring-2 ring-[#B5A27A] z-10"
                      : "opacity-60 hover:opacity-90 scale-90 sm:scale-90"
                  } ${getWidth()} ${getHeight()}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 border border-[#B5A27A]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Journey;