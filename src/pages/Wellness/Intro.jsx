import { useRef, useEffect, useState } from "react";
import { FiWind, FiFeather, FiClock, FiDroplet } from "react-icons/fi";
import wellnessData from "../../data/wellness.json";

const Intro = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { intro } = wellnessData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = intro?.stats || {};

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
          <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1650px] mx-auto relative z-10">

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT — ARCHITECTURAL IMAGE */}
          <div
            className={`lg:col-span-5 w-full transition-all duration-1000 order-2 lg:order-1 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] xl:h-[650px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.12)]">
              <img
                src={intro.image}
                alt="Wellness Sanctuary"
                className="w-full h-full object-cover"
              />

              {/* Architectural Frame - Responsive inset */}
              <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-8 border border-[#B5A27A]/40 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT — FLOATING EDITORIAL PANEL */}
          <div
            className={`lg:col-span-7 w-full transition-all duration-1000 delay-200 order-1 lg:order-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-20 shadow-[0_60px_140px_rgba(0,0,0,0.08)] relative">

              {/* Vertical Gold Line Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] sm:w-[3px] bg-[#B5A27A]" />

              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A] block mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                Wellness Philosophy
              </span>

              <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#2C2C2C]">
                {intro?.title}
              </h2>

              <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] my-4 sm:my-5 md:my-6 lg:my-8 xl:my-10" />

              <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 max-w-2xl">
                {intro?.description}
              </p>

              {/* Signature Quote */}
              <div className="border-t border-[#B5A27A]/20 pt-4 sm:pt-5 md:pt-6 lg:pt-8 xl:pt-10">
                <p className="font-cormorant text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-[#2C2C2C]/70 leading-relaxed">
                  “{intro?.quote}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Divider = () => (
  <div className="hidden lg:block w-px h-20 bg-[#B5A27A]/20 mx-10" />
);

export default Intro;