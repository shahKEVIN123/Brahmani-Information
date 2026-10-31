import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const getTechIconSrc = (name: string): string => {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('react')) return '/assets/tech/react.svg';
  if (normalized.includes('javascript') || normalized === 'js') return '/assets/tech/javascript.svg';
  if (normalized.includes('html')) return '/assets/tech/html5.svg';
  if (normalized.includes('css')) return '/assets/tech/css3.svg';
  if (normalized.includes('node')) return '/assets/tech/nodejs.svg';
  if (normalized.includes('php')) return '/assets/tech/php.svg';
  if (normalized.includes('python')) return '/assets/tech/python.svg';
  if (normalized.includes('figma')) return '/assets/tech/figma.svg';
  if (normalized.includes('mongo')) return '/assets/tech/mongodb.svg';
  if (normalized.includes('mysql') || normalized.includes('sql')) return '/assets/tech/mysql.svg';
  if (normalized.includes('docker')) return '/assets/tech/docker.svg';
  if (normalized.includes('linux')) return '/assets/tech/linux.svg';
  if (normalized.includes('cloud')) return '/assets/tech/cloud.svg';
  if (normalized.includes('jwt') || normalized.includes('oauth')) return '/assets/tech/jwt.svg';
  if (normalized.includes('ssl') || normalized.includes('tls')) return '/assets/tech/ssl.svg';

  return '/assets/tech/react.svg';
};

// 1. React Official Logo
export const ReactIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/react.svg" alt="React" className={`${className} object-contain`} />
);

// 2. JavaScript Official Logo
export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/javascript.svg" alt="JavaScript" className={`${className} object-contain`} />
);

// 3. HTML5 Official Logo
export const Html5Icon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/html5.svg" alt="HTML5" className={`${className} object-contain`} />
);

// 4. CSS3 Official Logo
export const Css3Icon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/css3.svg" alt="CSS3" className={`${className} object-contain`} />
);

// 5. Node.js Official Logo
export const NodeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/nodejs.svg" alt="Node.js" className={`${className} object-contain`} />
);

// 6. PHP Official Logo
export const PhpIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/php.svg" alt="PHP" className={`${className} object-contain`} />
);

// 7. Python Official Logo
export const PythonIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/python.svg" alt="Python" className={`${className} object-contain`} />
);

// 8. Figma Official Logo
export const FigmaIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/figma.svg" alt="Figma" className={`${className} object-contain`} />
);

// 9. MongoDB Official Logo
export const MongoDbIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/mongodb.svg" alt="MongoDB" className={`${className} object-contain`} />
);

// 10. MySQL Official Logo
export const MySqlIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/mysql.svg" alt="MySQL" className={`${className} object-contain`} />
);

// 11. Docker Official Logo
export const DockerIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/docker.svg" alt="Docker" className={`${className} object-contain`} />
);

// 12. Linux Official Tux Logo
export const LinuxIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/linux.svg" alt="Linux" className={`${className} object-contain`} />
);

// 13. Cloud Infrastructure Official Logo
export const CloudInfraIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/cloud.svg" alt="Cloud Infrastructure" className={`${className} object-contain`} />
);

// 14. JWT / OAuth2 Official Logo
export const JwtOAuthIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/jwt.svg" alt="JWT / OAuth2" className={`${className} object-contain`} />
);

// 15. SSL/TLS Official Security Logo
export const SslTlsIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <img src="/assets/tech/ssl.svg" alt="SSL/TLS" className={`${className} object-contain`} />
);

// Universal TechIcon Component Resolver using the official original SVGs
export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const iconSrc = getTechIconSrc(name);

  return (
    <img
      src={iconSrc}
      alt={`${name} logo`}
      className={`${className} object-contain select-none pointer-events-none`}
      loading="lazy"
      decoding="async"
    />
  );
};
