/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "red-watabi": "#be212cff",
        "red-dark": "#931b23ff",
        sakura: "#ffb7c5",
      },
    },
  },
  plugins: [],
};
