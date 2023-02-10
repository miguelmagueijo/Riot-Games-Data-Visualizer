/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leagueHextec: "#010A13",
        leagueGolden1: "#F0E6D2",
        leagueGolden4: "#C89B3C",
        leagueGrey1: "#A09B8C",
      },
      fontFamily: {
        beaufortforlol: ["Beaufort For LoL"],
        spiegel: ["Spiegel"],
      }
    },
  },
  plugins: [],
}