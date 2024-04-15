/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ['*, ./index.html", "./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: {
            300: '#f5f6fa',
            400: '#b3b8cd',
            450: '#dde3df',
            500: '#eaedf7',
            600: '#565a65',
          },
        },
        blue: {
          primary: {
            100: '#c4cce0',
            300: '#1c2133',
            400: '#272e45',
          },
        },
      },
      borderRadius: {
        xs: '10px',
      },
    },
  },
  plugins: [],
}
