const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky[400],
        'border': "#ebedf3"
      },
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
