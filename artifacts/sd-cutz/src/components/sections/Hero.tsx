import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const whatsappUrl = "https://wa.me/2348148247622?text=Hello%20SD%20Cutz%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  return (
    <section className="relative w-full h-[100dvh] hero-bg flex items-center justify-center overflow-hidden flex-col">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block"
        >
          <h1 className="font-serif text-6xl md:text-[96px] font-black text-primary gold-glow leading-none mb-4 tracking-tight">
            SD CUTZ
          </h1>
          <div className="h-0.5 bg-primary/80 animate-expand mx-auto mt-2" style={{ maxWidth: "80%" }}></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-lg md:text-xl font-medium tracking-[0.15em] uppercase mt-8 mb-12 opacity-90"
        >
          Premium Cuts. Sharp Style. Every Time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-black font-semibold py-4 px-8 rounded hover:bg-accent transition-colors w-full sm:w-auto text-lg"
          >
            <FaWhatsapp size={24} />
            Book on WhatsApp
          </a>
          <a
            href="#gallery"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary font-semibold py-4 px-8 rounded hover:bg-primary/10 transition-colors w-full sm:w-auto text-lg"
          >
            See Our Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-primary/50 text-xs tracking-[0.2em] uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/80" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
