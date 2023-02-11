/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leagueHextecBlack: "#010A13",
        leagueGold1: "#F0E6D2",
        leagueGold2: "#C8AA6E",
        leagueGold3: "#C8AA6E",
        leagueGold4: "#C89B3C",
        leagueGold5: "#785A28",
        leagueGold6: "#463714",
        leagueGold7: "#32281E",
        leagueGrey1: "#A09B8C",
        leagueGrey1_5: "#5B5A56",
        leagueGrey2: "#3C3C41",
        leagueGrey3: "#1E2328",
        leagueGreyCool: "#1E282D"
        // valoBackground: "#161928",
        
      },
      fontFamily: {
        beaufortforlol: ["Beaufort For LoL"],
        spiegel: ["Spiegel"],
      }
    },
  },
  plugins: [],
}