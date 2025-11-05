/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A', // Deep Blue/Navy
        'secondary': '#14B8A6', // Teal-500
        'dark-bg': '#1f2937', 
        'dark-card': '#111827',
      }
    },
  },
  plugins: [],
}