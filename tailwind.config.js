/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
       center: true,
    },
    extend: {
      colors: {
        'green': '#266F62',
        'orange':"#FF855F"
      },
    },
  },
  plugins: [],
}

