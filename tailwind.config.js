/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            500: '#0066FF',
            600: '#005EDA',
            700: '#004BBB',
            800: '#003A94',
            900: '#002663',
            DEFAULT: '#005EDA',
          },
          navy: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#0B132B',
            DEFAULT: '#0F172A',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'depth-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.03)',
        'depth-md': '0 8px 20px -4px rgba(15, 23, 42, 0.06), 0 3px 6px -2px rgba(15, 23, 42, 0.03)',
        'depth-lg': '0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 8px 12px -4px rgba(15, 23, 42, 0.03)',
        'blue-glow': '0 10px 25px -5px rgba(0, 94, 218, 0.25)',
      },
    },
  },
  plugins: [],
}
