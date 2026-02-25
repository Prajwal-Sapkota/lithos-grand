import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    // Scroll to top immediately on page load & route change
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);

    // Force scroll to top on initial page load/reload
    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        
        window.addEventListener("scroll", toggleVisibility);
        
        // Check initial scroll position
        toggleVisibility();
        
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-500 cursor-pointer
                bg-[#B5A27A] text-[#EBE9E4] hover:bg-[#2C2C2C] hover:text-white hover:scale-110 hover:shadow-2xl
                ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"}`}
            aria-label="Back to top"
        >
            <FaArrowUp className="text-lg" />
        </button>
    );
};

export default ScrollTopButton;