import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
            <a href="#" className="text-[#7DF9FF] font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>Future Black</a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-[#A9A9A9] hover:text-[#7DF9FF] transition-colors"
                  style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-[#7DF9FF] hover:text-[#00FFFF] hover:border-[#00FFFF] transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-[#1E1E1E] border-l border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[#7DF9FF] font-semibold" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-[#7DF9FF] hover:text-[#00FFFF] hover:border-[#00FFFF] transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-base text-[#A9A9A9] hover:text-[#7DF9FF] hover:bg-white/5 transition-colors"
                  style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {!(isScrolled || open) && (
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="fixed z-30 bottom-6 right-6 md:hidden inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#7DF9FF] text-black hover:bg-[#00FFFF] transition-colors shadow-lg"
        >
          <Menu />
        </button>
      )}
    </>
  );
}
