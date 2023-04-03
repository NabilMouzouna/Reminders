
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        lightAsideColor : '#D4CFEB',
        darkBodyColor : '#1E1C29',
        darkAsideColor : '#262456',
        darkButtonColor : '#494779'
      },
      colors:{
        fontColor : '#88878C',
      }
    },
  },
  plugins: [],
}