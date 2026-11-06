import React from 'react';
import { Home, Users, Layers, Briefcase, MessageSquare } from 'lucide-react';
import { Link, useLocation } from '../../router/Router';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  isActive: (pathname: string) => boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    isActive: (p) => p === '/',
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    isActive: (p) => p === '/about',
  },
  {
    name: 'Services',
    href: '/services',
    icon: Layers,
    isActive: (p) => p.startsWith('/services'),
  },
  {
    name: 'Work',
    href: '/work',
    icon: Briefcase,
    isActive: (p) => p.startsWith('/work'),
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: MessageSquare,
    isActive: (p) => p === '/contact',
  },
];

export const MobileBottomNav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.85)] select-none"
      style={{
        paddingBottom: 'max(0.6rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="max-w-md mx-auto px-2 pt-1.5 flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const active = item.isActive(pathname);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[50px] rounded-xl transition-all duration-200 active:scale-95 group focus:outline-none ${
                active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {/* Active Indicator Top Micro-Bar Glow */}
              {active && (
                <span className="absolute top-0 w-8 h-[2.5px] bg-[#005EDA] rounded-full shadow-[0_0_10px_#005EDA,0_0_4px_#38BDF8] animate-fadeIn" />
              )}

              {/* Icon Container with Subtle Active Glow */}
              <div
                className={`relative p-1 rounded-lg transition-transform duration-200 ${
                  active ? 'scale-110 text-[#38BDF8]' : 'text-slate-400 group-hover:text-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={active ? 2.3 : 1.8} />
                {active && (
                  <span className="absolute inset-0 rounded-lg bg-blue-500/15 blur-xs -z-10" />
                )}
              </div>

              {/* Short Label */}
              <span
                className={`text-[10px] mt-0.5 tracking-tight transition-all duration-200 ${
                  active
                    ? 'font-bold text-white scale-105'
                    : 'font-medium text-slate-400'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

