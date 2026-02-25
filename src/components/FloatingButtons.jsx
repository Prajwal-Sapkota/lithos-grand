import { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import ScrollTopButton from "./ScrollTopButton";

const FloatingButtons = () => {
  const [showChat, setShowChat] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Welcome to Lithos Grand. Your personal assistant awaits.", sender: "bot" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        text: "Thank you. Your personal assistant will respond shortly.",
        sender: "bot"
      }]);
    }, 2000);
  };

  return (
    <>
      <ScrollTopButton />

      {/* Floating Button - Hidden when chat is open */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className={`fixed bottom-8 left-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#C6A87A] to-[#B5A27A] text-white shadow-[0_10px_40px_rgba(181,162,122,0.4)] flex items-center justify-center transition-all duration-500 hover:scale-110 ${showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        >
          <FiMessageCircle size={22} />
        </button>
      )}

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-10 left-8 z-50 w-[360px] backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.25)] rounded-3xl overflow-hidden animate-[fadeInUp_0.5s_ease]">
          <div className="relative px-6 py-5 bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] text-white">
            <p className="text-[10px] tracking-[0.4em] text-[#B5A27A] uppercase mb-1">LITHOS GRAND</p>
            <h3 className="text-xl font-serif tracking-wide">Personal Assistant</h3>
            <button onClick={() => setShowChat(false)} className="absolute top-5 right-5 opacity-60 hover:opacity-100 transition">
              <FiX size={18} />
            </button>
          </div>

          <div className="h-[340px] overflow-y-auto px-6 py-6 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-5 py-3 rounded-2xl text-sm max-w-[80%] shadow-md ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-[#C6A87A] to-[#B5A27A] text-white"
                    : "bg-white text-[#2C2C2C] border border-[#E8E3D9]"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-[#B5A27A] rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-[#B5A27A] rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-[#B5A27A] rounded-full animate-bounce delay-200"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-[#E8E3D9] px-6 py-4">
            <div className="flex items-center gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Write your request..."
                className="flex-1 bg-transparent border-b border-[#D6CFC2] pb-2 text-sm outline-none focus:border-[#B5A27A] transition"
              />
              <button onClick={handleSend} className="text-[#B5A27A] hover:text-[#2C2C2C] transition">
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;