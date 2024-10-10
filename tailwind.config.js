/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg-filter.png')", // Verifique se o caminho da imagem está correto
      },
    },
  },

  plugins: [],
}
