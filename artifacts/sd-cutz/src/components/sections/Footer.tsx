import React from "react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary py-12 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:items-start text-center md:text-left mb-12">
          
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-primary gold-glow tracking-wide">
              SD CUTZ
            </h3>
            <p className="text-muted-foreground">
              Sharp Cuts. Premium Feel.
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Quick Links</h4>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors w-fit mx-auto md:mx-0">Services</a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors w-fit mx-auto md:mx-0">Gallery</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors w-fit mx-auto md:mx-0">Contact</a>
          </div>

          <div className="flex flex-col space-y-4 items-center md:items-end">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@SDCut01" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow SD Cutz on TikTok"
                className="bg-card border border-primary/30 p-3 rounded-full text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href="https://wa.me/2348148247622" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact SD Cutz on WhatsApp"
                className="bg-card border border-primary/30 p-3 rounded-full text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} SD Cutz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
