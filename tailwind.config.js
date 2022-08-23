/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#ECE5E6",
        "custom-green": "#107263",
        "custom-yellow": "#ffde62",
        "custom-orange": "#ff7c5f",
        "custom-black": "#3f3f3f",
      },
      boxShadow: {
        "material-shadow":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
    },
  },
  plugins: [],
};
