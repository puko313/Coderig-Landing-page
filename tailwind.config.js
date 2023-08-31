module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      current: "currentColor",
    },
    extend: {
      colors: {
        "coderig-primary": "#2174EA",
        "coderig-secondary": "#485668",
        "coderig-indigo": "#5665F2",
        "coderig-blue": "#2B3CD4",
        "coderig-bg": "#F4F9FF",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      FrankRuhlLibre: ["Frank Ruhl Libre, serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {
      borderColor: ["focus"],
      translate: ["focus"],
    },
  },
  plugins: [],
};
