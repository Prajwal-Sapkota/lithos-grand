import { useRef, useEffect, useState } from "react";
import { FiShield, FiLock, FiCpu, FiGlobe, FiCheckCircle } from "react-icons/fi";

const Security = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const securityHighlights = [
    {
      icon: <FiShield />,
      title: "Tier IV Executive Protection",
      description:
        "Discreet 24/7 on-site security personnel with controlled perimeter access."
    },
    {
      icon: <FiLock />,
      title: "Biometric Access Control",
      description:
        "Retinal & fingerprint authentication for all executive suites."
    },
    {
      icon: <FiCpu />,
      title: "Dedicated Encrypted Network",
      description:
        "Private 10Gbps fiber line secured with AES-256 enterprise encryption."
    },
    {
      icon: <FiGlobe />,
      title: "Global Private Backbone",
      description:
        "Secure interconnection across our international executive locations."
    }
  ];

  const certifications = [
    "ISO 27001",
    "SOC 2 Type II",
    "GDPR Compliant",
    "PCI DSS"
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] text-[#B5A27A] uppercase">
            Discreet Protection
          </span>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6">
            Fortress-Level <span className="italic text-[#B5A27A]">Security</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 sm:mt-7 md:mt-8 text-sm sm:text-base text-[#2C2C2C]/50 leading-relaxed px-4">
            Designed for high-level negotiations, confidential board meetings,
            and executive gatherings where privacy is not optional — it is
            absolute.
          </p>
        </div>

        {/* Luxury Split Layout - Stacks on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left – Statement Panel */}
          <div
            className={`w-full transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative bg-white border border-[#B5A27A]/20 p-6 sm:p-8 md:p-10 lg:p-16 shadow-xl">
              {/* Bronze Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] sm:w-[4px] bg-[#B5A27A]" />

              <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                Executive-Grade Confidentiality
              </h3>

              <p className="text-[#2C2C2C]/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10">
                Every boardroom operates under strict NDA governance,
                controlled guest verification, and digital isolation protocols.
                Your conversations remain private — permanently.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div>
                  <p className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#B5A27A]">100%</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/40 mt-1 sm:mt-2">
                    Secured Facilities
                  </p>
                </div>
                <div>
                  <p className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#B5A27A]">24/7</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/40 mt-1 sm:mt-2">
                    Monitored Premises
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Vertical Feature List */}
          <div className="w-full space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
            {securityHighlights.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 sm:gap-5 md:gap-6 transition-all duration-1000 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-[#B5A27A] text-xl sm:text-2xl md:text-3xl mt-1 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#2C2C2C] mb-2 sm:mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#2C2C2C]/50 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 border-t border-[#B5A27A]/10 pt-8 sm:pt-10 md:pt-12 lg:pt-14">
          <p className="text-center text-[#B5A27A] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            Internationally Certified
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-1 sm:gap-2 md:gap-3 text-[#2C2C2C]/60"
              >
                <FiCheckCircle className="text-[#B5A27A] text-xs sm:text-sm md:text-base flex-shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center">
          <p className="text-[#2C2C2C]/20 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase">
             ABSOLUTE CONFIDENTIALITY GUARANTEED ✦
          </p>
        </div>

      </div>
    </section>
  );
};

export default Security;