import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from '../router/Router';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/process' },
    { name: 'Technology', href: '/technology' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_20px_rgba(15,23,42,0.06)] py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brahmani Information Brand Logo (LOCKED) */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005EDA] rounded-lg transition-transform hover:opacity-95"
            aria-label={`${COMPANY_INFO.name} Home`}
          >
            <img
              src="/brahmani-logo-transparent.png"
              alt="Brahmani Information"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-11 sm:h-12' : 'h-12 sm:h-14'
              }`}
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isServicesActive = pathname.startsWith('/services');
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `inline-flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive || isServicesActive
                            ? 'text-[#005EDA] bg-blue-50/70 font-semibold'
                            : 'text-slate-700 hover:text-[#005EDA] hover:bg-slate-50'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#005EDA]' : 'text-slate-400'
                        }`}
                      />
                    </NavLink>

                    {/* Desktop Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] -mt-1 pt-2 z-50">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.12)] p-4 grid grid-cols-2 gap-2">
                          {SERVICES_LIST.map((srv) => (
                            <Link
                              key={srv.slug}
                              to={`/services/${srv.slug}`}
                              className="group p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors flex items-start space-x-3"
                            >
                              <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#005EDA] font-semibold mt-0.5">
                                {srv.number}
                              </span>
                              <div>
                                <h4 className="text-xs font-semibold text-slate-800 group-hover:text-[#005EDA] transition-colors">
                                  {srv.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug mt-0.5">
                                  {srv.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between px-2">
                            <span className="text-[11px] text-slate-500 font-medium">
                              12 Specialized IT & Digital Capabilities
                            </span>
                            <Link
                              to="/services"
                              className="text-xs font-semibold text-[#005EDA] hover:underline inline-flex items-center space-x-1"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#005EDA] bg-blue-50/70 font-semibold'
                        : 'text-slate-700 hover:text-[#005EDA] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/start-a-project"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-xl shadow-[0_4px_14px_rgba(0,94,218,0.25)] hover:shadow-[0_6px_20px_rgba(0,94,218,0.35)] transition-all duration-200 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              to="/start-a-project"
              className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] rounded-lg shadow-sm"
            >
              Start
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#005EDA]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#005EDA]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                      isActive
                        ? 'text-[#005EDA] bg-blue-50/80 font-semibold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                </NavLink>

                {link.hasDropdown && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-blue-100 ml-4 my-1">
                    {SERVICES_LIST.map((srv) => (
                      <NavLink
                        key={srv.slug}
                        to={`/services/${srv.slug}`}
                        className={({ isActive }) =>
                          `block px-3 py-1.5 rounded-lg text-xs font-medium ${
                            isActive ? 'text-[#005EDA] font-semibold bg-blue-50/60' : 'text-slate-600 hover:text-[#005EDA]'
                          }`
                        }
                      >
                        {srv.number} — {srv.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                to="/start-a-project"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#005EDA] hover:bg-[#004BBB] shadow-md transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
