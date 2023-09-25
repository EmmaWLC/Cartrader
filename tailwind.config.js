/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode:"jit",
  content: [],
  theme: {
    screens:{
    'xs':'300px',
      ...defaultTheme.screens,

    },
    extend: {
      fontFamily: {
        'sans': ['Gilroy-light', ...defaultTheme.fontFamily.sans],
        'gilroy-bold': ['Gilroy-ExtraBold'],
      }
    },
  },
  plugins: [],
}

