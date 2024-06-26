/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "main-green": "#BFE647",
        "hover-green": "#89C73E",
        "gray-light": "#F9F9F9",
        "gray-middle": "#E0E0E0",
        "gray-dark": "#C9C9C9",
      fontSize: {
        bigBtn: ["20px", "23px"],
        FltBtn: ["15px", "12px"],
        midBtn: ["15px", "17px"],
        smlBtn: ["10px", "11px"],
        alert: ["15px", "30px"],
      },
    },
  },
  plugins: ["flowbite/plugin"],
}
}
