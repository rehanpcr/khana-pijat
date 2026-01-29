/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B8E6E', // Hijau Sage
          dark: '#557257',    // Hijau gelap
          light: '#8FA691',   // Hijau muda
        },
        secondary: {
          DEFAULT: '#F2F0E4', // Krem/Putih Tulang
          dark: '#EBE5CE',
        },
        accent: '#4A4A4A',    // Abu Gelap
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], 
      }
    },
  },
  plugins: [],
}