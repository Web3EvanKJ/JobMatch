/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // for prose classes
  ],
};
