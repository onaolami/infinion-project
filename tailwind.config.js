/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'noto': ['DM Sans','sans-serif'],
      'montagu': ['Montagu Slab','serif'],
      'nunito': ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

