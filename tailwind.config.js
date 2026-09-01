/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF4747',
          dark: '#e63946',
          darker: '#c22b36',
        },
        dark: {
          DEFAULT: '#191919',
          alt: '#333333',
        },
        lightgray: '#f5f5f5',
        rating: '#ffb800',
      },
      fontFamily: {
        sans: ['Roboto', 'PingFang SC', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
}
