/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'], // Asegúrate de usar el nombre correcto
        montserrat: ['Montserrat Variable', 'sans-serif'], // Asegúrate de usar el nombre correcto
      },
    },
  },
  plugins: [],
};