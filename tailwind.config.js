/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], // Include fallback fonts
        fira: ['Fira Sans', 'sans-serif'], // Ensure spacing for multiple-word names
      },
    },
  },
  plugins: [daisyui],
};
