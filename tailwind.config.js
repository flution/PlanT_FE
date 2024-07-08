/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {},
      colors : {
        "main-color": "#BFE647",
        "hover-color": "#89C73E",
        "gray-light": "#E0E0E0",
        "focus-color" : "#89C73E",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
