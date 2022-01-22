module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        secondary: "#4BC583",
        white: "#FAFAFA",
        gray: "#C4C4C4",
        "secondary-light": "EBFFF4",
      },
      fontFamily: {
        primary: ["Galderglynn Titling Rg", "serif"],
        secondary: ["Poppins", "sans-serif"],
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".2em",
      widest: ".25em",
      spaced: "1.2em",
    },
  },
  plugins: [],
};
