import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Intro = ({ intro }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = intro?.stats || {};

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#EBE9E4] overflow-hidden">
      {/* Background Pattern - Adjusted for mobile */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #2C2C2C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Content (Order changes on mobile) */}
          <div className={`space-y-6 sm:space-y-7 md:space-y-8 transition-all duration-1000 order-2 lg:order-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Title - Responsive sizes */}
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] leading-[1.1]">
              Where Silence
              <br />
              <span className="italic text-[#B5A27A] block mt-1 sm:mt-2">Finds Its Home</span>
            </h2>

            {/* Description */}
            <p className="text-[#2C2C2C]/50 text-base sm:text-lg leading-relaxed max-w-xl">
              {intro?.description || "Each sanctuary is meticulously crafted to provide absolute privacy and tranquility. From intimate executive studios to expansive presidential residences, every space is a testament to architectural precision and uncompromising luxury."}
            </p>

            {/* CTA */}
            <div className="group flex items-center gap-3 sm:gap-4 cursor-pointer w-fit pt-4 sm:pt-5 md:pt-6">
              <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#2C2C2C]/40 group-hover:text-[#B5A27A] transition-colors">
                DISCOVER THE COLLECTION
              </span>
              <FiArrowUpRight className="text-[#B5A27A]/60 group-hover:text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-base sm:text-lg" />
            </div>
          </div>

          {/* RIGHT SIDE - Bigger Image Grid (Order changes on mobile) */}
          <div className={`space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 delay-200 order-1 lg:order-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Large Image */}
            <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden">
              <img 
                src="/images/interior.avif" 
                alt="Luxury suite interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Bronze Corner Accent */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-l-2 border-white/30" />
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-r-2 border-white/30" />
            </div>

            {/* Two Smaller Images */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="relative h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden">
                <img 
                  src="/images/bathroom.jpg" 
                  alt="Luxury bathroom"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="relative h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden">
                <img 
                  src="/images/city.jpg" 
                  alt="City view from suite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;