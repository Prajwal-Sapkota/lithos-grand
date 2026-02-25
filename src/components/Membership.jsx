import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Membership = () => {
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

  return (
    <section
      ref={ref}
      className="relative bg-[#EBE9E4] py-12 md:py-16 lg:py-18 overflow-hidden z-40"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* HEADER - Responsive */}
        <div
          className={`
            text-center mb-12 md:mb-16 lg:mb-24
            transition-all duration-[1500ms]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >
          <p className="tracking-[0.5em] text-[#B5A27A] text-[10px] sm:text-xs mb-4 md:mb-6 uppercase">
            Private Membership
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2C2C2C] leading-[0.9]">
            <span className="text-[#B5A27A] italic">Exclusive</span> Access
          </h2>
        </div>

        {/* MAIN GRID - Stack on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
          {/* LEFT IMAGE - Responsive height */}
          <div
            className={`
              relative overflow-hidden w-full
              transition-all duration-[2000ms]
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-110"}
            `}
          >
            <img
              src="/images/membership.webp"
              alt="Lithos Membership"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 border border-[#B5A27A]/30" />

            {/* Corner accents - Responsive size */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 border-t-2 border-l-2 border-[#B5A27A]/40 z-10" />
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 border-t-2 border-r-2 border-[#B5A27A]/40 z-10" />
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 border-b-2 border-l-2 border-[#B5A27A]/40 z-10" />
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 border-b-2 border-r-2 border-[#B5A27A]/40 z-10" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-4 md:mt-0">
            <p
              className={`
                font-cormorant text-lg sm:text-xl md:text-2xl italic text-[#2C2C2C]/50 mb-6 md:mb-10 leading-relaxed
                transition-all duration-[1500ms] delay-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
            >
              Membership grants you quiet access to privileges unseen.
              <br />
              Private arrivals.
              <br />
              Priority reservations.
              <br />
              A world reserved, always waiting.
            </p>

            <div className="space-y-4 md:space-y-6 ">
              {[
                "Priority Suite Reservations",
                "Private Concierge Access",
                "Invitation-Only Experiences",
                "Global Privilege Recognition"
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
                    flex justify-between items-center
                    border-b border-[#2C2C2C]/10 pb-3 md:pb-4
                    transition-all duration-[1500ms] cursor-pointer
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                  `}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <span className="font-public-sans text-sm sm:text-base md:text-lg text-[#2C2C2C]/70">
                    {item}
                  </span>
                  <FiArrowUpRight className="text-[#B5A27A]/60 hover:text-[#B5A27A] transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              ))}
            </div>

            <button
              className={`
                mt-8 md:mt-12 group flex items-center gap-2 md:gap-3
                transition-all duration-[1500ms] delay-[1000ms]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
            >
              <span className="font-public-sans text-[10px] sm:text-xs tracking-[0.3em] text-[#2C2C2C]/40 group-hover:text-[#B5A27A] uppercase transition-colors">
                Request Invitation
              </span>
              <FiArrowUpRight className="text-[#B5A27A]/60 group-hover:text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all w-3 h-3 sm:w-4 sm:h-4" />
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;