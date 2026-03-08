// src/components/journal/StoriesGrid.jsx
import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import journalData from "../../data/journal.json";

const StoriesGrid = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const stories = journalData?.stories || [];
  const categories = ["All", ...new Set(stories.map(s => s.category))];
  
  const filteredStories = selectedCategory === "All"
    ? stories
    : stories.filter(s => s.category === selectedCategory);

  const [featuredStory, ...otherStories] = filteredStories;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!stories.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Glow Background - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* SECTION HEADER */}
        <div className={`mb-10 sm:mb-12 md:mb-14 lg:mb-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-[1px] bg-[#B5A27A]" />
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] text-[#B5A27A] uppercase">
              The Journal
            </span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] leading-[1.1]">
            Curated <span className="italic text-[#B5A27A]">Perspectives</span>
          </h2>
        </div>

        {/* CATEGORY FILTER - Minimal Elite Style */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-10 mb-10 sm:mb-12 md:mb-14 lg:mb-16 border-b border-[#B5A27A]/20 pb-4 sm:pb-5 md:pb-6 transition-all duration-1000 delay-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? "text-[#B5A27A]"
                  : "text-[#2C2C2C]/80 hover:text-[#B5A27A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED STORY - Hero Style */}
        {featuredStory && (
          <div
            onClick={() => navigate(`/journal/${featuredStory.slug}`)}
            className="group cursor-pointer mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.12)]">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-105"
              />

              {/* Gold Frame - Responsive inset */}
              <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-8 border border-[#B5A27A]/40 pointer-events-none" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Content Overlay - Responsive positioning */}
              <div className="absolute bottom-4 sm:bottom-5 md:bottom-8 lg:bottom-10 xl:bottom-16 left-4 sm:left-5 md:left-8 lg:left-10 xl:left-16 right-4 sm:right-auto max-w-xl sm:max-w-2xl lg:max-w-3xl text-white">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase text-[#B5A27A]">
                  {featuredStory.category}
                </span>

                <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6">
                  {featuredStory.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 text-[10px] sm:text-xs md:text-sm text-white/70">
                  <span>{featuredStory.date}</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FiClock className="text-xs sm:text-sm" />
                    <span>{featuredStory.readTime}</span>
                  </div>
                </div>

                <button className="group/btn inline-flex items-center gap-1 sm:gap-2 lg:gap-3 mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 border-b border-white/30 pb-1 sm:pb-2">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-white/70 group-hover/btn:text-[#B5A27A] transition-colors">
                    Read Full Story
                  </span>
                  <FiArrowUpRight className="text-white text-sm sm:text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3-COLUMN GRID - Other Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-14">
          {otherStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => navigate(`/journal/${story.slug}`)}
              className="group cursor-pointer"
            >
              <div className="relative h-[220px] sm:h-[250px] md:h-[280px] lg:h-[320px] xl:h-[380px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                />

                {/* Gold Frame - Responsive inset */}
                <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#B5A27A]/30 pointer-events-none" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 md:top-5 lg:top-6 left-3 sm:left-4 md:left-5 lg:left-6">
                  <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase">
                    {story.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 right-3 sm:right-4 md:right-5 lg:right-6 flex items-center gap-1 sm:gap-2 text-white/60 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">
                  <FiClock className="text-xs" />
                  <span>{story.readTime}</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8">
                <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#2C2C2C] group-hover:text-[#B5A27A] transition-colors leading-tight">
                  {story.title}
                </h3>

                <p className="text-[#2C2C2C]/50 text-xs sm:text-sm mt-2 sm:mt-3 md:mt-4 leading-relaxed line-clamp-3">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#2C2C2C]/40">
                    {story.date}
                  </span>

                  <button className="group/btn inline-flex items-center gap-1 sm:gap-2">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase text-[#2C2C2C]/40 group-hover/btn:text-[#B5A27A] transition-colors">
                      Explore
                    </span>
                    <FiArrowUpRight className="text-[#B5A27A] text-xs sm:text-sm group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesGrid;