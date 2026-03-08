import { useRef, useEffect, useState } from "react";
import { FiShield, FiLock, FiCpu, FiGlobe, FiArrowUpRight } from "react-icons/fi";

const Intro = ({ intro }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);

  const securitySpecs = [
    { label: "Acoustic Isolation", value: "STC 65", icon: <FiShield /> },
    { label: "Encryption Standard", value: "AES-256", icon: <FiLock /> },
    { label: "Private Connectivity", value: "10Gbps", icon: <FiCpu /> },
    { label: "Global Presence", value: "12 Cities", icon: <FiGlobe /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpec((prev) => (prev + 1) % securitySpecs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">

          {/* LEFT CONTENT - Order changes on mobile */}
          <div
            className={`space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 transition-all duration-1000 order-2 lg:order-1 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Headline - Responsive sizes */}
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] leading-[1.1]">
              Where Influence
              <br />
              <span className="italic text-[#B5A27A] block mt-2 sm:mt-3">
                Meets Privacy
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              {intro?.description ||
                "Crafted for world leaders, founders, and visionaries. Our executive boardrooms are designed as architectural sanctuaries — acoustically sealed, technologically sovereign, and serviced with quiet precision."}
            </p>

            {/* Rotating Intelligence Panel */}
            <div className="relative backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-8">
              <div className="text-[8px] sm:text-[9px] md:text-[10px] text-[#B5A27A] tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase mb-4 sm:mb-5 md:mb-6">
                Private Intelligence
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  <div className="text-[#B5A27A] text-2xl sm:text-3xl">
                    {securitySpecs[activeSpec].icon}
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-[#2C2C2C]/40 uppercase tracking-wider">
                      {securitySpecs[activeSpec].label}
                    </div>
                    <div className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C]">
                      {securitySpecs[activeSpec].value}
                    </div>
                  </div>
                </div>

                {/* Minimal Indicators */}
                <div className="flex gap-1 sm:gap-2 self-end sm:self-auto">
                  {securitySpecs.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-[2px] transition-all duration-500 ${
                        activeSpec === idx
                          ? "w-6 sm:w-7 md:w-8 bg-[#B5A27A]"
                          : "w-3 sm:w-4 bg-[#B5A27A]/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="group inline-flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 cursor-pointer">
              <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#2C2C2C]/40 group-hover:text-[#B5A27A] transition-colors">
                ARRANGE A PRIVATE VISIT
              </span>
              <FiArrowUpRight className="text-[#B5A27A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-sm sm:text-base" />
            </div>
          </div>

          {/* RIGHT SIDE – CINEMATIC IMAGE - Order changes on mobile */}
          <div
            className={`relative transition-all duration-1000 delay-200 order-1 lg:order-2 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Gold Frame - Responsive positioning */}
            <div className="absolute -top-3 sm:-top-4 md:-top-6 lg:-top-8 -left-3 sm:-left-4 md:-left-6 lg:-left-8 w-full h-full border border-[#B5A27A]/30" />

            <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden shadow-2xl">
              <img
                src="/images/boardroomintro.jpg"
                alt="Executive Boardroom"
                className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              />

              {/* Soft cinematic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;