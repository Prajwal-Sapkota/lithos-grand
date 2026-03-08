// src/components/BookingDrawer.jsx
import { useState, useEffect } from "react";
import { FiX, FiSearch, FiMinus, FiPlus, FiCalendar, FiMapPin, FiUser } from "react-icons/fi";

const BookingDrawer = ({ isOpen, onClose }) => {
  const [hotel, setHotel] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const hotels = [
    "LITHOS Paris - Champs-Élysées",
    "LITHOS London - Mayfair",
    "LITHOS Tokyo - Shinjuku",
    "LITHOS Dubai - Downtown",
    "LITHOS New York - Park Avenue",
    "LITHOS Singapore - Marina Bay",
    "LITHOS Zurich - Bahnhofstrasse",
    "LITHOS Geneva - Rue du Rhône",
    "LITHOS Kyoto - Historic District",
    "LITHOS Mumbai - Colaba",
    "LITHOS Shanghai - The Bund",
    "LITHOS Sydney - Circular Quay"
  ];

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <>
      {/* Simple Dark Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer - Responsive positioning */}
      <div className={`fixed z-50 transform transition-all duration-500 ease-out rounded-md overflow-hidden
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        /* Mobile: full width, centered horizontally */
        left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[450px]
        /* Desktop: positioned below navbar button */
        sm:left-auto sm:right-8 sm:translate-x-0 sm:w-[450px]
        top-24 sm:top-[90px]
      `}>
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] text-white p-5">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#B5A27A]/30" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#B5A27A]/30" />
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[#B5A27A] text-[8px] tracking-[0.4em] uppercase block">LITHOS GRAND</span>
              <h3 className="font-cormorant text-xl">Reserve Your Stay</h3>
            </div>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
              <FiX size={18} />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-5 overflow-y-auto bg-white" style={{ maxHeight: '450px' }}>
          
          {/* Hotel Selection */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-[#B5A27A] text-[8px] tracking-[0.3em] uppercase mb-1">
              <FiMapPin size={10} />
              Select Property
            </label>
            <select
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
              className="w-full p-2.5 text-sm border border-[#B5A27A]/20 focus:border-[#B5A27A] outline-none text-[#2C2C2C] bg-white rounded-sm"
            >
              <option value="">Choose destination</option>
              {hotels.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-[#B5A27A] text-[8px] tracking-[0.3em] uppercase mb-1">
              <FiCalendar size={10} />
              Your Stay
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-2.5 text-sm border border-[#B5A27A]/20 focus:border-[#B5A27A] outline-none text-[#2C2C2C] bg-white rounded-sm"
                />
                <span className="absolute -top-1.5 left-2 bg-white px-1 text-[6px] text-[#B5A27A]">Check In</span>
              </div>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-2.5 text-sm border border-[#B5A27A]/20 focus:border-[#B5A27A] outline-none text-[#2C2C2C] bg-white rounded-sm"
                />
                <span className="absolute -top-1.5 left-2 bg-white px-1 text-[6px] text-[#B5A27A]">Check Out</span>
              </div>
            </div>
          </div>

          {/* Guests - 2 Column Layout */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-[#B5A27A] text-[8px] tracking-[0.3em] uppercase mb-1">
              <FiUser size={10} />
              Guests
            </label>
            
            <div className="bg-[#F8F6F2] p-3 rounded-sm">
              {/* Adults & Children in 2 columns */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* Adults */}
                <div>
                  <span className="block text-xs text-[#2C2C2C]/70 mb-1">Adults</span>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => decrement(setAdults, adults)}
                      className="w-7 h-7 border border-[#B5A27A]/30 flex items-center justify-center hover:border-[#B5A27A] hover:bg-[#B5A27A]/5 transition-all rounded-sm"
                    >
                      <FiMinus className="text-[#B5A27A] text-xs" />
                    </button>
                    <span className="font-cormorant text-lg text-[#2C2C2C]">{adults}</span>
                    <button 
                      onClick={() => increment(setAdults, adults)}
                      className="w-7 h-7 border border-[#B5A27A]/30 flex items-center justify-center hover:border-[#B5A27A] hover:bg-[#B5A27A]/5 transition-all rounded-sm"
                    >
                      <FiPlus className="text-[#B5A27A] text-xs" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div>
                  <span className="block text-xs text-[#2C2C2C]/70 mb-1">Children</span>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => decrement(setChildren, children)}
                      className="w-7 h-7 border border-[#B5A27A]/30 flex items-center justify-center hover:border-[#B5A27A] hover:bg-[#B5A27A]/5 transition-all rounded-sm"
                    >
                      <FiMinus className="text-[#B5A27A] text-xs" />
                    </button>
                    <span className="font-cormorant text-lg text-[#2C2C2C]">{children}</span>
                    <button 
                      onClick={() => increment(setChildren, children)}
                      className="w-7 h-7 border border-[#B5A27A]/30 flex items-center justify-center hover:border-[#B5A27A] hover:bg-[#B5A27A]/5 transition-all rounded-sm"
                    >
                      <FiPlus className="text-[#B5A27A] text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Rooms */}
              <div className="flex justify-between items-center pt-2 border-t border-[#B5A27A]/10">
                <span className="text-sm text-[#2C2C2C]">Rooms</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => decrement(setRooms, rooms)}
                    className="w-7 h-7 border border-[#B5A27A]/30 flex items-center justify-center hover:border-[#B5A27A] hover:bg-[#B5A27A]/5 transition-all rounded-sm"
                  >
                    <FiMinus className="text-[#B5A27A] text-xs" />
                  </button>
                  <span className="font-cormorant text-lg text-[#2C2C2C] w-6 text-center">{rooms}</span>
                  <button 
                    onClick={() => increment(setRooms, rooms)}
                    className="w-7 h-7 border border-[#B5A27A]/30 flex items-center justify-center hover:border-[#B5A27A] hover:bg-[#B5A27A]/5 transition-all rounded-sm"
                  >
                    <FiPlus className="text-[#B5A27A] text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full bg-[#B5A27A] text-white py-3 text-sm tracking-[0.3em] uppercase hover:bg-[#2C2C2C] transition-all duration-500 flex items-center justify-center gap-2 group rounded-sm">
            <FiSearch className="group-hover:scale-110 transition-transform" size={14} />
            <span>Check Availability</span>
          </button>

          {/* Corporate Note */}
          <p className="text-center text-[#2C2C2C]/20 text-[6px] tracking-[0.3em] uppercase mt-3">
            ✦ INNER CIRCLE MEMBERS RECEIVE PREFERENTIAL RATES ✦
          </p>
        </div>
      </div>
    </>
  );
};

export default BookingDrawer;