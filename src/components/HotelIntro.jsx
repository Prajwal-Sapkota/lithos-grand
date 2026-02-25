import { useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function HotelIntro() {
  const sectionRef = useRef(null);
  const brandRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const reveal = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const trigger = window.innerHeight * 0.85;

      if (rect.top < trigger) {
        // Brand slides down
        brandRef.current.style.opacity = "0.05";
        brandRef.current.style.transform = "translateY(0) scale(1)";

        // Image slides up
        imageRef.current.style.opacity = "1";
        imageRef.current.style.transform = "translateY(0)";

        // Content slides up
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 lg:py-18 overflow-hidden bg-[#EBE9E4]"
    >
      {/* BRAND */}
      <h1
        ref={brandRef}
        className="absolute top-8 md:top-1 lg:-top-8 left-1/2 transform -translate-x-1/2 font-serif text-[clamp(40px,14vw,180px)] whitespace-nowrap text-black opacity-0 scale-90 pointer-events-none transition-all duration-[1600ms] ease-out"
        style={{ transform: "translate(-50%, -100%) scale(0.9)" }} // initial above screen
      >
        LITHOS GRAND
      </h1>


      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        {/* IMAGE */}
        <div
          ref={imageRef}
          className="opacity-0 translate-y-20 transition-all duration-[1400ms] ease-out order-1"
        >
          <img
            src="/images/intro1.avif"
            className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[520px] object-cover shadow-md"
          />
        </div>

        {/* TEXT */}
        <div
          ref={contentRef}
          className="opacity-0 translate-y-20 transition-all duration-[1400ms] ease-out delay-200 order-2 text-center lg:text-left"
        >
          <h2 className="text-7xl md:text-8xl leading-[1.05] font-serif text-neutral-900">
            MORE THAN
            <span className="italic block text-[#B5A27A] mt-2">
              A HOTEL
            </span>
          </h2>

          <p className="mt-8 text-neutral-600 leading-relaxed text-base text-justify">
            LITHOS GRAND exists beyond hospitality. It is an architectural landmark created for individuals who define industries, influence economies, and shape the future.
          </p>


          {/* CTA */}
          <div className="py-12 flex items-center justify-center lg:justify-start gap-6 group cursor-pointer">
            <span className="tracking-[0.25em] text-[10px] md:text-xs">
              EXPLORE THE COLLECTION
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 border border-[#B5A27A] flex items-center justify-center transition-all duration-500 group-hover:bg-[#B5A27A]">
              <FiArrowRight className="group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}