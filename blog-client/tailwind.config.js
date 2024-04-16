/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mochiy': ['Mochiy Pop P One'],
    },
    extend: {},
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}