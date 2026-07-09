import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Small delay to let the drawer close before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-primary/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a
              href="#"
              className="font-serif text-2xl font-bold text-primary gold-glow"
              aria-label="SD Cutz — back to top"
            >
              SD CUTZ
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-primary transition-colors px-3 py-2 text-sm font-medium uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-primary p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/97 backdrop-blur-lg pt-24 px-8 space-y-2 md:hidden"
            aria-label="Mobile navigation"
          >
            {/* Thin gold top border below navbar */}
            <div className="absolute top-20 left-0 right-0 h-px bg-primary/30" />

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className="text-left w-full font-serif text-4xl font-bold text-white hover:text-primary transition-colors py-4 border-b border-white/5"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
              href="https://wa.me/2348148247622?text=Hello%20SD%20Cutz%2C%20I%27d%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-primary text-black font-semibold px-8 py-4 text-lg tracking-wide rounded text-center hover:bg-[#F0C040] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Book on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
