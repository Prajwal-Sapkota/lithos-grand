import { useEffect, useState } from "react";
import journalData from "../../data/journal.json";

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const { hero, stories } = journalData;

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-full overflow-hidden bg-[#2C2C2C]">
            {/* Static Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <img
                    src={hero.image}
                    alt={hero.title}
                    className="w-full h-full object-cover transition-opacity duration-[2000ms]"
                    style={{
                        opacity: loaded ? 1 : 0
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-end pb-16 sm:pb-20 md:pb-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full">
                    <div className={`max-w-3xl transition-all duration-[1500ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        
                        {/* Title - Responsive sizes */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-3 sm:mb-4 font-light leading-tight">
                            {hero.title}
                        </h1>
                        
                    </div>
                </div>
            </div>

            {/* Decorative Corners - Hide on smallest screens, adjust size */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-l-2 border-white/10 hidden xs:block" />
            <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-r-2 border-white/10 hidden xs:block" />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-l-2 border-white/10 hidden xs:block" />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-r-2 border-white/10 hidden xs:block" />

            <style jsx>{`
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