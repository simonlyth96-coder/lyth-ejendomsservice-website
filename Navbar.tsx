import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from './constants';
import { Home, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#022c19]/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white cursor-pointer select-none">
          <Home className="text-[#00d66b] w-6 h-6" />
          <span>
            Lyth<span className="text-[#00d66b]">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-200 hover:text-[#00d66b] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d66b] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#00d66b] text-[#022c19] text-sm font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,214,107,0.3)]"
          >
            Kontakt Os
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#022c19] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-display font-bold text-white hover:text-[#00d66b]"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-full bg-[#00d66b] text-[#022c19] text-lg font-bold"
        >
          Kontakt Os
        </a>
      </div>
    </header>
  );
};

export default Navbar;
