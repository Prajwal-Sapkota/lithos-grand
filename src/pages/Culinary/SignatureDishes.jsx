import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiStar, FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import culinaryData from "../../data/culinary.json";

const SignatureDishes = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState("the-ember-room");
  const [activeIndex, setActiveIndex] = useState(0);
  const { restaurants } = culinaryData;

  const activeRestaurant = restaurants.find(r => r.id === selectedRestaurant) || restaurants[0];
  const dishes = activeRestaurant.signatureDishes || [];

  const nextDish = () => {
    setActiveIndex((prev) => (prev + 1) % dishes.length);
  };

  const prevDish = () => {
    setActiveIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Reset active index when restaurant changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedRestaurant]);

  const activeDish = dishes[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#ebe9e4] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

        {/* HEADER */}
        <div
          className={`text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] text-[#B5A27A] uppercase">
            Signature Dishes
          </span>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-8 leading-[1.1]">
            Culinary <span className="italic text-[#B5A27A]">Masterpieces</span>
          </h2>
        </div>

        {/* RESTAURANT SELECTOR - Luxury Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {restaurants.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRestaurant(r.id)}
              className={`relative px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden group ${
                selectedRestaurant === r.id
                  ? "text-white"
                  : "text-[#2C2C2C]/40 hover:text-[#B5A27A]"
              }`}
            >
              <span className="relative z-10 whitespace-nowrap">{r.name}</span>
              {selectedRestaurant === r.id && (
                <div className="absolute inset-0 bg-[#B5A27A]" />
              )}
            </button>
          ))}
        </div>

        {/* ACTIVE RESTAURANT NAME - Floating */}
        <div
          className={`text-center  transition-all duration-1000 delay-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          
        </div>

        {/* MAIN DISPLAY - Cinematic Layout */}
        {dishes.length > 0 && (
          <div className="relative px-8 sm:px-10 md:px-12 lg:px-0">
            {/* Navigation Arrows - Hide on mobile, show from sm up */}
            <button
              onClick={prevDish}
              className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white shadow-xl border border-[#B5A27A]/20 flex items-center justify-center hover:bg-[#B5A27A] hover:text-white transition-all duration-300"
            >
              <FiChevronLeft className="text-base sm:text-lg md:text-xl lg:text-2xl" />
            </button>
            
            <button
              onClick={nextDish}
              className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white shadow-xl border border-[#B5A27A]/20 flex items-center justify-center hover:bg-[#B5A27A] hover:text-white transition-all duration-300"
            >
              <FiChevronRight className="text-base sm:text-lg md:text-xl lg:text-2xl" />
            </button>

            {/* Main Dish Display */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative group w-full">
                <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
                  <img
                    src={activeDish.image}
                    alt={activeDish.name}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Bronze Frame - Responsive inset */}
                  <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 border border-[#B5A27A]/40 pointer-events-none" />
                  
                  {/* Location Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-8 left-3 sm:left-4 md:left-5 lg:left-8 flex items-center gap-1 sm:gap-2 bg-black/50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-white/20">
                    <FiMapPin className="text-[#B5A27A] text-xs sm:text-sm" />
                    <span className="text-white text-[10px] sm:text-xs md:text-sm">
                      {activeDish.availableIn?.length || 12} Locations
                    </span>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 w-full">
                {/* Dish Number */}
                <span className="text-[#B5A27A] text-[8px] sm:text-[9px] md:text-[10px] lg:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(dishes.length).padStart(2, "0")}
                </span>

                {/* Dish Name */}
                <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] leading-[1.1]">
                  {activeDish.name}
                </h3>

                {/* Description */}
                <p className="text-[#2C2C2C]/50 text-sm sm:text-base md:text-lg leading-relaxed">
                  {activeDish.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {activeDish.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white border border-[#B5A27A]/20 text-[#2C2C2C]/60 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(`/culinary/${activeRestaurant.slug}/dish/${activeDish.id}`)}
                  className="group inline-flex items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-8 border-b border-[#B5A27A]/40 pb-1 sm:pb-2 md:pb-3"
                >
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-sm tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#2C2C2C]/40 group-hover:text-[#B5A27A] transition-colors">
                    VIEW FULL DETAILS
                  </span>
                  <FiArrowUpRight className="text-[#B5A27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-sm sm:text-base" />
                </button>
              </div>
            </div>

            {/* Dish Thumbnails */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-10 sm:mt-12 md:mt-14 lg:mt-20 overflow-x-auto pb-2">
              {dishes.map((dish, idx) => (
                <button
                  key={dish.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 transition-all duration-500 overflow-hidden ${
                    idx === activeIndex
                      ? 'scale-105 sm:scale-110 ring-1 sm:ring-2 ring-[#B5A27A] z-10'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <div className="w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-14 lg:w-20 lg:h-16">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignatureDishes;