import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { name: "Fresh Cut (Basic)", price: "₦1,500" },
  { name: "Shape Up / Line Up", price: "₦1,500" },
  { name: "Full Cut + Beard Trim", price: "₦2,000" },
  { name: "Skin Fade", price: "₦2,000" },
  { name: "Premium Fade + Design", price: "₦2,500" },
  { name: "Full Groom Package", price: "₦3,000" },
];

export function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-24 px-4 bg-background relative overflow-hidden z-10">
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
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quality grooming at an honest price.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-primary/40 rounded-lg p-8 flex flex-col justify-between transition-all duration-300 hover:gold-glow-box hover:scale-[1.03] hover:border-primary group cursor-default"
            >
              <h3 className="text-white font-semibold text-xl mb-4 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="font-serif font-bold text-accent text-3xl">
                {service.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="https://wa.me/2348148247622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black font-semibold py-4 px-10 rounded hover:bg-accent transition-colors text-lg"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
