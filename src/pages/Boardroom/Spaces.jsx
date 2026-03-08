import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiUsers, FiMaximize, FiMapPin } from "react-icons/fi";
import boardroomData from "../../data/boardroom.json";

const Spaces = ({ onViewDetails }) => {
  const { spaces } = boardroomData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setActiveIndex(Number(index));
            
            // Calculate scroll progress for smooth transitions
            const progress = (index + 1) / spaces.length;
            setScrollProgress(progress);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => cardObserver.disconnect();
  }, [spaces.length]);

  const activeSpace = spaces[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#ebe9e4] w-full overflow-visible"
    >
      {/* Ambient Glow - Responsive positioning */}
      <div className="pointer-events-none fixed top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#B5A27A]/10 blur-[80px] sm:blur-[100px] md:blur-[140px] rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none fixed bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#2C2C2C]/5 blur-[80px] sm:blur-[100px] md:blur-[140px] rounded-full -translate-x-1/3 translate-y-1/3" />

      <div ref={containerRef} className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-1000 px-2 sm:px-4 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[#B5A27A] uppercase">
            Private Collection
          </span>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6">
            The <span className="italic text-[#B5A27A]">Boardrooms</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT – Sticky Image Panel - Made sticky on all screens */}
          <div className="sticky top-22 lg:top-25 self-start w-full z-10 bg-[#ebe9e4]">
            <div className="relative h-[300px] sm:h-[450px] md:h-[500px] lg:h-[580px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.15)] rounded-sm">
              {/* Image with smooth crossfade */}
              {spaces.map((space, idx) => (
                <img
                  key={space.id}
                  src={space.image}
                  alt={space.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-[#B5A27A]/40 pointer-events-none" />

              {/* Floating Info Card - Responsive sizing */}
              <div 
                className={`absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 lg:left-3 lg:translate-x-0 bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 w-[90%] sm:w-[80%] lg:w-[580px] transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
                  <div>
                    <FiUsers className="mx-auto text-[#B5A27A] mb-1 text-base sm:text-lg" />
                    <span className="block text-[10px] sm:text-xs text-[#2C2C2C]/50">
                      {activeSpace.capacity}
                    </span>
                  </div>
                  <div>
                    <FiMaximize className="mx-auto text-[#B5A27A] mb-1 text-base sm:text-lg" />
                    <span className="block text-[10px] sm:text-xs text-[#2C2C2C]/50">
                      {activeSpace.size}{activeSpace.sizeUnit}
                    </span>
                  </div>
                  <div>
                    <FiMapPin className="mx-auto text-[#B5A27A] mb-1 text-base sm:text-lg" />
                    <span className="block text-[10px] sm:text-xs text-[#2C2C2C]/50">
                      Floor {activeSpace.floor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Room Index */}
              <div className="absolute top-4 sm:top-5 md:top-6 lg:top-8 right-4 sm:right-5 md:right-6 lg:right-8 text-white font-cormorant text-xl sm:text-2xl md:text-3xl bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-sm">
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-7 md:mt-8">
              {spaces.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    cardsRef.current[idx]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    });
                  }}
                  className={`h-[2px] sm:h-[3px] transition-all duration-500 ${
                    idx === activeIndex
                      ? "w-8 sm:w-10 md:w-12 bg-[#B5A27A]"
                      : "w-4 sm:w-5 md:w-6 bg-[#B5A27A]/30 hover:bg-[#B5A27A]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT – Scrollable List - CENTERED */}
          <div className="flex flex-col items-center justify-center space-y-24 sm:space-y-28 md:space-y-32 py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-0">
            {spaces.map((space, index) => (
              <div
                key={space.id}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                className={`transition-all duration-1000 cursor-pointer scroll-mt-32 w-full max-w-2xl ${
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-40 hover:opacity-70 scale-95"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  cardsRef.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                  });
                }}
              >
                <div className="text-center">
                  {/* Number */}
                  <span className="text-[#B5A27A] text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase block mb-3 sm:mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6">
                    {space.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#2C2C2C]/50 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6 sm:mb-7 md:mb-8 px-2">
                    {space.description}
                  </p>

                  {/* Features Section - Centered */}
                  <div className="mb-8 sm:mb-9 md:mb-10">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#B5A27A] uppercase block mb-4 sm:mb-5 md:mb-6">
                      Key Features
                    </span>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-lg mx-auto">
                      {space.features?.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-1 sm:gap-2">
                          <div className="w-1 h-1 bg-[#B5A27A] rounded-full" />
                          <span className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button - Centered */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetails(space.id);
                    }}
                    className="group inline-flex items-center gap-2 sm:gap-3 md:gap-4 border-b border-[#B5A27A]/40 pb-1 sm:pb-2 mx-auto"
                  >
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#2C2C2C]/40 group-hover:text-[#B5A27A] transition-colors">
                      REQUEST PRIVATE ACCESS
                    </span>
                    <FiArrowUpRight className="text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;