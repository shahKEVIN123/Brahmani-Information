import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

// 1. React Official Logo
export const ReactIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
    <title>React</title>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// 2. JavaScript Official Logo
export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 105 105" className={className}>
    <title>JavaScript</title>
    <rect width="105" height="105" rx="14" fill="#F7DF1E" />
    <path
      d="M62.5 82.5c4.5 7.8 11.5 10.5 19.5 7.2 6.5-2.7 8.5-8.2 8.5-16.5V36h14.5v37c0 14-8 23-22.5 24-11.2.8-19.5-4.5-24-14.5l4-10zM22.5 83.5c4 6.5 9 10 16.5 10 7.5 0 12.5-4 12.5-9.5 0-6.5-5.5-9-15-13l-4.5-2c-13-5.5-19-12-19-24 0-13.5 10.5-23.5 25.5-23.5 10.5 0 18 4 23 13l-11 7c-3-5-6.5-7-12-7-5.5 0-9.5 3.5-9.5 8 0 5 3.5 7.5 12 11l4.5 2c15.5 6.5 22 13 22 25.5 0 15-11.5 24.5-28 24.5-13 0-22.5-5.5-27-16l12-7z"
      fill="#000000"
    />
  </svg>
);

// 3. HTML5 Official W3C Logo
export const Html5Icon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 512 512" className={className}>
    <title>HTML5</title>
    <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
    <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
    <path fill="#EBEBEB" d="M256 208h-76l-5-59h81V94H116l15 172h125zm0 150l-63-17-4-47h-55l8 94 114 32z" />
    <path fill="#FFFFFF" d="M256 208v-55h76l7-59H256V94h140l-15 172H256zm0 150v-58l63-17 6-67h55l-9 110z" />
  </svg>
);

// 4. CSS3 Official Logo
export const Css3Icon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 512 512" className={className}>
    <title>CSS3</title>
    <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
    <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
    <path fill="#EBEBEB" d="M256 208h-76l-5-59h81V94H116l15 172h125zm0 150l-63-17-4-47h-55l8 94 114 32z" />
    <path fill="#FFFFFF" d="M256 208v-55h131l-5 55h-72l-5 58h77l-9 100-117 32v-58l63-17 5-58z" />
  </svg>
);

// 5. Node.js Official Logo
export const NodeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <title>Node.js</title>
    <path fill="#339933" d="M64 4.5l55.4 32v64L64 123.5l-55.4-32v-64z" />
    <path fill="#5FA04E" d="M64 4.5L119.4 36.5v64L64 123.5V64z" />
    <path fill="#FFFFFF" d="M64 32a18 18 0 0 0-18 18c0 10 8 18 18 18 10 0 18-8 18-18 0-10-8-18-18-18zm0 28c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-15 17c-2 0-3.5 1-4.5 2.5l-1.5 2.5v16h8v-11c0-2.5 1.5-4 4-4s4 1.5 4 4v11h8V87c0-6.5-4.5-10-10-10s-6 2-8 4zm30 0c-6.5 0-11 5-11 11.5s4.5 11.5 11 11.5 11-5 11-11.5-4.5-11.5-11-11.5zm0 16c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
  </svg>
);

// 6. PHP Official Logo
export const PhpIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 256 138" className={className}>
    <title>PHP</title>
    <ellipse cx="128" cy="69" rx="124" ry="65" fill="#777BB4" />
    <ellipse cx="128" cy="69" rx="118" ry="59" fill="#8892BF" />
    <path fill="#232531" d="M61 38h25c14 0 21 7 19 18-2 13-12 21-25 21H66l-5 23H44l17-62zm17 26h8c5 0 8-3 9-8s-2-7-7-7h-7l-3 15zm106-26h25c14 0 21 7 19 18-2 13-12 21-25 21h-14l-5 23h-17l17-62zm17 26h8c5 0 8-3 9-8s-2-7-7-7h-7l-3 15zm-72-26h17l-5 23h19l5-23h17l-13 62h-17l5-25h-19l-5 25h-17l13-62z" />
    <path fill="#FFFFFF" d="M59 36h25c14 0 21 7 19 18-2 13-12 21-25 21H64l-5 23H42l17-62zm17 26h8c5 0 8-3 9-8s-2-7-7-7h-7l-3 15zm106-26h25c14 0 21 7 19 18-2 13-12 21-25 21h-14l-5 23h-17l17-62zm17 26h8c5 0 8-3 9-8s-2-7-7-7h-7l-3 15zm-72-26h17l-5 23h19l5-23h17l-13 62h-17l5-25h-19l-5 25h-17l13-62z" />
  </svg>
);

// 7. Python Official Logo
export const PythonIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 110 110" className={className}>
    <title>Python</title>
    <path
      fill="#3776AB"
      d="M54.2 4c-13.6 0-22.3 6-22.3 17.5v12.8h22.7v3.2H23.5C10.5 37.5 0 46.8 0 59.8c0 13.4 11.2 21.6 22.3 21.6h7.2v-10.2c0-12.2 10.4-22.7 22.7-22.7h22.3c6.5 0 11.8-5.3 11.8-11.8V17.5C86.3 7 74.2 4 54.2 4zm-12 7c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"
    />
    <path
      fill="#FFD43B"
      d="M55.8 106c13.6 0 22.3-6 22.3-17.5V75.7H55.4v-3.2h31.1c13 0 23.5-9.3 23.5-22.3 0-13.4-11.2-21.6-22.3-21.6h-7.2v10.2c0 12.2-10.4 22.7-22.7 22.7H35.5c-6.5 0-11.8 5.3-11.8 11.8v19.2c0 10.5 12.1 13.5 32.1 13.5zm12-7c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"
    />
  </svg>
);

// 8. Figma Official Logo
export const FigmaIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 200 300" className={className}>
    <title>Figma</title>
    <path fill="#F24E1E" d="M50 0h50v100H50A50 50 0 0 1 50 0z" />
    <path fill="#FF7262" d="M100 0h50a50 50 0 0 1 0 100h-50z" />
    <path fill="#A259FF" d="M50 100h50v100H50a50 50 0 0 1 0-100z" />
    <path fill="#1ABCFE" d="M100 100h50a50 50 0 0 1 0 100h-50z" />
    <path fill="#0ACF83" d="M50 200h50v50a50 50 0 0 1-50 50 50 50 0 0 1-50-50 50 50 0 0 1 50-50z" />
  </svg>
);

// 9. MongoDB Official Logo
export const MongoDbIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 64 128" className={className}>
    <title>MongoDB</title>
    <path fill="#47A248" d="M32 0C32 0 13 25 13 65c0 35 17 55 19 63 2-8 19-28 19-63C51 25 32 0 32 0z" />
    <path fill="#499D4A" d="M32 0v128c2-8 19-28 19-63C51 25 32 0 32 0z" />
    <path fill="#13AA52" d="M32 30c-1 0-12 18-12 37 0 23 11 36 12 41 1-5 12-18 12-41 0-19-11-37-12-37z" />
    <path fill="#FFFFFF" d="M32 108c-.3 0-1-.3-1-.8v-80c0-.5.7-.8 1-.8s1 .3 1 .8v80c0 .5-.7.8-1 .8z" opacity="0.4" />
  </svg>
);

// 10. MySQL Official Logo
export const MySqlIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <title>MySQL</title>
    <path fill="#00758F" d="M96 24c-12-8-32-6-46 6-11 9-18 21-22 34-4 13-3 26 2 36 6 11 16 18 28 18 16 0 31-10 40-24 5-8 7-17 7-26 0-14-6-28-15-38 6 6 10 14 11 23 1 12-4 24-12 32-10 10-24 14-38 10-10-3-18-10-21-20-3-9-2-19 2-28 5-11 14-20 25-25 15-8 33-8 45 2 2-7 0-14-4-19z" />
    <path fill="#F29111" d="M84 76c-3 8-10 14-18 17-6 2-13 1-19-2-6-4-10-10-11-17 3 5 8 9 14 10 7 2 14 0 20-5 5-4 8-10 9-16 1-2 4-2 5 0 1 5 1 9 0 13z" />
    <circle cx="82" cy="46" r="3" fill="#00758F" />
  </svg>
);

// 11. Docker Official Logo
export const DockerIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <title>Docker</title>
    <path fill="#2496ED" d="M124 58c-3-2-9-3-14-1-1-6-4-11-9-15l-4 4c4 4 6 9 7 14-6 1-13 4-17 9-14-2-28 2-38 11-4-1-9-1-14 0-12 2-22 10-26 22-2 4-3 9-3 14 0 1 1 2 2 2 11 4 23 6 35 6 34 0 63-18 75-48 3-7 5-13 2-18zM14 62h12v12H14zm16 0h12v12H30zm16 0h12v12H46zm16 0h12v12H62zm-32-16h12v12H30zm16 0h12v12H46zm16 0h12v12H62zm0-16h12v12H62z" />
  </svg>
);

// 12. Linux Official Logo (Tux)
export const LinuxIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <title>Linux</title>
    {/* Body */}
    <ellipse cx="64" cy="74" rx="36" ry="42" fill="#0F172A" />
    {/* White Belly */}
    <ellipse cx="64" cy="80" rx="24" ry="30" fill="#FFFFFF" />
    {/* Head */}
    <ellipse cx="64" cy="38" rx="22" ry="24" fill="#0F172A" />
    {/* Eyes */}
    <ellipse cx="56" cy="32" rx="4.5" ry="7" fill="#FFFFFF" />
    <ellipse cx="72" cy="32" rx="4.5" ry="7" fill="#FFFFFF" />
    <circle cx="57" cy="33" r="2.5" fill="#000000" />
    <circle cx="71" cy="33" r="2.5" fill="#000000" />
    {/* Beak */}
    <path d="M54 44 Q 64 42, 74 44 Q 64 56, 54 44 Z" fill="#FFA500" stroke="#E69500" strokeWidth="1" />
    {/* Wings */}
    <path d="M28 62 C 22 72, 22 88, 32 96 C 35 90, 36 78, 38 68 Z" fill="#0F172A" />
    <path d="M100 62 C 106 72, 106 88, 96 96 C 93 90, 92 78, 90 68 Z" fill="#0F172A" />
    {/* Feet */}
    <ellipse cx="48" cy="116" rx="14" ry="7" fill="#FFA500" />
    <ellipse cx="80" cy="116" rx="14" ry="7" fill="#FFA500" />
  </svg>
);

// 13. Cloud Infrastructure Professional Icon
export const CloudInfraIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none">
    <title>Cloud Infrastructure</title>
    {/* Cloud Shape */}
    <path
      d="M38 64a22 22 0 0 1 38-16 28 28 0 0 1 34 26 18 18 0 0 1-6 35H34a20 20 0 0 1 4-45z"
      fill="#EFF6FF"
      stroke="#005EDA"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    {/* Central Server Rack / Infrastructure Nodes */}
    <rect x="42" y="78" width="44" height="12" rx="3" fill="#0F172A" />
    <circle cx="50" cy="84" r="2" fill="#10B981" />
    <circle cx="58" cy="84" r="2" fill="#38BDF8" />
    <line x1="68" y1="84" x2="80" y2="84" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    <rect x="46" y="94" width="36" height="10" rx="2" fill="#1E293B" />
    <circle cx="52" cy="99" r="1.5" fill="#10B981" />
    <line x1="60" y1="99" x2="76" y2="99" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Network Connectors */}
    <path d="M64 104v12M44 116h40" stroke="#005EDA" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// 14. JWT / OAuth2 Security Token Icon
export const JwtOAuthIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none">
    <title>JWT / OAuth2</title>
    {/* Cryptographic Shield Base */}
    <path
      d="M64 12L24 28v36c0 30 18 50 40 56 22-6 40-26 40-56V28L64 12z"
      fill="#0F172A"
      stroke="#005EDA"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    {/* Token Ring */}
    <circle cx="64" cy="54" r="18" stroke="#D63AFF" strokeWidth="4" strokeDasharray="6 3" />
    <circle cx="64" cy="54" r="10" fill="#005EDA" />
    {/* Key & Lock Teeth */}
    <path d="M64 64v24M58 76h12M58 84h8" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
    {/* JWT Text Badge */}
    <rect x="42" y="96" width="44" height="14" rx="4" fill="#005EDA" />
    <text x="64" y="107" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
      JWT•AUTH
    </text>
  </svg>
);

// 15. SSL/TLS Certificate & Encryption Security Icon
export const SslTlsIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none">
    <title>SSL/TLS</title>
    {/* Outer Certificate Shield */}
    <path
      d="M64 14L22 30v36c0 32 18 52 42 58 24-6 42-26 42-58V30L64 14z"
      fill="#EFF6FF"
      stroke="#10B981"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    {/* Lock Shackle */}
    <path
      d="M50 56V44a14 14 0 0 1 28 0v12"
      stroke="#0F172A"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Lock Body */}
    <rect x="42" y="56" width="44" height="34" rx="6" fill="#10B981" stroke="#059669" strokeWidth="2" />
    {/* Verified Checkmark inside Lock */}
    <path
      d="M54 73l7 7 14-14"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* TLS 1.3 Badge */}
    <rect x="36" y="98" width="56" height="15" rx="4" fill="#0F172A" />
    <text x="64" y="109" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
      TLS 1.3
    </text>
  </svg>
);

// Universal Component Resolver
export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('react')) {
    return <ReactIcon className={className} />;
  }
  if (normalized.includes('javascript') || normalized === 'js') {
    return <JavaScriptIcon className={className} />;
  }
  if (normalized.includes('html')) {
    return <Html5Icon className={className} />;
  }
  if (normalized.includes('css')) {
    return <Css3Icon className={className} />;
  }
  if (normalized.includes('node')) {
    return <NodeIcon className={className} />;
  }
  if (normalized.includes('php')) {
    return <PhpIcon className={className} />;
  }
  if (normalized.includes('python')) {
    return <PythonIcon className={className} />;
  }
  if (normalized.includes('figma')) {
    return <FigmaIcon className={className} />;
  }
  if (normalized.includes('mongo')) {
    return <MongoDbIcon className={className} />;
  }
  if (normalized.includes('mysql') || normalized.includes('sql')) {
    return <MySqlIcon className={className} />;
  }
  if (normalized.includes('docker')) {
    return <DockerIcon className={className} />;
  }
  if (normalized.includes('linux')) {
    return <LinuxIcon className={className} />;
  }
  if (normalized.includes('cloud')) {
    return <CloudInfraIcon className={className} />;
  }
  if (normalized.includes('jwt') || normalized.includes('oauth')) {
    return <JwtOAuthIcon className={className} />;
  }
  if (normalized.includes('ssl') || normalized.includes('tls')) {
    return <SslTlsIcon className={className} />;
  }

  // Fallback safe professional shield
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#005EDA" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M8 12h8" />
    </svg>
  );
};

