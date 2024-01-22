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
        sBlue: '#F6FFFF',
        pBlack: '#000',
        pWhite: '#ffffff',
        textBlack: '#012424',
        textSblack: '#374D4D',
        pGray:'#E7F8FF',
        bColor:'#87ABAB'
      },

    },
  },
  plugins: [],
}