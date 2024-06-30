/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        gray: '#3B3C4A',
        txtblue: '#4B6BFB',
        darkModeColor: '#181A2AFF'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}