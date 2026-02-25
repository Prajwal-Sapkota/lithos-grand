// src/components/HeroVideo.jsx
import { useRef, useEffect, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Initial animation effect with useRef
  useEffect(() => {
    // Small delay to trigger animation after mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Ensure video plays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, []);

  return (
    <>
      {/* Fixed Video Background - Only visible behind hero */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hotelreel.mp4" type="video/mp4" />
        </video>

        {/* Soft overlay for cinematic effect */}
        <div className="absolute inset-0 bg-charcoal/40" />
        
        {/* Subtle bronze gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bronze/10 via-transparent to-transparent" />
      </div>

      {/* Hero Section - Transparent background to show video */}
      <section 
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden z-10"
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
          {/* Animated elements with CSS transitions controlled by useState */}
          <div
            className="mb-4 transition-all duration-800"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            {/* Empty div for spacing (was motion.div with content) */}
          </div>

          <h1
            className="font-cormorant text-6xl md:text-8xl tracking-[0.2em] text-white transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'opacity 1s ease, transform 1s ease',
              transitionDelay: '0.3s'
            }}
          >
            LITHOS GRAND
          </h1>

          <div 
            className="w-24 h-[1px] bg-bronze/60 my-8 transition-all duration-1500"
            style={{
              width: visible ? '96px' : '0',
              opacity: visible ? 1 : 0,
              transition: 'width 1.5s ease, opacity 1.5s ease',
              transitionDelay: '0.6s'
            }}
          />

          <p
            className="font-public-sans text-sm tracking-[0.3em] text-white/80 transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease, transform 1s ease',
              transitionDelay: '0.9s'
            }}
          >
            THE ARCHITECTURE OF PRESENCE
          </p>
        </div>
      </section>

      {/* SOLID BLOCKER - This prevents video from showing below hero */}
      <div className="relative z-20 w-full bg-limestone" style={{ minHeight: '1px' }}>
      </div>

      
    </>
  );
}