/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mint-green': {
        50: "#ECF8F4",
        100: "#C6EBDE",
        200: "#A0DEC8",
        300: "#7AD1B2",
        400: "#54C49B",
        500: "#3BAB82",
        600: "#2E8565",
        700: "#215F48",
        800: "#14392B",
        900: "#07130E",
      }
    },
    extend: {},
  },
  plugins: [],
}
