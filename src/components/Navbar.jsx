// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import BookingDrawer from "./BookingDrawer";

const navItems = [
  {
    name: "THE COLLECTION",
    mega: true,
    href: "/collection",
    items: ["Paris", "London", "Tokyo", "Dubai", "New York", "Zurich", "Singapore", "Geneva"],
  },
  { name: "SANCTUARIES", href: "/sanctuaries" },
  { name: "THE BOARDROOM", href: "/boardroom" },
  { name: "CULINARY ATELIER", href: "/culinary" },
  { 
    name: "MORE", 
    href: "#",
    mega: true,
    items: [
      { name: "THE JOURNAL", href: "/journal" },
      { name: "TRAVEL STORIES", href: "/travel" },
      { name: "WELLNESS", href: "/wellness" },
      { name: "CONTACT", href: "/contact" }
    ]
  },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Initial drop effect
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

  // Handle mouse leave with delay
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
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="LITHOS GRAND"
              className="h-[30px] md:h-[34px] cursor-pointer transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 xl:gap-12 relative">
            {navItems.map((nav, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <Link
                  to={nav.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="cursor-pointer text-[12px] xl:text-[14px] tracking-[0.18em] text-[#1A1A1A] transition-colors duration-300 hover:text-[#8C6A3B] whitespace-nowrap"
                >
                  {nav.name}
                </Link>

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
                    {nav.name === "THE COLLECTION" ? (
                      nav.items.map((city, i) => (
                        <div
                          key={i}
                          className="text-[12px] xl:text-[14px] tracking-[0.15em] text-[#2C2C2C]/70 hover:text-[#8C6A3B] cursor-pointer whitespace-nowrap transition-colors duration-300"
                        >
                          {city}
                        </div>
                      ))
                    ) : (
                      nav.items.map((item, i) => (
                        <Link
                          key={i}
                          to={item.href}
                          className="text-[12px] xl:text-[14px] tracking-[0.15em] text-[#2C2C2C]/70 hover:text-[#8C6A3B] cursor-pointer whitespace-nowrap transition-colors duration-300"
                        >
                          {item.name}
                        </Link>
                      ))
                    )}
                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#8C6A3B]/20" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#8C6A3B]/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="hidden lg:block border border-[#8C6A3B] px-5 xl:px-6 py-2 tracking-[0.18em] rounded-full text-[12px] xl:text-[14px] transition-all duration-300 hover:bg-[#8C6A3B] hover:text-white whitespace-nowrap cursor-pointer"
          >
            RESERVE YOUR STAY
          </button>

          {/* Mobile Menu Icon */}
          <FiMenu
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-2xl cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </nav>
      </header>

      {/* Mobile Menu - Exactly as you want with MORE */}
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

        {/* Main menu items */}
        {navItems.slice(0, 4).map((nav, i) => (
          <Link
            key={i}
            to={nav.href}
            className="text-2xl md:text-3xl mb-6 md:mb-8 tracking-[0.2em] cursor-pointer transition-all duration-300 hover:text-[#8C6A3B] hover:translate-x-2"
            onClick={() => { 
              setMobileOpen(false); 
              window.scrollTo(0, 0); 
            }}
            style={{
              transition: "color 0.3s ease, transform 0.3s ease",
              animation: mobileOpen ? `fadeInUp 0.5s ease-out ${i * 0.1}s forwards` : "none",
              opacity: 0,
              transform: "translateY(20px)"
            }}
          >
            {nav.name}
          </Link>
        ))}

        {/* MORE button with dropdown */}
        <div
          className="w-full max-w-[300px] mb-6"
          style={{
            animation: mobileOpen ? `fadeInUp 0.5s ease-out ${4 * 0.1}s forwards` : "none",
            opacity: 0,
            transform: "translateY(20px)"
          }}
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-center text-2xl md:text-3xl tracking-[0.2em] text-[#2C2C2C] hover:text-[#8C6A3B] transition-colors px-4"
          >
            <span>MORE</span>
            <FiChevronDown className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown items */}
          <div className={`mt-4  overflow-hidden transition-all duration-300 ${
            showMore ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
            {navItems[4].items.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className="block text-lg text-[#2C2C2C]/60 hover:text-[#8C6A3B] transition-colors text-center py-2"
                onClick={() => { 
                  setMobileOpen(false); 
                  window.scrollTo(0, 0); 
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Booking Button */}
        <button
          onClick={() => {
            setMobileOpen(false);
            setIsBookingOpen(true);
          }}
          className="border border-[#8C6A3B] px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#8C6A3B] hover:text-white text-base font-medium w-[300px] "
          style={{
            animation: mobileOpen ? "fadeInUp 0.5s ease-out 0.7s forwards" : "none",
            opacity: 0,
            transform: "translateY(20px)"
          }}
        >
          RESERVE YOUR STAY
        </button>
      </div>

      {/* Booking Drawer */}
      <BookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Animation Keyframes */}
      <style>{`
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