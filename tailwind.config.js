/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007aff',
        'brand-dark': '#1a1a1a',
        'brand-gray': '#f8fafc',
      },
    },
  },
  plugins: [],
}