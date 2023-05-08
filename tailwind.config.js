/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#050505",
        "primary-red": "#AD0000",
      },
      animation: {
        flicker: "flicker 1.5s infinite alternate",
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            textShadow:
              "-0.15rem -0.15rem .7rem #AD0000, 0.15rem 0.15rem .7rem #AD0000",
          },
          "20%, 24%, 55%": {
            textShadow: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
