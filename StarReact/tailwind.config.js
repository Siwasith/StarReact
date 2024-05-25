/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '640px'},
    }
  },
  plugins: [],
}