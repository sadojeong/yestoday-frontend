/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans' : ['"Luckiest Guy"']
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
