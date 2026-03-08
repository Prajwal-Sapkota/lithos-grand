import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiClock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import journalData from "../../data/journal.json";

const Story = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { featured } = journalData;

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
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Soft Background Layer - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] right-[-200px] w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#B5A27A]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[160px]" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#2C2C2C]/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[160px]" />
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">

        {/* Section Label */}
        <div className={`mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-[1px] bg-[#B5A27A]" />
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] text-[#B5A27A] uppercase whitespace-nowrap">
              Signature Editorial
            </span>
          </div>
        </div>

        {/* Layout - Responsive positioning */}
        <div
          onClick={() => navigate(`/journal/${featured.slug}`)}
          className={`relative cursor-pointer transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Image Block - Responsive width and height */}
          <div className="relative w-full lg:w-[85%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-[2500ms] hover:scale-105"
            />

            {/* Architectural Frame - Responsive inset */}
            <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-8 border border-[#B5A27A]/40 pointer-events-none" />
          </div>

          {/* Floating Content Panel - Responsive positioning and sizing */}
          <div className="relative lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 w-full lg:w-[55%] bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.08)] mt-6 lg:mt-0">

            {/* Category */}
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[#B5A27A] uppercase block mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              {featured.category}
            </span>

            {/* Title - Responsive size */}
            <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[52px] leading-[1.1] text-[#2C2C2C]">
              {featured.title}
            </h3>

            {/* Divider */}
            <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] my-4 sm:my-5 md:my-6 lg:my-8 xl:my-10" />

            {/* Excerpt */}
            <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12">
              {featured.excerpt}
            </p>

            {/* Meta Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 border-t border-[#B5A27A]/20 pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8">

              <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FiUser className="text-[#B5A27A] text-sm sm:text-base" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/70">
                    {featured.author}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <FiClock className="text-[#B5A27A] text-sm sm:text-base" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/70">
                    {featured.readTime}
                  </span>
                </div>
              </div>

              <button className="group inline-flex items-center gap-2 sm:gap-3">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#2C2C2C]/50 group-hover:text-[#B5A27A] transition-colors">
                  READ STORY
                </span>
                <FiArrowUpRight className="text-[#B5A27A] text-sm sm:text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;