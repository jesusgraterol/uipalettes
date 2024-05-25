/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html.js.jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0C0C0C',
        secondary: '#171717'
      },
      keyframes: {
        fadein: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0px)' },
        }
      },
      animation: {
        fadein: 'fadein 0.5s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
