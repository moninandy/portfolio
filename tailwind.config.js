/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      borderColor:{
        'primary':'rgb(131,52,113)',
        'secondary':'rgb(253,167,223)'
      }
    },
    fontFamily:{'content-font':'sriracha'}
  },
  plugins: [],
}

