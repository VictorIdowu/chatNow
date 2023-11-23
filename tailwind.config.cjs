/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["coffee", "dark"],
  },
  plugins: [require("daisyui")],
};
