/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","sans-serif"]
      },
    },
    colors: {
      primaryColor:"#2B7A78",
      secondaryColor:"#3AAFA9",
      alertColor:"#E76F51",
      globalColor:"#FEFFFF"
    },
    screens:{
      lg:{min:"925px"},
    }
  },
  plugins: [],
}

