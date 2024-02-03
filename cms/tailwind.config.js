
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        source: ["Source Serif Pro", "serif"],
        heebo: ["Heebo", "swap"],
        patua: ["Patua One", "swap"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
