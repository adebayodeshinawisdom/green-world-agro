/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, // Always center the container
      padding: "1rem", // Adds padding to avoid edge cuts
    },
    extend: {
      screens: {
        xs: "475px", // Custom extra-small screen breakpoint
      },
      // fontFamily: {
      // 	manrope: ['Manrope', 'sans-serif'], // Custom font family
      // },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Combined into a single `fontFamily` key
        monda: ["Monda", "sans-serif"],
        gotham: ["Gotham", "sans-serif"],
      },
    },
  },
  plugins: [],
};
