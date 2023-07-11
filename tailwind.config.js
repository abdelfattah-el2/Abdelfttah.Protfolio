/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        fill: "-webkit-fill-available",
        '98%': '98%',
      },
      transitionDuration: {
        '1500': '1500ms',
      }
    },
    fontFamily: { Mulish  : ["Mulish "] },
    minWidth: {
      '100px': '80px',
    },
  },
  plugins: [],
};
