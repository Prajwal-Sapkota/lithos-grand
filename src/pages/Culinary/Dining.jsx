// src/components/culinary/DiningExperiences.jsx
import { useRef, useEffect, useState } from "react";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";
import culinaryData from "../../data/culinary.json";

const DiningExperiences = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { experiences } = culinaryData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-18 px-6 md:px-12 lg:px-20 bg-[#ebe9e4] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs tracking-[0.5em] text-[#B5A27A] uppercase">Experiences</span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-[#2C2C2C] mt-6">
            Beyond the <span className="italic text-[#B5A27A]">Plate</span>
          </h2>
        </div>

        {/* Experiences Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-cormorant text-2xl mb-2">{exp.name}</h3>
                  <p className="text-xs text-white/70 max-w-xs mb-3">{exp.description}</p>
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <FiUsers /> {exp.capacity}
                    </span>
                    <span>{exp.price}</span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-[#B5A27A] w-10 h-10 rounded-full flex items-center justify-center">
                    <FiArrowUpRight className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningExperiences;