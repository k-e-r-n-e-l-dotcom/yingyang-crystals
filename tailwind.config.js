/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        midnight: '#0f172a',
        gold: '#fbbf24',
        neon: '#d946ef',
      },
    },
  },
  plugins: [],
};
