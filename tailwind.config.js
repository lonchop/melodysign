/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        "background-color": "#f1e4c1",
        "primary-color": "#0e1b3e",
        "secondary-color": "#191919",
        "black-color": "#0a0a0a",
        "white-color": "#ffffff",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
