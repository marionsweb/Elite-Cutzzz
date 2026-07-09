import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const whatsappUrl = "https://wa.me/2348148247622?text=Hello%20SD%20Cutz%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  return (
    <section id="contact" className="py-24 px-4 bg-background relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Walk-ins welcome. Appointments preferred.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary rounded-xl p-8 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Beside Living Faith Church,
                    <br />
                    Angwan Hakimi, Orozo, Abuja
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Phone</h4>
                  <a href="tel:+2348148247622" className="text-muted-foreground hover:text-primary transition-colors">
                    +234 814 824 7622
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">WhatsApp</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    +234 814 824 7622
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <FaTiktok className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">TikTok</h4>
                  <a href="https://www.tiktok.com/@sdcut01" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    @SD Cutz
                  </a>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-accent hover:scale-[1.02] transition-all text-lg shadow-lg"
            >
              <FaWhatsapp size={24} />
              Chat With Us on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden h-[400px] md:h-auto min-h-[400px] border border-primary/30"
          >
            <iframe
              src="https://maps.google.com/maps?q=Orozo,+Abuja,+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(80%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SD Cutz Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
