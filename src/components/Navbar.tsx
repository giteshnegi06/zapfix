import React, { useState, useEffect } from 'react';
import { Search, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenSearch: () => void;
  onOpenCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSearch,
  onOpenCallModal,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Technicians', href: '#technicians' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 ${
      scrolled ? 'bg-[#587e60] shadow-lg' : 'bg-[#587e60]/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="text-white font-black text-lg sm:text-xl lg:text-2xl tracking-tight cursor-pointer"
          id="brand-logo-link"
        >
          CHAUHAN<span className="font-light opacity-70">ELECTRIX</span><span className="text-[#9e2a2b]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        {/* Mobile: Floating Buttons (Right Aligned) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Search Button (Mobile) */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="w-9 h-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            id="navbar-search-btn"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Book Button (Mobile) */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-[#c44b2b] hover:bg-[#8a2421] text-white text-xs font-bold transition-colors cursor-pointer"
            id="navbar-book-btn-mobile"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK</span>
          </button>

        </div>

        {/* Desktop: Standard Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            id="navbar-search-btn"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Book Button (Mobile) */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-[#c44b2b] hover:bg-[#8a2421] text-white text-xs font-bold transition-colors cursor-pointer"
            id="navbar-book-btn-mobile"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK</span>
          </button>
        </div>
      </div>
    </header>
  );
};
