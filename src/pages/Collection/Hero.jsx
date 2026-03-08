import { useEffect, useState } from "react";
import collectionData from "../../data/collection.json";

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const { hero, cities } = collectionData;

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#2C2C2C]">
            {/* Static Background Image */}
            <div className="absolute inset-0">
                <img
                    src={hero.image}
                    alt={hero.title}
                    className="w-full h-full object-cover transition-opacity duration-[2000ms]"
                    style={{
                        opacity: loaded ? 1 : 0
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 h-full flex items-end pb-12 sm:pb-16 md:pb-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full">
                    <div className={`text-left max-w-3xl transition-all duration-[1500ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Title - Responsive sizing */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2 sm:mb-3 md:mb-4 font-light leading-tight">
                            {hero.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* City Crawler at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-sm border-t border-white/10">
                <div className="overflow-hidden py-2 sm:py-3 md:py-4">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {/* Duplicate cities for seamless loop */}
                        {[...cities, ...cities, ...cities].map((city, index) => (
                            <span
                                key={`${city.id}-${index}`}
                                className="inline-flex items-center mx-4 sm:mx-6 md:mx-8 text-white/40 text-[10px] sm:text-xs md:text-sm tracking-wider"
                            >
                                <span className="text-[#B5A27A] mr-1 sm:mr-2 md:mr-3">✦</span>
                                {city.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Corners - Hide on smallest screens */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t border-l border-white/10 hidden xs:block" />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t border-r border-white/10 hidden xs:block" />

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
                /* Extra small screen breakpoint */
                @media (min-width: 480px) {
                    .xs\\:block {
                        display: block;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;