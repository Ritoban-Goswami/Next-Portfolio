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
      animation: {
        blob: "blob 10s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1) skew(0deg, 0deg)",
          },
          "20%": {
            transform: "translate(-5%, -5%) scale(0.8) skew(5deg, -5deg)",
          },
          "40%": {
            transform: "translate(-10%, 5%) scale(1.2) skew(-5deg, 5deg)",
          },
          "60%": {
            transform: "translate(5%, 10%) scale(0.9) skew(5deg, -5deg)",
          },
          "80%": {
            transform: "translate(10%, -10%) scale(1.1) skew(-5deg, 5deg)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1) skew(0deg, 0deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
