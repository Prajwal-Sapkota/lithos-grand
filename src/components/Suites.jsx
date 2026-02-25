import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCompass, FiClock, FiAward } from "react-icons/fi";

const Suites = () => {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  const rooms = [
    {
      id: "01",
      title: "Executive Sanctuary",
      size: "65 m²",
      view: "Skyline",
      image: "/images/executive.jpg",
      features: ["Limestone walls", "Oak flooring", "Private terrace"],
      height: "3.5m",
      architect: "Tadao Ando"
    },
    {
      id: "02",
      title: "Monolith Suite",
      size: "120 m²",
      view: "Panoramic",
      image: "/images/moonlith.jpg",
      features: ["Private library", "Stone bath", "Butler entry"],
      height: "4.2m",
      architect: "David Chipperfield"
    },
    {
      id: "03",
      title: "Presidential Residence",
      size: "350 m²",
      view: "360°",
      image: "/images/presidental.avif",
      features: ["Private kitchen", "Boardroom for 12", "Private elevator"],
      height: "5.0m",
      architect: "Zaha Hadid"
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
    <section className="relative bg-[#EBE9E4] z-50 overflow-hidden">
      {/* Background Luxury Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#d6d1c4] opacity-20 blur-[180px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#d6d1c4] opacity-20 blur-[180px]" />
      </div>

      {/* Header */}
      <div className="relative px-10 md:px-24 pt-40 pb-32">
        <p className="tracking-[0.6em] text-[10px] text-[#B5A27A] mb-6">
          LITHOS GRAND
        </p>
        <h2 className="text-7xl md:text-8xl font-serif text-[#1a1a1a]">
          The Sanctuaries
        </h2>
        <div className="w-24 h-[1px] bg-[#B5A27A] mt-10" />
      </div>

      {rooms.map((room, index) => (
        <div
          key={room.id}
          data-index={index}
          ref={(el) => refs.current[index] = el}
          className="relative h-screen flex items-center px-10 md:px-24"
        >
          {/* Giant Background Number */}
          <div className="absolute right-20 text-[300px] font-serif text-black opacity-[0.03] pointer-events-none select-none">
            {room.id}
          </div>

          {/* Vertical Line */}
          <div className="absolute left-10 top-0 h-full w-[1px] bg-black opacity-10" />

          {/* LEFT CONTENT */}
          <div className="w-[45%] pr-20">
            <p className={`
              text-xs tracking-[0.4em] text-[#B5A27A] mb-8
              transition-all duration-700
              ${active === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}>
              {room.id}
            </p>

            <h3 className={`
              text-6xl md:text-7xl font-serif text-[#1a1a1a] mb-8
              transition-all duration-1000 delay-200
              ${active === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
            `}>
              {room.title}
            </h3>

            {/* ADDED: Luxury Specs Grid */}
            <div className={`
              grid grid-cols-2 gap-6 mb-8
              transition-all duration-1000 delay-300
              ${active === index ? "opacity-100" : "opacity-0"}
            `}>
              <div className="flex items-center gap-3">
                <FiAward className="text-[#B5A27A]/40" />
                <div>
                  <p className="text-[9px] tracking-wider text-black/30 uppercase">Architect</p>
                  <p className="text-sm text-black/70">{room.architect}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiCompass className="text-[#B5A27A]/40" />
                <div>
                  <p className="text-[9px] tracking-wider text-black/30 uppercase">Height</p>
                  <p className="text-sm text-black/70">{room.height}</p>
                </div>
              </div>
            </div>

            {/* ADDED: Features List */}
            <div className={`
              space-y-2 mb-8
              transition-all duration-1000 delay-400
              ${active === index ? "opacity-100" : "opacity-0"}
            `}>
              {room.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#B5A27A]/60 rounded-full" />
                  <p className="text-sm text-black/50">{feature}</p>
                </div>
              ))}
            </div>

            {/* Original Size & View */}
            <div className={`
              space-y-2 mb-8
              transition-all duration-1000 delay-300
              ${active === index ? "opacity-100" : "opacity-0"}
            `}>
              <div className="flex items-center gap-6">
                <p className="text-xs text-black/40 uppercase tracking-wider">Size</p>
                <p className="text-lg text-black/70">{room.size}</p>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-xs text-black/40 uppercase tracking-wider">View</p>
                <p className="text-lg text-black/70">{room.view}</p>
              </div>
            </div>

            {/* ADDED: Divider */}
            <div className={`
              w-16 h-[1px] bg-[#B5A27A]/30 mb-8
              transition-all duration-1000 delay-450
              ${active === index ? "opacity-100" : "opacity-0"}
            `} />

            {/* CTA */}
            <button className={`
              group flex items-center gap-3
              transition-all duration-1000 delay-500
              ${active === index ? "opacity-100" : "opacity-0"}
            `}>
              <span className="tracking-[0.3em] text-xs text-black/40 group-hover:text-[#B5A27A] transition-colors">
                INQUIRE
              </span>
              <FiArrowUpRight className="text-[#B5A27A]/60 group-hover:text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[55%] h-[80vh] relative overflow-hidden">
            <img
              src={room.image}
              className={`
                w-full h-full object-cover
                transition-all duration-[2000ms]
                ${active === index ? "scale-100" : "scale-110"}
              `}
            />

            {/* Glass overlay */}
            <div className={`
              absolute inset-0 backdrop-blur-md bg-white/10
              transition-all duration-[1500ms]
              ${active === index ? "opacity-0" : "opacity-100"}
            `} />

            {/* Light sweep */}
            <div className={`
              absolute top-0 left-[-100%] w-[50%] h-full
              bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12
              transition-all duration-[2000ms]
              ${active === index ? "left-[120%]" : ""}
            `} />

            <div className="absolute inset-6 border border-white/20" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Suites;