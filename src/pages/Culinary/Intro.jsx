import { useRef, useEffect, useState } from "react";
import { FiGlobe, FiMapPin } from "react-icons/fi";
import culinaryData from "../../data/culinary.json";

const Intro = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const { philosophy, restaurants } = culinaryData;

    const totalLocations = restaurants.reduce(
        (acc, r) => acc + r.locations.length,
        0
    );

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
            className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#ebe9e4] overflow-hidden"
        >
            {/* Ambient Luxury Glow - Smaller on mobile */}
            <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#B5A27A]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-[#2C2C2C]/5 blur-[100px] sm:blur-[140px] md:blur-[160px] rounded-full pointer-events-none" />
            
            <div className="max-w-[1400px] mx-auto relative z-10">

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT SIDE — PHILOSOPHY */}
                    <div className={`w-full transition-all duration-1000 order-2 lg:order-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}>

                        <span className="text-[#B5A27A] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase block mb-4 sm:mb-5 md:mb-6">
                            Culinary Philosophy
                        </span>

                        <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                            {philosophy.title}
                        </h2>

                        <p className="text-[#2C2C2C]/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8 md:mb-10">
                            {philosophy.description}
                        </p>

                        {/* Quote Block */}
                        <div className="relative pl-4 sm:pl-5 md:pl-6 lg:pl-8 border-l border-[#B5A27A]/40">
                            <p className="font-cormorant text-xl sm:text-2xl md:text-3xl italic text-[#2C2C2C]/80 leading-relaxed">
                                “{philosophy.quote}”
                            </p>
                            <p className="mt-2 sm:mt-3 md:mt-4 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#B5A27A]">
                                {philosophy.chef}
                            </p>
                        </div>

                        {/* Global Stats */}
                        <div className="flex gap-8 sm:gap-10 md:gap-12 mt-10 sm:mt-12 md:mt-14 lg:mt-16">

                            <div>
                                <div className="text-3xl sm:text-4xl font-cormorant text-[#2C2C2C]">
                                    {restaurants.length}
                                </div>
                                <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#B5A27A] mt-1 sm:mt-2">
                                    Restaurants
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl sm:text-4xl font-cormorant text-[#2C2C2C]">
                                    {totalLocations}
                                </div>
                                <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#B5A27A] mt-1 sm:mt-2">
                                    Global Locations
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE — ARCHITECTURAL IMAGE COMPOSITION */}
                    <div
                        className={`relative w-full transition-all duration-1000 delay-200 order-1 lg:order-2 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                            }`}
                    >
                        {/* Offset Decorative Frame - Responsive positioning */}
                        <div className="absolute -top-3 sm:-top-4 md:-top-6 lg:-top-10 -right-3 sm:-right-4 md:-right-6 lg:-right-10 w-full h-full border border-[#B5A27A]/20 pointer-events-none" />

                        {/* Vertical Gold Accent - Hidden on mobile */}
                        <div className="absolute -left-4 sm:-left-5 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 w-[1px] sm:w-[2px] h-20 sm:h-24 md:h-28 lg:h-40 bg-[#B5A27A] hidden lg:block" />

                        {/* Main Image Container */}
                        <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden bg-white shadow-[0_60px_120px_rgba(0,0,0,0.12)]">

                            {/* Image */}
                            <img
                                src={philosophy.image}
                                alt="Culinary Philosophy"
                                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2500ms] ease-out"
                            />

                            {/* Soft Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                            {/* Bottom Minimal Caption */}
                            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-10 left-4 sm:left-5 md:left-6 lg:left-10 right-4 sm:right-auto">
                                <div className="bg-white/80 backdrop-blur-md px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-5 border border-[#B5A27A]/20 shadow-xl">
                                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#B5A27A] mb-1 sm:mb-2">
                                        Crafted Globally
                                    </p>
                                    <p className="font-cormorant text-sm sm:text-base md:text-lg lg:text-2xl text-[#2C2C2C]">
                                        A Collection of Culinary Sanctuaries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global Experience Ribbon */}
                <div className={`mt-16 sm:mt-20 md:mt-24 lg:mt-32 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}>
                    <div className="bg-white border border-[#B5A27A]/20 p-6 sm:p-8 md:p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.05)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                        {restaurants.map((restaurant) => (
                            <div key={restaurant.id} className="space-y-2 sm:space-y-3 md:space-y-4">
                                <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#B5A27A]">
                                    {restaurant.globalConcept}
                                </p>
                                <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#2C2C2C]">
                                    {restaurant.name}
                                </h3>
                                <p className="text-[10px] sm:text-xs md:text-sm text-[#2C2C2C]/60 leading-relaxed">
                                    {restaurant.description}
                                </p>
                                <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#2C2C2C]/40">
                                    Available in {restaurant.locations.length} global destinations
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;