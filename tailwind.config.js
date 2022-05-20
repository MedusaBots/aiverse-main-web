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
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        roadmap: "1170px",
      },
    },
    screens: { nw: { min: "900px" }, ...defaultTheme.screens },
  },
  plugins: [],
};
