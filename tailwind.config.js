/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.html",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {},
      colors: {
        "main-green": "#BFE647",
        "hover-green": "#89C73E",
        "gray-light": "#F9F9F9",
        "gray-middle": "#E0E0E0",
        "gray-dark": "#C9C9C9",
        fontFamily: {
          nexonBold: ['"NEXON Lv2 Gothic Bold"', 'sans-serif'],
          nexonMedium: ['"NEXON Lv2 Gothic Medium"', 'sans-serif'],
        },
        fontSize: {
          bigBtn: ["12px", "12px"],
          FltBtn: ["15px", "12px"],
          midBtn: ["10px", "10px"],
          smlBtn: ["10px", "11px"],
          alert: ["15px", "30px"],
        },
      },
    },
    plugins: ["flowbite/plugin", require("tailwind-scrollbar-hide")]
  },
};
