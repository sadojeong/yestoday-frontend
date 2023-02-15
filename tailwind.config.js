/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        nanum: ["NanumGothic"],
        'sans' : ['"Luckiest Guy"']
      },
      colors: {
        'bg-yellow': '#fffcf0'
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  }
}

