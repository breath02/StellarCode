/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003161',
        secondary: '#425F94',
        highlight: '#D6A319',
        background: '#E4F0FF',
      },
    },
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
  ],
};
