/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        orange: '#fb8500',
        gray: '#E5E5E5',
        white: '#FFFFFF',
        blue: '#14213D'
      },
      fontFamily: {
        anton: "",
        roboto: 'roboto'
      },
    },
  },
  plugins: [],
}