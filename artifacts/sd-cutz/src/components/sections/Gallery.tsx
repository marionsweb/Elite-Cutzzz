import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTiktok } from "react-icons/fa";

import img1 from "@assets/IMG-20260626-WA0024_1783583570503.jpg";
import img2 from "@assets/IMG-20260626-WA0025_1783583570476.jpg";
import img3 from "@assets/IMG-20260626-WA0017_1783583570534.jpg";
import img4 from "@assets/IMG-20260626-WA0020_1783583570571.jpg";
import img5 from "@assets/IMG-20260626-WA0014_1783583570615.jpg";
import img6 from "@assets/IMG-20260626-WA0021_1783583570696.jpg";
import vid1 from "@assets/VID-20260626-WA0031_1783583570438.mp4";
import vid2 from "@assets/VID-20260626-WA0032_1783583570656.mp4";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string };

const galleryItems: GalleryItem[] = [
  { type: "image", src: img1, alt: "Fresh fade with eyebrow design — SD Cutz" },
  { type: "video", src: vid1, label: "SD Cutz in action" },
  { type: "image", src: img2, alt: "Kids specialty cut with design — SD Cutz" },
  { type: "image", src: img3, alt: "Blonde fade colour treatment — SD Cutz" },
  { type: "video", src: vid2, label: "SD Cutz work reel" },
  { type: "image", src: img4, alt: "Afro skin fade — SD Cutz" },
  { type: "image", src: img5, alt: "Clean cut in the SD Cutz chair — SD Cutz" },
  { type: "image", src: img6, alt: "Premium cut finish — SD Cutz" },
];

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
          <div className="w-24 h-px bg-primary mx-auto mb-6" />
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
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-md group break-inside-avoid block"
            >
              <div className="relative overflow-hidden">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={item.label}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
                    loading="lazy"
                  />
                )}
                {/* Gold hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
                {/* Subtle dark gradient at bottom for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
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
            href="https://www.tiktok.com/@sdcut01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-black border border-primary text-primary font-medium py-4 px-8 rounded hover:bg-primary hover:text-black transition-colors text-lg group"
          >
            <FaTiktok size={24} className="group-hover:scale-110 transition-transform" />
            Follow us on TikTok @sdcut01
          </a>
        </motion.div>
      </div>
    </section>
  );
}
