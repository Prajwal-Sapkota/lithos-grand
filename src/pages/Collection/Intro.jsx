import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Intro = ({ intro }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Background Architectural Grid - Adjusted for mobile */}
      <div className="absolute inset-0 opacity-[0.03] hidden sm:block">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-[#B5A27A]" />
        <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-[#B5A27A]" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#B5A27A]" />
        <div className="absolute left-[70%] top-0 bottom-0 w-[1px] bg-[#B5A27A]" />
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-[#B5A27A]" />
      </div>
      
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

          {/* LEFT SIDE - Slanted Image (Reordered for mobile) */}
          <div
            className={`relative transition-all duration-1000 delay-200  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Main Image Container with Slanted Edge */}
            <div className="relative">
              {/* Image with Slanted Edge - Adjusted clip path for mobile */}
              <div className="relative transform transition-transform duration-1000 hover:scale-[1.02]" style={{
                clipPath: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)'
              }}>
                <img
                  src="/images/collectionintro.jpg"
                  alt="LITHOS Architecture"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#EBE9E4]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Decorative Line - Hidden on mobile */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-[1px] bg-[#B5A27A]/30 hidden xl:block" />
          </div>

          {/* RIGHT SIDE - Content (Reordered for mobile) */}
          <div
            className={`space-y-5 sm:space-y-6 md:space-y-8 transition-all duration-1000  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* Bronze Accent Line with Year */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 sm:w-14 md:w-16 h-[2px] bg-[#B5A27A]" />
              <span className="font-public-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] text-[#B5A27A] uppercase">
                EST. 1928
              </span>
            </div>

            {/* Main Title - Responsive font sizes */}
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2C2C2C] leading-[1.05] sm:leading-[1]">
              Where Stone
              <br />
              <span className="italic text-[#B5A27A] block mt-1 sm:mt-2">
                Meets Silence
              </span>
            </h2>

            {/* Description - Better mobile readability */}
            <p className="font-public-sans text-sm sm:text-base text-[#2C2C2C]/50 leading-relaxed text-justify sm:text-left max-w-2xl">
              From Auguste Perret's original vision on the Champs-Élysées to contemporary masterpieces across the globe, each LITHOS monolith carries the same philosophy: stone, silence, and power.
            </p>

            {/* CTA - Adjusted for touch */}
            <div className="group flex items-center gap-3 sm:gap-4 cursor-pointer w-fit pt-2 sm:pt-3 md:pt-4">
              <span className="font-public-sans text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] sm:tracking-[0.22em] md:tracking-[0.25em] text-[#2C2C2C]/40 group-hover:text-[#B5A27A] transition-colors">
                DISCOVER THE LEGACY
              </span>
              <FiArrowUpRight className="text-[#B5A27A]/60 group-hover:text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-base sm:text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;