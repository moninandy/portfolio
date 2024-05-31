/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      borderColor:{
        'primary':'rgb(112,111,211)',
        'secondary':'rgb(71,71,135)'
      }
    },
    fontFamily:{'content-font':'sriracha'}
  },
  plugins: [],
}

