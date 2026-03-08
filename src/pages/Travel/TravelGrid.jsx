import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import travelData from "../../data/travel.json";
import { Link } from "react-router-dom";

const TravelGrid = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { stories } = travelData;

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

  if (!stories || stories.length === 0) return null;

  const [mainStory, ...otherStories] = stories;

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Glow - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-250px] right-[-200px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] bg-[#B5A27A]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] lg:blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Section Heading */}
        <div className="relative mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 text-center  ">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A]">
            Travel Journal
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-8">
            Curated Experiences
          </h2>
<div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] mt-4 sm:mt-5 md:mt-6 lg:mt-8 mx-auto" />        </div>

        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">

          
            <Link
              to={mainStory.link}
              className="lg:col-span-7 group relative w-full"
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.18)]">

                <img
                  src={mainStory.image}
                  alt={mainStory.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />

                {/* Inner Frame - Responsive inset */}
                <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 xl:inset-6 2xl:inset-8 border border-[#B5A27A]/40 pointer-events-none" />
              </div>

              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 max-w-2xl">
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase text-[#B5A27A]">
                  {mainStory.theme}
                </span>

                <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-[#2C2C2C] mt-2 sm:mt-3 md:mt-4">
                  {mainStory.title}
                </h3>

                <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4">
                  {mainStory.excerpt}
                </p>

                <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 flex items-center gap-2 sm:gap-3 text-[#B5A27A]">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase">
                    Read Story
                  </span>
                  <FiArrowUpRight className="text-sm sm:text-base" />
                </div>
              </div>
            </Link>


            <div className="lg:col-span-5 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center">
              {otherStories.slice(0, 3).map((story, index) => (
                <Link
                  key={story.id}
                  to={story.link}
                  className="group block w-full"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6">

                    <div className="sm:col-span-2 relative h-[120px] sm:h-[140px] md:h-[160px] w-full sm:w-[40%] flex-shrink-0 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-1 sm:inset-2 md:inset-3 lg:inset-4 border border-[#B5A27A]/30 pointer-events-none" />
                    </div>

                    <div className="sm:col-span-3 w-full sm:w-[60%] text-center sm:text-left">
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] uppercase text-[#B5A27A]">
                        {story.theme}
                      </span>

                      <h4 className="font-cormorant text-base sm:text-lg md:text-xl text-[#2C2C2C] mt-1 sm:mt-2">
                        {story.title}
                      </h4>

                      <div className="mt-2 sm:mt-3 flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-[#B5A27A] text-xs sm:text-sm">
                        <span>Read</span>
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index !== 2 && (
                    <div className="w-full h-px bg-[#B5A27A]/20 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-10" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGrid;