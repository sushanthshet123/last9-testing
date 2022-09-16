/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prmiary: "#23d9a0",
        secondary: "#0A1725",
        black: "#000"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"),],
  safelist: [
    "duration-150",
    "duration-300",
  ],
  darkMode: false,
}