/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecf8fd',
          100: '#d2eef9',
          200: '#a8ddf2',
          300: '#73c8e8',
          400: '#3fa9dc',
          500: '#258ec5',
          600: '#1c73a4',
          700: '#1b5e85',
          800: '#1c4f6e',
          900: '#1c4259',
          950: '#0e2937',
        },
        ink: {
          50: '#f5f6f7',
          100: '#e3e5e8',
          200: '#c6cad0',
          300: '#9aa0ab',
          400: '#6e7582',
          500: '#525965',
          600: '#3f4451',
          700: '#2e323c',
          800: '#1c1f26',
          900: '#0e1014',
          950: '#05070a',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        hero: '0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(63, 169, 220, 0.4)' },
          '50%': { boxShadow: '0 0 40px 10px rgba(63, 169, 220, 0.18)' },
        },
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at center, rgba(63,169,220,0.16), transparent 60%)',
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
