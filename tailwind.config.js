/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        pBlue: '#07CDCF',
        pBlack: '#000',
        pWhite:'#ffffff',
        textBlack:'#012424',
      },

    },
  },
  plugins: [],
}