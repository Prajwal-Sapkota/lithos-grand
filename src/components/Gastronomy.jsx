import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Gastronomy = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const restaurants = [
    {
      id: "01",
      name: "THE EMBER ROOM",
      headline: "Fire · Stone · Smoke",
      image: "/images/ember.jpg",
      chef: "Elena Marchetti",
    },
    {
      id: "02",
      name: "THE LIMESTONE CELLAR",
      headline: "Wine · Cheese · Preservation",
      image: "/images/limestone.jpg",
      chef: "Jean-Luc Moreau",
    },
    {
      id: "03",
      name: "SILENCE",
      headline: "Omakase · Meditation · Taste",
      image: "/images/silence.webp",
      chef: "Takahiro Yamamoto",
    },
  ];

  // Create seamless infinite loop by duplicating items
  const allItems = [...restaurants, ...restaurants, ...restaurants];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let position = 0;
    const speed = 0.4;

    const animate = () => {
      position += speed;
      
      const itemWidth = window.innerWidth < 768 ? 280 : 600; // Smaller on mobile
      const gap = window.innerWidth < 768 ? 12 : 20;
      const originalSetWidth = (itemWidth * 3) + (gap * 2);
      
      if (position >= originalSetWidth) {
        position = 0;
      }
      
      slider.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#EBE9E4] py-12 md:py-18 overflow-hidden"
      style={{ zIndex: 40 }}
    >
      {/* SOLID BACKGROUND */}
      <div className="absolute inset-0 bg-[#EBE9E4]" />

      <div className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* TITLE - Responsive */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2C2C2C] leading-[0.9]">
            The <span className="text-[#B5A27A] italic">Culinary</span> Collection
          </h2>
         
        </div>

        {/* INFINITE CRAWLER */}
        <div className="relative overflow-hidden" style={{ height: window.innerWidth < 768 ? '420px' : '540px' }}>
          {/* LEFT GRADIENT - Responsive width */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 z-20 pointer-events-none bg-gradient-to-r from-[#EBE9E4] via-[#EBE9E4]/75 to-transparent" />
          
          {/* RIGHT GRADIENT - Responsive width */}
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 z-20 pointer-events-none bg-gradient-to-l from-[#EBE9E4] via-[#EBE9E4]/80 to-transparent" />

          {/* Crawler Container */}
          <div 
            ref={sliderRef}
            className="flex gap-3 sm:gap-4 md:gap-5 absolute left-0 top-0"
            style={{ willChange: 'transform' }}
          >
            {allItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[260px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px] flex-shrink-0"
              >
                <div className="h-full flex flex-col">
                  {/* Image Container - Responsive height */}
                  <div className="relative h-[380px] sm:h-[380px] md:h-[380px] lg:h-[500px]  overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Hover Button - Hidden on mobile */}
                    <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center">
                      <button className="bg-[#EBE9E4] px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2">
                        <span className="font-public-sans text-[7px] sm:text-[8px] tracking-[0.2em] text-[#2C2C2C] uppercase cursor-pointer">
                          Discover
                        </span>
                        <FiArrowUpRight className="text-[#B5A27A] w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>

                  {/* INFO BOX - Responsive positioning and sizing */}
                  <div className="relative -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16 mr-2 sm:mr-3 md:mr-4 ml-auto w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px] bg-white shadow-xl md:shadow-2xl p-3 sm:p-4 md:p-5 border-l-2 sm:border-l-3 md:border-l-4 border-[#B5A27A] z-30">
                    <h3 className="font-cormorant text-sm sm:text-base md:text-lg lg:text-xl text-[#2C2C2C] mb-1">
                      {item.name}
                    </h3>
                    <p className="font-public-sans text-[6px] sm:text-[7px] md:text-[8px] text-[#B5A27A] tracking-wider mb-2 md:mb-3">
                      {item.headline}
                    </p>
                    <div className="pt-1 md:pt-2 border-t border-[#B5A27A]/20">
                      <p className="font-public-sans text-[5px] sm:text-[6px] md:text-[7px] text-[#2C2C2C]/50 uppercase tracking-wider">
                        Chef {item.chef}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;