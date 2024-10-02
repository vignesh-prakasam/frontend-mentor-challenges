/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "*.{html,js}"],
  theme: {
    extend: {
      colors: {
        limeGreen: 'hsl(75, 94%, 57%)',
        grey700: 'hsl(0, 0%, 20%)',
        grey800: 'hsl(0, 0%, 12%)',
        grey900: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
      custom: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

