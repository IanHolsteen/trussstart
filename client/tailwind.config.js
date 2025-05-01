const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-poppins)", ...fontFamily.sans],
        },
        animation: {
          dropdown: "fadeInScale 0.2s ease-out forwards",
        },
        keyframes: {
          fadeInScale: {
            '0%': { opacity: 0, transform: 'scale(95%)' },
            '100%': { opacity: 1, transform: 'scale(100%)' },
          },
        },
      },
    },
    plugins: [],
  };