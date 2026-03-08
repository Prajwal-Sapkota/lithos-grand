import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Experience = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const experiences = [
    {
      title: "Private Dining",
      description: "Personal chef service in your suite with custom menus",
      image: "/images/privatedining.jpg"
    },
    {
      title: "Corporate Meetings",
      description: "Fully equipped boardroom with secure communications",
      image: "/images/corporatemeeting.jpg"
    },
    {
      title: "Wellness Sessions",
      description: "In-suite massage and personal training",
      image: "/images/wellness1.jpg"
    },
    {
      title: "City Tours",
      description: "Private chauffeured tours with personal guide",
      image: "/images/citytour.webp"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#EBE9E4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 px-2 sm:px-4 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6 leading-tight">
            Curated <span className="italic text-[#B5A27A]">Experiences</span>
          </h2>

          <div className="w-16 sm:w-18 md:w-20 h-[2px] bg-[#B5A27A] mx-auto mb-4 sm:mb-5 md:mb-6" />

          <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Immersive, private, and meticulously designed experiences crafted exclusively for our guests.
          </p>
        </div>

        {/* Asymmetrical Layout - Stacks on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-0">

          {/* Large Featured Card - Full width on mobile */}
          <div
            className={`lg:col-span-2 group relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[560px] overflow-hidden transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={experiences[0].image}
              alt={experiences[0].title}
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Floating Glass Panel - Responsive positioning and sizing */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-4 sm:left-6 md:left-8 lg:left-10 right-4 sm:right-auto max-w-sm md:max-w-md backdrop-blur-xl bg-white/10 border border-white/20 p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3 md:mb-4">
                {experiences[0].title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6">
                {experiences[0].description}
              </p>

              <div className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm tracking-widest text-white group-hover:text-[#B5A27A] transition-colors">
                DISCOVER
                <FiArrowUpRight className="text-sm sm:text-base md:text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* Right Stacked Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-10">
            {experiences.slice(1).map((exp, index) => (
              <div
                key={index}
                className={`group relative h-[120px] sm:h-[140px] md:h-[150px] lg:h-[160px] overflow-hidden transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

                <div className="absolute left-3 sm:left-4 md:left-5 lg:left-6 top-1/2 -translate-y-1/2 text-white right-20 sm:right-auto">
                  <h3 className="font-cormorant text-base sm:text-lg md:text-xl lg:text-2xl mb-0.5 sm:mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/70 text-[10px] sm:text-xs md:text-sm max-w-[180px] sm:max-w-[220px] md:max-w-xs">
                    {exp.description}
                  </p>
                </div>

                {/* Gold Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2px] sm:h-[3px] w-0 bg-[#B5A27A] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;