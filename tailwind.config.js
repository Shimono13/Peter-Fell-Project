/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        peterfell: {
          DEFAULT: "#7a99ac",
        },
      },
    },
  },
  plugins: [],
};
