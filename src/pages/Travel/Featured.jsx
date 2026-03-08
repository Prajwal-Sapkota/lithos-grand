import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import travelData from "../../data/travel.json";
import { Link } from "react-router-dom";

const Featured = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { featuredStory } = travelData;

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

      <div className="relative z-10 max-w-[1400px] mx-auto">

        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-24 items-center">

            {/* IMAGE SIDE */}
            <div className="lg:col-span-6 relative w-full">

              {/* Outer Floating Frame - Responsive positioning */}
              <div className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6 xl:-top-10 -left-2 sm:-left-3 md:-left-4 lg:-left-6 xl:-left-10 w-full h-full border border-[#B5A27A]/30 pointer-events-none" />

              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden shadow-lg">

                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />

                {/* Inner Frame - Responsive inset */}
                <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 xl:inset-6 2xl:inset-8 border border-[#B5A27A]/40 pointer-events-none" />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="lg:col-span-6 w-full">

              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A]">
                Featured Story
              </span>

              <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-[1.05] text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10">
                {featuredStory.title}
              </h3>

              <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10" />

              <p className="text-[#2C2C2C]/70 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed max-w-xl">
                {featuredStory.excerpt}
              </p>

              <Link
                to={featuredStory.link}
                className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 inline-flex items-center gap-2 sm:gap-3 md:gap-4 text-[#B5A27A] group"
              >
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase border-b border-[#B5A27A]/50 pb-1 sm:pb-2 group-hover:border-[#B5A27A] transition-all">
                  Read Full Story
                </span>
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-sm sm:text-base" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Featured;