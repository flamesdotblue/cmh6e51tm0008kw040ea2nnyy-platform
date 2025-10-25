import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#121212]" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#7DF9FF] font-bold tracking-tight leading-tight text-5xl sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}
            >
              Alex Johnson
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 text-[#7DF9FF]/90 italic text-xl sm:text-2xl"
              style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}
            >
              Designing intelligent, human-centered digital futures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#7DF9FF] text-black font-semibold hover:bg-[#00FFFF] transition-colors"
                style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
              >
                View Projects
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-xl border border-[#7DF9FF]/40 text-[#7DF9FF] hover:border-[#00FFFF] hover:text-[#00FFFF] transition-colors"
                style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
              >
                About Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
