/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#22488780",
        dark:"#030e2080",
      },
      screens:{
        xs:'375px'
      }
    },
  },
  plugins: [],
}

