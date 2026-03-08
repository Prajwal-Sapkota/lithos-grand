// src/components/boardroom/BoardroomServices.jsx
import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiClock, FiUsers, FiShield } from "react-icons/fi";
import boardroomData from "../../data/boardroom.json";

const Services = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const services = boardroomData?.services || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!services.length) return null;

  const serviceDetails = services.map((service, index) => ({
    ...service,
    icon:
      index === 0 ? <FiClock /> :
      index === 1 ? <FiUsers /> :
      index === 2 ? <FiShield /> :
      <FiArrowUpRight />,
    features: [
      "24/7 priority availability",
      "Dedicated executive liaison",
      "Private VIP access"
    ]
  }));

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* HEADER */}
        <div className={`text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-28 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-5 md:mb-6">
            <div className="w-8 sm:w-10 md:w-12 lg:w-16 h-[1px] bg-[#B5A27A]/50" />
            <span className="text-[#B5A27A] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase whitespace-nowrap">
              Executive Privileges
            </span>
            <div className="w-8 sm:w-10 md:w-12 lg:w-16 h-[1px] bg-[#B5A27A]/50" />
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] leading-tight">
            Bespoke <span className="italic text-[#B5A27A]">Concierge</span>
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-[#2C2C2C]/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Precision-tailored services crafted for executives who expect
            absolute discretion, seamless coordination, and flawless execution.
          </p>
        </div>

        {/* LUXURY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 px-2 sm:px-0">

          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >

              {/* Glass Luxury Card */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-[#B5A27A]/20 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] transition-all duration-700">

                {/* Floating Number */}
                <div className="absolute -top-4 sm:-top-5 md:-top-6 right-6 sm:right-7 md:right-8 lg:right-10 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-cormorant text-[#B5A27A]/10 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-4 sm:mb-5 md:mb-6 lg:mb-8 bg-[#B5A27A]/10 flex items-center justify-center text-[#B5A27A] text-base sm:text-lg md:text-xl lg:text-2xl group-hover:bg-[#B5A27A] group-hover:text-white transition-all duration-700">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl text-[#2C2C2C] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#2C2C2C]/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  {service.description}
                </p>

                {/* Feature Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B5A27A]/40 to-transparent mb-4 sm:mb-5 md:mb-6 lg:mb-8" />

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-7 md:mb-8 lg:mb-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#B5A27A] rounded-full" />
                      <span className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/50 tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn relative inline-flex items-center gap-2 sm:gap-3 text-[#B5A27A] hover:text-[#2C2C2C] transition-colors">

                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase">
                    Arrange Privately
                  </span>

                  <FiArrowUpRight className="text-sm sm:text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />

                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-0 h-[1px] bg-[#B5A27A] group-hover/btn:w-full transition-all duration-500" />
                </button>

              </div>

              {/* Luxury Hover Glow */}
              <div className="absolute inset-0 bg-[#B5A27A]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            </div>
          ))}
        </div>

        {/* Bottom Signature */}
        <div className={`text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-[#2C2C2C]/20 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase px-4">
             Available Exclusively to LITHOS Grand Executives ✦
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;