import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for signal dot indicator
      const sections = ['home', 'about', 'services', 'why-us', 'work', 'process', 'tech', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#030713]/90 backdrop-blur-md border-b border-[#126BFF]/25 py-3 shadow-[0_4px_30px_rgba(3,7,19,0.8)]'
          : 'bg-transparent py-5 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brahmani Information Brand Logo */}
          <a
            href="#home"
            className="group flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126BFF] rounded-lg transition-transform hover:opacity-95"
            aria-label="Brahmani Information Home"
          >
            {/* The exact official logo */}
            <div className="relative flex items-center">
              <img
                src="/brahmani-logo-darkmode.png"
                alt="Brahmani Information"
                className="h-20 sm:h-24 w-auto object-contain transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(18,107,255,0.35)]"
                loading="eager"
              />
            </div>
          </a>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#050B1B]/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#126BFF]/25 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 rounded-full flex items-center space-x-1.5 ${isActive
                      ? 'text-[#F5F8FF] bg-[#126BFF]/25 shadow-[0_0_12px_rgba(70,217,255,0.35)]'
                      : 'text-[#A8B5CC] hover:text-[#F5F8FF] hover:bg-white/5'
                    }`}
                >
                  {/* Signal dot indicator for active link */}
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46D9FF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#008CFF]"></span>
                    </span>
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenContactModal}
              className="group relative inline-flex items-center justify-center px-5 py-2 text-xs lg:text-sm font-semibold tracking-wide text-white transition-all duration-300 rounded-full overflow-hidden bg-gradient-to-r from-[#126BFF] via-[#008CFF] to-[#005EDA] hover:shadow-[0_0_25px_rgba(70,217,255,0.5)] border border-[#46D9FF]/40 active:scale-95"
            >
              {/* Shimmer / Signal line sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

              <span className="relative flex items-center space-x-2">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A8B5CC] hover:text-[#F5F8FF] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#126BFF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#46D9FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030713]/98 backdrop-blur-xl border-b border-[#126BFF]/25 px-4 pt-3 pb-6 shadow-2xl transition-all animate-fadeIn">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${activeSection === link.id
                    ? 'text-white bg-[#005EDA]/20 border border-[#005EDA]/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <SparkleIcon className="w-3.5 h-3.5 text-[#3894FF]" />
                )}
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#001455] to-[#005EDA] shadow-[0_0_20px_rgba(0,94,218,0.4)] border border-[#005EDA]/40"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
