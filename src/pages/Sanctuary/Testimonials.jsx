import { useRef, useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Alexander Chen",
      title: "CEO, Global Capital Partners",
      text: "The Presidential Residence became our temporary headquarters during a critical acquisition. The privacy, security, and service were beyond compare.",
      rating: 5
    },
    {
      name: "Victoria Laurent",
      title: "Managing Director, European Holdings",
      text: "I've stayed at the finest hotels worldwide, but the Monolith Suite at LITHOS is exceptional. The limestone bath alone is worth the journey.",
      rating: 5
    },
    {
      name: "James Whitfield",
      title: "Chairman, Whitfield Industries",
      text: "For high-stakes negotiations, the secure meeting facilities and absolute discretion make LITHOS my only choice in the city.",
      rating: 5
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#EBE9E4] overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      {/* Giant Quotation Watermark - Responsive size */}
      <div className="absolute top-12 sm:top-16 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 text-[8rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-cormorant text-[#2C2C2C]/5 select-none pointer-events-none whitespace-nowrap">
        “
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 px-2 sm:px-4 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6">
            Voices of <span className="italic text-[#B5A27A]">Distinction</span>
          </h2>

          <div className="w-16 sm:w-18 md:w-20 h-[2px] bg-[#B5A27A] mx-auto" />
        </div>

        {/* Testimonial Card */}
        <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-1000 w-full ${
                activeIndex === idx
                  ? "opacity-100 translate-y-0 relative"
                  : "opacity-0 absolute inset-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16 text-center">

                {/* Rating */}
                <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  {[...Array(item.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-[#B5A27A] fill-[#B5A27A] text-base sm:text-lg"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-[#2C2C2C]/80 leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto px-2">
                  “{item.text}”
                </p>

                {/* Gold Divider */}
                <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-[#B5A27A] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8" />

                {/* Author */}
                <div>
                  <h4 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#2C2C2C] tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/40 mt-1 sm:mt-2 tracking-wider uppercase">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Slider Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="relative group"
            >
              <div
                className={`h-[2px] transition-all duration-500 ${
                  activeIndex === idx
                    ? "w-8 sm:w-10 md:w-12 bg-[#B5A27A]"
                    : "w-4 sm:w-5 md:w-6 bg-[#B5A27A]/30 group-hover:bg-[#B5A27A]/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;