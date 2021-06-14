const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './layouts/**/.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      'display': ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(0, 20px) scale(1)',
          },
          '75%': {
            transform: 'translate(-20px, -15px) scale(0.9)',
          },
        },
      },
      minHeight: {
        96: '24rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const animationDelay = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }

      addUtilities(animationDelay, ['responsive', 'hover'])
    }),
  ],
};
