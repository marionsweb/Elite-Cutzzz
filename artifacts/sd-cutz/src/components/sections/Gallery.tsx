import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  // Generate 9 placeholders with varying background gradients to simulate a masonry feel
  const galleryItems = Array.from({ length: 9 }).map((_, i) => {
    const gradients = [
      "linear-gradient(135deg, #111111 0%, #0a0a0a 100%)",
      "linear-gradient(135deg, #1a1a1a 0%, #111111 100%)",
      "linear-gradient(135deg, #222222 0%, #1a1a1a 100%)",
    ];
    // Slightly randomize aspect ratio with padding bottom
    const aspects = ["pb-[100%]", "pb-[125%]", "pb-[80%]"];
    
    return {
      id: i,
      bg: gradients[i % 3],
      aspect: aspects[i % 3]
    };
  });

  return (
    <section id="gallery" className="py-24 px-4 bg-[#080808] relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every cut tells a story.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="columns-2 md:columns-3 gap-3 space-y-3 mb-16 max-w-6xl mx-auto"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-md group break-inside-avoid block"
            >
              <div
                className={`w-full ${item.aspect} relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                style={{ background: item.bg }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary opacity-60"
                  >
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://www.tiktok.com/@sdcutz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-black border border-primary text-primary font-medium py-4 px-8 rounded hover:bg-primary hover:text-black transition-colors text-lg group"
          >
            <FaTiktok size={24} className="group-hover:scale-110 transition-transform" />
            Follow us on TikTok @SD Cutz
          </a>
        </motion.div>
      </div>
    </section>
  );
}
