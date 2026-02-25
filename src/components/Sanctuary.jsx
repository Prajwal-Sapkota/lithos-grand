import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Sanctuary = () => {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  const rooms = [
    {
      id: "1",
      title: "Executive Sanctuary",
      image: "/images/executive.jpg",
    },
    {
      id: "2",
      title: "Monolith Suite",
      image: "/images/moonlith.jpg",
    },
    {
      id: "3",
      title: "Presidential Residence",
      image: "/images/presidental.avif",
    }
  ];

  useEffect(() => {
    setActive(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#EBE9E4] z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#d6d1c4] opacity-20 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#d6d1c4] opacity-20 blur-[180px]" />
      </div>

      {/* Header - Responsive */}
      <div className="relative px-6 sm:px-8 md:px-12 lg:px-24 py-8 md:py-12 border-b border-[#B5A27A]/20 mb-10">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 ">
          <div className="w-8 md:w-12 h-[1px] bg-[#B5A27A]/40" />
          <span className="font-public-sans text-[7px] md:text-[8px] lg:text-[9px] tracking-[0.5em] text-[#B5A27A]/60 uppercase">
            PRIVATE RETREAT
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#1a1a1a] leading-tight">
          The <span className="italic text-[#B5A27A]">Sanctuaries</span>
        </h2>
       
      </div>

      

      {/* Rooms Grid */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-24">
        {/* Mobile: One column */}
        <div className="flex flex-col gap-6 md:hidden">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              data-index={index}
              ref={(el) => refs.current[index] = el}
              className="group cursor-pointer w-full"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-[8px] tracking-[0.4em] text-white/60 mb-1">
                    {room.id.padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-serif mb-2">
                    {room.title}
                  </h3>
                  <button className="flex items-center gap-1 text-[9px] tracking-[0.2em] group/btn cursor-pointer">
                    <span>DISCOVER</span>
                    <FiArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                  </button>
                </div>

                {/* Frame */}
                <div className="absolute inset-3 border border-white/20 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: Horizontal Scroll */}
        <div className="hidden md:flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-8 hide-scrollbar">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              data-index={index}
              ref={(el) => refs.current[index] = el}
              className="min-w-[320px] lg:min-w-[400px] snap-start group cursor-pointer"
            >
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 text-white">
                  <p className="text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.4em] text-white/60 mb-1 md:mb-2">
                    {room.id.padStart(2, '0')}
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-2 md:mb-4">
                    {room.title}
                  </h3>
                  <button className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs tracking-[0.2em] group/btn cursor-pointer">
                    <span>DISCOVER</span>
                    <FiArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                  </button>
                </div>

                {/* Frame */}
                <div className="absolute inset-2 md:inset-3 lg:inset-4 border border-white/20 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative px-6 sm:px-8 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div>
            <p className="text-xs sm:text-sm text-black/50">
              From 65m² to 350m² · Skyline to 360° views
            </p>
          </div>
          <button className="group flex items-center gap-2 md:gap-3">
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-black/40 group-hover:text-[#B5A27A] transition-colors">
              VIEW ALL
            </span>
            <FiArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-[#B5A27A]/60 group-hover:text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Sanctuary;