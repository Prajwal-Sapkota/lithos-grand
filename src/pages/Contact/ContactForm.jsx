import { useRef, useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#ebe9e4] overflow-hidden"
    >
      {/* Ambient Glow - Smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-300px] left-[-250px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-[#B5A27A]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px] lg:blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto flex items-center min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
        <div
          className={`w-full flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-24 items-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* LEFT SIDE — Editorial Statement (centered vertically) */}
          <div className="lg:col-span-5 flex flex-col justify-center w-full order-2 lg:order-1">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] uppercase text-[#B5A27A]">
              Private Communication
            </span>

            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[1.05] text-[#2C2C2C] mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10">
              Begin Your Journey
            </h2>

            <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 h-[2px] bg-[#B5A27A] mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10" />

            <p className="text-[#2C2C2C]/70 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed max-w-md">
              Our concierge team responds with discretion and precision.
              Share your intentions, and allow us to curate an experience
              worthy of your expectations.
            </p>
          </div>

          {/* RIGHT SIDE — Floating Luxury Form */}
          <div className="lg:col-span-7 relative w-full order-1 lg:order-2">
            {/* Outer Architectural Frame - Responsive positioning */}
            <div className="absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6 xl:-top-8 2xl:-top-10 -right-2 sm:-right-3 md:-right-4 lg:-right-6 xl:-right-8 2xl:-right-10 w-full h-full border border-[#B5A27A]/30 pointer-events-none" />

            <div className="relative bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Row 1 */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14">
                  <div>
                    <label className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase text-[#B5A27A]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full mt-2 sm:mt-3 md:mt-4 lg:mt-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 bg-transparent border-b border-[#2C2C2C]/20 focus:border-[#B5A27A] outline-none transition-all text-base sm:text-lg"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase text-[#B5A27A]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full mt-2 sm:mt-3 md:mt-4 lg:mt-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 bg-transparent border-b border-[#2C2C2C]/20 focus:border-[#B5A27A] outline-none transition-all text-base sm:text-lg"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase text-[#B5A27A]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full mt-2 sm:mt-3 md:mt-4 lg:mt-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 bg-transparent border-b border-[#2C2C2C]/20 focus:border-[#B5A27A] outline-none transition-all text-base sm:text-lg"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase text-[#B5A27A]">
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full mt-2 sm:mt-3 md:mt-4 lg:mt-5 bg-transparent border-b border-[#2C2C2C]/20 focus:border-[#B5A27A] outline-none transition-all text-base sm:text-lg resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Submit */}
                <div className="pt-2 sm:pt-3 md:pt-4">
                  <button
                    type="submit"
                    className="relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 bg-[#2C2C2C] text-white text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase hover:bg-[#B5A27A] transition-all duration-500 group"
                  >
                    Submit Inquiry
                    <FiSend className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 text-sm sm:text-base" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;