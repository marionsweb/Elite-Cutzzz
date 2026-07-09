import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/2348148247622?text=Hello%20SD%20Cutz%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center animate-pulse-whatsapp hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white" size={32} />
    </a>
  );
}
