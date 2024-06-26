/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#BFE647",
        "hover-green": "#89C73E",
        "gray-light": "#F9F9F9",
        "gray-middle": "#E0E0E0",
        "gray-dark": "#C9C9C9",
      },
    },
  },
  plugins: [],
};
