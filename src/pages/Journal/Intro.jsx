import { useRef, useEffect, useState } from "react";
import { FiBook, FiUser, FiCalendar, FiGlobe } from "react-icons/fi";
import journalData from "../../data/journal.json";

const Intro = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { intro } = journalData;
  const stats = intro?.stats || {};

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
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Main Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">

          {/* LEFT SIDE - Editorial Content */}
          <div className={`w-full transition-all duration-1000 order-2 lg:order-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] xl:text-[72px] leading-[1.05] text-[#2C2C2C]">
              {intro?.title}
            </h2>

            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-[2px] bg-[#B5A27A] my-6 sm:my-7 md:my-8 lg:my-10" />

            <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              {intro?.description}
            </p>

            {/* Quote Block */}
            <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-16 pl-6 sm:pl-7 md:pl-8 lg:pl-10">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-[#B5A27A]" />
              <p className="font-cormorant text-xl sm:text-2xl md:text-3xl italic text-[#2C2C2C]/70 leading-relaxed">
                "{intro?.quote}"
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Floating Luxury Stats */}
          <div className={`w-full transition-all duration-1000 delay-200 order-1 lg:order-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

              {/* Stat 1 */}
              <LuxuryStat
                icon={<FiBook />}
                value={stats.articles}
                label="Published Articles"
              />

              {/* Stat 2 */}
              <LuxuryStat
                icon={<FiUser />}
                value={stats.authors}
                label="Contributing Editors"
              />

              {/* Stat 3 */}
              <LuxuryStat
                icon={<FiCalendar />}
                value={stats.years}
                label="Years of Publication"
              />

              {/* Stat 4 */}
              <LuxuryStat
                icon={<FiGlobe />}
                value={stats.cities}
                label="Global Cities Covered"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const LuxuryStat = ({ icon, value, label }) => {
  return (
    <div className="group relative bg-white/70 backdrop-blur-md border border-[#B5A27A]/20 p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

      {/* Gold Corner Accent - Responsive */}
      <div className="absolute top-0 right-0 w-10 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-9 md:h-10 border-t border-r border-[#B5A27A]/40" />

      <div className="flex items-center gap-3 sm:gap-4">

        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center border border-[#B5A27A]/30 text-[#B5A27A] text-lg sm:text-xl md:text-2xl group-hover:rotate-6 transition-transform duration-500">
          {icon}
        </div>

        <div>
          <div className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2C2C2C]">
            {value}
          </div>
          <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#2C2C2C]/40 mt-1 sm:mt-2">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;