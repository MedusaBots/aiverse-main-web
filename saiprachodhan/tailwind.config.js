const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Mulish"],
        headingbold: ["MulishBold"],
        poppins: ["Poppins", "sans-serif"],
        text: ["Manrope", "sans-serif"],
        inter: ["Inter"],
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
