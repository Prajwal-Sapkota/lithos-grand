import { useRef, useEffect, useState } from "react";
import { FiWifi, FiCoffee, FiTv, FiLock, FiWind, FiSun } from "react-icons/fi";
import { GiBathtub, GiBed, GiWineGlass } from "react-icons/gi";
import sanctuaryData from "../../data/sanctuaries.json";

const Amenities = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { amenities } = sanctuaryData;

  const getIcon = (icon) => {
    switch (icon) {
      case "bed": return <GiBed className="text-3xl sm:text-4xl" />;
      case "bath": return <GiBathtub className="text-3xl sm:text-4xl" />;
      case "wifi": return <FiWifi className="text-3xl sm:text-4xl" />;
      case "coffee": return <FiCoffee className="text-3xl sm:text-4xl" />;
      case "tv": return <FiTv className="text-3xl sm:text-4xl" />;
      case "lock": return <FiLock className="text-3xl sm:text-4xl" />;
      case "wine": return <GiWineGlass className="text-3xl sm:text-4xl" />;
      case "sound": return <FiWind className="text-3xl sm:text-4xl" />;
      case "phone": return <FiSun className="text-3xl sm:text-4xl" />;
      default: return <FiWifi className="text-3xl sm:text-4xl" />;
    }
  };

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
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#EBE9E4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 px-2 sm:px-4 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6 leading-tight">
            Elevated <span className="italic text-[#B5A27A]">Living</span>
          </h2>

          <div className="w-16 sm:w-18 md:w-20 h-[2px] bg-[#B5A27A] mx-auto mb-4 sm:mb-5 md:mb-6" />

          <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Thoughtfully curated amenities crafted to deliver absolute serenity,
            privacy, and refined comfort.
          </p>
        </div>

        {/* WOW Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10 px-2 sm:px-0">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 md:p-10 backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Accent Top Border */}
              <div className="absolute top-0 left-0 w-full h-[2px] sm:h-[3px] bg-[#B5A27A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-6 sm:mb-7 md:mb-8 mx-auto flex items-center justify-center 
                              bg-gradient-to-br from-[#B5A27A]/20 to-[#B5A27A]/5 
                              text-[#B5A27A] 
                              rounded-full 
                              group-hover:scale-105 sm:group-hover:scale-110 
                              transition-all duration-500">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="font-cormorant text-xl sm:text-2xl text-[#2C2C2C] mb-2 sm:mb-3 text-center tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2C2C2C]/50 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#B5A27A]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;