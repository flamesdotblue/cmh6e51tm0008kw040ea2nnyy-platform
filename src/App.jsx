import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSections from './components/PortfolioSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#A9A9A9] antialiased scroll-smooth">
      <Navbar />
      <main className="relative">
        <Hero />
        <PortfolioSections />
      </main>
      <Footer />
    </div>
  );
}
