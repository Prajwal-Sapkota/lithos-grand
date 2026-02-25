import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Wellness = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const treatments = [
    "Holistic Spa Rituals",
    "Hydrotherapy & Thermal Bath",
    "Stone & Mineral Healing",
    "Private Yoga Chamber",
    "Infrared Detox Therapy"
  ];

  return (
    <section
      ref={ref}
      className="relative bg-[#EBE9E4] py-12 md:py-18 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* HEADER - Responsive */}
        <div className={`text-center mb-12 md:mb-24 transition-all duration-[1500ms] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}>
          <p className="text-[10px] sm:text-xs tracking-[0.6em] text-[#B5A27A] mb-4 md:mb-6">
            LITHOS GRAND WELLNESS
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2C2C2C] leading-[0.9] px-2">
            Sanctuary of <span className="text-[#B5A27A]">Renewal</span>
          </h2>
        </div>

        {/* IMAGE FRAME - Responsive height */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] overflow-hidden">
          {/* architectural frame */}
          <div className="absolute inset-0 border border-[#B5A27A]/30 z-20" />

          <img
            src="/images/wellness.webp"
            alt="LITHOS Grand Wellness"
            className={`w-full h-full object-cover transition-all duration-[2000ms] ${
              visible ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          />
        </div>

        {/* FLOATING TEXT AREA - Stack on mobile, grid on desktop */}
        <div className="mt-12 md:mt-20 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-20">
          {/* Left Quote - Responsive text size */}
          <p className={`font-cormorant text-lg sm:text-xl md:text-2xl italic text-[#2C2C2C]/50 leading-relaxed transition-all duration-[1500ms] delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
            Enter a realm carved from silence and stone.<br />
            Where every ritual restores balance.<br />
            Every breath returns you to yourself.
          </p>

          {/* Right Treatments - Responsive */}
          <div className="space-y-4 md:space-y-6">
            {treatments.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between border-b border-[#2C2C2C]/10 pb-3 md:pb-4 transition-all duration-[1500ms] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <span className="font-public-sans text-base sm:text-lg md:text-xl text-[#2C2C2C]">
                  {item}
                </span>
                <FiArrowUpRight className="text-[#B5A27A]/60 hover:text-[#B5A27A] transition-colors w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellness;