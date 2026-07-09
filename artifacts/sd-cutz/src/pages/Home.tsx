import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Gallery } from '../components/sections/Gallery';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
