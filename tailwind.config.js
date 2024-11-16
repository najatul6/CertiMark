/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#2B7A78 ',
        darkGreen: '#17252A ',
        white: '#FEFFFF',
        lightTeal:"#3AAFA9",
        blackDiamond:"#343031",
      },
      fontFamily: {
        roboto:  ["'Roboto', sans-serif" ],
        montserrat:['"Montserrat", sans-serif'],
        siligri:['"Hind Siliguri", sans-serif'],
        tenor :['"Tenor Sans", sans-serif'],
        playwrite :['"Playwrite CZ", cursive']
      },
      transition: {
        transition: ["transform 0.2s ease-in-out"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

