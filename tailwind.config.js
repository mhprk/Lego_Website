/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',   // all .ejs files in the views folder
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['cupcake'],
  },
}

