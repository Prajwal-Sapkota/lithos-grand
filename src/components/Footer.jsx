import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer
            ref={ref}
            className="relative bg-[#2C2C2C] text-white pt-12 md:pt-18 pb-6 md:pb-8 overflow-hidden z-20"
        >
            <div className="absolute inset-0 hidden md:flex items-center justify-center overflow-hidden pointer-events-none">
                <h2 className="text-[14vw] leading-none text-white/3 font-light whitespace-nowrap">
                    LITHOS GRAND
                </h2>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                {/* TOP AREA - Stack on mobile */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
                    {/* COLUMN 1 - Philosophy & Newsletter */}
                    <div className={`transition-all duration-[1500ms] order-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        }`}>
                        <div className="bg-white p-3 md:p-4 shadow-lg inline-block mb-4">
                            <img
                                src="/images/logo.png"
                                alt="LITHOS GRAND"
                                className="h-8 md:h-10 lg:h-12"
                            />
                        </div>
                        <h3 className="font-cormorant text-xl md:text-2xl lg:text-3xl text-white mb-4 md:mb-6">
                            A World Beyond Arrival
                        </h3>
                        <p className="font-public-sans text-white/50 text-xs sm:text-sm leading-relaxed mb-6 md:mb-10">
                            Twelve destinations. One philosophy. The architecture of presence continues beyond every stay.
                        </p>

                        {/* NEWSLETTER */}
                        <div className="mb-6 md:mb-0">
                            <p className="font-public-sans text-[8px] md:text-[9px] tracking-[0.3em] mb-3 md:mb-4 text-white/40 uppercase">
                                Join Our Community
                            </p>
                            <div className="flex border-b border-white/20 pb-2 md:pb-3 group">
                                <input
                                    placeholder="Email address"
                                    className="bg-transparent outline-none flex-1 placeholder:text-white/30 font-public-sans text-xs sm:text-sm"
                                />
                                <FiArrowUpRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition w-4 h-4" />
                            </div>
                        </div>

                        {/* SOCIAL MEDIA LINKS */}
                        <div className="flex items-center gap-4 md:gap-6 mt-6 md:mt-8">
                            <Link href="https://instagram.com/lithosgrand" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#B5A27A] transition-colors">
                                <FiInstagram className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                            <Link href="https://linkedin.com/company/lithos-grand" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#B5A27A] transition-colors">
                                <FiLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                            <Link href="https://twitter.com/lithosgrand" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#B5A27A] transition-colors">
                                <FiTwitter className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                            <Link href="https://facebook.com/lithosgrand" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#B5A27A] transition-colors">
                                <FiFacebook className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* COLUMN 2 - Quick Links */}
                    <div className={`transition-all duration-[1500ms] delay-150 order-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        }`}>
                        <p className="font-public-sans text-[8px] md:text-[9px] tracking-[0.3em] text-white/40 mb-4 md:mb-6 uppercase">
                            Quick Links
                        </p>
                        <div className="space-y-3 md:space-y-4">
                            {[
                                "The Collection",
                                "Sanctuaries",
                                "Boardroom",
                                "Gastronomy",
                                "Wellness",
                                "Experiences"
                            ].map((link, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-white/10 pb-2 md:pb-3 group cursor-pointer"
                                >
                                    <span className="font-public-sans text-xs sm:text-sm md:text-base text-white/70 group-hover:text-white transition">
                                        {link}
                                    </span>
                                    <FiArrowUpRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition w-3 h-3 md:w-4 md:h-4" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 3 - Our Brands */}
                    <div className={`transition-all duration-[1500ms] delay-300 order-3 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                        }`}>
                        <p className="font-public-sans text-[8px] md:text-[9px] tracking-[0.3em] text-white/40 mb-4 md:mb-6 uppercase">
                            Our Brands
                        </p>
                        <div className="space-y-3 md:space-y-4">
                            {[
                                "LITHOS Hotels",
                                "LITHOS Residences",
                                "INK & EMBERS",
                                "The Limestone Spa",
                                "LITHOS Private Collection",
                                "The Inner Circle"
                            ].map((brand, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-white/10 pb-2 md:pb-3 group cursor-pointer"
                                >
                                    <span className="font-public-sans text-xs sm:text-sm md:text-base text-white/70 group-hover:text-white transition">
                                        {brand}
                                    </span>
                                    <FiArrowUpRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition w-3 h-3 md:w-4 md:h-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM AREA */}
                <div className="border-t border-white/10 pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                    <p className="font-public-sans text-white/30 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
                        © 2026 Lithos Grand International. All rights reserved.
                    </p>

                    <p className="font-public-sans text-white/40 text-xs sm:text-sm hover:text-white/60 transition text-center md:text-right order-1 md:order-2">
                        Crafted by:{' '}
                        <Link
                            to="https://www.sait.com.np/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white border-b border-white/20 pb-0.5"
                        >
                            S.A.I.T Solution Nepal
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;