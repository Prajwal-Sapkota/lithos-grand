import { useRef, useEffect, useState } from "react";

const Intro = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const intro = {
        title: "We Welcome Your Inquiry",
        description: "Whether you seek sanctuary, wish to plan a journey, or simply want to learn more about the LITHOS GRAND philosophy, our team is here to assist with grace and discretion.",
        image: "/images/contact.jpg"
    };

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

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4]">
            <div className="max-w-[1400px] mx-auto">
                <div className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transition-all duration-1000 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}>
                    {/* Content - Order changes on mobile */}
                    <div className="order-2 md:order-1">
                        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                            {intro.title}
                        </h2>
                        <p className="text-[#2C2C2C]/70 text-sm sm:text-base md:text-lg leading-relaxed">
                            {intro.description}
                        </p>
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden order-1 md:order-2">
                        <img
                            src={intro.image}
                            alt={intro.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 xl:inset-6 border border-[#B5A27A]/40 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;