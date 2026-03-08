import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import culinaryData from "../../data/culinary.json";

const RestaurantConcepts = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { restaurants } = culinaryData;

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
      className="relative bg-[#ebe9e4] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        {/* HEADER */}
        <div
          className={`text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] text-[#B5A27A] uppercase">
            Our Culinary Portfolio
          </span>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-8">
            Three <span className="italic text-[#B5A27A]">World-Class</span> Concepts
          </h2>
        </div>

        {/* CONCEPT SECTIONS */}
        <div className="space-y-24 sm:space-y-24 md:space-y-26 lg:space-y-28">

          {restaurants.map((restaurant, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={restaurant.id}
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center transition-all duration-1000 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* IMAGE SIDE */}
                <div
                  className={`relative w-full ${
                    isReverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute -top-3 sm:-top-4 md:-top-5 lg:-top-10 -left-3 sm:-left-4 md:-left-5 lg:-left-10 w-full h-full border border-[#B5A27A]/20" />

                  <div className="relative h-[300px] sm:h-[350px] md:h-[380px] lg:h-[420px] overflow-hidden shadow-lg group cursor-pointer"
                       onClick={() => navigate(`/culinary/${restaurant.slug}`)}
                  >
                    <img
                      src={restaurant.globalImage}
                      alt={restaurant.name}
                      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Large Typography Overlay - Responsive */}
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-16 left-4 sm:left-6 md:left-10 lg:left-16 text-white right-4 sm:right-auto">
                      <span className="text-[#B5A27A] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase block mb-2 sm:mb-3 md:mb-4">
                        {restaurant.globalConcept}
                      </span>
                      <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        {restaurant.name}
                      </h3>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 sm:top-5 md:top-6 lg:top-10 right-4 sm:right-5 md:right-6 lg:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#B5A27A] rounded-full flex items-center justify-center">
                        <FiArrowUpRight className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div className={`w-full ${isReverse ? "lg:order-1" : ""}`}>

                  {/* Decorative Line */}
                  <div className="w-12 sm:w-14 md:w-16 lg:w-20 h-[2px] bg-[#B5A27A] mb-4 sm:mb-5 md:mb-6 lg:mb-8" />

                  <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-xl">
                    {restaurant.description}
                  </p>

                  <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-6 sm:mb-7 md:mb-8 lg:mb-10">

                    <div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-cormorant text-[#2C2C2C]">
                        {restaurant.locations.length}
                      </div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#B5A27A] mt-1 sm:mt-2">
                        Global Locations
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-cormorant text-[#2C2C2C]">
                        {restaurant.signatureDishes.length}
                      </div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#B5A27A] mt-1 sm:mt-2">
                        Signature Dishes
                      </div>
                    </div>

                  </div>

                  <button
                    onClick={() => navigate(`/culinary/${restaurant.slug}`)}
                    className="group inline-flex items-center gap-2 sm:gap-3 text-[#B5A27A] hover:text-[#2C2C2C] transition-colors"
                  >
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
                      Discover Concept
                    </span>
                    <FiArrowUpRight className="text-sm sm:text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default RestaurantConcepts;