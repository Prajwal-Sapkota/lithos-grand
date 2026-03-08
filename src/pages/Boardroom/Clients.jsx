import { useRef, useEffect, useState } from "react";

const Clients = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const clients = [
    "Global Investment Consortium",
    "Horizon Energy Group",
    "NovaTech Industries",
    "Apex International Legal",
    "Meridian Capital",
    "Stratton Advisory",
    "Atlas Corporation",
    "Vertex Global Partners",
    "Crestwood Holdings"
  ];

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
      className="relative py-16 sm:py-20 md:py-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] text-[#B5A27A] uppercase">
            Esteemed Clientele
          </span>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6">
            Trusted by <span className="italic text-[#B5A27A]">Industry Leaders</span>
          </h2>
        </div>

        {/* Elegant Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-8 sm:gap-x-12 md:gap-x-16 text-center px-4 sm:px-0">

          {clients.map((client, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <span className="font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide text-[#2C2C2C]/60 group-hover:text-[#B5A27A] transition-colors duration-500 block px-2">
                  {client}
                </span>

                {/* Subtle Underline Glow */}
                <div className="mx-auto mt-3 sm:mt-4 h-[1px] w-8 sm:w-10 md:w-12 bg-[#B5A27A]/30 group-hover:w-16 sm:group-hover:w-20 md:group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;