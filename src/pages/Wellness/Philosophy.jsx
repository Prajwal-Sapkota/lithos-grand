// src/components/wellness/WellnessPhilosophy.jsx
import { useRef, useEffect, useState } from "react";
import { FiShield, FiSun, FiMoon, FiWind } from "react-icons/fi";
import wellnessData from "../../data/wellness.json";

const Philosophy = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { philosophy } = wellnessData;

  const icons = [FiShield, FiSun, FiMoon, FiWind];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Soft Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Centered Intro */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 px-2 sm:px-4 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-8 leading-[1.1]">
            {philosophy.title}
          </h2>

          <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] mx-auto my-4 sm:my-5 md:my-6 lg:my-8 xl:my-10" />

          <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed">
            {philosophy.description}
          </p>
        </div>

        {/* Main Experience Layout */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 items-start">

          {/* Floating Image Panel */}
          <div
            className={`lg:col-span-5 w-full transition-all duration-1000 order-2 lg:order-1 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.1)]">
              <img
                src={philosophy.image}
                alt="Wellness Philosophy"
                className="w-full h-full object-cover"
              />

              {/* Architectural Frame - Responsive inset */}
              <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-10 border border-[#B5A27A]/40 pointer-events-none" />
            </div>
          </div>

          {/* Sculptural Principles Timeline */}
          <div
            className={`lg:col-span-7 w-full space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16 transition-all duration-1000 delay-200 order-1 lg:order-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            {philosophy.principles.map((principle, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div key={index} className="flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 group">

                  {/* Vertical Gold Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 bg-[#B5A27A]/40" />
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border border-[#B5A27A]/40 flex items-center justify-center text-[#B5A27A] text-sm sm:text-base md:text-lg lg:text-xl bg-white shadow-sm group-hover:scale-105 lg:group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#2C2C2C] mb-2 sm:mb-3 md:mb-4">
                      Principle {index + 1}
                    </h3>
                    <p className="text-[#2C2C2C]/60 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
                      {principle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;