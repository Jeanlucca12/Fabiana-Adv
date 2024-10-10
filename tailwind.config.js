/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg-filter.png')",
      },
      fontFamily: {
        sans: ['Merriweather', 'sans-serif'], // Adicionando a fonte 'Poppins'
      },
    },
  },

  plugins: [],
}
