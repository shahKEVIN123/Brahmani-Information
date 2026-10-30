import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  navigate: () => {},
  params: {},
});

export const useLocation = () => {
  const context = useContext(RouterContext);
  return { pathname: context.pathname };
};

export const useNavigate = () => {
  const context = useContext(RouterContext);
  return context.navigate;
};

export const useParams = <T extends Record<string, string> = Record<string, string>>(): T => {
  const context = useContext(RouterContext);
  return context.params as T;
};

interface BrowserRouterProps {
  children: ReactNode;
}

export const BrowserRouter: React.FC<BrowserRouterProps> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [params, setParams] = useState<Record<string, string>>({});

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      if (to === pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.history.pushState({}, '', to);
      setPathname(to);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate, params }}>
      <RouteMatcher pathname={pathname} setParams={setParams}>
        {children}
      </RouteMatcher>
    </RouterContext.Provider>
  );
};

interface RouteMatcherProps {
  pathname: string;
  setParams: (params: Record<string, string>) => void;
  children: ReactNode;
}

const RouteMatcher: React.FC<RouteMatcherProps> = ({ pathname, setParams, children }) => {
  return <>{children}</>;
};

export interface RouteProps {
  path: string;
  element: ReactNode;
}

export interface RoutesProps {
  children: ReactNode;
}

export const Route: React.FC<RouteProps> = () => {
  return null;
};

// Match route pattern against actual path (supports exact paths and /services/:slug)
function matchPath(pattern: string, path: string): { match: boolean; params: Record<string, string> } {
  // Normalize
  const cleanPattern = pattern.replace(/\/+$/, '') || '/';
  const cleanPath = path.replace(/\/+$/, '') || '/';

  if (cleanPattern === cleanPath) {
    return { match: true, params: {} };
  }

  // Handle parameterized routes
  const patternSegments = cleanPattern.split('/').filter(Boolean);
  const pathSegments = cleanPath.split('/').filter(Boolean);

  if (patternSegments.length !== pathSegments.length) {
    if (cleanPattern === '*') return { match: true, params: {} };
    return { match: false, params: {} };
  }

  const params: Record<string, string> = {};
  for (let i = 0; i < patternSegments.length; i++) {
    const pSeg = patternSegments[i];
    const aSeg = pathSegments[i];

    if (pSeg.startsWith(':')) {
      const paramName = pSeg.slice(1);
      params[paramName] = aSeg;
    } else if (pSeg !== aSeg) {
      return { match: false, params: {} };
    }
  }

  return { match: true, params };
}

export const Routes: React.FC<RoutesProps> = ({ children }) => {
  const { pathname } = useLocation();
  const context = useContext(RouterContext);

  let matchedElement: ReactNode = null;
  let fallbackElement: ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement<RouteProps>(child)) {
      if (child.props.path === '*') {
        fallbackElement = child.props.element;
        return;
      }
      if (!matchedElement) {
        const { match, params } = matchPath(child.props.path, pathname);
        if (match) {
          matchedElement = child.props.element;
          if (context) {
            context.params = params;
          }
        }
      }
    }
  });

  return <>{matchedElement || fallbackElement || null}</>;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, className, children, onClick, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Ignore modified clicks (Ctrl, Cmd, etc.) or external links
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey ||
      to.startsWith('http') ||
      to.startsWith('mailto:') ||
      to.startsWith('tel:')
    ) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string | ((props: { isActive: boolean }) => string);
}

export const NavLink: React.FC<NavLinkProps> = ({ to, className, children, ...rest }) => {
  const { pathname } = useLocation();
  const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to);

  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <Link to={to} className={resolvedClassName} aria-current={isActive ? 'page' : undefined} {...rest}>
      {children}
    </Link>
  );
};
