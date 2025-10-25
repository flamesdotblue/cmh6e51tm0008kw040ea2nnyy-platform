import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#A9A9A9]">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-[#7DF9FF] text-black text-sm font-semibold hover:bg-[#00FFFF] transition-colors"
          >
            Explore Work
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-lg border border-white/10 text-[#7DF9FF] hover:border-[#00FFFF] hover:text-[#00FFFF] text-sm transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </footer>
  );
}
