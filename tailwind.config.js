const defaultTheme = require('tailwindcss/defaultTheme')

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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
