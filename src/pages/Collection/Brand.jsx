import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import collectionData from "../../data/collection.json";

const Brand = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { brands } = collectionData;

  const categories = ["all", ...new Set(brands.map(b => b.category))];

  const filteredBrands = activeCategory === "all" 
    ? brands 
    : brands.filter(b => b.category === activeCategory);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#EBE9E4] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #2C2C2C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Ambient Luxury Glow - Smaller on mobile */}
      <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-12 sm:space-y-14 md:space-y-16">
        {/* Header */}
        <div className="text-center px-2 sm:px-4">
          <span className="font-public-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.4em] sm:tracking-[0.45em] md:tracking-[0.5em] text-[#B5A27A] uppercase block mb-3 sm:mb-4">
            LITHOS GRAND
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-3 sm:mb-4 px-2">
            Our <span className="italic text-[#B5A27A]">Brands</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-[1px] bg-[#B5A27A]/40 mx-auto" />
        </div>

        {/* Category Filters - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto pb-4 sm:pb-0 hide-scrollbar">
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 px-2 sm:px-0 min-w-min">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#B5A27A] text-white'
                    : 'bg-white text-[#2C2C2C]/40 border border-[#B5A27A]/20 hover:text-[#B5A27A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 px-2 sm:px-0">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => window.open(brand.website, '_blank')}
              className="group cursor-pointer"
            >
              <div className="relative h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden mb-4 sm:mb-5">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 md:top-5 left-3 sm:left-4 md:left-5 bg-white/95 px-3 sm:px-4 py-1.5 sm:py-2">
                  <span className="text-[#B5A27A] text-[8px] sm:text-[9px] md:text-[10px] tracking-wider uppercase">
                    {brand.category}
                  </span>
                </div>

                {/* Brand Info */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-3 sm:left-4 md:left-5 text-white right-3 sm:right-4 md:right-5">
                  <h3 className="font-cormorant text-xl sm:text-2xl mb-1 sm:mb-2">{brand.name}</h3>
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-white/70 flex-wrap">
                    <span>{brand.properties} Properties</span>
                    <span className="w-1 h-1 bg-[#B5A27A] rounded-full flex-shrink-0" />
                    <span>Est. {brand.established}</span>
                  </div>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-[#B5A27A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FiExternalLink className="text-white text-sm sm:text-base" />
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-[#2C2C2C]/50 leading-relaxed px-1">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
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

export default Brand;