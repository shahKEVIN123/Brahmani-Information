/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            deep: '#020617',
            darker: '#030816',
            dark: '#051026',
            DEFAULT: '#001455',
            surface: '#091A3E',
            light: '#0F265C',
          },
          blue: {
            subtle: 'rgba(0, 94, 218, 0.12)',
            glow: '#3894FF',
            DEFAULT: '#005EDA',
            vibrant: '#0066FF',
            electric: '#0084FF',
            bright: '#38BDF8',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      animation: {
        'orbit-slow': 'orbit 32s linear infinite',
        'orbit-reverse': 'orbitReverse 40s linear infinite',
        'orbit-fast': 'orbit 16s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'sparkle-twinkle': 'twinkle 3s ease-in-out infinite',
        'signal-travel': 'signalMove 8s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 94, 218, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(0, 102, 255, 0.8))' },
        },
        twinkle: {
          '0%, 100%': { transform: 'scale(0.85) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2) rotate(45deg)', opacity: '1' },
        },
        signalMove: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
