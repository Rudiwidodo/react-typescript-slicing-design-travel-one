/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        volkhov: 'Volkhov',
      },
      colors: {
        'color-1': '#DF6951',
        'color-2': '#181E4B',
        'color-3': '#F1A501',
        'color-4': '#E1E6E9',
        'color-5': '#5E6282',
      },
      backgroundImage: {
        'decore-hero-text': 'url(./src/assets/images/decore-hero-text.svg)',
      },
    },
  },
  plugins: [],
};
