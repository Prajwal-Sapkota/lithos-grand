import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  {
    name: "THE COLLECTION",
    mega: true,
    items: ["Paris", "London", "Tokyo", "Dubai", "New York", "Zurich", "Singapore", "Geneva"],
  },
  { name: "SANCTUARIES" },
  { name: "THE BOARDROOM" },
  { name: "CULINARY ATELIER" },
  { name: "THE JOURNAL" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Initial drop effect with useRef
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse enter with clear timeout
  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(index);
  };

  // Handle mouse leave with delay to allow moving to dropdown
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 200);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 flex justify-center pt-6 px-4 transition-all duration-700 ${scrolled ? "pt-3" : "pt-6"}`}>
        <nav
          ref={navbarRef}
          className={`
            w-full max-w-[1400px] flex justify-between items-center px-4 md:px-6 lg:px-8 py-4 rounded-full
            backdrop-blur-xl bg-[#EBE9E4]/70 border border-[#8C6A3B]/20
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            transition-all duration-700
            ${scrolled ? "py-3 bg-[#EBE9E4]/90" : "py-4"}
          `}
          style={{
            opacity: navbarVisible ? 1 : 0,
            transform: navbarVisible ? "translateY(0)" : "translateY(-40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease, background-color 0.7s ease, padding 0.7s ease"
          }}
        >
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="LITHOS GRAND"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="h-[30px] md:h-[34px] cursor-pointer transition-transform duration-300 hover:scale-105"
          />

          {/* Desktop Menu - Hidden on tablet, show on lg */}
          <div className="hidden lg:flex gap-8 xl:gap-12 relative">
            {navItems.map((nav, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <span className="cursor-pointer text-[12px] xl:text-[14px] tracking-[0.18em] text-[#1A1A1A] transition-colors duration-300 hover:text-[#8C6A3B] whitespace-nowrap">
                  {nav.name}
                </span>

                {/* Bronze Line */}
                <div
                  className={`absolute -bottom-2 left-0 right-0 h-[1px] bg-[#8C6A3B] transition-all duration-300 ${hovered === index ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
                />

                {/* Mega Menu */}
                {nav.mega && hovered === index && (
                  <div
                    ref={dropdownRef}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-10 left-1/2 -translate-x-1/2 bg-white shadow-xl p-6 xl:p-8 grid grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-3 xl:gap-y-4 min-w-[350px] xl:min-w-[400px] rounded-sm"
                    style={{
                      animation: "fadeInUp 0.3s ease-out forwards",
                    }}
                  >
                    {nav.items.map((city, i) => (
                      <div
                        key={i}
                        className="text-[12px] xl:text-[14px] tracking-[0.15em] text-[#2C2C2C]/70 hover:text-[#8C6A3B] cursor-pointer whitespace-nowrap transition-colors duration-300"
                      >
                        {city}
                      </div>
                    ))}
                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#8C6A3B]/20" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#8C6A3B]/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Hidden on tablet, show on lg */}
          <button
            className="hidden lg:block border border-[#8C6A3B] px-5 xl:px-6 py-2 tracking-[0.18em] rounded-full text-[12px] xl:text-[14px] transition-all duration-300 hover:bg-[#8C6A3B] hover:text-white whitespace-nowrap cursor-pointer"
          >
            RESERVE YOUR STAY
          </button>

          {/* Mobile/Tablet Menu Icon - Show on lg and below */}
          <FiMenu
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#EBE9E4] flex flex-col justify-center items-center z-50 transition-all duration-500 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{
          transition: "opacity 0.5s ease, visibility 0.5s ease"
        }}
      >
        <FiX
          className="absolute top-8 right-8 text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
          onClick={() => setMobileOpen(false)}
        />

        {navItems.map((nav, i) => (
          <div
            key={i}
            className="text-2xl md:text-3xl mb-6 md:mb-8 tracking-[0.2em] cursor-pointer transition-all duration-300 hover:text-[#8C6A3B] hover:translate-x-2"
            style={{
              transition: "color 0.3s ease, transform 0.3s ease",
              animation: mobileOpen ? `fadeInUp 0.5s ease-out ${i * 0.1}s forwards` : "none",
              opacity: 0,
              transform: "translateY(20px)"
            }}
          >
            {nav.name}
          </div>
        ))}

        <button
          className="border border-[#8C6A3B] px-6 md:px-8 py-3 tracking-[0.2em] rounded-full transition-all duration-300 hover:bg-[#8C6A3B] hover:text-white text-sm md:text-base"
          style={{
            animation: mobileOpen ? "fadeInUp 0.5s ease-out 0.5s forwards" : "none",
            opacity: 0,
            transform: "translateY(20px)"
          }}
        >
          RESERVE YOUR STAY
        </button>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}