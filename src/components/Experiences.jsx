import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Experiences = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const experiences = [
    {
      id: "01",
      title: "Romantic Stays",
      desc: "From quiet mornings to lingering sunsets, romance unfolds in its own rhythm.",
      image: "/images/romantic.jpg",
      tagline: "Timeless moments for two",
    },
    {
      id: "02",
      title: "Weddings",
      desc: "A celebration of love that feels timeless in spirit and unforgettable in experience.",
      image: "/images/wedding.webp",
      tagline: "Your day, carved in stone",
    },
    {
      id: "03",
      title: "Holidays",
      desc: "Relaxing beach paradises, exotic hill stations, and historic homes of royalty.",
      image: "/images/holiday.webp",
      tagline: "Escape to the extraordinary",
    },
    {
      id: "04",
      title: "Daycation",
      desc: "Experience LITHOS for the day. Pool access, spa rituals, and fine dining.",
      image: "/images/daycation.jpg",
      tagline: "A day well spent",
    },
    {
      id: "05",
      title: "Corporate Retreats",
      desc: "State-of-the-art boardrooms, team-building experiences, and complete privacy.",
      image: "/images/corporateretreats.jpg",
      tagline: "Where strategy meets silence",
    },
    {
      id: "06",
      title: "Wellness Weekends",
      desc: "Personal trainers, nutritionists, and ancient healing rituals. Complete renewal.",
      image: "/images/weekend.webp",
      tagline: "Recharge, rebalance, return",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* TITLE SECTION - Refined spacing */}
      <section className="bg-[#EBE9E4] py-18 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div
            className={`transition-all duration-[1500ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#B5A27A]/60" />
              <span className="font-public-sans text-[9px] tracking-[0.6em] text-[#B5A27A] uppercase">
                MOMENTS FOR YOU
              </span>
            </div>
            <h2 className="font-cormorant text-7xl md:text-8xl text-[#2C2C2C] leading-[0.9]">
              Curated <span className="text-[#B5A27A] italic">Experiences</span>
            </h2>
            
          </div>
        </div>
      </section>

      {/* IMAGE SLIDER SECTION - Refined */}
      <section
        ref={sectionRef}
        className="relative h-[80vh] overflow-hidden"
        style={{ zIndex: 20 }}
      >
        {/* SOLID BACKGROUND LAYER */}
        <div className="absolute inset-0 bg-[#EBE9E4] z-10" />

        {/* BACKGROUND IMAGE with subtle overlay */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out z-20 brightness-50 ${
              activeIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover"
            />
            {/* More subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
          </div>
        ))}

        {/* CONTENT - Perfectly centered with refined spacing */}
        <div className="absolute inset-0 flex items-center z-50">
          <div className="w-full max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* LEFT - Active Content */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`transition-all duration-1000 ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0 block"
                        : "opacity-0 translate-y-10 hidden"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                     
                      <div className="w-12 h-[1px] bg-[#B5A27A]/40" />
                      <span className="font-public-sans text-[12px] tracking-[0.3em] text-white/60 uppercase">
                        {exp.tagline}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-6xl md:text-7xl text-white mb-6">
                      {exp.title}
                    </h3>
                    <p className="font-public-sans text-base text-white/70 leading-relaxed max-w-lg">
                      {exp.desc}
                    </p>
                    <button className="group flex items-center gap-3 mt-8 cursor-pointer">
                      <span className="font-public-sans text-[18px] tracking-[0.3em] text-white/60 group-hover:text-[#B5A27A] uppercase transition-colors">
                        Discover More
                      </span>
                      <FiArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </button>
                  </div>
                ))}
              </div>

              {/* RIGHT - Navigation Dots */}
              <div className="flex md:flex-col gap-4 md:items-end">
                <div className="flex md:flex-col gap-3">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-[2px] transition-all duration-500 cursor-pointer ${
                        activeIndex === index
                          ? "w-12 bg-[#B5A27A]"
                          : "w-6 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/10 z-50 pointer-events-none" />
      </section>
    </>
  );
};

export default Experiences;