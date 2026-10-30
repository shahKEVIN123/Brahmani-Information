import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Palette,
  Sparkles,
  BarChart3,
  CheckSquare,
  Layers,
  ShieldCheck,
  TrendingUp,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { Link, NavLink, useLocation } from '../router/Router';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

// Domain Category Groupings for the 12 Specialized Services
const SERVICE_CATEGORIES = [
  {
    category: 'Engineering & Cloud',
    badge: 'CORE DEV',
    color: 'text-[#38BDF8] bg-blue-500/10 border-blue-400/20',
    slugs: ['web-development', 'mobile-app-development', 'software-development', 'cloud-devops'],
  },
  {
    category: 'Design & Intelligence',
    badge: 'INNOVATION',
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-400/20',
    slugs: ['ui-ux-design', 'ai-machine-learning', 'data-analytics', 'qa-software-testing'],
  },
  {
    category: 'Enterprise & Operations',
    badge: 'BUSINESS',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/20',
    slugs: ['crm-erp-solutions', 'cybersecurity', 'digital-marketing', 'maintenance-support'],
  },
];

// Mapping of service slugs to recognizable Lucide icons
const SERVICE_ICONS: Record<string, React.ElementType> = {
  'web-development': Globe,
  'mobile-app-development': Smartphone,
  'software-development': Code2,
  'cloud-devops': Cloud,
  'ui-ux-design': Palette,
  'ai-machine-learning': Sparkles,
  'data-analytics': BarChart3,
  'qa-software-testing': CheckSquare,
  'crm-erp-solutions': Layers,
  'cybersecurity': ShieldCheck,
  'digital-marketing': TrendingUp,
  'maintenance-support': Activity,
};

// Punchy, concise 1-line taglines that fit without awkward truncation
const SERVICE_TAGLINES: Record<string, string> = {
  'web-development': 'Responsive websites & web applications',
  'mobile-app-development': 'Native iOS & Android mobile apps',
  'software-development': 'Bespoke software & API architecture',
  'cloud-devops': 'Cloud infrastructure & CI/CD deployment',
  'ui-ux-design': 'Design systems, wireframes & prototypes',
  'ai-machine-learning': 'Intelligent automation & predictive models',
  'data-analytics': 'Data pipelines, BI & executive dashboards',
  'qa-software-testing': 'Automated testing & quality assurance',
  'crm-erp-solutions': 'Enterprise workflows & systems integration',
  'cybersecurity': 'Security audits, hardening & compliance',
  'digital-marketing': 'Performance marketing & SEO campaigns',
  'maintenance-support': 'Proactive monitoring & continuous SLA support',
};

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
        isScrolled || servicesDropdownOpen
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.6)] py-3'
          : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
      style={servicesDropdownOpen ? { backgroundColor: '#0A0A0A' } : undefined}
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
              src="/Brahmani Information Logo.png"
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
                            ? 'text-[#005EDA] bg-[#005EDA]/15 font-semibold'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
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

                    {/* Modern Enterprise Services Mega Dropdown — Dark Theme Surface */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full -left-16 sm:-left-20 lg:-left-24 w-[760px] lg:w-[800px] xl:w-[840px] pt-2 z-[100] animate-fadeIn">
                        <div 
                          className="bg-[#111111] rounded-2xl border border-white/10 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.8),0_8px_25px_rgba(0,94,218,0.1)] overflow-hidden"
                          style={{ backgroundColor: '#111111', opacity: 1 }}
                        >
                          
                          {/* Mega Dropdown Header Strip */}
                          <div 
                            className="bg-[#151515] border-b border-white/5 px-6 py-2.5 flex items-center justify-between"
                            style={{ backgroundColor: '#151515' }}
                          >
                            <div className="flex items-center space-x-2">
                              <span className="w-2 h-2 rounded-full bg-[#005EDA]" />
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 font-display">
                                Specialized IT & Digital Capabilities
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400 font-mono">
                              12 Enterprise Services • Milestone-Driven
                            </span>
                          </div>

                          {/* 3 Domain Columns */}
                          <div 
                            className="p-6 grid grid-cols-3 gap-6 divide-x divide-white/5 bg-[#111111]"
                            style={{ backgroundColor: '#111111' }}
                          >
                            {SERVICE_CATEGORIES.map((group) => (
                              <div key={group.category} className="space-y-3 first:pl-0 pl-5">
                                {/* Category Header */}
                                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display">
                                    {group.category}
                                  </span>
                                  <span className={`text-[9px] font-semibold px-2 py-0.5 rounded border ${group.color}`}>
                                    {group.badge}
                                  </span>
                                </div>

                                {/* Service Cards List */}
                                <div className="space-y-1.5">
                                  {group.slugs.map((slug) => {
                                    const srv = SERVICES_LIST.find((s) => s.slug === slug);
                                    if (!srv) return null;
                                    const IconComponent = SERVICE_ICONS[slug] || Globe;
                                    const tagline = SERVICE_TAGLINES[slug] || srv.shortDesc;
                                    return (
                                      <Link
                                        key={srv.slug}
                                        to={`/services/${srv.slug}`}
                                        className="group flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-150"
                                      >
                                        {/* Icon Squircle Badge */}
                                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#005EDA] text-[#005EDA] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-2xs group-hover:scale-105">
                                          <IconComponent className="w-4 h-4" />
                                        </div>

                                        {/* Service Details */}
                                        <div className="min-w-0 flex-1">
                                          <div className="flex items-center justify-between">
                                            <h4 className="text-xs font-semibold text-slate-200 group-hover:text-[#005EDA] transition-colors truncate">
                                              {srv.title}
                                            </h4>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#005EDA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0 ml-1" />
                                          </div>
                                          <p className="text-[11px] text-slate-400 line-clamp-1 leading-snug mt-0.5 group-hover:text-slate-300">
                                            {tagline}
                                          </p>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Mega Dropdown Footer Banner */}
                          <div 
                            className="bg-[#151515] border-t border-white/5 px-6 py-3 flex items-center justify-between"
                            style={{ backgroundColor: '#151515' }}
                          >
                            <div className="flex items-center space-x-2 text-xs text-slate-400">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="font-semibold text-slate-200">Production Ready</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-400 hidden sm:inline">React • Node.js • Cloud Native Infrastructure</span>
                            </div>

                            <div className="flex items-center space-x-5">
                              <Link
                                to="/work"
                                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors hidden md:inline"
                              >
                                View Case Studies
                              </Link>
                              <Link
                                to="/services"
                                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#005EDA] hover:text-blue-400 transition-colors"
                              >
                                <span>Explore All Services</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
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
                        ? 'text-[#005EDA] bg-[#005EDA]/15 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
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
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#005EDA]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#005EDA]" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#0E0E0E] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto"
          style={{ backgroundColor: '#0e0e0e' }}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                      isActive
                        ? 'text-[#005EDA] bg-[#005EDA]/15 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                </NavLink>

                {link.hasDropdown && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-3 pr-1 py-2 border-l-2 border-white/10 ml-4 my-1">
                    {SERVICES_LIST.map((srv) => {
                      const IconComponent = SERVICE_ICONS[srv.slug] || Globe;
                      return (
                        <NavLink
                          key={srv.slug}
                          to={`/services/${srv.slug}`}
                          className={({ isActive }) =>
                            `flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              isActive
                                ? 'text-[#005EDA] font-semibold bg-[#005EDA]/15 border border-[#005EDA]/30'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`
                          }
                        >
                          <div className="w-6 h-6 rounded bg-white/5 text-[#005EDA] flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span className="truncate">{srv.title}</span>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10">
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
