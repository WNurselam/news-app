/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [ ],
}

