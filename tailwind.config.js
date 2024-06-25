/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        "main-color": "#BFE647",
        "hover-color": "#89C73E",
        "gray-light": "#E0E0E0",
      },
    }
  },
  plugins: [],
};
